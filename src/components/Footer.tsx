import { Heart, Code2, Sparkles } from 'lucide-react';

export default function Footer() {
                    return (
                                        <footer className="py-8 px-4 border-t border-gray-200 dark:border-slate-800 bg-white dark:bg-slate-950 animate-fade-in">
                                                            <div className="max-w-7xl mx-auto">
                                                                                {/* Main Footer Content */}
                                                                                <div className="text-center space-y-4">
                                                                                                    {/* Brand/Logo */}
                                                                                                    <div className="text-2xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 dark:from-purple-400 dark:via-pink-400 dark:to-purple-400 bg-clip-text text-transparent inline-block animate-gradient bg-[length:200%_auto]">
                                                                                                                        Portfolio
                                                                                                    </div>

                                                                                                    {/* Copyright */}
                                                                                                    <p className="text-gray-600 dark:text-slate-400 flex items-center justify-center gap-2 flex-wrap">
                                                                                                                        <span>© 2024 Shashant Shekhar. All rights reserved.</span>
                                                                                                                        <span className="hidden sm:inline">•</span>
                                                                                                                        <span className="flex items-center gap-1">
                                                                                                                                            Made with <Heart className="h-4 w-4 text-red-500 fill-red-500 animate-pulse" /> and <Code2 className="h-4 w-4 text-purple-600 dark:text-purple-400" />
                                                                                                                        </span>
                                                                                                    </p>

                                                                                                    {/* Tech Stack */}
                                                                                                    <p className="text-sm text-gray-500 dark:text-slate-500 flex items-center justify-center gap-2">
                                                                                                                        <Sparkles className="h-4 w-4 text-yellow-500 animate-pulse" />
                                                                                                                        Built with React, TypeScript, Tailwind CSS & Vite
                                                                                                    </p>
                                                                                </div>

                                                                                {/* Social Links */}
                                                                                <div className="mt-6 flex justify-center gap-4">
                                                                                                    {[
                                                                                                        { name: 'GitHub', url: 'https://github.com/shashant654' },
                                                                                                        { name: 'LinkedIn', url: 'https://www.linkedin.com/in/shashant-shekhar-588a0b20b/' },
                                                                                                        { name: 'Email', url: 'mailto:shashantshekhar10@gmail.com' }
                                                                                                    ].map((social, index) => (
                                                                                                                        <a
                                                                                                                                            key={social.name}
                                                                                                                                            href={social.url}
                                                                                                                                            target="_blank"
                                                                                                                                            rel="noopener noreferrer"
                                                                                                                                            className="text-gray-600 dark:text-slate-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-300 hover:scale-110 inline-block animate-fade-in"
                                                                                                                                            style={{ animationDelay: `${index * 100}ms` }}
                                                                                                                        >
                                                                                                                                            {social.name}
                                                                                                                        </a>
                                                                                                    ))}
                                                                                </div>
                                                            </div>
                                        </footer>
                    );
}
