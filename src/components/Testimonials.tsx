import { MessageSquare, Star, Quote } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { testimonials } from '@/data/testimonials';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export default function Testimonials() {
                    const { ref, isVisible } = useScrollReveal();

                    return (
                                        <section className="py-20 px-4 bg-white dark:bg-slate-950 relative overflow-hidden">
                                                            {/* Background decoration */}
                                                            <div className="absolute top-0 left-1/2 w-96 h-96 bg-purple-200 dark:bg-purple-900/20 rounded-full filter blur-3xl opacity-20 -translate-x-1/2"></div>

                                                            <div className="max-w-7xl mx-auto relative z-10">
                                                                                <div className="text-center mb-12 animate-fade-in-up">
                                                                                                    <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400 bg-clip-text text-transparent">
                                                                                                                        Client Testimonials
                                                                                                    </h2>
                                                                                                    <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                                                                                                                        What people say about working with me
                                                                                                    </p>
                                                                                </div>

                                                                                <div ref={ref} className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                                                                                                    {testimonials.map((testimonial, index) => (
                                                                                                                        <Card
                                                                                                                                            key={index}
                                                                                                                                            className={`group bg-gradient-to-br from-white to-purple-50/50 dark:from-slate-900 dark:to-purple-900/10 border-gray-200 dark:border-slate-800 hover:border-purple-500/50 dark:hover:border-purple-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/20 dark:hover:shadow-purple-500/10 hover:-translate-y-2 relative overflow-hidden ${isVisible ? 'animate-scale-in' : 'opacity-0'
                                                                                                                                                                }`}
                                                                                                                                            style={{ animationDelay: `${index * 200}ms` }}
                                                                                                                        >
                                                                                                                                            {/* Decorative quote mark */}
                                                                                                                                            <Quote className="absolute top-4 right-4 h-16 w-16 text-purple-200 dark:text-purple-900/30 transform rotate-12 group-hover:scale-110 group-hover:rotate-0 transition-all duration-500" />

                                                                                                                                            <CardContent className="pt-6 relative z-10">
                                                                                                                                                                {/* Message icon */}
                                                                                                                                                                <div className="mb-4 inline-flex p-3 bg-gradient-to-br from-purple-600 to-pink-600 dark:from-purple-500 dark:to-pink-500 rounded-xl shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                                                                                                                                                                                    <MessageSquare className="h-6 w-6 text-white" />
                                                                                                                                                                </div>

                                                                                                                                                                {/* Stars */}
                                                                                                                                                                <div className="flex gap-1 mb-4">
                                                                                                                                                                                    {[...Array(5)].map((_, i) => (
                                                                                                                                                                                                        <Star
                                                                                                                                                                                                                            key={i}
                                                                                                                                                                                                                            className="h-5 w-5 fill-yellow-400 text-yellow-400 animate-pulse"
                                                                                                                                                                                                                            style={{ animationDelay: `${i * 100}ms` }}
                                                                                                                                                                                                        />
                                                                                                                                                                                    ))}
                                                                                                                                                                </div>

                                                                                                                                                                {/* Testimonial text */}
                                                                                                                                                                <p className="text-gray-700 dark:text-slate-300 mb-6 italic leading-relaxed text-lg">
                                                                                                                                                                                    "{testimonial.text}"
                                                                                                                                                                </p>

                                                                                                                                                                {/* Author info */}
                                                                                                                                                                <div className="flex items-center gap-3 pt-4 border-t border-gray-200 dark:border-slate-800">
                                                                                                                                                                                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400 flex items-center justify-center text-white font-bold shadow-lg group-hover:scale-110 transition-transform">
                                                                                                                                                                                                        {testimonial.name.split(' ').map(n => n[0]).join('')}
                                                                                                                                                                                    </div>
                                                                                                                                                                                    <div>
                                                                                                                                                                                                        <p className="text-gray-900 dark:text-white font-semibold">{testimonial.name}</p>
                                                                                                                                                                                                        <p className="text-gray-600 dark:text-slate-400 text-sm">{testimonial.role}</p>
                                                                                                                                                                                    </div>
                                                                                                                                                                </div>
                                                                                                                                            </CardContent>
                                                                                                                        </Card>
                                                                                                    ))}
                                                                                </div>
                                                            </div>
                                        </section>
                    );
}
