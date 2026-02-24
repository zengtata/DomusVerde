'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Reveal from './Reveal';

export default function ProcessBanner() {
    const steps = [
        { title: 'Konzultáció', desc: 'Helyszíni felmérés és az Ön elképzeléseinek egyeztetése.' },
        { title: 'Tervezés', desc: 'Látványtervek és ütemterv kidolgozása.' },
        { title: 'Kivitelezés', desc: 'A tervek szakszerű megvalósítása minőségi anyagokkal.' },
        { title: 'Átadás', desc: 'A kulcsrakész, élettel teli új kert átadása.' },
    ];

    return (
        <section className="py-16 md:py-24 bg-white">
            <div className="container mx-auto px-6">
                <div className="relative rounded-2xl overflow-hidden bg-primary-green text-white shadow-2xl">

                    {/* Changed to a 12-column grid for better width distribution */}
                    <div className="grid lg:grid-cols-12">

                        {/* Left: Text Content (Takes up more horizontal space to reduce height) */}
                        <div className="lg:col-span-7 p-8 md:p-12 lg:p-14 flex flex-col justify-center z-10 relative">
                            <Reveal>
                                <span className="text-accent-gold uppercase tracking-[3px] text-xs font-bold mb-4 block">
                                    Lépésről Lépésre
                                </span>
                                <p className="font-heading text-3xl md:text-4xl lg:text-5xl mb-4 leading-tight">
                                    Így válik a látványterv élő természetté.
                                </p>
                                <p className="text-white/80 mb-8 leading-relaxed max-w-xl">
                                    Átlátható, 4 lépéses folyamatunk garancia a minőségre. Ismerje meg, hogyan vezetjük végig Önt a tervezőasztaltól az első kerti partiig.
                                </p>

                                {/* --- REFINED: Compact 2x2 Grid Stepper --- */}
                                <div className="grid sm:grid-cols-2 gap-x-6 gap-y-6 mb-10">
                                    {steps.map((step, i) => (
                                        <div key={i} className="group cursor-default">

                                            <div className="flex items-center gap-3 mb-2">
                                                {/* Snappy Step Number Badge (Slightly smaller) */}
                                                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary-green border border-accent-gold/50 text-accent-gold font-bold text-xs shrink-0 transition-all duration-300 ease-out group-hover:-translate-y-1 group-hover:scale-110 group-hover:bg-accent-gold group-hover:text-primary-green group-hover:shadow-lg">
                                                    {i + 1}
                                                </div>
                                                <h4 className="text-white font-semibold tracking-wide text-base">{step.title}</h4>
                                            </div>

                                            {/* Step Text aligned with the title, bypassing the badge */}
                                            <p className="text-white/60 text-sm leading-relaxed pl-11 pr-2">
                                                {step.desc}
                                            </p>

                                        </div>
                                    ))}
                                </div>
                                {/* --------------------------------------- */}

                                <Link href="/process" className="group relative inline-block w-fit overflow-hidden rounded-full bg-white px-8 py-3 text-xs font-bold uppercase tracking-wider text-primary-green shadow-md transition-all duration-300 ease-out hover:-translate-y-1 hover:scale-105 hover:bg-accent-gold hover:text-white hover:shadow-2xl active:translate-y-0 active:scale-95">
                                    <span className="relative z-10">Részletek</span>
                                    <div className="absolute inset-0 -z-10 h-full w-full origin-left scale-x-0 transform bg-white/20 transition-transform duration-500 ease-out group-hover:scale-x-100" />
                                </Link>
                            </Reveal>
                        </div>

                        {/* Right: Image */}
                        {/* Shorter height on mobile (250px), scales naturally on desktop */}
                        <div className="lg:col-span-5 relative h-[250px] sm:h-[300px] lg:h-auto min-h-full overflow-hidden group">
                            {/* --- GRADIENT OVERLAY (Adjusted breakpoints to match layout) --- */}
                            <div className="absolute inset-0 z-20 pointer-events-none bg-gradient-to-b from-primary-green via-primary-green/20 to-transparent lg:bg-gradient-to-r lg:from-primary-green lg:via-primary-green/60 lg:to-transparent" style={{ backgroundSize: '100% 100%' }}></div>
                            <Image
                                src="/images/5ec93c46-30c1-495b-ad0b-f0fac59d59aa.jpg"
                                alt="Kertépítési folyamat"
                                fill
                                className="object-cover transition-transform duration-1000 group-hover:scale-105"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}