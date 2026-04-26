'use client';

import { useEffect, useRef, useState } from 'react';

const artCategories = [
  {
    id: 'painting',
    title: '绘画',
    subtitle: '从院体到文人画的美学转型',
    icon: '🖼️',
    items: [
      {
        name: '院体画',
        description: '黄家富贵与工笔写实',
        details: '以工笔重彩为主，追求形神兼备，设色浓丽华贵。代表作如宋徽宗赵佶的《芙蓉锦鸡图》。',
      },
      {
        name: '文人画',
        description: '徐熙野逸与写意传统',
        details: '强调"写意"而非"形似"，苏轼提出"论画以形似，见与儿童邻"。',
      },
      {
        name: '山水画',
        description: '三远法与空间美学',
        details: '郭熙提出"高远、深远、平远"三远法，创造出可行、可望、可游、可居的空间体验。',
      },
    ],
  },
  {
    id: 'calligraphy',
    title: '书法',
    subtitle: '尚意书风与个性化表达',
    icon: '✍️',
    items: [
      {
        name: '苏轼',
        description: '尚意书风与情感抒发',
        details: '《黄州寒食诗帖》被誉为"天下第三行书"，体现"法而无法"的艺术境界。',
      },
      {
        name: '黄庭坚',
        description: '山谷体与笔法创新',
        details: '以侧锋取势、结体开张为特点，强调"自出新意，不践古人"。',
      },
      {
        name: '米芾',
        description: '刷字与迅疾运笔',
        details: '用笔八面出锋，在迅疾的运笔中保持结体的精准。',
      },
      {
        name: '宋徽宗',
        description: '瘦金体与艺术成就',
        details: '创造的"瘦金体"以瘦硬劲挺、锋芒毕露为特点，被誉为"天纵将圣，艺极于神"。',
      },
    ],
  },
  {
    id: 'ceramics',
    title: '陶瓷',
    subtitle: '极简之美与工艺创新',
    icon: '🏺',
    items: [
      {
        name: '汝窑',
        description: '天青釉：雨过天青的诗意境界',
        details: '釉色如"雨过天青云破处"，采用"玛瑙入釉"的独特工艺，温润如玉。',
      },
      {
        name: '建窑',
        description: '黑釉：隐与显的哲学辩证',
        details: '黑釉茶盏通过窑变形成兔毫、油滴、鹧鸪斑等纹样，形成隐显相生的美学效果。',
      },
      {
        name: '缂丝',
        description: '通经断纬的工艺美学',
        details: '采用"通经断纬"的织造技法，朱克柔的《莲塘乳鸭图》堪称代表作。',
      },
    ],
  },
  {
    id: 'architecture',
    title: '建筑',
    subtitle: '营造法式与虚实相生',
    icon: '🏯',
    items: [
      {
        name: '《营造法式》',
        description: '模数体系与标准化',
        details: '建立以"材分八等"为核心的模数体系，使建筑构件尺寸标准化。',
      },
      {
        name: '空间美学',
        description: '虚实相生的空间体验',
        details: '通过门窗、屏风、廊柱等元素的巧妙安排，创造出"可行可望可游可居"的空间体验。',
      },
    ],
  },
  {
    id: 'sculpture',
    title: '雕塑',
    subtitle: '人本精神与世俗化表达',
    icon: '🗿',
    items: [
      {
        name: '灵隐寺弥勒佛',
        description: '世俗化与精神美的统一',
        details: '以五代奉化高僧契此为原型，塑造了"光头披发，袒胸露腹"的形象，被誉为笑嘻嘻布袋弥勒佛造像之祖。',
      },
      {
        name: '罗汉像',
        description: '写实传统与人性刻画',
        details: '每个罗汉都有独特的表情与姿态，展现了宋代雕塑家对人性的深刻理解。',
      },
    ],
  },
];

function ArtDetail({ item }: { item: typeof artCategories[0]['items'][0] }) {
  return (
    <div className="p-6 bg-card/50 rounded-lg border border-border/50 hover:border-[var(--celadon)]/30 transition-all duration-300">
      <h4 className="text-lg font-semibold text-foreground mb-2">
        {item.name}
      </h4>
      <p className="text-sm text-[var(--celadon)] mb-3">
        {item.description}
      </p>
      <p className="text-sm text-muted-foreground leading-relaxed">
        {item.details}
      </p>
    </div>
  );
}

export default function ArtSection() {
  const [activeCategory, setActiveCategory] = useState(artCategories[0].id);
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

  const currentCategory = artCategories.find(c => c.id === activeCategory) || artCategories[0];

  return (
    <section 
      id="art" 
      ref={sectionRef}
      className="relative py-32 bg-gradient-to-b from-background via-muted/20 to-background"
    >
      {/* 背景装饰 */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute bottom-1/4 left-0 w-1/2 h-96 bg-gradient-to-r from-[var(--vermilion)]/5 to-transparent" />
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
            第二章
          </span>
          <h2 className="text-4xl md:text-5xl font-inscription text-foreground mb-6">
            艺术表现
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            形神兼备与意韵之美
          </p>
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-[var(--celadon)] to-transparent mx-auto mt-8" />
        </div>

        {/* 内容区域 */}
        <div 
          className={`
            transition-all duration-1000 delay-300
            ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
          `}
        >
          {/* 分类标签 */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-12">
            {artCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`
                  p-4 rounded-lg transition-all duration-300 text-center
                  ${activeCategory === category.id 
                    ? 'bg-[var(--celadon)] text-white shadow-lg' 
                    : 'bg-card hover:bg-muted/50'}
                `}
              >
                <span className="text-2xl mb-2 block">{category.icon}</span>
                <span className="text-sm font-medium">{category.title}</span>
              </button>
            ))}
          </div>

          {/* 详情展示 */}
          <div 
            key={activeCategory}
            className="animate-fadeIn"
          >
            <div className="text-center mb-8">
              <h3 className="text-2xl font-semibold text-foreground mb-2">
                {currentCategory.title}
              </h3>
              <p className="text-muted-foreground">
                {currentCategory.subtitle}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {currentCategory.items.map((item, index) => (
                <ArtDetail key={index} item={item} />
              ))}
            </div>
          </div>
        </div>

        {/* 装饰引言 */}
        <div 
          className={`
            mt-20 text-center transition-all duration-1000 delay-700
            ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
          `}
        >
          <blockquote className="text-lg italic text-muted-foreground max-w-3xl mx-auto">
            宋代艺术成就斐然，在绘画、书法、陶瓷、建筑、雕塑等多个领域
            <br className="hidden md:block" />
            均达到了历史高峰，形成了各具特色的艺术表现形式与审美特点。
          </blockquote>
        </div>
      </div>
    </section>
  );
}
