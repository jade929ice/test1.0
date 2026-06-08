const historyItems = [
  { title: '分析目标主机端口漏洞', date: '2023-11-24 14:20', active: true },
  { title: 'FEROXBUSTER 扫描路径聚合', date: '2023-11-23 09:15', active: false },
  { title: '子域名爆破结果资产梳理', date: '2023-11-22 18:45', active: false },
  { title: '核心数据库权限审计建议', date: '2023-11-21 11:30', active: false },
];

export default function ChatSidebar() {
  return (
    <div className="w-80 hidden lg:flex flex-col glass-card rounded-xl overflow-hidden shadow-2xl">
      <div className="p-md border-b border-outline-variant flex justify-between items-center bg-surface-container-high">
        <h3 className="font-label-caps text-label-caps text-primary">历史记录</h3>
        <button className="material-symbols-outlined text-on-surface-variant hover:text-primary transition-colors">add_circle</button>
      </div>
      <div className="flex-1 overflow-y-auto p-sm space-y-sm">
        {historyItems.map((item) => (
          <div
            key={item.title}
            className={`p-md rounded-lg cursor-pointer transition-all ${
              item.active
                ? 'bg-surface-container-highest border-l-4 border-primary'
                : 'hover:bg-surface-container-highest/50 border border-transparent hover:border-outline-variant'
            }`}
          >
            <div className="text-body-sm font-medium text-on-surface truncate">{item.title}</div>
            <div className="text-[10px] text-on-surface-variant/60 font-data-mono mt-1">{item.date}</div>
          </div>
        ))}
      </div>
    </div>
  );
}