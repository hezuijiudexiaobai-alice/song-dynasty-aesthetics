"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

const artCategories = [
  {
    id: "painting",
    title: "绘画",
    subtitle: "从院体到文人画的美学转型",
    items: [
      {
        name: "院体画",
        description: "黄家富贵与工笔写实，追求形神兼备，设色浓丽华贵",
        quote: "勾勒填彩，旨趣秋艳",
      },
      {
        name: "文人画",
        description: "徐熙野逸与写意传统，强调似与不似之间的艺术追求",
        quote: "论画以形似，见与儿童邻",
        author: "—— 苏轼",
      },
      {
        name: "三远法",
        description: "高远、深远、平远的空间美学与审美境界",
        quote: "平灭一切冲突，主体和眼前的对象处于一片和融",
      },
    ],
  },
  {
    id: "calligraphy",
    title: "书法",
    subtitle: "尚意书风与个性化表达",
    items: [
      {
        name: "苏轼",
        description: "我书意造本无法，点画信手烦推求",
        quote: "天下第三行书《黄州寒食诗帖》",
      },
      {
        name: "黄庭坚",
        description: "山谷体以侧锋取势、结体开张，自出新意，不践古人",
        quote: "笔法创新",
      },
      {
        name: "米芾",
        description: "刷字用笔八面出锋，迅疾运笔中保持结体精准",
        quote: "气势磅礴",
      },
    ],
  },
  {
    id: "ceramics",
    title: "陶瓷",
    subtitle: "极简之美与工艺创新",
    items: [
      {
        name: "汝窑天青",
        description: "雨过天青云破处，玛瑙入釉，温润如玉",
        quote: "以少胜多，以虚代实",
      },
      {
        name: "建窑黑釉",
        description: "盏色贵青黑，玉毫条达者为上，隐显相生",
        quote: "兔毫、油滴、鹧鸪斑",
      },
      {
        name: "五大名窑",
        description: "汝、官、哥、钧、定，各具特色，绚烂之极归于平淡",
        quote: "残缺即圆满",
      },
    ],
  },
  {
    id: "architecture",
    title: "建筑",
    subtitle: "营造法式与虚实相生",
    items: [
      {
        name: "《营造法式》",
        description: "材分八等的模数体系，工匠以材为祖，预制装配",
        quote: "严谨含蓄的美学追求",
      },
      {
        name: "空间美学",
        description: "可行可望可游可居的空间体验，虚实相生",
        quote: "平地造山，因势就成",
      },
      {
        name: "禅宗影响",
        description: "简净思想影响下的建筑风格，人本精神与理学融合",
        quote: "世俗化的表达",
      },
    ],
  },
  {
    id: "sculpture",
    title: "雕塑",
    subtitle: "人本精神与世俗化表达",
    items: [
      {
        name: "灵隐寺弥勒",
        description: "光头披发、袒胸露腹的世俗化形象，笑嘻嘻布袋弥勒之祖",
        quote: "人本精神的艺术表达",
      },
      {
        name: "罗汉像",
        description: "继承唐代写实传统，注重人物性格刻画，空箱体结构",
        quote: "丝绸内脏的工艺细节",
      },
      {
        name: "世俗化",
        description: "打破传统佛教雕塑的神秘感，融入世俗生活的亲切感",
        quote: "人文关怀",
      },
    ],
  },
];

export function ArtSection() {
  const [activeCategory, setActiveCategory] = useState("painting");
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

  const currentArt = artCategories.find((c) => c.id === activeCategory);

  return (
    <section
      id="art"
      ref={sectionRef}
      className="relative py-24 md:py-32 overflow-hidden bg-muted/30"
    >
      {/* 背景装饰 */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-vermilion/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 章节标题 */}
        <div
          className={cn(
            "text-center mb-16 transition-all duration-1000",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          )}
        >
          <span className="font-brush text-3xl text-primary/60 mb-4 block">
            叁
          </span>
          <h2 className="font-inscription text-4xl md:text-5xl text-foreground mb-4 tracking-[0.1em]">
            艺术表现
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            形神兼备与意韵之美
          </p>
          <div className="chapter-divider mt-8 max-w-xs mx-auto" />
        </div>

        {/* 分类导航 */}
        <div
          className={cn(
            "flex flex-wrap justify-center gap-2 mb-12 transition-all duration-1000 delay-200",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          )}
        >
          {artCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={cn(
                "px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300",
                activeCategory === category.id
                  ? "bg-primary text-primary-foreground shadow-sm"
                  : "bg-background text-muted-foreground hover:bg-background/80 hover:text-foreground border border-border/50"
              )}
            >
              {category.title}
            </button>
          ))}
        </div>

        {/* 内容展示 */}
        <div
          className={cn(
            "transition-all duration-700",
            isVisible ? "opacity-100" : "opacity-0"
          )}
        >
          {currentArt && (
            <div className="grid lg:grid-cols-5 gap-8">
              {/* 左侧 - 分类信息 */}
              <div className="lg:col-span-2">
                <div className="sticky top-24">
                  <div className="bg-background rounded-xl p-8 shadow-sm border border-border/50">
                    <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium mb-4">
                      {currentArt.subtitle}
                    </span>
                    <h3 className="font-inscription text-3xl md:text-4xl text-foreground mb-6 tracking-wide">
                      {currentArt.title}
                    </h3>
                    <div className="space-y-1">
                      {currentArt.items.map((item, i) => (
                        <div
                          key={i}
                          className={cn(
                            "flex items-center gap-3 py-3 border-b border-border/30 last:border-0 transition-all duration-300",
                            activeCategory === currentArt.id &&
                              "translate-x-2 text-primary"
                          )}
                        >
                          <div className="w-8 h-px bg-primary/40" />
                          <span className="font-medium text-foreground/80">
                            {item.name}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* 右侧 - 详细内容 */}
              <div className="lg:col-span-3 space-y-6">
                {currentArt.items.map((item, index) => (
                  <div
                    key={index}
                    className={cn(
                      "bg-background rounded-xl p-6 md:p-8 shadow-sm border border-border/50 transition-all duration-500",
                      "hover:shadow-md hover:border-primary/20 group"
                    )}
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="flex items-start gap-4">
                      {/* 序号装饰 */}
                      <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <span className="font-brush text-xl text-primary">
                          {index + 1}
                        </span>
                      </div>

                      <div className="flex-1">
                        <h4 className="font-inscription text-xl text-foreground mb-3 tracking-wide group-hover:text-primary transition-colors">
                          {item.name}
                        </h4>
                        <p className="text-muted-foreground leading-relaxed mb-4">
                          {item.description}
                        </p>
                        {item.quote && (
                          <div className="flex items-start gap-2">
                            <span className="text-primary/60">「</span>
                            <p className="text-sm text-primary/80 italic flex-1">
                              {item.quote}
                            </p>
                            <span className="text-primary/60">」</span>
                          </div>
                        )}
                        {item.author && (
                          <p className="text-xs text-muted-foreground mt-2 not-italic">
                            {item.author}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
