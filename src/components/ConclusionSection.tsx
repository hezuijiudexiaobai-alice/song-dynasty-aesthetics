"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

export function ConclusionSection() {
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

  const values = [
    {
      title: "天人合一",
      description: "为生态文明建设提供哲学基础",
      icon: "合",
    },
    {
      title: "雅俗共赏",
      description: "为文化普及与大众审美提升提供借鉴",
      icon: "雅",
    },
    {
      title: "格物致知",
      description: "为传统艺术的现代转译提供方法论指导",
      icon: "知",
    },
  ];

  return (
    <section
      id="conclusion"
      ref={sectionRef}
      className="relative py-24 md:py-32 overflow-hidden rice-paper-texture"
    >
      {/* 背景装饰 */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-background to-transparent" />
        <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-gradient-to-tl from-vermilion/5 to-transparent" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 章节标题 */}
        <div
          className={cn(
            "text-center mb-16 transition-all duration-1000",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          )}
        >
          <span className="font-brush text-3xl text-primary/60 mb-4 block">
            陆
          </span>
          <h2 className="font-inscription text-4xl md:text-5xl text-foreground mb-4 tracking-[0.1em]">
            结语
          </h2>
          <p className="text-muted-foreground text-lg">
            宋韵美学的当代价值与传承
          </p>
          <div className="chapter-divider mt-8 max-w-xs mx-auto" />
        </div>

        {/* 核心内容 */}
        <div
          className={cn(
            "text-center mb-16 transition-all duration-1000 delay-200",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          )}
        >
          <blockquote className="mb-8">
            <p className="font-inscription text-xl md:text-2xl text-foreground/90 leading-relaxed tracking-wide">
              <span className="text-primary">「</span>
              当我们重拾点茶的仪式感，在居所布置中感悟留白的智慧，
              <br className="hidden md:block" />
              在日常用器中品赏简约的清雅，
              <br className="hidden md:block" />
              在山水行走中体味「可游可居」的意境时，
              <br className="hidden md:block" />
              一种兼具历史底蕴与时代精神的现代生活新美学，
              <br className="hidden md:block" />
              正在「风雅处处是平常」的转化中渐渐显影。
              <span className="text-primary">」</span>
            </p>
          </blockquote>
        </div>

        {/* 三大价值 */}
        <div
          className={cn(
            "grid md:grid-cols-3 gap-6 mb-16 transition-all duration-1000 delay-400",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          )}
        >
          {values.map((value) => (
            <div
              key={value.title}
              className="bg-background rounded-xl p-6 text-center shadow-sm border border-border/50 hover:border-primary/20 transition-all duration-500 group"
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <span className="font-brush text-3xl text-primary">
                  {value.icon}
                </span>
              </div>
              <h3 className="font-inscription text-xl text-foreground mb-2 tracking-wide">
                {value.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {value.description}
              </p>
            </div>
          ))}
        </div>

        {/* 结语 */}
        <div
          className={cn(
            "text-center transition-all duration-1000 delay-600",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          )}
        >
          <div className="bg-gradient-to-r from-transparent via-primary/20 to-transparent p-8 rounded-2xl">
            <p className="text-lg text-foreground/80 leading-relaxed mb-6">
              宋代美学以其深厚的文化底蕴与独特的审美追求，
              <br />
              不仅塑造了宋代文化的辉煌成就，
              <br />
              更为当代社会提供了宝贵的文化资源与精神滋养。
            </p>
            <div className="flex items-center justify-center gap-3">
              <div className="w-12 h-px bg-gradient-to-r from-transparent to-primary/40" />
              <p className="font-inscription text-primary text-xl tracking-widest">
                华夏民族之文化造极于赵宋
              </p>
              <div className="w-12 h-px bg-gradient-to-l from-transparent to-primary/40" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
