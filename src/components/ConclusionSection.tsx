'use client';

import { useEffect, useRef, useState } from 'react';

export default function ConclusionSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const takeaways = [
    {
      icon: '🖌️',
      title: '艺术创作',
      description: '注重"意"与"韵"的表达，追求"形神兼备"的艺术境界',
    },
    {
      icon: '🏡',
      title: '日常生活',
      description: '倡导"风雅处处是平常"的生活美学，将艺术融入生活',
    },
    {
      icon: '🔄',
      title: '文化创新',
      description: '探索传统美学的现代转译，让古老美学在新时代焕发光芒',
    },
  ];

  return (
    <section 
      id="conclusion" 
      ref={sectionRef}
      className="relative py-32 bg-background"
    >
      {/* 背景装饰 */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-96 bg-gradient-to-b from-[var(--celadon)]/5 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-96 bg-gradient-to-t from-[var(--vermilion)]/5 to-transparent" />
      </div>

      <div className="relative max-w-5xl mx-auto px-6">
        {/* 结语标题 */}
        <div 
          className={`
            text-center mb-20 transition-all duration-1000
            ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
          `}
        >
          <span className="text-sm tracking-widest text-[var(--celadon)] mb-4 block">
            结语
          </span>
          <h2 className="text-4xl md:text-5xl font-inscription text-foreground mb-6">
            宋韵美学的当代价值与传承
          </h2>
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-[var(--celadon)] to-transparent mx-auto" />
        </div>

        {/* 主要结论 */}
        <div 
          className={`
            mb-16 transition-all duration-1000 delay-300
            ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
          `}
        >
          <div className="prose prose-lg max-w-none text-center">
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              宋代美学以其独特的哲学基础、艺术表现与生活实践，
              <br className="hidden md:block" />
              成为中国文化史上的重要高峰，其影响跨越时空，
              <br className="hidden md:block" />
              至今仍在当代社会中发挥着重要作用。
            </p>

            <blockquote className="border-l-4 border-[var(--vermilion)]/50 pl-6 my-12 italic text-foreground">
              <p className="text-xl leading-relaxed">
                当我们重拾点茶的仪式感，在居所布置中感悟留白的智慧，
                <br className="hidden md:block" />
                在日常用器中品赏简约的清雅，在山水行走中体味&quot;可游可居&quot;的意境时，
                <br className="hidden md:block" />
                一种兼具历史底蕴与时代精神的现代生活新美学，
                <br className="hidden md:block" />
                正在&quot;风雅处处是平常&quot;的转化中渐渐显影。
              </p>
            </blockquote>
          </div>
        </div>

        {/* 三个实践方向 */}
        <div 
          className={`
            grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 transition-all duration-1000 delay-500
            ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
          `}
        >
          {takeaways.map((item, index) => (
            <div 
              key={index}
              className="text-center p-6 bg-card/50 rounded-lg border border-border/50"
            >
              <span className="text-4xl mb-4 block">{item.icon}</span>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* 最终寄语 */}
        <div 
          className={`
            text-center transition-all duration-1000 delay-700
            ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
          `}
        >
          <p className="text-xl text-foreground leading-relaxed font-inscription">
            宋代美学是中国文化宝库中的瑰宝，
            <br className="hidden md:block" />
            值得我们继续挖掘、传承与创新，
            <br className="hidden md:block" />
            让这一古老而年轻的美学体系，
            <br className="hidden md:block" />
            在新时代焕发出更加璀璨的光芒。
          </p>

          {/* 装饰 */}
          <div className="mt-12">
            <span className="block w-16 h-px bg-[var(--celadon)] mx-auto mb-4" />
            <span className="block w-8 h-px bg-[var(--vermilion)] mx-auto" />
          </div>
        </div>
      </div>
    </section>
  );
}
