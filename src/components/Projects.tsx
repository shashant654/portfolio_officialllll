import { ExternalLink } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { projects } from '@/data/projects';

export default function Projects() {
                    return (
                                        <section id="projects" className="py-20 px-4 bg-slate-900/50">
                                                            <div className="max-w-7xl mx-auto">
                                                                                <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                                                                                                    Featured Projects
                                                                                </h2>
                                                                                <div className="grid md:grid-cols-2 gap-8">
                                                                                                    {projects.map((project, index) => (
                                                                                                                        <Card key={index} className="bg-slate-800/50 border-slate-700 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105">
                                                                                                                                            <div className={`h-48 ${project.image} rounded-t-lg`}></div>
                                                                                                                                            <CardHeader>
                                                                                                                                                                <CardTitle className="text-white">{project.title}</CardTitle>
                                                                                                                                                                <CardDescription className="text-slate-400">{project.description}</CardDescription>
                                                                                                                                            </CardHeader>
                                                                                                                                            <CardContent>
                                                                                                                                                                <div className="flex flex-wrap gap-2 mb-4">
                                                                                                                                                                                    {project.tech.map((tech, i) => (
                                                                                                                                                                                                        <span key={i} className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm">
                                                                                                                                                                                                                            {tech}
                                                                                                                                                                                                        </span>
                                                                                                                                                                                    ))}
                                                                                                                                                                </div>
                                                                                                                                                                <Button variant="outline" className="w-full border-purple-500 text-purple-400 hover:bg-purple-500/10">
                                                                                                                                                                                    View Project
                                                                                                                                                                                    <ExternalLink className="ml-2 h-4 w-4" />
                                                                                                                                                                </Button>
                                                                                                                                            </CardContent>
                                                                                                                        </Card>
                                                                                                    ))}
                                                                                </div>
                                                            </div>
                                        </section>
                    );
}
