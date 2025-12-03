import { ChevronRight, Zap } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { skills } from '@/data/skills';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export default function Skills() {
                    const { ref, isVisible } = useScrollReveal();

                    const categoryIcons: { [key: string]: any } = {
                                        'Frontend': '🎨',
                                        'Backend': '⚙️',
                                        'Tools': '🛠️',
                                        'Soft Skills': '🤝'
                    };

                    const categoryColors: { [key: string]: string } = {
                                        'Frontend': 'from-purple-500 to-pink-500',
                                        'Backend': 'from-blue-500 to-cyan-500',
                                        'Tools': 'from-green-500 to-emerald-500',
                                        'Soft Skills': 'from-orange-500 to-red-500'
                    };

                    return (
                                        <section id="skills" className="py-20 px-4 bg-white dark:bg-slate-950">
                                                            <div className="max-w-7xl mx-auto">
                                                                                <div className="text-center mb-12 animate-fade-in-up">
                                                                                                    <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400 bg-clip-text text-transparent">
                                                                                                                        Skills & Expertise
                                                                                                    </h2>
                                                                                                    <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                                                                                                                        Technologies and tools I use to bring ideas to life
                                                                                                    </p>
                                                                                </div>

                                                                                <div ref={ref} className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                                                                                                    {skills.map((skillSet, index) => (
                                                                                                                        <Card
                                                                                                                                            key={index}
                                                                                                                                            className={`group bg-gradient-to-br from-white to-gray-50 dark:from-slate-900 dark:to-slate-900/50 border-gray-200 dark:border-slate-800 hover:border-purple-500/50 dark:hover:border-purple-500/50 transition-all duration-500 hover:shadow-xl hover:shadow-purple-500/10 hover:-translate-y-2 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'
                                                                                                                                                                }`}
                                                                                                                                            style={{ animationDelay: `${index * 100}ms` }}
                                                                                                                        >
                                                                                                                                            <CardHeader>
                                                                                                                                                                <div className="flex items-center gap-3 mb-2">
                                                                                                                                                                                    <div className={`p-2 rounded-lg bg-gradient-to-br ${categoryColors[skillSet.category]} text-white transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                                                                                                                                                                                                        <span className="text-xl">{categoryIcons[skillSet.category]}</span>
                                                                                                                                                                                    </div>
                                                                                                                                                                                    <CardTitle className="text-lg bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400 bg-clip-text text-transparent">
                                                                                                                                                                                                        {skillSet.category}
                                                                                                                                                                                    </CardTitle>
                                                                                                                                                                </div>
                                                                                                                                            </CardHeader>

                                                                                                                                            <CardContent>
                                                                                                                                                                <ul className="space-y-3">
                                                                                                                                                                                    {skillSet.items.map((skill, i) => (
                                                                                                                                                                                                        <li
                                                                                                                                                                                                                            key={i}
                                                                                                                                                                                                                            className="flex items-center gap-2 text-gray-700 dark:text-slate-300 group/item hover:text-purple-600 dark:hover:text-purple-400 transition-all duration-200 cursor-default"
                                                                                                                                                                                                                            style={{ animationDelay: `${i * 50}ms` }}
                                                                                                                                                                                                        >
                                                                                                                                                                                                                            <ChevronRight className="h-4 w-4 text-purple-600 dark:text-purple-400 group-hover/item:translate-x-1 transition-transform flex-shrink-0" />
                                                                                                                                                                                                                            <span className="group-hover/item:translate-x-1 transition-transform">{skill}</span>
                                                                                                                                                                                                        </li>
                                                                                                                                                                                    ))}
                                                                                                                                                                </ul>
                                                                                                                                            </CardContent>
                                                                                                                        </Card>
                                                                                                    ))}
                                                                                </div>

                                                                                {/* Bottom CTA */}
                                                                                <div className={`mt-12 text-center ${isVisible ? 'animate-fade-in-up delay-400' : 'opacity-0'}`}>
                                                                                                    <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900/20 dark:to-pink-900/20 rounded-full border border-purple-200 dark:border-purple-800/50">
                                                                                                                        <Zap className="h-5 w-5 text-purple-600 dark:text-purple-400 animate-pulse" />
                                                                                                                        <span className="text-gray-700 dark:text-gray-300">Always learning and exploring new technologies</span>
                                                                                                    </div>
                                                                                </div>
                                                            </div>
                                        </section>
                    );
}
