'use client';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-16 bg-gradient-to-b from-muted/30 to-background border-t border-border/50">
      <div className="max-w-6xl mx-auto px-6">
        {/* 主内容 */}
        <div className="text-center mb-12">
          {/* Logo */}
          <h2 className="font-inscription text-3xl tracking-widest text-foreground mb-4">
            宋韵
          </h2>
          
          {/* 分隔装饰 */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <span className="w-12 h-px bg-[var(--celadon)]/50" />
            <span className="w-2 h-2 rounded-full bg-[var(--celadon)]/50" />
            <span className="w-12 h-px bg-[var(--celadon)]/50" />
          </div>

          {/* 引言 */}
          <p className="text-sm text-muted-foreground italic max-w-xl mx-auto mb-8">
            &quot;华夏民族之文化造极于赵宋&quot;
            <br />
            <span className="text-xs">—— 陈寅恪</span>
          </p>

          {/* 导航链接 */}
          <nav className="flex flex-wrap items-center justify-center gap-6 text-sm">
            {[
              { label: '哲学根基', path: '#philosophy' },
              { label: '艺术表现', path: '#art' },
              { label: '生活美学', path: '#life' },
              { label: '现代价值', path: '#modern' },
            ].map((link) => (
              <a
                key={link.path}
                href={link.path}
                className="text-muted-foreground hover:text-foreground transition-colors duration-300"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        {/* 底部信息 */}
        <div className="pt-8 border-t border-border/30 text-center">
          <p className="text-xs text-muted-foreground/70">
            © {currentYear} 宋朝美学 · 传承与创新
          </p>
          <p className="text-xs text-muted-foreground/50 mt-2">
            探索中华文化之美，感悟千年智慧之光
          </p>
        </div>
      </div>

      {/* 背景装饰 */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none" />
    </footer>
  );
}
