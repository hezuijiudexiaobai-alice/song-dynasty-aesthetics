'use client';

import { useState, useEffect } from 'react';

const navItems = [
  { id: 'intro', label: '引言', path: '#intro' },
  { id: 'philosophy', label: '哲学根基', path: '#philosophy' },
  { id: 'art', label: '艺术表现', path: '#art' },
  { id: 'life', label: '生活美学', path: '#life' },
  { id: 'modern', label: '现代价值', path: '#modern' },
  { id: 'conclusion', label: '结语', path: '#conclusion' },
];

export default function Navigation() {
  const [activeSection, setActiveSection] = useState('intro');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // 更新活跃章节
      const sections = navItems.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 200;
      
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (path: string) => {
    const element = document.getElementById(path.replace('#', ''));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <nav
      className={`
        fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-out
        ${isScrolled 
          ? 'bg-background/95 backdrop-blur-sm shadow-sm' 
          : 'bg-transparent'}
      `}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <h1 
            className={`
              font-inscription text-2xl tracking-widest transition-colors duration-500
              ${isScrolled ? 'text-foreground' : 'text-foreground/80'}
            `}
          >
            宋韵
          </h1>
          
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.path)}
                className={`
                  relative text-sm tracking-wide transition-all duration-300
                  ${isScrolled ? 'text-muted-foreground' : 'text-foreground/70'}
                  ${activeSection === item.id 
                    ? 'text-foreground font-medium' 
                    : 'hover:text-foreground'}
                `}
              >
                {item.label}
                <span
                  className={`
                    absolute -bottom-1 left-0 h-px bg-current transition-all duration-500
                    ${activeSection === item.id ? 'w-full' : 'w-0'}
                  `}
                />
              </button>
            ))}
          </div>

          {/* 移动端菜单按钮 */}
          <button 
            className="md:hidden"
            onClick={() => {}}
            aria-label="菜单"
          >
            <svg 
              className={`w-6 h-6 ${isScrolled ? 'text-foreground' : 'text-foreground/70'}`}
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={1.5} 
                d="M4 6h16M4 12h16M4 18h16" 
              />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}
