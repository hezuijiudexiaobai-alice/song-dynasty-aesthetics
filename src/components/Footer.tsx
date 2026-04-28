"use client";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-12 bg-muted/50 border-t border-border/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center border border-primary/20">
              <span className="font-inscription text-lg text-primary">宋</span>
            </div>
            <div>
              <h3 className="font-inscription text-lg text-foreground tracking-widest">
                宋朝美学
              </h3>
              <p className="text-xs text-muted-foreground">
                探索华夏文化之巅
              </p>
            </div>
          </div>

          {/* 装饰线 */}
          <div className="hidden md:flex items-center gap-4">
            <div className="w-16 h-px bg-gradient-to-r from-transparent to-primary/30" />
            <div className="w-2 h-2 rotate-45 bg-primary/30" />
            <div className="w-16 h-px bg-gradient-to-l from-transparent to-primary/30" />
          </div>

          {/* 引用 */}
          <div className="text-center md:text-right">
            <p className="text-sm text-muted-foreground italic">
              「绚烂之极归于平淡」
            </p>
            <p className="text-xs text-muted-foreground/60 mt-1">
              © {currentYear} 宋朝美学 · 文化传承
            </p>
          </div>
        </div>

        {/* 底部装饰 */}
        <div className="mt-8 pt-6 border-t border-border/30">
          <div className="flex items-center justify-center gap-2 text-xs text-muted-foreground/50">
            <span>陈寅恪言</span>
            <span className="text-primary/60">|</span>
            <span>「华夏民族之文化造极于赵宋」</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
