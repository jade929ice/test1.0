import { useState } from 'react';

export default function ChatInput() {
  const [value, setValue] = useState('');

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      if (value.trim()) {
        // 这里可以添加发送消息的逻辑
        setValue('');
      }
    }
  };

  return (
    <div className="p-lg bg-surface-container-high/80 border-t border-outline-variant">
      <div className="relative group">
        <textarea
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onKeyDown={handleKeyDown}
          className="w-full bg-surface-container-lowest border border-outline-variant focus:border-primary focus:ring-1 focus:ring-primary/20 rounded-xl px-md py-4 pr-32 text-body-md text-on-surface resize-none placeholder-on-surface-variant/40 transition-all"
          placeholder="发消息..."
          rows={1}
          style={{ height: 'auto' }}
          onInput={(e) => {
            const target = e.target as HTMLTextAreaElement;
            target.style.height = 'auto';
            target.style.height = target.scrollHeight + 'px';
          }}
        />
        <div className="absolute right-md bottom-3.5 flex items-center gap-sm">
          <button className="material-symbols-outlined text-on-surface-variant hover:text-primary transition-colors cursor-pointer">
            attach_file
          </button>
          <button className="material-symbols-outlined text-on-surface-variant hover:text-primary transition-colors cursor-pointer">
            mic
          </button>
          <button className="ml-md bg-primary text-on-primary font-bold px-md py-1.5 rounded-lg flex items-center gap-xs hover:brightness-110 active:scale-95 transition-all">
            <span className="text-label-caps">SEND</span>
            <span className="material-symbols-outlined text-sm">send</span>
          </button>
        </div>
      </div>
      <div className="mt-md flex justify-center gap-lg">
        <button className="flex items-center gap-xs text-xs text-on-surface-variant hover:text-secondary transition-all">
          <span className="material-symbols-outlined text-xs">history</span>
          <span>加载上下文</span>
        </button>
        <button className="flex items-center gap-xs text-xs text-on-surface-variant hover:text-error transition-all">
          <span className="material-symbols-outlined text-xs">delete_sweep</span>
          <span>清除对话</span>
        </button>
      </div>
    </div>
  );
}