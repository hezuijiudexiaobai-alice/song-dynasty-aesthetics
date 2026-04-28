"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

const lifeArts = [
  {
    id: "incense",
    title: "焚香",
    subtitle: "隔火熏香的仪式感与哲学内涵",
    icon: "香",
    quote: "香清烟少，有香无烟",
    description:
      "宋代焚香艺术追求香清烟少的意境，发展出隔火熏香的方法，利用炭火温度使香气缓慢释放，达到雅致效果。",
    poetry: [
      "「棐几砚涵鸲鹆眼，古奁香斮鹧鸪斑」",
      "「梦断午窗花影转，小炉犹有睡时烟」",
    ],
    color: "primary",
  },
  {
    id: "tea",
    title: "点茶",
    subtitle: "建盏与茶沫的辩证美学",
    icon: "茶",
    quote: "青黑釉+玉毫纹，隐与显的哲学表达",
    description:
      "建窑黑釉茶盏以隐显辩证的美学思想，与宋代理学格物致知的内省精神高度契合。茶百戏通过茶筅击拂形成各种图案。",
    poetry: [
      "盏色贵青黑，玉毫条达者为上",
      "茶发立耐久，平底必差深而微宽",
    ],
    color: "vermilion",
  },
  {
    id: "flowers",
    title: "插花",
    subtitle: "季节变化与器物选择的审美哲学",
    icon: "花",
    quote: "以器应时，平淡中含至味",
    description:
      "宋代插花讲究与季节变化的和谐统一，从士大夫阶层逐渐普及到市井百姓，成为表达情感、寄托精神的重要方式。",
    poetry: [
      "秋、冬用铜，春、夏用磁，因乎时也",
      "折取花枝，侵晨带露，半开香色",
    ],
    color: "gold",
  },
  {
    id: "clothing",
    title: "服饰",
    subtitle: "日常生活的美学表达",
    icon: "衣",
    quote: "绚烂之极归于平淡",
    description:
      "宋代服饰美学在继承前代基础上进行了色彩的减法，官服色彩简化，民间以青白为主色调，体现素雅之美。",
    poetry: [
      "三品以上用紫色，四品、五品用绯色",
      "六品以下用绿色，民间以青白为主",
    ],
    color: "green",
  },
];

export function LifeSection() {
  const [activeArt, setActiveArt] = useState("incense");
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

  const currentLife = lifeArts.find((a) => a.id === activeArt);

  return (
    <section
      id="life"
      ref={sectionRef}
      className="relative py-24 md:py-32 overflow-hidden rice-paper-texture"
    >
      {/* 背景装饰 */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-64 h-64 bg-gold/5 rounded-full blur-3xl" />
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
            肆
          </span>
          <h2 className="font-inscription text-4xl md:text-5xl text-foreground mb-4 tracking-[0.1em]">
            生活美学
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            雅俗交融的日常美学实践
          </p>
          <div className="chapter-divider mt-8 max-w-xs mx-auto" />
        </div>

        {/* 四艺导航 */}
        <div
          className={cn(
            "grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 transition-all duration-1000 delay-200",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          )}
        >
          {lifeArts.map((art) => (
            <button
              key={art.id}
              onClick={() => setActiveArt(art.id)}
              className={cn(
                "relative p-6 rounded-xl text-center transition-all duration-500 group overflow-hidden",
                activeArt === art.id
                  ? "bg-primary text-primary-foreground shadow-lg"
                  : "bg-background hover:bg-muted/50 border border-border/50"
              )}
            >
              {/* 背景装饰 */}
              <div
                className={cn(
                  "absolute inset-0 opacity-0 transition-opacity duration-500",
                  activeArt === art.id ? "opacity-100" : "group-hover:opacity-50"
                )}
              >
                <div
                  className={cn(
                    "absolute inset-0",
                    art.color === "primary" && "bg-primary/10",
                    art.color === "vermilion" && "bg-vermilion/10",
                    art.color === "gold" && "bg-gold/10",
                    art.color === "green" && "bg-green-600/10"
                  )}
                />
              </div>

              <div className="relative z-10">
                <div
                  className={cn(
                    "font-brush text-4xl mb-3 transition-colors duration-300",
                    activeArt === art.id
                      ? "text-primary-foreground"
                      : "text-primary/60 group-hover:text-primary"
                  )}
                >
                  {art.icon}
                </div>
                <h3
                  className={cn(
                    "font-inscription text-lg tracking-wide mb-1 transition-colors duration-300",
                    activeArt === art.id
                      ? "text-primary-foreground"
                      : "text-foreground"
                  )}
                >
                  {art.title}
                </h3>
                <p
                  className={cn(
                    "text-xs transition-colors duration-300",
                    activeArt === art.id
                      ? "text-primary-foreground/80"
                      : "text-muted-foreground"
                  )}
                >
                  {art.subtitle.split("与")[0]}
                </p>
              </div>

              {/* 选中指示器 */}
              {activeArt === art.id && (
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-8 h-1 bg-primary-foreground/50 rounded-full" />
              )}
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
          {currentLife && (
            <div className="bg-background rounded-2xl p-8 md:p-12 shadow-sm border border-border/50">
              <div className="grid md:grid-cols-2 gap-12">
                {/* 左侧 - 描述 */}
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <span
                      className={cn(
                        "font-brush text-5xl",
                        currentLife.color === "primary" && "text-primary",
                        currentLife.color === "vermilion" && "text-vermilion",
                        currentLife.color === "gold" && "text-gold",
                        currentLife.color === "green" && "text-green-600"
                      )}
                    >
                      {currentLife.icon}
                    </span>
                    <div>
                      <h3 className="font-inscription text-3xl text-foreground tracking-wide">
                        {currentLife.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {currentLife.subtitle}
                      </p>
                    </div>
                  </div>

                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {currentLife.description}
                  </p>

                  <div className="p-4 rounded-lg bg-muted/50 border-l-2 border-primary/30">
                    <p className="text-sm text-primary/80 italic">
                      {currentLife.quote}
                    </p>
                  </div>
                </div>

                {/* 右侧 - 诗词引用 */}
                <div>
                  <h4 className="font-inscription text-lg text-foreground mb-4 tracking-wide">
                    诗意表达
                  </h4>
                  <div className="space-y-4">
                    {currentLife.poetry.map((poem, i) => (
                      <div
                        key={i}
                        className="p-4 rounded-lg bg-primary/5 border border-primary/10"
                      >
                        <p className="text-foreground/80 italic leading-relaxed">
                          {poem}
                        </p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 pt-6 border-t border-border/50">
                    <p className="text-xs text-muted-foreground">
                      宋代文人将{currentLife.title}融入日常生活，
                      {currentLife.subtitle.split("与")[1] || ""}
                      体现了「风雅处处是平常」的生活美学追求。
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
