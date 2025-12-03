import { Menu, X, Moon, Sun } from 'lucide-react';

interface NavigationProps {
                    scrolled: boolean;
                    activeSection: string;
                    isMenuOpen: boolean;
                    onMenuToggle: () => void;
                    onNavigate: (section: string) => void;
                    isDark: boolean;
                    onToggleDark: () => void;
}

export default function Navigation({
                    scrolled,
                    activeSection,
                    isMenuOpen,
                    onMenuToggle,
                    onNavigate,
                    isDark,
                    onToggleDark
}: NavigationProps) {
                    const navItems = ['home', 'about', 'projects', 'skills', 'experience', 'contact'];

                    return (
                                        <nav className={`fixed top-0 w-full z-50 transition-all duration-500 animate-fade-in-down ${scrolled
                                                                                ? 'bg-white/80 dark:bg-slate-900/95 backdrop-blur-lg shadow-lg border-b border-gray-200/50 dark:border-slate-800/50'
                                                                                : 'bg-transparent'
                                                            }`}>
                                                            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                                                                                <div className="flex justify-between items-center h-16">
                                                                                                    {/* Logo */}
                                                                                                    <div className="text-2xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 dark:from-purple-400 dark:via-pink-400 dark:to-purple-400 bg-clip-text text-transparent animate-gradient bg-[length:200%_auto] hover:scale-105 transition-transform cursor-pointer">
                                                                                                                        Portfolio
                                                                                                    </div>

                                                                                                    {/* Desktop Menu */}
                                                                                                    <div className="hidden md:flex items-center space-x-8">
                                                                                                                        {navItems.map((item, index) => (
                                                                                                                                            <button
                                                                                                                                                                key={item}
                                                                                                                                                                onClick={() => onNavigate(item)}
                                                                                                                                                                className={`capitalize relative group transition-all duration-300 animate-fade-in delay-${index * 100} ${activeSection === item
                                                                                                                                                                                                        ? 'text-purple-600 dark:text-purple-400 font-semibold'
                                                                                                                                                                                                        : 'text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400'
                                                                                                                                                                                    }`}
                                                                                                                                            >
                                                                                                                                                                {item}
                                                                                                                                                                <span className={`absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400 transform origin-left transition-transform duration-300 ${activeSection === item ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                                                                                                                                                                                    }`}></span>
                                                                                                                                            </button>
                                                                                                                        ))}

                                                                                                                        {/* Dark Mode Toggle */}
                                                                                                                        <button
                                                                                                                                            onClick={onToggleDark}
                                                                                                                                            className="p-2 rounded-full bg-gray-200/80 dark:bg-slate-800/80 hover:bg-gray-300 dark:hover:bg-slate-700 transition-all duration-300 hover:scale-110 hover:rotate-12 group animate-fade-in delay-600"
                                                                                                                                            aria-label="Toggle dark mode"
                                                                                                                        >
                                                                                                                                            {isDark ? (
                                                                                                                                                                <Sun className="h-5 w-5 text-yellow-500 group-hover:rotate-180 transition-transform duration-500" />
                                                                                                                                            ) : (
                                                                                                                                                                <Moon className="h-5 w-5 text-slate-700 group-hover:-rotate-12 transition-transform duration-500" />
                                                                                                                                            )}
                                                                                                                        </button>
                                                                                                    </div>

                                                                                                    {/* Mobile Menu Button & Dark Mode */}
                                                                                                    <div className="md:hidden flex items-center gap-3">
                                                                                                                        <button
                                                                                                                                            onClick={onToggleDark}
                                                                                                                                            className="p-2 rounded-full bg-gray-200/80 dark:bg-slate-800/80 hover:bg-gray-300 dark:hover:bg-slate-700 transition-all duration-300"
                                                                                                                                            aria-label="Toggle dark mode"
                                                                                                                        >
                                                                                                                                            {isDark ? (
                                                                                                                                                                <Sun className="h-5 w-5 text-yellow-500" />
                                                                                                                                            ) : (
                                                                                                                                                                <Moon className="h-5 w-5 text-slate-700 dark:text-gray-300" />
                                                                                                                                            )}
                                                                                                                        </button>
                                                                                                                        <button
                                                                                                                                            className="p-2 hover:bg-gray-200 dark:hover:bg-slate-800 rounded-lg transition-colors"
                                                                                                                                            onClick={onMenuToggle}
                                                                                                                        >
                                                                                                                                            {isMenuOpen ? (
                                                                                                                                                                <X className="h-6 w-6 text-gray-800 dark:text-gray-200" />
                                                                                                                                            ) : (
                                                                                                                                                                <Menu className="h-6 w-6 text-gray-800 dark:text-gray-200" />
                                                                                                                                            )}
                                                                                                                        </button>
                                                                                                    </div>
                                                                                </div>
                                                            </div>

                                                            {/* Mobile Menu */}
                                                            {isMenuOpen && (
                                                                                <div className="md:hidden bg-white/95 dark:bg-slate-900/95 backdrop-blur-lg border-t border-gray-200 dark:border-slate-800 animate-fade-in-down">
                                                                                                    <div className="px-2 pt-2 pb-3 space-y-1">
                                                                                                                        {navItems.map((item, index) => (
                                                                                                                                            <button
                                                                                                                                                                key={item}
                                                                                                                                                                onClick={() => onNavigate(item)}
                                                                                                                                                                className={`block w-full text-left px-4 py-3 capitalize rounded-lg transition-all duration-300 animate-fade-in-left delay-${index * 100} ${activeSection === item
                                                                                                                                                                                                        ? 'bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 font-semibold'
                                                                                                                                                                                                        : 'hover:bg-gray-100 dark:hover:bg-slate-800 text-gray-700 dark:text-gray-300'
                                                                                                                                                                                    }`}
                                                                                                                                            >
                                                                                                                                                                {item}
                                                                                                                                            </button>
                                                                                                                        ))}
                                                                                                    </div>
                                                                                </div>
                                                            )}
                                        </nav>
                    );
}
