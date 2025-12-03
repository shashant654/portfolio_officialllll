import { Code, Briefcase, User, Award, TrendingUp } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { useState, useEffect } from 'react';

export default function About() {
                    const { ref, isVisible } = useScrollReveal();
                    const [experienceCount, setExperienceCount] = useState(0);
                    const [projectsCount, setProjectsCount] = useState(0);
                    const [clientsCount, setClientsCount] = useState(0);

                    // Animated counters
                    useEffect(() => {
                                        if (isVisible) {
                                                            const animateCount = (setter: any, target: number) => {
                                                                                let current = 0;
                                                                                const increment = target / 50;
                                                                                const timer = setInterval(() => {
                                                                                                    current += increment;
                                                                                                    if (current >= target) {
                                                                                                                        setter(target);
                                                                                                                        clearInterval(timer);
                                                                                                    } else {
                                                                                                                        setter(Math.floor(current));
                                                                                                    }
                                                                                }, 30);
                                                            };

                                                            animateCount(setExperienceCount, 1);
                                                            animateCount(setProjectsCount, 4);
                                                            animateCount(setClientsCount, 10);
                                        }
                    }, [isVisible]);

                    return (
                                        <section id="about" className="py-20 px-4 bg-white dark:bg-slate-950 relative overflow-hidden">
                                                            {/* Background decoration */}
                                                            <div className="absolute top-0 right-0 w-96 h-96 bg-purple-200 dark:bg-purple-900/20 rounded-full filter blur-3xl opacity-20 animate-pulse"></div>

                                                            <div className="max-w-7xl mx-auto relative z-10">
                                                                                <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400 bg-clip-text text-transparent animate-fade-in-up">
                                                                                                    About Me
                                                                                </h2>

                                                                                <div ref={ref} className="grid md:grid-cols-2 gap-12 items-center">
                                                                                                    {/* Text Content */}
                                                                                                    <div className={`space-y-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
                                                                                                                        }`}>
                                                                                                                        <p className="text-lg text-gray-700 dark:text-slate-300 leading-relaxed">
                                                                                                                                            I'm a Full Stack Developer with <span className="font-semibold text-purple-600 dark:text-purple-400">1.6+ years of experience</span> in building secure and scalable web applications. Passionate about creating and documenting APIs with clarity and maintainability. I solve real-world problems through innovative and efficient solutions.
                                                                                                                        </p>
                                                                                                                        <p className="text-lg text-gray-700 dark:text-slate-300 leading-relaxed">
                                                                                                                                            Currently at Digital Matty Pvt. Ltd., I've developed SaaS platforms with multi-tenancy, billing systems with Stripe integration, educational platforms, and real-time applications. I'm skilled in Python, PHP, JavaScript, React, Django, Laravel, and have expertise in databases like PostgreSQL and MongoDB.
                                                                                                                        </p>

                                                                                                                        {/* Stats */}
                                                                                                                        <div className="flex flex-wrap gap-4 pt-4">
                                                                                                                                            <div className="flex items-center gap-3 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 px-5 py-3 rounded-2xl border border-purple-200/50 dark:border-purple-800/50 hover:scale-105 transition-transform duration-300 group">
                                                                                                                                                                <div className="p-2 bg-purple-600 dark:bg-purple-500 rounded-lg group-hover:rotate-12 transition-transform">
                                                                                                                                                                                    <Code className="h-5 w-5 text-white" />
                                                                                                                                                                </div>
                                                                                                                                                                <div>
                                                                                                                                                                                    <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">{experienceCount}+</div>
                                                                                                                                                                                    <div className="text-sm text-gray-600 dark:text-gray-400">Years Experience</div>
                                                                                                                                                                </div>
                                                                                                                                            </div>

                                                                                                                                            <div className="flex items-center gap-3 bg-gradient-to-br from-pink-50 to-purple-50 dark:from-pink-900/20 dark:to-purple-900/20 px-5 py-3 rounded-2xl border border-pink-200/50 dark:border-pink-800/50 hover:scale-105 transition-transform duration-300 group delay-100">
                                                                                                                                                                <div className="p-2 bg-pink-600 dark:bg-pink-500 rounded-lg group-hover:rotate-12 transition-transform">
                                                                                                                                                                                    <Briefcase className="h-5 w-5 text-white" />
                                                                                                                                                                </div>
                                                                                                                                                                <div>
                                                                                                                                                                                    <div className="text-2xl font-bold text-pink-600 dark:text-pink-400">{projectsCount}+</div>
                                                                                                                                                                                    <div className="text-sm text-gray-600 dark:text-gray-400">Projects</div>
                                                                                                                                                                </div>
                                                                                                                                            </div>

                                                                                                                                            <div className="flex items-center gap-3 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 px-5 py-3 rounded-2xl border border-blue-200/50 dark:border-blue-800/50 hover:scale-105 transition-transform duration-300 group delay-200">
                                                                                                                                                                <div className="p-2 bg-blue-600 dark:bg-blue-500 rounded-lg group-hover:rotate-12 transition-transform">
                                                                                                                                                                                    <Award className="h-5 w-5 text-white" />
                                                                                                                                                                </div>
                                                                                                                                                                <div>
                                                                                                                                                                                    <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">{clientsCount}+</div>
                                                                                                                                                                                    <div className="text-sm text-gray-600 dark:text-gray-400">Happy Clients</div>
                                                                                                                                                                </div>
                                                                                                                                            </div>
                                                                                                                        </div>
                                                                                                    </div>

                                                                                                    {/* Image/Visual */}
                                                                                                    <div className={`relative transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
                                                                                                                        }`}>
                                                                                                                        <div className="aspect-square rounded-3xl bg-gradient-to-br from-purple-500/20 via-pink-500/20 to-blue-500/20 dark:from-purple-500/10 dark:via-pink-500/10 dark:to-blue-500/10 backdrop-blur-sm border border-purple-300/30 dark:border-purple-500/20 flex items-center justify-center relative overflow-hidden group hover:scale-105 transition-transform duration-500">
                                                                                                                                            {/* Animated gradient overlay */}
                                                                                                                                            <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 via-pink-600/10 to-blue-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                                                                                                                                            <User className="h-48 w-48 text-purple-400/40 dark:text-purple-400/30 relative z-10 group-hover:scale-110 transition-transform duration-500" />

                                                                                                                                            {/* Floating achievement badge */}
                                                                                                                                            <div className="absolute top-4 right-4 bg-white dark:bg-slate-800 rounded-full p-3 shadow-lg animate-bounce">
                                                                                                                                                                <TrendingUp className="h-6 w-6 text-green-500" />
                                                                                                                                            </div>

                                                                                                                                            {/* Decorative elements */}
                                                                                                                                            <div className="absolute top-10 left-10 w-20 h-20 bg-purple-400 dark:bg-purple-600 rounded-full filter blur-xl opacity-30 animate-pulse"></div>
                                                                                                                                            <div className="absolute bottom-10 right-10 w-20 h-20 bg-pink-400 dark:bg-pink-600 rounded-full filter blur-xl opacity-30 animate-pulse delay-200"></div>
                                                                                                                        </div>
                                                                                                    </div>
                                                                                </div>
                                                            </div>
                                        </section>
                    );
}
