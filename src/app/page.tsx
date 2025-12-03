import { useState } from 'react';
import { useActiveSection } from '@/hooks/useActiveSection';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Experience from '@/components/Experience';
import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function PortfolioPage() {
                    const [isMenuOpen, setIsMenuOpen] = useState(false);
                    const { scrolled, activeSection, scrollToSection } = useActiveSection();

                    const handleNavigate = (section: string) => {
                                        scrollToSection(section);
                                        setIsMenuOpen(false);
                    };

                    return (
                                        <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
                                                            <Navigation
                                                                                scrolled={scrolled}
                                                                                activeSection={activeSection}
                                                                                isMenuOpen={isMenuOpen}
                                                                                onMenuToggle={() => setIsMenuOpen(!isMenuOpen)}
                                                                                onNavigate={handleNavigate}
                                                            />
                                                            <Hero onNavigate={handleNavigate} />
                                                            <About />
                                                            <Projects />
                                                            <Skills />
                                                            <Experience />
                                                            <Testimonials />
                                                            <Contact />
                                                            <Footer />
                                        </div>
                    );
}
