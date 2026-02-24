'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import Header from '../components/Header';
import Reveal from '../components/Reveal';
import StepVisual from "@/app/components/StepVisual";
import Footer from "@/app/components/Footer";

// --- MOCK DATA: STEPS WITH ADDED DELIVERABLES ---
const steps = [
    {
        id: 1,
        num: "1",
        title: "Találkozás és Inspiráció",
        desc: "A helyszíni konzultáció során megismerjük az Ön elképzeléseit, életstílusát és az adott terület lehetőségeit. Figyelünk a részletekre, mert a valódi prémium élmény ott kezdődik, ahol mások megállnak.",
        deliverables: ["Helyszíni adottságok felmérése", "Stílus és funkciók egyeztetése", "Költségkeret meghatározása"],
        quote: "Egy jó design a hallgatással kezdődik.",
        type: 'consultation'
    },
    {
        id: 2,
        num: "2",
        title: "Koncepció és Forma",
        desc: "A tervezési fázisban megszületik a kert karaktere. Anyagok, formák, növények és funkciók harmonikus egységbe rendeződnek, hogy a kert valóban tükrözze az Ön személyiségét.",
        deliverables: ["Méretarányos alaprajz", "Fotórealisztikus látványtervek", "Növénykiültetési terv"],
        quote: "Nem csak rajzolunk, álmokat vizualizálunk.",
        type: 'design'
    },
    {
        id: 3,
        num: "3",
        title: "Megvalósítás Mesterszinten",
        desc: "Precíz kivitelezés, összehangolt csapatmunka és kompromisszummentes minőség – minden mozdulat a tökéletesség irányába vezet.",
        deliverables: ["Tereprendezés és földmunka", "Öntözőrendszer kiépítése", "Növények szakszerű elültetése"],
        quote: "A minőség az apró részletekben rejlik.",
        type: 'build'
    },
    {
        id: 4,
        num: "4",
        title: "Átadás és Gondoskodás",
        desc: "A kert életre kel, de a kapcsolat nem ér véget. Átadjuk, majd igény szerint segítünk megőrizni gondozást végző partnereink segítségével azt a szépséget, amelyet megalkottuk.",
        deliverables: ["Kertápolási útmutató", "Rendszeres karbantartási opciók", "Garanciális ügyintézés"],
        quote: "A kert egy élő organizmus, amely gondoskodást igényel.",
        type: 'care'
    },
];

// --- MOCK DATA: FAQ ---
const faqs = [
    { q: "Mennyi ideig tart a tervezési folyamat?", a: "Általában 2-4 hetet vesz igénybe a terület méretétől és a koncepció összetettségétől függően." },
    { q: "Vállalnak kisebb kerteket is?", a: "Igen, hiszünk abban, hogy kis térben is lehet nagyot alkotni. Teraszok és kisvárosi kertek tervezését is vállaljuk." },
    { q: "Milyen garanciát vállalnak?", a: "Az általunk ültetett növényekre 1 év eredési garanciát, az épített elemekre és öntözőrendszerekre pedig 2 év garanciát biztosítunk." },
    { q: "Mennyibe kerül egy átlagos kivitelezés?", a: "Minden projekt egyedi. Az árat befolyásolja a terület mérete, a választott anyagok és növények minősége. Kérjen ingyenes konzultációt pontos árajánlatért." },
];

