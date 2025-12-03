import { Menu, X } from 'lucide-react';

interface NavigationProps {
                    scrolled: boolean;
                    activeSection: string;
                    isMenuOpen: boolean;
                    onMenuToggle: () => void;
                    onNavigate: (section: string) => void;
}

export default function Navigation({
                    scrolled,
                    activeSection,
                    isMenuOpen,
                    onMenuToggle,
                    onNavigate
}: NavigationProps) {
                    const navItems = ['home', 'about', 'projects', 'skills', 'experience', 'contact'];

                    return (
                                        <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-slate-900/95 backdrop-blur-lg shadow-lg' : 'bg-transparent'}`}>
                                                            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                                                                                <div className="flex justify-between items-center h-16">
                                                                                                    <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                                                                                                                        Portfolio
                                                                                                    </div>

                                                                                                    {/* Desktop Menu */}
                                                                                                    <div className="hidden md:flex space-x-8">
                                                                                                                        {navItems.map((item) => (
                                                                                                                                            <button
                                                                                                                                                                key={item}
                                                                                                                                                                onClick={() => onNavigate(item)}
                                                                                                                                                                className={`capitalize hover:text-purple-400 transition-colors ${activeSection === item ? 'text-purple-400' : ''}`}
                                                                                                                                            >
                                                                                                                                                                {item}
                                                                                                                                            </button>
                                                                                                                        ))}
                                                                                                    </div>

                                                                                                    {/* Mobile Menu Button */}
                                                                                                    <button className="md:hidden" onClick={onMenuToggle}>
                                                                                                                        {isMenuOpen ? <X /> : <Menu />}
                                                                                                    </button>
                                                                                </div>
                                                            </div>

                                                            {/* Mobile Menu */}
                                                            {isMenuOpen && (
                                                                                <div className="md:hidden bg-slate-900 border-t border-slate-800">
                                                                                                    <div className="px-2 pt-2 pb-3 space-y-1">
                                                                                                                        {navItems.map((item) => (
                                                                                                                                            <button
                                                                                                                                                                key={item}
                                                                                                                                                                onClick={() => onNavigate(item)}
                                                                                                                                                                className="block w-full text-left px-3 py-2 capitalize hover:bg-slate-800 rounded-md"
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
