import { useState, useRef, useEffect } from 'react';
import { Volume2, VolumeX, Music, Play } from 'lucide-react';

export default function MusicPlayer() {
    const [isPlaying, setIsPlaying] = useState(false);
    const [isMuted, setIsMuted] = useState(true); // Start muted to allow autoplay
    const [showPrompt, setShowPrompt] = useState(true);
    const audioRef = useRef<HTMLAudioElement>(null);

    useEffect(() => {
        // Auto-play muted when component mounts (browsers allow this)
        const audio = audioRef.current;
        if (audio) {
            audio.volume = 0.3;
            audio.muted = true; // Start muted
            audio.play()
                .then(() => {
                    setIsPlaying(true);
                })
                .catch(() => {
                    setIsPlaying(false);
                });
        }
    }, []);

    const enableSound = () => {
        const audio = audioRef.current;
        if (!audio) return;

        audio.muted = false;
        setIsMuted(false);
        setShowPrompt(false);

        if (!isPlaying) {
            audio.play();
            setIsPlaying(true);
        }
    };

    const togglePlay = () => {
        const audio = audioRef.current;
        if (!audio) return;

        if (isPlaying) {
            audio.pause();
            setIsPlaying(false);
        } else {
            audio.play();
            setIsPlaying(true);
        }
    };

    const toggleMute = () => {
        const audio = audioRef.current;
        if (!audio) return;

        audio.muted = !isMuted;
        setIsMuted(!isMuted);
        setShowPrompt(false);
    };

    return (
        <>
            <audio
                ref={audioRef}
                src="/profile-song.mp3"
                loop
                preload="auto"
            />

            {/* CSS for animations */}
            <style dangerouslySetInnerHTML={{
                __html: `
                @keyframes music-bar1 {
                    0%, 100% { height: 4px; }
                    50% { height: 16px; }
                }
                @keyframes music-bar2 {
                    0%, 100% { height: 8px; }
                    50% { height: 12px; }
                }
                @keyframes music-bar3 {
                    0%, 100% { height: 12px; }
                    50% { height: 6px; }
                }
                @keyframes music-bar4 {
                    0%, 100% { height: 6px; }
                    50% { height: 14px; }
                }
                .animate-music-bar1 {
                    animation: music-bar1 0.8s ease-in-out infinite;
                }
                .animate-music-bar2 {
                    animation: music-bar2 0.6s ease-in-out infinite;
                    animation-delay: 0.1s;
                }
                .animate-music-bar3 {
                    animation: music-bar3 0.7s ease-in-out infinite;
                    animation-delay: 0.2s;
                }
                .animate-music-bar4 {
                    animation: music-bar4 0.5s ease-in-out infinite;
                    animation-delay: 0.15s;
                }
                @keyframes bounce-gentle {
                    0%, 100% { transform: translateY(0); }
                    50% { transform: translateY(-5px); }
                }
                .animate-bounce-gentle {
                    animation: bounce-gentle 1s ease-in-out infinite;
                }
            `}} />

            {/* Enable Sound Prompt - Shows on first visit */}
            {showPrompt && isMuted && (
                <div
                    className="fixed bottom-24 right-6 z-50 animate-bounce-gentle cursor-pointer"
                    onClick={enableSound}
                >
                    <div className="bg-gradient-to-r from-amber-500 to-orange-500 text-black px-4 py-2 rounded-full font-bold text-sm flex items-center gap-2 shadow-lg shadow-amber-500/30">
                        <Play size={16} fill="currentColor" />
                        <span>Click to enable music!</span>
                    </div>
                    <div className="absolute -bottom-1 right-4 w-3 h-3 bg-orange-500 rotate-45"></div>
                </div>
            )}

            {/* Floating Music Button */}
            <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-2 items-end">
                {/* Music visualizer animation when playing and not muted */}
                {isPlaying && !isMuted && (
                    <div className="flex items-end gap-0.5 h-4 mb-1">
                        <span className="w-1 bg-amber-500 rounded-full animate-music-bar1"></span>
                        <span className="w-1 bg-amber-400 rounded-full animate-music-bar2"></span>
                        <span className="w-1 bg-amber-500 rounded-full animate-music-bar3"></span>
                        <span className="w-1 bg-amber-400 rounded-full animate-music-bar4"></span>
                    </div>
                )}

                {/* Control buttons */}
                <div className="flex gap-2">
                    {/* Play/Pause Button */}
                    <button
                        onClick={togglePlay}
                        className={`
                            group relative p-3 rounded-full backdrop-blur-xl 
                            border transition-all duration-300
                            ${isPlaying
                                ? 'bg-amber-500/20 border-amber-500/50 shadow-lg shadow-amber-500/20'
                                : 'bg-black/40 border-white/20 hover:border-amber-500/50'
                            }
                        `}
                        title={isPlaying ? "Pause" : "Play"}
                    >
                        <Music
                            size={20}
                            className={`transition-all duration-300 ${isPlaying && !isMuted ? 'text-amber-400 animate-pulse' : 'text-white group-hover:text-amber-400'
                                }`}
                        />

                        {/* Ripple effect when playing */}
                        {isPlaying && !isMuted && (
                            <>
                                <span className="absolute inset-0 rounded-full border border-amber-500/30 animate-ping"></span>
                                <span className="absolute inset-0 rounded-full bg-amber-500/10 animate-pulse"></span>
                            </>
                        )}
                    </button>

                    {/* Mute/Unmute Button */}
                    <button
                        onClick={toggleMute}
                        className={`
                            group p-3 rounded-full backdrop-blur-xl 
                            border transition-all duration-300
                            ${isMuted
                                ? 'bg-red-500/20 border-red-500/50'
                                : 'bg-black/40 border-white/20 hover:border-amber-500/50'
                            }
                        `}
                        title={isMuted ? "Unmute" : "Mute"}
                    >
                        {isMuted ? (
                            <VolumeX size={20} className="text-red-400" />
                        ) : (
                            <Volume2 size={20} className="text-white group-hover:text-amber-400 transition-colors" />
                        )}
                    </button>
                </div>
            </div>
        </>
    );
}
