import React from "react";

const AnimeQuoteMarquee = () => {
    // Anime quote - Monkey D. Luffy (One Piece)
    const animeQuote = "I DON'T WANT TO CONQUER ANYTHING. I JUST THINK THE GUY WITH THE MOST FREEDOM IN THIS WORLD IS THE PIRATE KING. — MONKEY D. LUFFY";

    return (
        <section className="w-full py-6 bg-black overflow-hidden border-y border-zinc-800">
            <style>
                {`
                    .quote-marquee {
                        animation: scroll-right 40s linear infinite;
                    }

                    @keyframes scroll-right {
                        0% {
                            transform: translateX(-50%);
                        }
                        100% {
                            transform: translateX(0);
                        }
                    }

                    .quote-marquee:hover {
                        animation-play-state: paused;
                    }
                `}
            </style>
            <div className="relative">
                <div className="quote-marquee flex whitespace-nowrap">
                    {[1, 2, 3, 4].map((_, repeatIndex) => (
                        <span
                            key={repeatIndex}
                            className="inline-flex items-center text-lg md:text-2xl font-bold mx-4 tracking-wide"
                            style={{
                                fontFamily: "'Zalando Sans Expanded', sans-serif",
                                background: "linear-gradient(90deg, #f97316, #facc15, #f97316)",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                                backgroundClip: "text",
                            }}
                        >
                            {animeQuote}
                            <span className="mx-8 text-orange-500" style={{ WebkitTextFillColor: "#f97316" }}>✦</span>
                        </span>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AnimeQuoteMarquee;
