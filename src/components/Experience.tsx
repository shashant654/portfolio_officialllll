import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { experience } from '@/data/experience';

export default function Experience() {
                    return (
                                        <section id="experience" className="py-20 px-4 bg-slate-900/50">
                                                            <div className="max-w-7xl mx-auto">
                                                                                <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                                                                                                    Work Experience
                                                                                </h2>
                                                                                <div className="space-y-8">
                                                                                                    {experience.map((job, index) => (
                                                                                                                        <Card key={index} className="bg-slate-800/50 border-slate-700 hover:border-purple-500/50 transition-all">
                                                                                                                                            <CardHeader>
                                                                                                                                                                <CardTitle className="text-white">{job.title}</CardTitle>
                                                                                                                                                                <CardDescription className="text-purple-400">
                                                                                                                                                                                    {job.company} • {job.period}
                                                                                                                                                                </CardDescription>
                                                                                                                                            </CardHeader>
                                                                                                                                            <CardContent>
                                                                                                                                                                <p className="text-slate-300">{job.description}</p>
                                                                                                                                            </CardContent>
                                                                                                                        </Card>
                                                                                                    ))}
                                                                                </div>
                                                            </div>
                                        </section>
                    );
}
