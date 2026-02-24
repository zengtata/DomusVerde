import React from 'react';

export default function Footer() {
    return (
        <footer className="bg-[#1A2520] text-white py-8 border-t border-white/5">
            <div className="container mx-auto px-6 flex flex-col items-center justify-center space-y-4">

                {/* Brand Name */}
                <p className="font-heading text-lg font-bold tracking-[0.2em] text-accent-gold">
                    DOMUS VERDE
                </p>

                {/* Contact Info Row */}
                <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm">

                    {/* Phone Block */}
                    <a
                        href="tel:+36302858574"
                        className="group flex items-center gap-2 text-white/70 hover:text-accent-gold transition-colors duration-300"
                    >
                        <svg className="w-3.5 h-3.5 opacity-70 group-hover:opacity-100" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                        <span className="font-light tracking-widest">+36 30 285 8574</span>
                    </a>

                    {/* Email Block */}
                    <a
                        href="mailto:office@domusverde.hu"
                        className="group flex items-center gap-2 text-white/70 hover:text-accent-gold transition-colors duration-300"
                    >
                        <svg className="w-3.5 h-3.5 opacity-70 group-hover:opacity-100" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        <span className="font-light tracking-widest">office@domusverde.hu</span>
                    </a>

                </div>

                {/* Copyright */}
                <p className="text-[10px] text-white/30 uppercase tracking-widest pt-2">
                    &copy; {new Date().getFullYear()} Domus Verde. Minden jog fenntartva.
                </p>

            </div>
        </footer>
    );
}