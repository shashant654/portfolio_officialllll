import { useState } from 'react';
import { useActiveSection } from '@/hooks/useActiveSection';
import { useDarkMode } from '@/hooks/useDarkMode';
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
                    const { isDark, toggle: toggleDark } = useDarkMode();

                    const handleNavigate = (section: string) => {
                                        scrollToSection(section);
                                        setIsMenuOpen(false);
                    };

                    return (
                                        <div className="min-h-screen bg-white dark:bg-slate-950 text-gray-900 dark:text-white transition-colors duration-300">
                                                            <Navigation
                                                                                scrolled={scrolled}
                                                                                activeSection={activeSection}
                                                                                isMenuOpen={isMenuOpen}
                                                                                onMenuToggle={() => setIsMenuOpen(!isMenuOpen)}
                                                                                onNavigate={handleNavigate}
                                                                                isDark={isDark}
                                                                                onToggleDark={toggleDark}
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
