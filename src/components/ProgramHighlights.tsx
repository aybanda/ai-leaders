import React from 'react';
import { motion } from 'framer-motion';

const CheckIcon = ({ className }: { className?: string }) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className={className} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
    </svg>
);

const ProgramHighlights: React.FC = () => {
    const timeline = [
        {
            title: 'Apply',
            description: 'Applicants receive immediate feedback after submitting the application.'
        },
        {
            title: 'Orientation (March 2026)',
            description: 'Strong candidates are invited to an orientation in March 2026.'
        },
        {
            title: 'Full Credential',
            description: 'Top 40 from the cohort are invited to a paid Full Credential to build a portfolio for WordPress job placement.'
        }
    ];

    const outcomes = [
        'Generative AI and WordPress development focus',
        'Full Credential for top 40 with $1,000 honorarium'
    ];

    const eligibility = [
        '80-person cohort in Louisiana and Illinois',
        'Remote program with optional facility access'
    ];

    const stats = [
        { label: 'Cohort Size', value: '80' },
        { label: 'Top Seats', value: '40' },
        { label: 'Honorarium', value: '$1,000' },
        { label: 'Start', value: 'March 2026' }
    ];

    return (
        <section id="program" className="py-24 bg-zinc-950 border-y border-white/5 relative overflow-hidden">
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[48rem] h-[48rem] bg-indigo-500/10 blur-[140px] rounded-full"></div>
                <div className="absolute -bottom-24 right-[-10%] w-[36rem] h-[36rem] bg-emerald-500/10 blur-[140px] rounded-full"></div>
                <div className="absolute inset-0 opacity-[0.06]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.5) 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
                <svg className="absolute top-2 left-2 w-64 h-64 opacity-50" viewBox="0 0 220 220" fill="none" aria-hidden="true">
                    <defs>
                        <linearGradient id="glowA" x1="0" y1="0" x2="1" y2="1">
                            <stop offset="0%" stopColor="rgba(255,255,255,0.18)" />
                            <stop offset="100%" stopColor="rgba(255,255,255,0.02)" />
                        </linearGradient>
                    </defs>
                    <path d="M18 60C40 30 90 12 140 24c30 7 50 26 62 52" stroke="url(#glowA)" strokeWidth="1.2" strokeLinecap="round" />
                    <path d="M22 110c28 18 68 22 104 10 26-9 46-24 62-44" stroke="url(#glowA)" strokeWidth="1" strokeLinecap="round" />
                    <path d="M30 170c30 10 64 6 94-10 30-16 48-38 54-60" stroke="url(#glowA)" strokeWidth="0.9" strokeLinecap="round" />
                    <circle cx="58" cy="58" r="2" fill="rgba(255,255,255,0.35)" />
                    <circle cx="142" cy="36" r="1.5" fill="rgba(255,255,255,0.25)" />
                </svg>
                <svg className="absolute bottom-2 right-2 w-72 h-72 opacity-50" viewBox="0 0 240 240" fill="none" aria-hidden="true">
                    <defs>
                        <linearGradient id="glowB" x1="1" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="rgba(255,255,255,0.18)" />
                            <stop offset="100%" stopColor="rgba(255,255,255,0.02)" />
                        </linearGradient>
                    </defs>
                    <path d="M30 190c32-24 74-30 114-18 34 10 60 30 70 58" stroke="url(#glowB)" strokeWidth="1" strokeLinecap="round" />
                    <path d="M60 40c24-18 58-26 92-20 34 6 62 24 78 52" stroke="url(#glowB)" strokeWidth="1.1" strokeLinecap="round" />
                    <circle cx="180" cy="64" r="2" fill="rgba(255,255,255,0.35)" />
                    <circle cx="92" cy="196" r="1.5" fill="rgba(255,255,255,0.25)" />
                </svg>
            </div>

            <div className="container mx-auto px-6 relative">
                <div className="text-center max-w-4xl mx-auto mb-14">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-[11px] font-semibold tracking-[0.3em] uppercase text-gray-300 mb-6">
                        Program Snapshot
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                        Spring 2026
                    </div>
                    <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
                        Your Path to a <span className="text-gray-400">Living-Wage Role</span>
                    </h2>
                    <p className="text-gray-400 text-lg leading-relaxed">
                        AI Leaders is a focused pathway to real work. We help you build a portfolio, learn in-demand skills,
                        and prepare for WordPress job placement.
                    </p>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1.3fr] gap-10 mb-14" style={{ perspective: '1200px' }}>
                    <motion.div
                        className="bg-black/80 border border-white/10 rounded-3xl p-8 md:p-10 relative overflow-hidden transform-gpu transition-transform duration-500"
                        style={{ transformStyle: 'preserve-3d' }}
                        whileHover={{ y: -6, boxShadow: '0 30px 70px rgba(0,0,0,0.45)' }}
                        transition={{ duration: 0.4, ease: 'easeOut' }}
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent opacity-80"></div>
                        <div className="relative" style={{ transform: 'translateZ(24px)' }}>
                            <div className="flex items-center justify-between mb-8">
                                <h3 className="text-2xl font-bold text-white">Program at a glance</h3>
                                <span className="text-[10px] uppercase tracking-[0.35em] text-gray-500">2026 Cohort</span>
                            </div>
                            <p className="text-gray-400 leading-relaxed mb-8">
                                A March 2026 cohort for 80 participants focused on Generative AI and WordPress.
                            </p>
                            <div className="grid grid-cols-2 gap-4">
                                {stats.map((stat) => (
                                    <motion.div
                                        key={stat.label}
                                        className="rounded-2xl border border-white/10 bg-black/60 p-5 transform-gpu"
                                        style={{ transform: 'translateZ(10px)' }}
                                        whileHover={{ y: -4, borderColor: 'rgba(255,255,255,0.2)' }}
                                        transition={{ duration: 0.25, ease: 'easeOut' }}
                                    >
                                        <div className="text-2xl md:text-3xl font-black text-white">{stat.value}</div>
                                        <div className="text-[10px] uppercase tracking-[0.3em] text-gray-500 mt-2">{stat.label}</div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    <div className="relative" style={{ perspective: '1200px' }}>
                        <div className="absolute left-5 top-0 bottom-0 w-px bg-gradient-to-b from-white/20 via-white/5 to-transparent"></div>
                        <div className="space-y-6">
                            {timeline.map((step, index) => (
                                <motion.div
                                    key={step.title}
                                    className="relative pl-12"
                                    style={{ transformStyle: 'preserve-3d' }}
                                    whileHover={{ y: -4 }}
                                    transition={{ duration: 0.25, ease: 'easeOut' }}
                                >
                                    <div className="absolute left-0 top-1.5 w-10 h-10 rounded-full border border-white/10 bg-black/80 flex items-center justify-center text-xs font-black text-white transform-gpu" style={{ transform: 'translateZ(16px)' }}>
                                        {index + 1}
                                    </div>
                                    <div className="bg-black/70 border border-white/10 rounded-2xl p-6 hover:border-white/20 transition-all transform-gpu" style={{ transform: 'translateZ(8px)' }}>
                                        <div className="flex items-center justify-between mb-3">
                                            <h4 className="text-lg font-bold text-white">{step.title}</h4>
                                            <span className="text-[10px] uppercase tracking-[0.3em] text-gray-500">Step {index + 1}</span>
                                        </div>
                                        <p className="text-gray-400 leading-relaxed text-sm">{step.description}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                    <motion.div
                        className="bg-black/70 border border-white/10 rounded-2xl p-8 relative overflow-hidden transform-gpu transition-transform duration-500"
                        style={{ transformStyle: 'preserve-3d' }}
                        whileHover={{ y: -6, boxShadow: '0 28px 60px rgba(0,0,0,0.45)' }}
                        transition={{ duration: 0.4, ease: 'easeOut' }}
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/15 via-transparent to-transparent opacity-70"></div>
                        <div className="relative" style={{ transform: 'translateZ(18px)' }}>
                            <div className="flex items-center justify-between mb-6">
                                <h3 className="text-lg font-bold text-white">What you will gain</h3>
                                <span className="text-[10px] uppercase tracking-[0.3em] text-emerald-300/70">Outcomes</span>
                            </div>
                            <ul className="space-y-4">
                                {outcomes.map((item) => (
                                    <li key={item} className="flex items-start gap-3 text-gray-300">
                                        <CheckIcon className="w-5 h-5 text-emerald-400 mt-0.5" />
                                        <span className="text-sm leading-relaxed">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </motion.div>

                    <motion.div
                        className="bg-black/70 border border-white/10 rounded-2xl p-8 flex flex-col justify-between relative overflow-hidden transform-gpu transition-transform duration-500"
                        style={{ transformStyle: 'preserve-3d' }}
                        whileHover={{ y: -6, boxShadow: '0 28px 60px rgba(0,0,0,0.45)' }}
                        transition={{ duration: 0.4, ease: 'easeOut' }}
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/15 via-transparent to-transparent opacity-70"></div>
                        <div className="relative" style={{ transform: 'translateZ(18px)' }}>
                            <div className="flex items-center justify-between mb-6">
                                <h3 className="text-lg font-bold text-white">Who this is for</h3>
                                <span className="text-[10px] uppercase tracking-[0.3em] text-indigo-300/70">Eligibility</span>
                            </div>
                            <ul className="space-y-4">
                                {eligibility.map((item) => (
                                    <li key={item} className="flex items-start gap-3 text-gray-300">
                                        <CheckIcon className="w-5 h-5 text-indigo-400 mt-0.5" />
                                        <span className="text-sm leading-relaxed">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="relative mt-8 flex flex-col sm:flex-row gap-4">
                            <a
                                href="#apply"
                                className="flex-1 text-center px-6 py-4 bg-white text-black font-black rounded-xl text-xs uppercase tracking-[0.2em] hover:bg-zinc-200 transition-colors"
                            >
                                Start Application
                            </a>
                            <a
                                href="mailto:help@ai-leaders.org"
                                className="flex-1 text-center px-6 py-4 bg-transparent border border-white/20 text-white font-black rounded-xl text-xs uppercase tracking-[0.2em] hover:bg-white/5 transition-colors"
                            >
                                Ask a Question
                            </a>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default ProgramHighlights;
