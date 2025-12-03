import { Github, Linkedin, Mail, Download, ChevronRight, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useScrollReveal } from '@/hooks/useScrollReveal';

interface HeroProps {
                    onNavigate: (section: string) => void;
}

export default function Hero({ onNavigate }: HeroProps) {
                    const { ref: titleRef, isVisible: titleVisible } = useScrollReveal();
                    const { ref: subtitleRef, isVisible: subtitleVisible } = useScrollReveal();
                    const { ref: ctaRef, isVisible: ctaVisible } = useScrollReveal();

                    return (
                                        <section id="home" className="min-h-screen flex items-center justify-center pt-16 px-4 relative overflow-hidden">
                                                            {/* Animated background gradient */}
                                                            <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 dark:from-slate-950 dark:via-purple-950/20 dark:to-slate-950 animate-gradient bg-[length:400%_400%]"></div>

                                                            {/* Floating orbs */}
                                                            <div className="absolute top-20 left-10 w-72 h-72 bg-purple-300 dark:bg-purple-600 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-xl opacity-20 dark:opacity-10 animate-float"></div>
                                                            <div className="absolute top-40 right-10 w-72 h-72 bg-pink-300 dark:bg-pink-600 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-xl opacity-20 dark:opacity-10 animate-float delay-200"></div>
                                                            <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-blue-300 dark:bg-blue-600 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-xl opacity-20 dark:opacity-10 animate-float delay-400"></div>

                                                            <div className="max-w-7xl mx-auto text-center relative z-10">
                                                                                {/* Avatar */}
                                                                                <div className="mb-8 animate-fade-in-down">
                                                                                                    <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-purple-500 via-pink-500 to-purple-500 flex items-center justify-center text-5xl font-bold shadow-2xl animate-float relative group">
                                                                                                                        <span className="text-white dark:text-white">JD</span>
                                                                                                                        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 blur-lg opacity-50 group-hover:opacity-75 transition-opacity animate-pulse"></div>
                                                                                                                        <Sparkles className="absolute -top-2 -right-2 h-6 w-6 text-yellow-400 animate-pulse" />
                                                                                                    </div>
                                                                                </div>

                                                                                {/* Name */}
                                                                                <div ref={titleRef}>
                                                                                                    <h1 className={`text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 dark:from-purple-400 dark:via-pink-400 dark:to-purple-400 bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient transition-all duration-1000 ${titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                                                                                                                        }`}>
                                                                                                                        John Doe
                                                                                                    </h1>
                                                                                </div>

                                                                                {/* Subtitle */}
                                                                                <div ref={subtitleRef}>
                                                                                                    <p className={`text-xl md:text-2xl text-gray-700 dark:text-slate-300 mb-4 transition-all duration-1000 delay-200 ${subtitleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                                                                                                                        }`}>
                                                                                                                        Full Stack Developer & UI/UX Enthusiast
                                                                                                    </p>
                                                                                                    <p className={`text-lg text-gray-600 dark:text-slate-400 mb-8 max-w-2xl mx-auto transition-all duration-1000 delay-300 ${subtitleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                                                                                                                        }`}>
                                                                                                                        Crafting beautiful, functional, and scalable web applications with modern technologies
                                                                                                    </p>
                                                                                </div>

                                                                                {/* CTA Buttons */}
                                                                                <div ref={ctaRef}>
                                                                                                    <div className={`flex flex-wrap justify-center gap-4 transition-all duration-1000 delay-400 ${ctaVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                                                                                                                        }`}>
                                                                                                                        <Button
                                                                                                                                            onClick={() => onNavigate('projects')}
                                                                                                                                            className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 dark:from-purple-500 dark:to-pink-500 dark:hover:from-purple-600 dark:hover:to-pink-600 text-white shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 group"
                                                                                                                        >
                                                                                                                                            View My Work
                                                                                                                                            <ChevronRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                                                                                                                        </Button>
                                                                                                                        <Button
                                                                                                                                            variant="outline"
                                                                                                                                            className="border-2 border-purple-600 dark:border-purple-400 text-purple-600 dark:text-purple-400 hover:bg-purple-600 dark:hover:bg-purple-500 hover:text-white dark:hover:text-white shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 group"
                                                                                                                        >
                                                                                                                                            <Download className="mr-2 h-4 w-4 group-hover:animate-bounce" />
                                                                                                                                            Download CV
                                                                                                                        </Button>
                                                                                                    </div>
                                                                                </div>

                                                                                {/* Social Links */}
                                                                                <div className={`flex justify-center gap-6 mt-8 transition-all duration-1000 delay-500 ${ctaVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                                                                                                    }`}>
                                                                                                    <a
                                                                                                                        href="#"
                                                                                                                        className="p-3 rounded-full bg-gray-200/80 dark:bg-slate-800/80 text-gray-700 dark:text-slate-400 hover:text-purple-600 dark:hover:text-purple-400 hover:bg-gray-300 dark:hover:bg-slate-700 transition-all duration-300 hover:scale-110 hover:-translate-y-1 group"
                                                                                                    >
                                                                                                                        <Github className="h-6 w-6 group-hover:rotate-12 transition-transform" />
                                                                                                    </a>
                                                                                                    <a
                                                                                                                        href="#"
                                                                                                                        className="p-3 rounded-full bg-gray-200/80 dark:bg-slate-800/80 text-gray-700 dark:text-slate-400 hover:text-purple-600 dark:hover:text-purple-400 hover:bg-gray-300 dark:hover:bg-slate-700 transition-all duration-300 hover:scale-110 hover:-translate-y-1 group delay-100"
                                                                                                    >
                                                                                                                        <Linkedin className="h-6 w-6 group-hover:rotate-12 transition-transform" />
                                                                                                    </a>
                                                                                                    <a
                                                                                                                        href="#"
                                                                                                                        className="p-3 rounded-full bg-gray-200/80 dark:bg-slate-800/80 text-gray-700 dark:text-slate-400 hover:text-purple-600 dark:hover:text-purple-400 hover:bg-gray-300 dark:hover:bg-slate-700 transition-all duration-300 hover:scale-110 hover:-translate-y-1 group delay-200"
                                                                                                    >
                                                                                                                        <Mail className="h-6 w-6 group-hover:rotate-12 transition-transform" />
                                                                                                    </a>
                                                                                </div>
                                                            </div>
                                        </section>
                    );
}
