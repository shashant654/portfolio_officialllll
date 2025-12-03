import { Mail, Linkedin, Github } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export default function Contact() {
                    return (
                                        <section id="contact" className="py-20 px-4 bg-slate-900/50">
                                                            <div className="max-w-3xl mx-auto text-center">
                                                                                <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                                                                                                    Let's Work Together
                                                                                </h2>
                                                                                <p className="text-xl text-slate-300 mb-12">
                                                                                                    I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
                                                                                </p>
                                                                                <div className="grid md:grid-cols-3 gap-6 mb-12">
                                                                                                    <Card className="bg-slate-800/50 border-slate-700">
                                                                                                                        <CardContent className="pt-6 text-center">
                                                                                                                                            <Mail className="h-8 w-8 text-purple-400 mx-auto mb-3" />
                                                                                                                                            <p className="text-slate-300">john.doe@example.com</p>
                                                                                                                        </CardContent>
                                                                                                    </Card>
                                                                                                    <Card className="bg-slate-800/50 border-slate-700">
                                                                                                                        <CardContent className="pt-6 text-center">
                                                                                                                                            <Linkedin className="h-8 w-8 text-purple-400 mx-auto mb-3" />
                                                                                                                                            <p className="text-slate-300">linkedin.com/in/johndoe</p>
                                                                                                                        </CardContent>
                                                                                                    </Card>
                                                                                                    <Card className="bg-slate-800/50 border-slate-700">
                                                                                                                        <CardContent className="pt-6 text-center">
                                                                                                                                            <Github className="h-8 w-8 text-purple-400 mx-auto mb-3" />
                                                                                                                                            <p className="text-slate-300">github.com/johndoe</p>
                                                                                                                        </CardContent>
                                                                                                    </Card>
                                                                                </div>
                                                                                <Button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-8 py-6 text-lg">
                                                                                                    Get In Touch
                                                                                                    <Mail className="ml-2 h-5 w-5" />
                                                                                </Button>
                                                            </div>
                                        </section>
                    );
}
