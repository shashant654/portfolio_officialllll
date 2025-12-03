import { ExternalLink, ArrowRight } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { projects } from '@/data/projects';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export default function Projects() {
                    const { ref, isVisible } = useScrollReveal();

                    return (
                                        <section id="projects" className="py-20 px-4 bg-gradient-to-b from-gray-50 to-white dark:from-slate-900 dark:to-slate-950 relative overflow-hidden">
                                                            {/* Background decoration */}
                                                            <div className="absolute bottom-0 left-0 w-96 h-96 bg-pink-200 dark:bg-pink-900/20 rounded-full filter blur-3xl opacity-20"></div>

                                                            <div className="max-w-7xl mx-auto relative z-10">
                                                                                <div className="text-center mb-12 animate-fade-in-up">
                                                                                                    <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400 bg-clip-text text-transparent">
                                                                                                                        Featured Projects
                                                                                                    </h2>
                                                                                                    <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                                                                                                                        A showcase of my recent work and personal projects
                                                                                                    </p>
                                                                                </div>

                                                                                <div ref={ref} className="grid md:grid-cols-2 gap-8">
                                                                                                    {projects.map((project, index) => (
                                                                                                                        <Card
                                                                                                                                            key={index}
                                                                                                                                            className={`group bg-white dark:bg-slate-900 border-gray-200 dark:border-slate-800 hover:border-purple-500/50 dark:hover:border-purple-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/20 dark:hover:shadow-purple-500/10 overflow-hidden ${isVisible ? 'animate-fade-in-up' : 'opacity-0'
                                                                                                                                                                }`}
                                                                                                                                            style={{ animationDelay: `${index * 150}ms` }}
                                                                                                                        >
                                                                                                                                            {/* Project Image/Gradient */}
                                                                                                                                            <div className={`h-48 ${project.image} relative overflow-hidden group-hover:scale-105 transition-transform duration-500`}>
                                                                                                                                                                {/* Hover overlay */}
                                                                                                                                                                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                                                                                                                                                                                    <div className="flex gap-3">
                                                                                                                                                                                                        <Button
                                                                                                                                                                                                                            size="sm"
                                                                                                                                                                                                                            variant="secondary"
                                                                                                                                                                                                                            className="bg-white/90 hover:bg-white text-gray-900 shadow-lg backdrop-blur-sm"
                                                                                                                                                                                                        >
                                                                                                                                                                                                                            <ExternalLink className="h-4 w-4 mr-2" />
                                                                                                                                                                                                                            View Live
                                                                                                                                                                                                        </Button>
                                                                                                                                                                                    </div>
                                                                                                                                                                </div>
                                                                                                                                            </div>

                                                                                                                                            <CardHeader>
                                                                                                                                                                <CardTitle className="text-gray-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                                                                                                                                                                                    {project.title}
                                                                                                                                                                </CardTitle>
                                                                                                                                                                <CardDescription className="text-gray-600 dark:text-slate-400">
                                                                                                                                                                                    {project.description}
                                                                                                                                                                </CardDescription>
                                                                                                                                            </CardHeader>

                                                                                                                                            <CardContent>
                                                                                                                                                                {/* Tech Stack */}
                                                                                                                                                                <div className="flex flex-wrap gap-2 mb-4">
                                                                                                                                                                                    {project.tech.map((tech, i) => (
                                                                                                                                                                                                        <span
                                                                                                                                                                                                                            key={i}
                                                                                                                                                                                                                            className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded-full text-sm font-medium hover:scale-110 transition-transform duration-200 cursor-default"
                                                                                                                                                                                                                            style={{ animationDelay: `${i * 50}ms` }}
                                                                                                                                                                                                        >
                                                                                                                                                                                                                            {tech}
                                                                                                                                                                                                        </span>
                                                                                                                                                                                    ))}
                                                                                                                                                                </div>

                                                                                                                                                                {/* View Project Button */}
                                                                                                                                                                <Button
                                                                                                                                                                                    variant="outline"
                                                                                                                                                                                    className="w-full border-purple-600 dark:border-purple-400 text-purple-600 dark:text-purple-400 hover:bg-purple-600 dark:hover:bg-purple-500 hover:text-white dark:hover:text-white group/btn transition-all duration-300"
                                                                                                                                                                >
                                                                                                                                                                                    View Project
                                                                                                                                                                                    <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                                                                                                                                                                </Button>
                                                                                                                                            </CardContent>
                                                                                                                        </Card>
                                                                                                    ))}
                                                                                </div>
                                                            </div>
                                        </section>
                    );
}
