"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

const modernAspects = [
  {
    id: "eastAsia",
    title: "东亚影响",
    subtitle: "茶道、花道与禅宗美学的传播",
    items: [
      {
        title: "日本侘寂美学",
        description:
          "宋代瓷器「残缺即圆满」的辩证美学对日本侘寂美学产生深远影响。哥窑冰裂纹、钧窑窑变釉色被视为自然之力的体现。",
        icon: "侘",
      },
      {
        title: "韩国茶礼",
        description:
          "韩国传统茶礼深受宋代点茶艺术影响，强调「和敬清寂」的精神，与宋代「清雅淡泊」的审美理念一脉相承。",
        icon: "茶",
      },
    ],
  },
  {
    id: "westInfluence",
    title: "西方对话",
    subtitle: "留白与极简主义的哲学共鸣",
    items: [
      {
        title: "留白美学共鸣",
        description:
          "宋代山水画的留白与西方现象学「前对象性背景」的哲学思想存在深刻共鸣。西方艺术家如罗伯特·雷曼的白色系列与之呼应。",
        icon: "白",
      },
      {
        title: "极简设计对话",
        description:
          "宋代艺术的「极简」美学与西方现代设计中的极简主义形成跨时空对话。汝窑天青釉色、建盏黑釉均体现「少即是多」的哲学。",
        icon: "简",
      },
    ],
  },
  {
    id: "contemporary",
    title: "当代转译",
    subtitle: "从传统到现代的美学创新",
    items: [
      {
        title: "苏州博物馆",
        description:
          "贝聿铭将宋代园林的「简素空灵」融入现代建筑，片石假山灵感来源于米芾山水画，实现传统美学的现代转译。",
        icon: "馆",
      },
      {
        title: "AI修复缂丝",
        description:
          "上海鼎天提花博物馆利用AI深度学习技术，对《莲塘乳鸭图》进行数字重生，6.66亿个数字组织点精确解析传统工艺。",
        icon: "技",
      },
    ],
  },
  {
    id: "ecology",
    title: "生态智慧",
    subtitle: "宋代美学的当代启示",
    items: [
      {
        title: "参赞天地化育",
        description:
          "朱熹理念强调人应当参与到自然中，友善互动、相互辅助，与当代「人与自然和谐共生」的生态理念高度契合。",
        icon: "和",
      },
      {
        title: "万物静观皆自得",
        description:
          "宋代文人「万物静观皆自得」的生活态度，提醒当代人在快节奏中放慢脚步，在日常生活中发现美、感受美。",
        icon: "观",
      },
    ],
  },
];

export function ModernSection() {
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
      className="relative py-24 md:py-32 overflow-hidden bg-muted/30"
    >
      {/* 背景装饰 */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-vermilion/5 rounded-full blur-3xl" />
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
            伍
          </span>
          <h2 className="font-inscription text-4xl md:text-5xl text-foreground mb-4 tracking-[0.1em]">
            现代价值
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            宋代美学的历史影响与现代转译
          </p>
          <div className="chapter-divider mt-8 max-w-xs mx-auto" />
        </div>

        {/* 内容网格 */}
        <div
          className={cn(
            "grid md:grid-cols-2 gap-8 transition-all duration-1000 delay-200",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          )}
        >
          {modernAspects.map((aspect, aspectIndex) => (
            <div
              key={aspect.id}
              className="bg-background rounded-2xl p-6 md:p-8 shadow-sm border border-border/50 hover:shadow-md hover:border-primary/20 transition-all duration-500"
              style={{ animationDelay: `${aspectIndex * 100}ms` }}
            >
              {/* 标题 */}
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <span className="font-brush text-2xl text-primary">
                    {aspectIndex + 1}
                  </span>
                </div>
                <div>
                  <h3 className="font-inscription text-2xl text-foreground tracking-wide">
                    {aspect.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {aspect.subtitle}
                  </p>
                </div>
              </div>

              {/* 内容卡片 */}
              <div className="space-y-4">
                {aspect.items.map((item, itemIndex) => (
                  <div
                    key={itemIndex}
                    className="flex gap-4 p-4 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors"
                  >
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <span className="font-brush text-lg text-primary">
                        {item.icon}
                      </span>
                    </div>
                    <div>
                      <h4 className="font-medium text-foreground mb-1">
                        {item.title}
                      </h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
