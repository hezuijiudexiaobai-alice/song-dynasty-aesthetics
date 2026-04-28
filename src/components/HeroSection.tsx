"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export function HeroSection() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden rice-paper-texture"
    >
      {/* 背景装饰 - 汝窑釉色晕染 */}
      <div className="absolute inset-0 pointer-events-none">
        {/* 右上角天青晕染 */}
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-primary/8 via-transparent to-transparent" />
        {/* 左下角墨色晕染 */}
        <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-to-tr from-foreground/5 via-transparent to-transparent" />
        {/* 中心微妙光晕 */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl" />
      </div>

      {/* 装饰性竖线 */}
      <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary/20 to-transparent hidden lg:block" />
      <div className="absolute right-8 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary/20 to-transparent hidden lg:block" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        {/* 主标题 */}
        <div
          className={cn(
            "transition-all duration-1000",
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}
        >
          {/* 小标题装饰 */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="w-12 h-px bg-gradient-to-r from-transparent to-primary/40" />
            <span className="font-inscription text-sm text-primary/70 tracking-[0.3em]">
              陈寅恪言
            </span>
            <div className="w-12 h-px bg-gradient-to-l from-transparent to-primary/40" />
          </div>

          {/* 引言 */}
          <blockquote className="mb-12">
            <p className="font-inscription text-2xl md:text-3xl text-foreground/90 leading-relaxed tracking-wide">
              <span className="text-primary">「</span>
              华夏民族之文化
              <br className="hidden md:block" />
              造极于赵宋
              <span className="text-primary">」</span>
            </p>
          </blockquote>

          {/* 主标题 */}
          <h1 className="font-inscription text-5xl md:text-7xl lg:text-8xl text-foreground mb-6 tracking-[0.15em]">
            宋 朝 美 学
          </h1>

          {/* 副标题 */}
          <p className="text-lg md:text-xl text-muted-foreground tracking-wider mb-8">
            从哲学根基到日常生活的艺术化实践
          </p>

          {/* 分隔装饰 */}
          <div className="flex items-center justify-center gap-3 mb-12">
            <div className="w-16 h-px bg-primary/30" />
            <div className="w-2 h-2 bg-primary/50 rotate-45" />
            <div className="w-16 h-px bg-primary/30" />
          </div>

          {/* 章节预览 */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-2xl mx-auto">
            {[
              { num: "壹", title: "哲学根基" },
              { num: "贰", title: "艺术表现" },
              { num: "叁", title: "生活美学" },
              { num: "肆", title: "工艺造物" },
              { num: "伍", title: "现代价值" },
              { num: "陆", title: "结语" },
            ].map((item, i) => (
              <div
                key={item.num}
                className={cn(
                  "group flex items-center gap-3 px-4 py-3 rounded-md bg-muted/50 hover:bg-primary/10 transition-all duration-300 cursor-default",
                  "border border-transparent hover:border-primary/20"
                )}
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <span className="font-brush text-2xl text-primary/60 group-hover:text-primary transition-colors">
                  {item.num}
                </span>
                <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                  {item.title}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* 向下滚动提示 */}
        <div
          className={cn(
            "absolute bottom-12 left-1/2 -translate-x-1/2 transition-all duration-1000 delay-500",
            mounted ? "opacity-100" : "opacity-0"
          )}
        >
          <div className="flex flex-col items-center gap-2 text-muted-foreground/60">
            <span className="text-xs tracking-widest">向下探索</span>
            <div className="w-px h-12 bg-gradient-to-b from-primary/40 to-transparent" />
          </div>
        </div>
      </div>

      {/* 底部装饰 */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background via-background/50 to-transparent" />
    </section>
  );
}
