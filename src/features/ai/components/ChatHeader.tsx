export default function ChatHeader() {
  return (
    <div className="px-lg py-md border-b border-outline-variant bg-surface-container-high/50 flex justify-between items-center">
      <div className="flex items-center gap-md">
        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center border border-primary/30">
          <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>smart_toy</span>
        </div>
        <div>
          <div className="font-headline-md text-headline-md leading-none mb-1">智能对话</div>
          <div className="flex items-center gap-xs">
            <span className="w-2 h-2 rounded-full bg-secondary"></span>
            <span className="text-[11px] font-label-caps text-secondary uppercase">Secure Agent Online</span>
          </div>
        </div>
      </div>
      <div className="flex gap-sm">
        <button className="px-md py-1.5 bg-surface-container border border-outline-variant rounded-full text-body-sm hover:border-primary transition-all">
          添加目标
        </button>
        <button className="px-md py-1.5 bg-surface-container border border-outline-variant rounded-full text-body-sm hover:border-primary transition-all">
          选择有效目标
        </button>
      </div>
    </div>
  );
}