export default function ChatMessages() {
  const messages = [
    {
      role: 'ai',
      content: '您好。我是 CYBERCORE 智能辅助。当前已连接至监控集群，正在实时分析 <code class="text-secondary font-data-mono bg-secondary/10 px-1 rounded">internal-stack-01</code> 的扫描日志。',
      suggestions: [
        { title: 'SCAN STATUS', text: 'Ports: 80, 443, 8080 open. Detect v1.2.4 exploitable...', color: 'primary' },
        { title: 'VULN DISCOVERY', text: 'SQLi pattern detected in /api/v1/search parameter...', color: 'secondary' },
      ],
    },
    {
      role: 'user',
      content: '针对 8080 端口的漏洞，请生成一份利用路径的初步评估，并说明潜在的风险等级。',
    },
    {
      role: 'ai',
      content: '基于最新的威胁情报，8080 端口运行的 Apache 服务版本存在 **RCE (远程代码执行)** 风险。',
      extra: '[CRITICAL] CVSS 9.8 - Authentication Bypass leading to Shell access.\nVector: Network / Complexity: Low / Privileges: None',
      followup: '利用路径：攻击者可通过构造恶意的 HTTP 请求绕过 WAF，直接在应用服务器执行系统级指令。建议立即应用 Patch-04-A 或临时封禁外部 8080 访问。',
    },
  ];

  return (
    <div className="flex-1 overflow-y-auto p-lg space-y-xl bg-[radial-gradient(circle_at_top_right,rgba(14,165,233,0.05),transparent)]">
      {messages.map((msg, idx) => (
        <div key={idx} className={`flex gap-md ${msg.role === 'user' ? 'max-w-[85%] ml-auto flex-row-reverse' : 'max-w-[85%]'}`}>
          <div className={`w-8 h-8 shrink-0 rounded-lg flex items-center justify-center ${
            msg.role === 'ai' ? 'bg-primary-container' : 'bg-surface-container-highest border border-outline-variant'
          }`}>
            <span className="material-symbols-outlined text-on-primary-container text-lg">
              {msg.role === 'ai' ? 'terminal' : 'person'}
            </span>
          </div>
          <div className={`space-y-${msg.role === 'ai' ? 'md' : 'y-md'}`}>
            <div className={`${msg.role === 'ai' ? 'bg-surface-container' : 'bg-primary/10 border border-primary/30'} px-md py-3 rounded-2xl ${
              msg.role === 'ai' ? 'rounded-tl-none' : 'rounded-tr-none'
            } border border-outline-variant`}>
              <p className="text-body-md text-on-surface" dangerouslySetInnerHTML={{ __html: msg.content }} />
            </div>
            {msg.role === 'ai' && (msg as any).suggestions && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-sm">
                {(msg as any).suggestions.map((sug: any, i: number) => (
                  <div key={i} className="bg-slate-900 border border-outline-variant p-md rounded-xl hover:border-primary transition-all cursor-pointer group">
                    <div className="flex items-center justify-between mb-sm">
                      <span className={`text-label-caps text-${sug.color}`}>{sug.title}</span>
                      <span className={`material-symbols-outlined text-${sug.color} text-sm group-hover:translate-x-1 transition-transform`}>arrow_forward</span>
                    </div>
                    <div className="font-data-mono text-xs text-on-surface-variant">{sug.text}</div>
                  </div>
                ))}
              </div>
            )}
            {msg.role === 'ai' && (msg as any).extra && (
              <div className="bg-surface-container-lowest border border-outline-variant p-md rounded-lg font-data-mono text-xs text-secondary overflow-x-auto">
                {(msg as any).extra}
              </div>
            )}
            {msg.role === 'ai' && (msg as any).followup && (
              <p className="text-body-sm text-on-surface-variant">{(msg as any).followup}</p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}