import { Mail, Linkedin, Github, Send, MapPin, Phone } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export default function Contact() {
                    const { ref, isVisible } = useScrollReveal();

                    const contactMethods = [
                                        { icon: Mail, label: 'Email', value: 'shashantshekhar10@gmail.com', color: 'from-red-500 to-pink-500', link: 'mailto:shashantshekhar10@gmail.com' },
                                        { icon: Linkedin, label: 'LinkedIn', value: 'linkedin.com/in/shashant-shekhar-588a0b20b', color: 'from-blue-600 to-blue-400', link: 'https://www.linkedin.com/in/shashant-shekhar-588a0b20b/' },
                                        { icon: Github, label: 'GitHub', value: 'github.com/shashant654', color: 'from-gray-700 to-gray-500', link: 'https://github.com/shashant654' }
                    ];

                    return (
                                        <section id="contact" className="py-20 px-4 bg-gradient-to-b from-gray-50 to-white dark:from-slate-900 dark:to-slate-950 relative overflow-hidden">
                                                            {/* Animated background elements */}
                                                            <div className="absolute top-10 left-10 w-72 h-72 bg-purple-300 dark:bg-purple-600 rounded-full filter blur-3xl opacity-20 animate-float"></div>
                                                            <div className="absolute bottom-10 right-10 w-72 h-72 bg-pink-300 dark:bg-pink-600 rounded-full filter blur-3xl opacity-20 animate-float delay-200"></div>

                                                            <div className="max-w-5xl mx-auto text-center relative z-10">
                                                                                <div className="mb-12 animate-fade-in-up">
                                                                                                    <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 dark:from-purple-400 dark:via-pink-400 dark:to-purple-400 bg-clip-text text-transparent">
                                                                                                                        Let's Work Together
                                                                                                    </h2>
                                                                                                    <p className="text-xl text-gray-600 dark:text-slate-300 mb-4">
                                                                                                                        I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
                                                                                                    </p>
                                                                                                    <p className="text-gray-500 dark:text-gray-400 flex items-center justify-center gap-2">
                                                                                                                        <MapPin className="h-5 w-5" />
                                                                                                                        Available for remote work worldwide
                                                                                                    </p>
                                                                                </div>

                                                                                <div ref={ref} className="grid md:grid-cols-3 gap-6 mb-12">
                                                                                                    {contactMethods.map((method, index) => (
                                                                                                                        <a
                                                                                                                                            key={index}
                                                                                                                                            href={method.link}
                                                                                                                                            target={method.link.startsWith('mailto:') ? undefined : '_blank'}
                                                                                                                                            rel={method.link.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
                                                                                                                                            className="group"
                                                                                                                        >
                                                                                                                                            <Card
                                                                                                                                                                className={`bg-white dark:bg-slate-900 border-gray-200 dark:border-slate-800 hover:border-purple-500/50 dark:hover:border-purple-500/50 transition-all duration-500 hover:shadow-xl hover:shadow-purple-500/20 dark:hover:shadow-purple-500/10 hover:-translate-y-2 cursor-pointer ${isVisible ? 'animate-fade-in-up' : 'opacity-0'
                                                                                                                                                                                }`}
                                                                                                                                                                style={{ animationDelay: `${index * 150}ms` }}
                                                                                                                                            >
                                                                                                                                                                <CardContent className="pt-6 text-center">
                                                                                                                                                                                    <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${method.color} mb-4 shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                                                                                                                                                                                                        <method.icon className="h-8 w-8 text-white" />
                                                                                                                                                                                    </div>
                                                                                                                                                                                    <h3 className="font-semibold text-gray-900 dark:text-white mb-2">{method.label}</h3>
                                                                                                                                                                                    <p className="text-gray-600 dark:text-slate-400 text-sm break-all">{method.value}</p>
                                                                                                                                                                </CardContent>
                                                                                                                                            </Card>
                                                                                                                                        </a>
                                                                                                    ))}
                                                                                </div>

                                                                                {/* CTA Button */}
                                                                                <div className={`${isVisible ? 'animate-scale-in delay-400' : 'opacity-0'}`}>
                                                                                                    <a href="mailto:shashantshekhar10@gmail.com">
                                                                                                        <Button
                                                                                                                            size="lg"
                                                                                                                            className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 dark:from-purple-500 dark:to-pink-500 dark:hover:from-purple-600 dark:hover:to-pink-600 text-white px-8 py-6 text-lg shadow-2xl hover:shadow-purple-500/50 dark:hover:shadow-purple-500/30 hover:scale-105 transition-all duration-300 group relative overflow-hidden"
                                                                                                        >
                                                                                                                            {/* Shimmer effect */}
                                                                                                                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>

                                                                                                                            <span className="relative flex items-center gap-2">
                                                                                                                                                Get In Touch
                                                                                                                                                <Send className="h-5 w-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                                                                                                            </span>
                                                                                                        </Button>
                                                                                                    </a>

                                                                                                    <p className="mt-6 text-gray-600 dark:text-gray-400 flex items-center justify-center gap-2">
                                                                                                                        <Phone className="h-4 w-4 animate-pulse" />
                                                                                                                        Usually responds within 24 hours
                                                                                                    </p>
                                                                                </div>
                                                            </div>
                                        </section>
                    );
}
