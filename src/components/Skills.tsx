import { ChevronRight } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { skills } from '@/data/skills';

export default function Skills() {
                    return (
                                        <section id="skills" className="py-20 px-4">
                                                            <div className="max-w-7xl mx-auto">
                                                                                <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                                                                                                    Skills & Expertise
                                                                                </h2>
                                                                                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                                                                                                    {skills.map((skillSet, index) => (
                                                                                                                        <Card key={index} className="bg-slate-800/50 border-slate-700 hover:border-purple-500/50 transition-all">
                                                                                                                                            <CardHeader>
                                                                                                                                                                <CardTitle className="text-purple-400">{skillSet.category}</CardTitle>
                                                                                                                                            </CardHeader>
                                                                                                                                            <CardContent>
                                                                                                                                                                <ul className="space-y-2">
                                                                                                                                                                                    {skillSet.items.map((skill, i) => (
                                                                                                                                                                                                        <li key={i} className="flex items-center gap-2 text-slate-300">
                                                                                                                                                                                                                            <ChevronRight className="h-4 w-4 text-purple-400" />
                                                                                                                                                                                                                            {skill}
                                                                                                                                                                                                        </li>
                                                                                                                                                                                    ))}
                                                                                                                                                                </ul>
                                                                                                                                            </CardContent>
                                                                                                                        </Card>
                                                                                                    ))}
                                                                                </div>
                                                            </div>
                                        </section>
                    );
}
