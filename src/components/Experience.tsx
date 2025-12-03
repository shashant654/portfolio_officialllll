import { Briefcase, Calendar, MapPin } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { experience } from '@/data/experience';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export default function Experience() {
                    const { ref, isVisible } = useScrollReveal();

                    return (
                                        <section id="experience" className="py-20 px-4 bg-gradient-to-b from-gray-50 to-white dark:from-slate-900 dark:to-slate-950 relative overflow-hidden">
                                                            {/* Background decoration */}
                                                            <div className="absolute top-20 right-0 w-96 h-96 bg-blue-200 dark:bg-blue-900/20 rounded-full filter blur-3xl opacity-20 animate-pulse"></div>

                                                            <div className="max-w-7xl mx-auto relative z-10">
                                                                                <div className="text-center mb-12 animate-fade-in-up">
                                                                                                    <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400 bg-clip-text text-transparent">
                                                                                                                        Work Experience
                                                                                                    </h2>
                                                                                                    <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                                                                                                                        My professional journey and career milestones
                                                                                                    </p>
                                                                                </div>

                                                                                <div ref={ref} className="relative">
                                                                                                    {/* Timeline line */}
                                                                                                    <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-600 via-pink-600 to-purple-600 dark:from-purple-400 dark:via-pink-400 dark:to-purple-400 transform -translate-x-1/2"></div>

                                                                                                    <div className="space-y-12">
                                                                                                                        {experience.map((job, index) => (
                                                                                                                                            <div
                                                                                                                                                                key={index}
                                                                                                                                                                className={`relative ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12 md:ml-auto'
                                                                                                                                                                                    } md:w-1/2`}
                                                                                                                                            >
                                                                                                                                                                {/* Timeline dot */}
                                                                                                                                                                <div className="hidden md:block absolute top-8 w-4 h-4 bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400 rounded-full shadow-lg animate-pulse"
                                                                                                                                                                                    style={{
                                                                                                                                                                                                        [index % 2 === 0 ? 'right' : 'left']: '-2.5rem'
                                                                                                                                                                                    }}
                                                                                                                                                                >
                                                                                                                                                                                    <div className="absolute inset-0 rounded-full bg-purple-600 dark:bg-purple-400 animate-ping opacity-75"></div>
                                                                                                                                                                </div>

                                                                                                                                                                <Card
                                                                                                                                                                                    className={`group bg-white dark:bg-slate-900 border-gray-200 dark:border-slate-800 hover:border-purple-500/50 dark:hover:border-purple-500/50 transition-all duration-500 hover:shadow-xl hover:shadow-purple-500/10 ${isVisible ? (index % 2 === 0 ? 'animate-fade-in-right' : 'animate-fade-in-left') : 'opacity-0'
                                                                                                                                                                                                        }`}
                                                                                                                                                                                    style={{ animationDelay: `${index * 150}ms` }}
                                                                                                                                                                >
                                                                                                                                                                                    <CardHeader>
                                                                                                                                                                                                        <div className="flex items-start justify-between mb-2">
                                                                                                                                                                                                                            <div className="p-3 bg-gradient-to-br from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30 rounded-lg group-hover:scale-110 transition-transform duration-300">
                                                                                                                                                                                                                                                <Briefcase className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                                                                                                                                                                                                                            </div>
                                                                                                                                                                                                                            <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 bg-gray-100 dark:bg-slate-800 px-3 py-1 rounded-full">
                                                                                                                                                                                                                                                <Calendar className="h-4 w-4" />
                                                                                                                                                                                                                                                {job.period}
                                                                                                                                                                                                                            </div>
                                                                                                                                                                                                        </div>
                                                                                                                                                                                                        <CardTitle className="text-xl text-gray-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                                                                                                                                                                                                                            {job.title}
                                                                                                                                                                                                        </CardTitle>
                                                                                                                                                                                                        <CardDescription className="flex items-center gap-2 text-purple-600 dark:text-purple-400 font-medium">
                                                                                                                                                                                                                            <MapPin className="h-4 w-4" />
                                                                                                                                                                                                                            {job.company}
                                                                                                                                                                                                        </CardDescription>
                                                                                                                                                                                    </CardHeader>

                                                                                                                                                                                    <CardContent>
                                                                                                                                                                                                        <p className="text-gray-700 dark:text-slate-300 leading-relaxed">
                                                                                                                                                                                                                            {job.description}
                                                                                                                                                                                                        </p>
                                                                                                                                                                                    </CardContent>
                                                                                                                                                                </Card>
                                                                                                                                            </div>
                                                                                                                        ))}
                                                                                                    </div>
                                                                                </div>
                                                            </div>
                                        </section>
                    );
}
