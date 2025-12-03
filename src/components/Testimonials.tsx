import { MessageSquare } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { testimonials } from '@/data/testimonials';

export default function Testimonials() {
                    return (
                                        <section className="py-20 px-4">
                                                            <div className="max-w-7xl mx-auto">
                                                                                <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                                                                                                    Client Testimonials
                                                                                </h2>
                                                                                <div className="grid md:grid-cols-2 gap-8">
                                                                                                    {testimonials.map((testimonial, index) => (
                                                                                                                        <Card key={index} className="bg-slate-800/50 border-slate-700">
                                                                                                                                            <CardContent className="pt-6">
                                                                                                                                                                <MessageSquare className="h-8 w-8 text-purple-400 mb-4" />
                                                                                                                                                                <p className="text-slate-300 mb-4 italic">"{testimonial.text}"</p>
                                                                                                                                                                <div>
                                                                                                                                                                                    <p className="text-white font-semibold">{testimonial.name}</p>
                                                                                                                                                                                    <p className="text-slate-400 text-sm">{testimonial.role}</p>
                                                                                                                                                                </div>
                                                                                                                                            </CardContent>
                                                                                                                        </Card>
                                                                                                    ))}
                                                                                </div>
                                                            </div>
                                        </section>
                    );
}
