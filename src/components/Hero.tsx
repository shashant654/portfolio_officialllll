import { Github, Linkedin, Mail, Download, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface HeroProps {
                    onNavigate: (section: string) => void;
}

export default function Hero({ onNavigate }: HeroProps) {
                    return (
                                        <section id="home" className="min-h-screen flex items-center justify-center pt-16 px-4">
                                                            <div className="max-w-7xl mx-auto text-center">
                                                                                <div className="mb-8">
                                                                                                    <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-5xl font-bold shadow-2xl">
                                                                                                                        JD
                                                                                                    </div>
                                                                                </div>
                                                                                <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent animate-pulse">
                                                                                                    John Doe
                                                                                </h1>
                                                                                <p className="text-xl md:text-2xl text-slate-300 mb-4">Full Stack Developer & UI/UX Enthusiast</p>
                                                                                <p className="text-lg text-slate-400 mb-8 max-w-2xl mx-auto">
                                                                                                    Crafting beautiful, functional, and scalable web applications with modern technologies
                                                                                </p>
                                                                                <div className="flex flex-wrap justify-center gap-4">
                                                                                                    <Button onClick={() => onNavigate('projects')} className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white">
                                                                                                                        View My Work
                                                                                                                        <ChevronRight className="ml-2 h-4 w-4" />
                                                                                                    </Button>
                                                                                                    <Button variant="outline" className="border-purple-500 text-purple-400 hover:bg-purple-500/10">
                                                                                                                        <Download className="mr-2 h-4 w-4" />
                                                                                                                        Download CV
                                                                                                    </Button>
                                                                                </div>
                                                                                <div className="flex justify-center gap-6 mt-8">
                                                                                                    <a href="#" className="text-slate-400 hover:text-purple-400 transition-colors">
                                                                                                                        <Github className="h-6 w-6" />
                                                                                                    </a>
                                                                                                    <a href="#" className="text-slate-400 hover:text-purple-400 transition-colors">
                                                                                                                        <Linkedin className="h-6 w-6" />
                                                                                                    </a>
                                                                                                    <a href="#" className="text-slate-400 hover:text-purple-400 transition-colors">
                                                                                                                        <Mail className="h-6 w-6" />
                                                                                                    </a>
                                                                                </div>
                                                            </div>
                                        </section>
                    );
}
