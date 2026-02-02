"use client"

import { useEffect, useState, useRef, useCallback } from 'react';

interface DecryptedTextProps {
    text: string;
    speed?: number;
    maxIterations?: number;
    characters?: string;
    className?: string;
    parentClassName?: string;
    encryptedClassName?: string;
    animateOn?: 'view' | 'hover';
    revealDirection?: 'start' | 'end' | 'center' | 'random';
    onAnimationComplete?: () => void;
}

const DecryptedText: React.FC<DecryptedTextProps> = ({
    text,
    speed = 50,
    maxIterations = 10,
    characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*()_+',
    className = '',
    parentClassName = '',
    encryptedClassName = '',
    animateOn = 'view',
    revealDirection = 'start',
    onAnimationComplete,
}) => {
    const [displayText, setDisplayText] = useState(text);
    const [isAnimating, setIsAnimating] = useState(false);
    const [hasAnimated, setHasAnimated] = useState(false);
    const containerRef = useRef<HTMLSpanElement>(null);
    const animationRef = useRef<NodeJS.Timeout | null>(null);

    const getRandomChar = useCallback(() => {
        return characters[Math.floor(Math.random() * characters.length)];
    }, [characters]);

    const getNextIndex = useCallback(
        (revealedCount: number, textLength: number): number => {
            switch (revealDirection) {
                case 'end':
                    return textLength - 1 - revealedCount;
                case 'center': {
                    const middle = Math.floor(textLength / 2);
                    const offset = Math.floor((revealedCount + 1) / 2);
                    return revealedCount % 2 === 0 ? middle + offset : middle - offset;
                }
                case 'random': {
                    const unrevealed: number[] = [];
                    for (let i = 0; i < textLength; i++) {
                        unrevealed.push(i);
                    }
                    return unrevealed[Math.floor(Math.random() * unrevealed.length)] ?? 0;
                }
                case 'start':
                default:
                    return revealedCount;
            }
        },
        [revealDirection]
    );

    const animate = useCallback(() => {
        if (isAnimating) return;
        setIsAnimating(true);

        let currentText = text.split('').map(() => getRandomChar());
        let revealed = new Set<number>();
        let iterations = 0;

        const interval = setInterval(() => {
            if (revealed.size < text.length) {
                // Scramble unrevealed characters
                currentText = currentText.map((_char, i) =>
                    revealed.has(i) ? text[i] : getRandomChar()
                );

                // Reveal next character based on direction
                if (iterations % 3 === 0) {
                    const nextIndex = getNextIndex(revealed.size, text.length);
                    if (!revealed.has(nextIndex) && nextIndex >= 0 && nextIndex < text.length) {
                        revealed.add(nextIndex);
                        currentText[nextIndex] = text[nextIndex];
                    }
                }

                setDisplayText(currentText.join(''));
                iterations++;

                if (iterations >= maxIterations * text.length) {
                    clearInterval(interval);
                    setDisplayText(text);
                    setIsAnimating(false);
                    setHasAnimated(true);
                    onAnimationComplete?.();
                }
            } else {
                clearInterval(interval);
                setDisplayText(text);
                setIsAnimating(false);
                setHasAnimated(true);
                onAnimationComplete?.();
            }
        }, speed);

        animationRef.current = interval;
    }, [text, speed, maxIterations, getRandomChar, getNextIndex, isAnimating, onAnimationComplete]);

    useEffect(() => {
        if (animateOn !== 'view') return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !hasAnimated) {
                    animate();
                }
            },
            { threshold: 0.1 }
        );

        const currentRef = containerRef.current;
        if (currentRef) {
            observer.observe(currentRef);
        }

        return () => {
            if (currentRef) observer.unobserve(currentRef);
            if (animationRef.current) clearInterval(animationRef.current);
        };
    }, [animate, animateOn, hasAnimated]);

    const handleMouseEnter = useCallback(() => {
        if (animateOn === 'hover' && !isAnimating) {
            setHasAnimated(false);
            animate();
        }
    }, [animate, animateOn, isAnimating]);

    // Auto-animate on mount for 'view' type when no intersection observer needed
    useEffect(() => {
        if (animateOn === 'view' && !hasAnimated) {
            const timer = setTimeout(() => {
                animate();
            }, 500);
            return () => clearTimeout(timer);
        }
    }, []);

    return (
        <span
            ref={containerRef}
            className={parentClassName}
            onMouseEnter={handleMouseEnter}
        >
            {displayText.split('').map((char, index) => {
                const isRevealed = char === text[index];
                return (
                    <span
                        key={index}
                        className={isRevealed ? className : `${className} ${encryptedClassName}`}
                    >
                        {char}
                    </span>
                );
            })}
        </span>
    );
};

export default DecryptedText;
