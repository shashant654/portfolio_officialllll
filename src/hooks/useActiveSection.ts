import { useState, useEffect } from 'react';

export function useActiveSection() {
                    const [activeSection, setActiveSection] = useState('home');
                    const [scrolled, setScrolled] = useState(false);

                    useEffect(() => {
                                        const handleScroll = () => {
                                                            setScrolled(window.scrollY > 50);
                                        };
                                        window.addEventListener('scroll', handleScroll);
                                        return () => window.removeEventListener('scroll', handleScroll);
                    }, []);

                    const scrollToSection = (id: string) => {
                                        const element = document.getElementById(id);
                                        if (element) {
                                                            element.scrollIntoView({ behavior: 'smooth' });
                                                            setActiveSection(id);
                                        }
                    };

                    return { activeSection, scrolled, scrollToSection, setActiveSection };
}
