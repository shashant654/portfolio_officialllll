import { Code, Briefcase, User, Award } from 'lucide-react';

export default function About() {
                    return (
                                        <section id="about" className="py-20 px-4">
                                                            <div className="max-w-7xl mx-auto">
                                                                                <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                                                                                                    About Me
                                                                                </h2>
                                                                                <div className="grid md:grid-cols-2 gap-12 items-center">
                                                                                                    <div>
                                                                                                                        <p className="text-lg text-slate-300 mb-6 leading-relaxed">
                                                                                                                                            I'm a passionate full-stack developer with over 6 years of experience building web applications that make a difference. I specialize in creating seamless user experiences backed by robust, scalable architectures.
                                                                                                                        </p>
                                                                                                                        <p className="text-lg text-slate-300 mb-6 leading-relaxed">
                                                                                                                                            My journey in tech started with a curiosity about how websites work, and it has evolved into a deep passion for solving complex problems and building products that users love.
                                                                                                                        </p>
                                                                                                                        <div className="flex flex-wrap gap-4">
                                                                                                                                            <div className="flex items-center gap-2 bg-slate-800 px-4 py-2 rounded-full">
                                                                                                                                                                <Code className="h-5 w-5 text-purple-400" />
                                                                                                                                                                <span>6+ Years Experience</span>
                                                                                                                                            </div>
                                                                                                                                            <div className="flex items-center gap-2 bg-slate-800 px-4 py-2 rounded-full">
                                                                                                                                                                <Briefcase className="h-5 w-5 text-purple-400" />
                                                                                                                                                                <span>50+ Projects Completed</span>
                                                                                                                                            </div>
                                                                                                                                            <div className="flex items-center gap-2 bg-slate-800 px-4 py-2 rounded-full">
                                                                                                                                                                <Award className="h-5 w-5 text-purple-400" />
                                                                                                                                                                <span>15+ Happy Clients</span>
                                                                                                                                            </div>
                                                                                                                        </div>
                                                                                                    </div>
                                                                                                    <div className="relative">
                                                                                                                        <div className="aspect-square rounded-2xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-sm border border-purple-500/20 flex items-center justify-center">
                                                                                                                                            <User className="h-48 w-48 text-purple-400/30" />
                                                                                                                        </div>
                                                                                                    </div>
                                                                                </div>
                                                            </div>
                                        </section>
                    );
}
