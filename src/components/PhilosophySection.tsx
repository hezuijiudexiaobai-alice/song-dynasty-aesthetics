"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

const philosophyTopics = [
  {
    id: "gewu",
    title: "格物致知",
    subtitle: "从观察到感悟的理性升华",
    quote: "「太极动静而生阴阳，一阴一阳之谓道」",
    author: "—— 周敦颐《太极图说》",
    description:
      "宋明理学的核心思想，强调通过对自然事物的观察探究，达到对天理的把握。这一理念深刻影响了宋代艺术创作中的写实传统与观察精神。",
    highlights: [
      "周敦颐的「太极图说」与虚实相生",
      "张载的「一物两体」与矛盾统一",
      "邵雍的「象数理」与数理美学",
    ],
    color: "primary",
  },
  {
    id: "tianren",
    title: "天人合一",
    subtitle: "文人精神的哲学基础",
    quote: "「仁者浑然与物同体」",
    author: "—— 程颢《识仁》",
    description:
      "强调人与自然的和谐统一。程颢的「识仁」思想认为人与自然万物融为一体，为宋代文人艺术提供了哲学基础。",
    highlights: [
      "程颢「仁者浑然与物同体」与艺术境界",
      "「天人协调论」与自然审美",
      "朱熹「赞天地之化育」的生态智慧",
    ],
    color: "vermilion",
  },
  {
    id: "chanshi",
    title: "禅道融合",
    subtitle: "极简美学的精神源头",
    quote: "「道法自然，顺应本真」",
    author: "—— 道家思想",
    description:
      "宋代美学中的极简特质，与禅宗和道家的思想密切相关。禅宗的「空灵」思想强调内心的澄明与超越，道家「道法自然」强调顺应事物的本真状态。",
    highlights: [
      "禅宗「空灵」与留白美学",
      "道家「道法自然」与残缺之美",
      "日本民艺之父柳宗悦的评价",
    ],
    color: "gold",
  },
];

export function PhilosophySection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
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
      className="relative py-24 md:py-32 overflow-hidden rice-paper-texture"
    >
      {/* 背景装饰 */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-primary/5 to-transparent" />
        <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-to-tl from-vermilion/5 to-transparent opacity-0" />
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
            贰
          </span>
          <h2 className="font-inscription text-4xl md:text-5xl text-foreground mb-4 tracking-[0.1em]">
            哲学根基
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            儒释道融合下的美学思想体系
          </p>
          <div className="chapter-divider mt-8 max-w-xs mx-auto" />
        </div>

        {/* Tab 导航 */}
        <div
          className={cn(
            "flex flex-wrap justify-center gap-2 mb-12 transition-all duration-1000 delay-200",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          )}
        >
          {philosophyTopics.map((topic, index) => (
            <button
              key={topic.id}
              onClick={() => setActiveIndex(index)}
              className={cn(
                "px-6 py-3 rounded-md text-sm font-medium transition-all duration-300",
                activeIndex === index
                  ? "bg-primary text-primary-foreground shadow-sm"
                  : "bg-muted text-muted-foreground hover:bg-muted/80 hover:text-foreground"
              )}
            >
              {topic.title}
            </button>
          ))}
        </div>

        {/* 内容区域 */}
        <div
          className={cn(
            "transition-all duration-1000 delay-400",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          )}
        >
          {philosophyTopics.map(
            (topic, index) =>
              activeIndex === index && (
                <div
                  key={topic.id}
                  className="grid lg:grid-cols-2 gap-12 items-center"
                >
                  {/* 左侧 - 文字内容 */}
                  <div className="order-2 lg:order-1">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-sm mb-6">
                      <span className="font-brush">{index + 1}</span>
                      <span>{topic.subtitle}</span>
                    </div>

                    <h3 className="font-inscription text-3xl md:text-4xl text-foreground mb-6 tracking-wide">
                      {topic.title}
                    </h3>

                    <blockquote className="mb-6 pl-4 border-l-2 border-primary/30">
                      <p className="text-lg text-foreground/80 italic mb-2">
                        {topic.quote}
                      </p>
                      <cite className="text-sm text-muted-foreground not-italic">
                        {topic.author}
                      </cite>
                    </blockquote>

                    <p className="text-muted-foreground leading-relaxed mb-8">
                      {topic.description}
                    </p>

                    <div className="space-y-3">
                      {topic.highlights.map((highlight, i) => (
                        <div
                          key={i}
                          className="flex items-start gap-3 text-sm"
                        >
                          <div className="w-1.5 h-1.5 rounded-full bg-primary/60 mt-2 flex-shrink-0" />
                          <span className="text-muted-foreground">
                            {highlight}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* 右侧 - 装饰性图形 */}
                  <div className="order-1 lg:order-2 flex justify-center">
                    <div className="relative w-72 h-72 md:w-80 md:h-80">
                      {/* 背景圆 */}
                      <div
                        className={cn(
                          "absolute inset-0 rounded-full transition-all duration-700",
                          topic.color === "primary" && "bg-primary/10",
                          topic.color === "vermilion" && "bg-vermilion/10",
                          topic.color === "gold" && "bg-gold/10"
                        )}
                      />
                      {/* 内圈 */}
                      <div
                        className={cn(
                          "absolute inset-8 rounded-full border transition-all duration-700",
                          topic.color === "primary" && "border-primary/30",
                          topic.color === "vermilion" && "border-vermilion/30",
                          topic.color === "gold" && "border-gold/30"
                        )}
                      />
                      {/* 中心图案 */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div
                          className={cn(
                            "w-24 h-24 rounded-full flex items-center justify-center transition-all duration-700",
                            topic.color === "primary" && "bg-primary/20",
                            topic.color === "vermilion" && "bg-vermilion/20",
                            topic.color === "gold" && "bg-gold/20"
                          )}
                        >
                          <span
                            className={cn(
                              "font-brush text-4xl",
                              topic.color === "primary" && "text-primary",
                              topic.color === "vermilion" && "text-vermilion",
                              topic.color === "gold" && "text-gold"
                            )}
                          >
                            {topic.title.slice(0, 1)}
                          </span>
                        </div>
                      </div>
                      {/* 装饰点 */}
                      <div className="absolute top-4 right-12 w-2 h-2 rounded-full bg-primary/40" />
                      <div className="absolute bottom-12 left-4 w-1.5 h-1.5 rounded-full bg-primary/30" />
                      <div className="absolute top-1/2 right-0 w-1 h-1 rounded-full bg-primary/20" />
                    </div>
                  </div>
                </div>
              )
          )}
        </div>
      </div>
    </section>
  );
}
