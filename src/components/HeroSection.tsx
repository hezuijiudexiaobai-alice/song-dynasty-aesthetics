'use client';

import { useEffect, useState } from 'react';

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section id="intro" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* 背景装饰 */}
      <div className="absolute inset-0 rice-paper-texture" />
      
      {/* 水墨晕染效果 */}
      <div className="absolute inset-0 overflow-hidden">
        <div 
          className={`
            absolute top-1/4 left-1/4 w-96 h-96 rounded-full opacity-10
            bg-gradient-to-br from-[var(--celadon)] to-transparent
            blur-3xl transform transition-transform duration-[3000ms]
            ${isVisible ? 'translate-y-0 scale-100' : '-translate-y-full scale-50'}
          `}
        />
        <div 
          className={`
            absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full opacity-10
            bg-gradient-to-tl from-[var(--vermilion)] to-transparent
            blur-3xl transform transition-transform duration-[4000ms] delay-500
            ${isVisible ? 'translate-y-0 scale-100' : 'translate-y-full scale-50'}
          `}
        />
      </div>

      {/* 主内容 */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        {/* 标题装饰 */}
        <div 
          className={`
            mb-8 transition-all duration-1000 delay-300
            ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
          `}
        >
          <div className="inline-block">
            <span className="block w-16 h-px bg-[var(--celadon)] mx-auto mb-4" />
            <span className="block w-8 h-px bg-[var(--vermilion)] mx-auto" />
          </div>
        </div>

        {/* 主标题 */}
        <h1 
          className={`
            font-inscription text-5xl md:text-7xl tracking-widest mb-6
            text-foreground transition-all duration-1000 delay-500
            ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
          `}
        >
          宋朝美学
        </h1>

        {/* 副标题 */}
        <p 
          className={`
            text-lg md:text-xl text-muted-foreground mb-12 leading-relaxed
            transition-all duration-1000 delay-700
            ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
          `}
        >
          华夏民族之文化造极于赵宋
        </p>

        {/* 引言 */}
        <blockquote 
          className={`
            max-w-2xl mx-auto text-base md:text-lg leading-loose text-muted-foreground/80
            border-l-2 border-[var(--celadon)]/30 pl-6 italic
            transition-all duration-1000 delay-1000
            ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
          `}
        >
          <p>
            从哲学基础到艺术实践，从宫廷雅集到市井生活，
            <br />
            宋代美学以&quot;格物致知&quot;为起点，以&quot;天人合一&quot;为归宿，
            <br />
            形成了简约自然、淡雅素净、意境深远、形神兼备的独特风格。
          </p>
        </blockquote>

        {/* 装饰 */}
        <div 
          className={`
            mt-16 transition-all duration-1000 delay-1500
            ${isVisible ? 'opacity-100' : 'opacity-0'}
          `}
        >
          <div className="animate-bounce">
            <svg 
              className="w-6 h-6 mx-auto text-[var(--celadon)]"
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={1.5} 
                d="M19 14l-7 7m0 0l-7-7m7 7V3" 
              />
            </svg>
          </div>
        </div>
      </div>

      {/* 底部渐变 */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
