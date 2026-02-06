import React from 'react';

const OnboardingProcess: React.FC = () => {
    const steps = [
        {
            title: 'Apply',
            detail: 'Complete the application on AI-Leaders.org.'
        },
        {
            title: 'Register for Orientation',
            detail: 'Strong candidates are invited to register for an orientation in March 2026.'
        },
        {
            title: 'Confirmation Email',
            detail: 'Receive a confirmation email with a copy of your application, registration, and calendar links.'
        },
        {
            title: 'Attend Orientation',
            detail: 'Participants are introduced to the Intro Micro-Credential and receive access credentials.'
        },
        {
            title: 'Complete Intro Micro-Credential',
            detail: 'Learn asynchronously with synchronous support at partner campuses.'
        },
        {
            title: 'Full Credential Invite',
            detail: 'Top participants are invited to the paid Full Credential cohort beginning in May.'
        },
        {
            title: 'Job Placement Outcomes',
            detail: 'Full Credential completion earns a $1,000 honorarium and living-wage job placement with employer partners.'
        }
    ];

    const milestones = [
        { label: 'Orientation', value: 'March 2026' },
        { label: 'Full Credential', value: 'Begins in May' },
        { label: 'Honorarium', value: '$1,000' }
    ];

    return (
        <section id="onboarding" className="py-24 bg-black border-y border-white/5 relative overflow-hidden">
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[44rem] h-[44rem] bg-indigo-500/10 blur-[140px] rounded-full"></div>
                <div className="absolute -bottom-24 right-[-10%] w-[32rem] h-[32rem] bg-emerald-500/10 blur-[140px] rounded-full"></div>
                <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.4) 1px, transparent 0)', backgroundSize: '36px 36px' }}></div>
                <svg className="absolute right-[-10%] top-1/2 -translate-y-1/2 w-[32rem] h-[32rem] opacity-60" viewBox="0 0 400 400" fill="none" aria-hidden="true">
                    <defs>
                        <linearGradient id="onboardGlow" x1="0" y1="0" x2="1" y2="1">
                            <stop offset="0%" stopColor="rgba(16,185,129,0.55)" />
                            <stop offset="50%" stopColor="rgba(99,102,241,0.45)" />
                            <stop offset="100%" stopColor="rgba(255,255,255,0.12)" />
                        </linearGradient>
                    </defs>
                    <path d="M40 220c40-80 140-140 230-110 60 20 90 80 84 140-6 60-52 110-118 122-70 12-152-30-196-92" stroke="url(#onboardGlow)" strokeWidth="3" strokeLinecap="round" />
                    <path d="M90 120c40-30 100-40 150-24 40 12 72 42 90 78" stroke="url(#onboardGlow)" strokeWidth="2" strokeLinecap="round" />
                    <circle cx="270" cy="110" r="6" fill="rgba(99,102,241,0.6)" />
                    <circle cx="120" cy="260" r="5" fill="rgba(16,185,129,0.6)" />
                </svg>
            </div>

            <div className="container mx-auto px-6 relative">
                <div className="grid grid-cols-1 gap-10 items-start">
                    <div>
                        <div className="spark-wrap mb-6">
                            <div className="inline-flex items-center px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-[11px] font-semibold tracking-[0.3em] uppercase text-gray-300 spark-line">
                                Onboarding Process
                            </div>
                        </div>
                        <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
                            Onboarding steps from <span className="text-emerald-300">application</span> to <span className="text-indigo-300">Full Credential</span>
                        </h2>
                        <p className="text-gray-400 text-lg leading-relaxed">
                            The steps below describe the onboarding process for March orientation and the Full Credential cohort beginning in May.
                        </p>

                        <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
                            {milestones.map((item) => (
                                <div key={item.label} className="rounded-2xl border border-white/10 bg-zinc-950/60 p-5 transition-all hover:-translate-y-1 hover:border-emerald-400/40 hover:shadow-[0_16px_40px_rgba(0,0,0,0.35)]">
                                    <div className="text-lg font-bold text-white">{item.value}</div>
                                    <div className="text-[10px] uppercase tracking-[0.3em] text-gray-500 mt-2">{item.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="mt-12">
                    <div className="flex items-center justify-between mb-6">
                        <h3 className="text-lg font-bold text-white">Process rail</h3>
                        <div className="flex items-center gap-3 text-[10px] uppercase tracking-[0.3em] text-gray-500">
                            <span>7 steps</span>
                        </div>
                    </div>
                    <div className="relative">
                        <div className="absolute left-2 right-2 top-4 h-px bg-gradient-to-r from-emerald-400/30 via-white/10 to-indigo-400/30 rail-glow"></div>
                        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-black via-black/70 to-transparent pointer-events-none"></div>
                        <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-black via-black/70 to-transparent pointer-events-none"></div>
                        <div className="flex gap-4 overflow-x-auto pb-6 snap-x snap-mandatory no-scrollbar">
                            {steps.map((step, index) => (
                                <div key={step.title} className="min-w-[260px] snap-start">
                                    <div className="relative pt-6">
                                        <div className="absolute left-4 top-2 w-4 h-4 rounded-full bg-gradient-to-br from-emerald-300 to-indigo-300 border border-white/20 shadow-[0_0_18px_rgba(99,102,241,0.35)]"></div>
                                        <div className="rounded-2xl border border-white/10 bg-zinc-950/70 p-6 h-full transition-all hover:-translate-y-1 hover:border-emerald-400/40 hover:shadow-[0_20px_50px_rgba(0,0,0,0.45)]">
                                            <div className="flex items-center justify-between mb-3">
                                                <span className="text-xs font-black text-white">{String(index + 1).padStart(2, '0')}</span>
                                                <span className="text-[10px] uppercase tracking-[0.3em] text-gray-500">Step</span>
                                            </div>
                                            <h4 className="text-lg font-bold text-white mb-2">{step.title}</h4>
                                            <p className="text-gray-400 leading-relaxed text-sm">{step.detail}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OnboardingProcess;