export default function ProcessPage() {
    const [openFaq, setOpenFaq] = useState<number | null>(null);

    const toggleFaq = (index: number) => {
        setOpenFaq(openFaq === index ? null : index);
    };

    return (
        <main className="bg-white min-h-screen">
            <Header />

            {/* --- HERO SECTION --- */}
            <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
                <Image
                    src="/images/process.jpg"
                    alt="Process Hero"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-black/60" />
                <div className="relative z-10 text-center px-6 pt-16">
                    <Reveal>
                        <span className="block text-accent-gold uppercase tracking-[3px] text-sm font-bold mb-4">
                            Hogyan Dolgozunk?
                        </span>
                        <h1 className="font-heading text-5xl md:text-6xl text-white mb-6 drop-shadow-lg">
                            A Tervezéstől a Valóságig
                        </h1>
                    </Reveal>
                </div>
            </section>

            {/* --- DETAILED STEPS TIMELINE --- */}
            <section className="py-24 overflow-hidden bg-[#FAFAFA]">
                <div className="container mx-auto px-6 relative">

                    {/* CONTINUOUS VERTICAL LINE (Hidden on Mobile) */}
                    <div className="hidden md:block absolute top-0 bottom-0 w-[2px] bg-primary-green/10 md:left-1/2 md:-translate-x-1/2 z-0"></div>

                    {steps.map((step, index) => {
                        const isEven = index % 2 === 0;
                        return (
                            <div key={step.id} className={`relative flex flex-col md:flex-row items-start md:items-center gap-10 md:gap-0 mb-32 last:mb-0 ${isEven ? '' : 'md:flex-row-reverse'}`}>

                                {/* TEXT CONTAINER (Removed pl-20 for mobile) */}
                                <div className={`w-full md:w-1/2 relative z-10 text-left ${isEven ? 'md:pr-24 md:text-right' : 'md:pl-24 md:text-left'}`}>

                                    {/* Giant subtle background number for visual depth */}
                                    <div className={`absolute -top-10 text-[12rem] font-heading font-bold text-primary-green/5 select-none pointer-events-none z-[-1] ${isEven ? 'md:right-10' : 'md:left-10'}`}>
                                        {step.num}
                                    </div>

                                    <Reveal>
                                        <p className="font-heading text-3xl md:text-4xl text-primary-green mb-4">
                                            {step.title}
                                        </p>

                                        <div className={`w-16 h-[2px] bg-accent-gold mb-6 mr-auto ml-0 ${isEven ? 'md:ml-auto md:mr-0' : 'md:mr-auto md:ml-0'}`}></div>

                                        <p className="text-gray-600 leading-relaxed text-lg mb-8">
                                            {step.desc}
                                        </p>

                                        {/* Deliverables Checklist */}
                                        <ul className={`flex flex-col gap-3 mb-8 ${isEven ? 'md:items-end' : 'md:items-start'}`}>
                                            {step.deliverables.map((item, i) => (
                                                <li key={i} className="flex items-center gap-3 text-primary-green font-medium">
                                                    {/* Reverse icon order for even items on desktop so bullet is on the right */}
                                                    <span className={`w-1.5 h-1.5 rounded-full bg-accent-gold hidden md:block ${isEven ? 'order-last' : ''}`}></span>
                                                    <span className="w-1.5 h-1.5 rounded-full bg-accent-gold block md:hidden"></span>
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>

                                        <p className="font-serif italic text-primary-green/50 text-base border-l-2 md:border-l-0 border-accent-gold pl-4 md:pl-0">
                                            {step.quote}
                                        </p>
                                    </Reveal>
                                </div>

                                {/* IMAGE SIDE (Removed pl-20 for mobile) */}
                                <div className="w-full md:w-3/7 md:px-20">
                                    <Reveal delay={200} className="w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 group">
                                        <div className="w-full h-full scale-100 group-hover:scale-102 transition-transform duration-700">
                                            <StepVisual type={step.type} />
                                        </div>
                                    </Reveal>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </section>

            {/* --- FAQ SECTION --- */}
            <section className="py-24 bg-white">
                <div className="container max-w-3xl mx-auto px-6">
                    <Reveal className="text-center mb-16">
                        <span className="text-accent-gold uppercase tracking-[2px] text-sm font-bold">Gyakori Kérdések</span>
                        <h2 className="font-heading text-4xl text-primary-green mt-2">Miben segíthetünk?</h2>
                    </Reveal>

                    <div className="space-y-4">
                        {faqs.map((item, index) => (
                            <Reveal key={index} delay={index * 100}>
                                <div className={`border rounded-xl overflow-hidden transition-all duration-300 shadow-sm ${openFaq === index ? 'border-accent-gold bg-primary-green text-white shadow-md' : 'border-gray-100 bg-gray-50 text-primary-green hover:border-accent-gold/50'}`}>
                                    <button
                                        onClick={() => toggleFaq(index)}
                                        className="w-full flex justify-between items-center p-6 text-left focus:outline-none"
                                    >
                                        <span className="font-heading text-lg font-medium pr-8">{item.q}</span>
                                        <span className={`text-2xl font-light transition-transform duration-300 ${openFaq === index ? 'rotate-45 text-accent-gold' : 'text-accent-gold'}`}>
                                            +
                                        </span>
                                    </button>

                                    <div className={`overflow-hidden transition-all duration-500 ease-in-out ${openFaq === index ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}>
                                        <p className={`p-6 pt-0 leading-relaxed ${openFaq === index ? 'text-white/80' : 'text-gray-600'}`}>
                                            {item.a}
                                        </p>
                                    </div>
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* FOOTER */}
            <section id="contact">
                <Reveal delay={100}>
                    <Footer />
                </Reveal>
            </section>

        </main>
    );
}