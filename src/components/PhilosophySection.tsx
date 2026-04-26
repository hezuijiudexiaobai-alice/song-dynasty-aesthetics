'use client';

import { useEffect, useRef, useState } from 'react';

const philosophyPoints = [
  {
    title: '格物致知',
    subtitle: '从观察到感悟的理性升华',
    description: '宋明理学的核心思想，强调通过对自然事物的观察探究，达到对天理的把握。深刻影响了宋代艺术创作中的写实传统与观察精神。',
    details: [
      { name: '周敦颐', work: '太极图说', concept: '虚实相生' },
      { name: '张载', work: '气本论', concept: '一物两体' },
      { name: '邵雍', work: '皇极经世', concept: '象数理' },
    ],
    quote: '太极动静而生阴阳，一阴一阳之谓道。',
  },
  {
    title: '识仁与天人合一',
    subtitle: '文人精神的哲学基础',
    description: '源于程颢的"识仁"说，强调人与自然的和谐统一。这一思想为宋代文人艺术提供了哲学基础。',
    details: [
      { name: '程颢', work: '识仁篇', concept: '浑然与物同体' },
      { name: '朱熹', work: '天人协调论', concept: '赞天地之化育' },
    ],
    quote: '仁者浑然与物同体。',
  },
  {
    title: '禅宗与道家',
    subtitle: '极简美学的精神源头',
    description: '宋代美学中的极简特质，与禅宗和道家的思想密切相关。禅宗的"空灵"与道家的"道法自然"共同塑造了宋代美学的独特气质。',
    details: [
      { name: '禅宗', work: '空灵思想', concept: '内心澄明与超越' },
      { name: '道家', work: '道法自然', concept: '残缺之美' },
    ],
    quote: '道法自然，天地有大美而不言。',
  },
];

function PhilosophyCard({ 
  point, 
  index, 
  isVisible 
}: { 
  point: typeof philosophyPoints[0]; 
  index: number;
  isVisible: boolean;
}) {
  return (
    <div 
      className={`
        relative group transition-all duration-1000 delay-${index * 200}
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}
      `}
    >
      {/* 卡片背景 */}
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--celadon)]/5 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* 序号 */}
      <div className="absolute -left-4 top-0 font-inscription text-6xl text-[var(--celadon)]/10">
        {String(index + 1).padStart(2, '0')}
      </div>

      <div className="relative pl-8 pb-12">
        {/* 标题 */}
        <h3 className="text-2xl font-semibold text-foreground mb-2">
          {point.title}
        </h3>
        <p className="text-sm text-[var(--celadon)] mb-4">
          {point.subtitle}
        </p>

        {/* 描述 */}
        <p className="text-muted-foreground leading-relaxed mb-6">
          {point.description}
        </p>

        {/* 详细信息 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          {point.details.map((detail, i) => (
            <div 
              key={i}
              className="p-4 bg-card/50 rounded-md border border-border/50"
            >
              <p className="font-medium text-sm mb-1">{detail.name}</p>
              <p className="text-xs text-muted-foreground mb-2">{detail.work}</p>
              <p className="text-xs text-[var(--vermilion)]">{detail.concept}</p>
            </div>
          ))}
        </div>

        {/* 引言 */}
        <blockquote className="border-l-2 border-[var(--vermilion)]/30 pl-4 italic text-sm text-muted-foreground">
          {point.quote}
        </blockquote>
      </div>

      {/* 分隔线 */}
      {index < philosophyPoints.length - 1 && (
        <div className="absolute bottom-0 left-8 right-0 h-px bg-gradient-to-r from-border via-[var(--celadon)]/20 to-transparent" />
      )}
    </div>
  );
}

export default function PhilosophySection() {
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

  return (
    <section 
      id="philosophy" 
      ref={sectionRef}
      className="relative py-32 bg-background"
    >
      {/* 背景装饰 */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 right-0 w-1/3 h-96 bg-gradient-to-l from-[var(--celadon)]/5 to-transparent" />
      </div>

      <div className="relative max-w-6xl mx-auto px-6">
        {/* 章节标题 */}
        <div 
          className={`
            text-center mb-20 transition-all duration-1000
            ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
          `}
        >
          <span className="text-sm tracking-widest text-[var(--celadon)] mb-4 block">
            第一章
          </span>
          <h2 className="text-4xl md:text-5xl font-inscription text-foreground mb-6">
            哲学根基
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            儒释道融合下的美学思想体系
          </p>
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-[var(--celadon)] to-transparent mx-auto mt-8" />
        </div>

        {/* 内容 */}
        <div className="space-y-16">
          {philosophyPoints.map((point, index) => (
            <PhilosophyCard 
              key={point.title} 
              point={point} 
              index={index}
              isVisible={isVisible}
            />
          ))}
        </div>

        {/* 总结 */}
        <div 
          className={`
            mt-20 p-8 bg-card/50 rounded-lg border border-border/50 text-center
            transition-all duration-1000 delay-1000
            ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
          `}
        >
          <p className="text-lg leading-relaxed text-muted-foreground">
            宋代美学的哲学基础呈现出&quot;格物致知&quot;与&quot;天人合一&quot;、
            <br className="hidden md:block" />
            &quot;理性&quot;与&quot;感性&quot;、&quot;道家自然观&quot;与&quot;禅宗空灵观&quot;的多元融合，
            <br className="hidden md:block" />
            这种融合不仅为宋代艺术提供了深厚的思想土壤，
            <br className="hidden md:block" />
            也塑造了宋代美学独特的审美特质。
          </p>
        </div>
      </div>
    </section>
  );
}
