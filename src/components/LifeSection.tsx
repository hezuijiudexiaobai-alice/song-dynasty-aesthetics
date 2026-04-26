'use client';

import { useEffect, useRef, useState } from 'react';

const lifeArts = [
  {
    id: 'incense',
    title: '焚香',
    subtitle: '隔火熏香的仪式感与哲学内涵',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
      </svg>
    ),
    points: [
      '宋代焚香追求"香清烟少"的意境',
      '发展出"隔火熏香"的方法，达到"有香无烟"的雅致效果',
      '文人墨客通过品香、颂香，表达对精神境界的追求',
      '陆游："棐几砚涵鸲鹆眼，古奁香斮鹧鸪斑"',
    ],
    quote: '香清烟少，意境悠远',
  },
  {
    id: 'tea',
    title: '点茶',
    subtitle: '建盏与茶沫的辩证美学',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
    points: [
      '建窑黑釉茶盏以"青黑釉+玉毫纹"为美学标准',
      '黑釉是"隐"的体现，窑变纹样是"显"的表达',
      '"茶百戏"通过茶筅击拂形成各种图案',
      '白色茶沫在黑色背景上形成鲜明对比',
    ],
    quote: '隐显相生，茶韵悠长',
  },
  {
    id: 'flower',
    title: '插花',
    subtitle: '季节变化与器物选择的审美哲学',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
    points: [
      '讲究"以器应时"，秋冬用铜，春夏用磁',
      '从士大夫阶层逐渐普及到市井百姓',
      '追求"平淡中含至味"的审美境界',
      '注重花材的自然状态与季节变化',
    ],
    quote: '平淡中含至味，自然之美',
  },
  {
    id: 'clothing',
    title: '服饰与装饰',
    subtitle: '日常生活的美学表达',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
      </svg>
    ),
    points: [
      '服饰色彩进行"减法"，以青白为主色调',
      '南宋官服简化为三种：紫色、绯色、绿色',
      '体现"绚烂之极归于平淡"的美学追求',
      '建筑装饰注重虚实对比，"彻上明造"',
    ],
    quote: '绚烂之极，归于平淡',
  },
];

function LifeArtCard({ 
  art, 
  index, 
  isVisible 
}: { 
  art: typeof lifeArts[0]; 
  index: number;
  isVisible: boolean;
}) {
  return (
    <div 
      className={`
        relative group transition-all duration-1000
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}
      `}
      style={{ transitionDelay: `${index * 200}ms` }}
    >
      {/* 卡片背景 */}
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--celadon)]/5 via-transparent to-[var(--vermilion)]/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* 序号装饰 */}
      <div className="absolute top-4 right-4 font-inscription text-4xl text-[var(--celadon)]/10">
        {String(index + 1).padStart(2, '0')}
      </div>

      <div className="relative p-8">
        {/* 图标 */}
        <div className="mb-6 text-[var(--celadon)]">
          {art.icon}
        </div>

        {/* 标题 */}
        <h3 className="text-2xl font-semibold text-foreground mb-2">
          {art.title}
        </h3>
        <p className="text-sm text-[var(--celadon)] mb-6">
          {art.subtitle}
        </p>

        {/* 要点列表 */}
        <ul className="space-y-3 mb-6">
          {art.points.map((point, i) => (
            <li 
              key={i}
              className="flex items-start gap-3 text-sm text-muted-foreground"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--celadon)] mt-2 flex-shrink-0" />
              {point}
            </li>
          ))}
        </ul>

        {/* 引言 */}
        <blockquote className="border-l-2 border-[var(--vermilion)]/30 pl-4 italic text-sm text-muted-foreground">
          {art.quote}
        </blockquote>
      </div>

      {/* 底部装饰 */}
      <div className="absolute bottom-0 left-8 right-8 h-px bg-gradient-to-r from-[var(--celadon)]/20 via-[var(--vermilion)]/20 to-transparent" />
    </div>
  );
}

export default function LifeSection() {
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
      id="life" 
      ref={sectionRef}
      className="relative py-32 bg-background"
    >
      {/* 背景装饰 */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/3 left-0 w-full h-96 bg-gradient-to-b from-[var(--celadon)]/5 via-transparent to-transparent" />
        <div className="absolute bottom-0 right-0 w-1/3 h-96 bg-gradient-to-l from-[var(--vermilion)]/5 to-transparent" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        {/* 章节标题 */}
        <div 
          className={`
            text-center mb-20 transition-all duration-1000
            ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
          `}
        >
          <span className="text-sm tracking-widest text-[var(--celadon)] mb-4 block">
            第三章
          </span>
          <h2 className="text-4xl md:text-5xl font-inscription text-foreground mb-6">
            生活美学
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            雅俗交融的日常美学实践
          </p>
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-[var(--celadon)] to-transparent mx-auto mt-8" />
        </div>

        {/* 生活四艺介绍 */}
        <div 
          className={`
            mb-16 p-8 bg-card/50 rounded-xl border border-border/50 text-center
            transition-all duration-1000 delay-300
            ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
          `}
        >
          <h3 className="text-2xl font-inscription text-foreground mb-4">
            宋代&quot;生活四艺&quot;
          </h3>
          <p className="text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            宋代美学的最大特色之一，是实现了&quot;生活艺术化&quot;与&quot;艺术生活化&quot;的双向融通，
            <br className="hidden md:block" />
            形成了独特的&quot;生活四艺&quot;——焚香、点茶、挂画、插花，
            <br className="hidden md:block" />
            将艺术精神拓展到日常生活的各个层面。
          </p>
        </div>

        {/* 四艺卡片 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {lifeArts.map((art, index) => (
            <LifeArtCard 
              key={art.id} 
              art={art} 
              index={index}
              isVisible={isVisible}
            />
          ))}
        </div>

        {/* 雅俗交融引言 */}
        <div 
          className={`
            mt-20 text-center transition-all duration-1000 delay-700
            ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
          `}
        >
          <blockquote className="text-lg italic text-muted-foreground max-w-3xl mx-auto">
            宋代&quot;生活四艺&quot;从文人书斋走向市井茶坊，
            <br className="hidden md:block" />
            这种雅俗交融的美学实践，使宋代艺术打破了阶层的界限，
            <br className="hidden md:block" />
            成为全民共享的文化资源。
          </blockquote>
        </div>
      </div>
    </section>
  );
}
