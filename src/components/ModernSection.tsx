'use client';

import { useEffect, useRef, useState } from 'react';

const modernValues = [
  {
    id: 'east-asia',
    title: '东亚影响',
    subtitle: '茶道、花道与禅宗美学的传播',
    points: [
      {
        label: '日本侘寂美学',
        content: '宋代瓷器"残缺即圆满"的辩证美学对日本"侘寂"美学产生了深远影响',
      },
      {
        label: '韩国茶礼',
        content: '韩国传统茶礼深受宋代点茶艺术的影响，强调"和敬清寂"的精神',
      },
    ],
  },
  {
    id: 'western',
    title: '西方影响',
    subtitle: '留白与极简主义的哲学对话',
    points: [
      {
        label: '留白与西方现代艺术',
        content: '宋代山水画中的留白与西方现象学"前对象性背景"的哲学思想存在深刻共鸣',
      },
      {
        label: '极简美学对话',
        content: '宋代艺术追求的"极简"美学与西方现代设计中的极简主义形成了跨时空的对话',
      },
    ],
  },
  {
    id: 'contemporary',
    title: '当代转译',
    subtitle: '从传统到现代的美学创新',
    points: [
      {
        label: '苏州博物馆',
        content: '贝聿铭设计的苏州博物馆，将宋代园林的"简素空灵"美学理念融入现代建筑',
      },
      {
        label: 'AI修复《莲塘乳鸭图》',
        content: '利用人工智能深度学习技术，对宋代缂丝《莲塘乳鸭图》进行了"数字重生"',
      },
      {
        label: '宋代园林生态设计',
        content: '宋代园林的"天人合一"与"因势就成"理念，对当代城市景观设计具有重要借鉴价值',
      },
    ],
  },
  {
    id: 'ecology',
    title: '生态智慧',
    subtitle: '宋代美学的当代启示',
    points: [
      {
        label: '参赞天地化育',
        content: '朱熹提出的"参赞天地化育"理念，强调人应当参与到自然中，友善互动，相互辅助',
      },
      {
        label: '万物静观皆自得',
        content: '宋代文人"万物静观皆自得"的生活态度，强调在静观中发现自然之美与生命之趣',
      },
      {
        label: '格物致知的科学精神',
        content: '沈括《梦溪笔谈》以科学精神剖析艺术规律，体现了宋代艺术与科学的融合',
      },
    ],
  },
];

function ModernValueCard({ 
  value, 
  index, 
  isVisible 
}: { 
  value: typeof modernValues[0]; 
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
      {/* 卡片 */}
      <div className="bg-card/50 rounded-xl border border-border/50 p-8 h-full hover:border-[var(--celadon)]/30 transition-all duration-500">
        {/* 标题 */}
        <div className="mb-6">
          <span className="text-sm text-[var(--celadon)] tracking-widest">
            {String(index + 1).padStart(2, '0')}
          </span>
          <h3 className="text-2xl font-semibold text-foreground mt-2 mb-1">
            {value.title}
          </h3>
          <p className="text-sm text-muted-foreground">
            {value.subtitle}
          </p>
        </div>

        {/* 分隔线 */}
        <div className="h-px bg-gradient-to-r from-[var(--celadon)]/20 via-[var(--vermilion)]/20 to-transparent mb-6" />

        {/* 要点 */}
        <div className="space-y-4">
          {value.points.map((point, i) => (
            <div key={i} className="relative pl-6">
              {/* 装饰点 */}
              <div className="absolute left-0 top-2 w-2 h-2 rounded-full bg-[var(--celadon)]" />
              
              <p className="text-sm font-medium text-foreground mb-1">
                {point.label}
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {point.content}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function ModernSection() {
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
      id="modern" 
      ref={sectionRef}
      className="relative py-32 bg-gradient-to-b from-background via-muted/20 to-background"
    >
      {/* 背景装饰 */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 right-0 w-1/2 h-96 bg-gradient-to-l from-[var(--celadon)]/5 to-transparent" />
        <div className="absolute bottom-1/4 left-0 w-1/3 h-96 bg-gradient-to-r from-[var(--vermilion)]/5 to-transparent" />
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
            第四章
          </span>
          <h2 className="text-4xl md:text-5xl font-inscription text-foreground mb-6">
            现代价值
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            宋代美学的历史影响与现代转译价值
          </p>
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-[var(--celadon)] to-transparent mx-auto mt-8" />
        </div>

        {/* 四个价值卡片 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {modernValues.map((value, index) => (
            <ModernValueCard 
              key={value.id} 
              value={value} 
              index={index}
              isVisible={isVisible}
            />
          ))}
        </div>

        {/* 当代价值总结 */}
        <div 
          className={`
            p-12 bg-gradient-to-br from-[var(--celadon)]/10 via-[var(--vermilion)]/5 to-transparent rounded-2xl border border-[var(--celadon)]/20
            transition-all duration-1000 delay-700
            ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
          `}
        >
          <h3 className="text-2xl font-inscription text-foreground mb-6 text-center">
            宋代美学的当代价值
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-[var(--celadon)]/10 flex items-center justify-center mx-auto mb-4">
                <span className="text-xl">🌿</span>
              </div>
              <h4 className="font-semibold text-foreground mb-2">
                天人合一的自然观
              </h4>
              <p className="text-sm text-muted-foreground">
                为生态文明建设提供了哲学基础
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-[var(--vermilion)]/10 flex items-center justify-center mx-auto mb-4">
                <span className="text-xl">🎨</span>
              </div>
              <h4 className="font-semibold text-foreground mb-2">
                雅俗共赏的审美理念
              </h4>
              <p className="text-sm text-muted-foreground">
                为文化普及与大众审美提升提供了历史借鉴
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-[var(--celadon)]/10 flex items-center justify-center mx-auto mb-4">
                <span className="text-xl">🔍</span>
              </div>
              <h4 className="font-semibold text-foreground mb-2">
                格物致知的理性精神
              </h4>
              <p className="text-sm text-muted-foreground">
                为传统艺术的现代转译与创新发展提供了方法论指导
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
