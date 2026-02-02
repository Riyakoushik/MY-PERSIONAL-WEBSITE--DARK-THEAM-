import { cn } from "@/lib/utils"
import { TestimonialCard, TestimonialAuthor } from "@/components/ui/testimonial-card"

interface TestimonialsSectionProps {
    title: string
    description: string
    testimonials: Array<{
        author: TestimonialAuthor
        text: string
        href?: string
    }>
    className?: string
}

export function TestimonialsSection({
    title,
    description,
    testimonials,
    className
}: TestimonialsSectionProps) {
    return (
        <section className={cn(
            "bg-transparent text-white",
            "py-12 sm:py-24 md:py-32 px-0",
            className
        )}>
            <style>
                {`
                    @keyframes testimonials-scroll {
                        0% {
                            transform: translateX(0);
                        }
                        100% {
                            transform: translateX(-50%);
                        }
                    }

                    .animate-testimonials-scroll {
                        animation: testimonials-scroll 60s linear infinite;
                        transform: translateZ(0);
                        backface-visibility: hidden;
                    }

                    .pause-animation {
                        animation-play-state: paused;
                    }

                    .group:hover .animate-testimonials-scroll {
                        animation-play-state: paused;
                    }
                `}
            </style>
            <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 text-center sm:gap-16">
                <div className="flex flex-col items-center gap-4 px-4 sm:gap-8">
                    <h2 className="max-w-[720px] text-3xl font-semibold leading-tight sm:text-5xl sm:leading-tight">
                        {title}
                    </h2>
                    <p className="text-md max-w-[600px] font-medium text-neutral-400 sm:text-xl">
                        {description}
                    </p>
                </div>

                <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
                    <div
                        className="group flex overflow-hidden p-2 flex-row"
                        style={{ gap: '1rem' }}
                    >
                        <div
                            className="flex shrink-0 justify-around animate-testimonials-scroll group-hover:pause-animation"
                            style={{
                                gap: '1rem',
                                willChange: 'transform',
                            }}
                        >
                            {/* Only duplicate twice for seamless loop - reduces DOM elements */}
                            {[...Array(2)].map((_, setIndex) => (
                                testimonials.map((testimonial, i) => (
                                    <TestimonialCard
                                        key={`${setIndex}-${i}`}
                                        {...testimonial}
                                    />
                                ))
                            ))}
                        </div>
                    </div>

                    <div className="pointer-events-none absolute inset-y-0 left-0 hidden w-1/3 bg-gradient-to-r from-black sm:block" />
                    <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-1/3 bg-gradient-to-l from-black sm:block" />
                </div>
            </div>
        </section>
    )
}
