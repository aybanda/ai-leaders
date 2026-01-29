import React from 'react';
import { motion } from 'framer-motion';
import maryPortrait from '../assets/mary.jpg';
import blakePortrait from '../assets/blake.jpg';
import stefinPortrait from '../assets/stefin.jpg';

const Advisors: React.FC = () => {
    const advisors = [
        {
            name: "Mary Hubbard",
            role: "Executive Director, WordPress",
            image: maryPortrait,
            bio: "Mary serves as the Executive Director of WordPress, leading the open-source project that powers over 40% of the web. With over 20 years of experience in product leadership and program management, she has held key roles at TikTok, eBay, and Automattic. Mary is a passionate advocate for open source sustainability and empowering the next generation of creators.",
            linkedin: "https://www.linkedin.com/in/maryfhubbard/"
        },
        {
            name: "Blake Bertuccelli-Booth",
            role: "Entrepreneur & Founder",
            image: blakePortrait,
            bio: "An entrepreneur at heart, Blake ran a successful WordPress agency before founding Equalify, a pioneering web accessibility platform now maintained by the University of Illinois Chicago. He brings deep expertise in building sustainable web businesses and is dedicated to fostering an inclusive digital ecosystem.",
            linkedin: "https://www.linkedin.com/in/blake1111/"
        },
        {
            name: "Stefin Pasternak",
            role: "Leader, Educator & Founder",
            image: stefinPortrait,
            bio: "Stefin is an equity-focused leader at UIC and an experienced educator who founded the Living School. His work bridges technology, education, and community building, with a focus on creating pathways for meaningful employment and civic engagement through open source technology.",
            linkedin: "https://www.linkedin.com/in/stephen-pasternak-11979b155"
        }
    ];

    return (
        <section id="advisors" className="py-24 bg-black">
            <div className="container mx-auto px-6">
                <div className="text-center mb-20">
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">Your Advisors</h2>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
                        Your advisors are industry veterans who know what it takes to get an Living-Wage WordPress job. We're your coaches. Your advocates.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
                    {advisors.map((advisor, idx) => (
                        <div key={idx} className="flex flex-col h-full">
                            <div className="aspect-[4/5] bg-zinc-900 rounded-xl mb-8 overflow-hidden relative border border-white/5">
                                <motion.img
                                    src={advisor.image}
                                    alt={advisor.name}
                                    initial={{ filter: "grayscale(100%)", opacity: 0.9 }}
                                    whileInView={{ filter: "grayscale(0%) saturate(120%)", opacity: 1 }}
                                    viewport={{ once: false, amount: 0.3 }}
                                    transition={{ duration: 1, ease: "easeInOut" }}
                                    className="absolute inset-0 w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60"></div>
                            </div>

                            <div className="flex-1 flex flex-col">
                                <div className="mb-2">
                                    <h3 className="text-2xl font-bold text-white">{advisor.name}</h3>
                                </div>

                                <p className="text-sm text-indigo-400 font-semibold tracking-wide uppercase mb-4">
                                    {advisor.role}
                                </p>

                                <p className="text-gray-400 leading-relaxed">
                                    {advisor.bio}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Advisors;
