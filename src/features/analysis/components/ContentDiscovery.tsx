import { useModal } from '../../../shared/hooks/useModal';
import Modal from '../../../shared/components/Modal';

const discoveryTools = [
  { name: 'feroxbuster', type: '安全工具', target: 'https://example.com', params: '线程[50] 超时[5s] 代码[404]' },
  { name: 'Waybackurls', type: '存档工具', target: 'https://example.com', params: '范围: [全部] [仅 2024+] [已过滤]' },
  { name: 'dirsearch', type: '目录爆破', target: 'https://example.com', params: '递归: [3] 重定向: [是]' },
];

export default function ContentDiscovery() {
  const { isOpen, openModal, closeModal, modalContent } = useModal();

  const renderModalContent = (tool: string, action: string) => {
    if (action === '扫描') {
      return (
        <div className="space-y-4">
          <div className="flex justify-between text-xs">
            <span>扫描进度</span>
            <span className="text-primary">64%</span>
          </div>
          <div className="w-full bg-surface-container rounded-full h-2">
            <div className="bg-primary h-2 rounded-full" style={{ width: '64%' }} />
          </div>
          <div className="bg-black/40 rounded p-4 font-mono text-[11px] h-48 overflow-y-auto">
            <p className="text-secondary">[信息] 正在扫描 {tool} 模式...</p>
            <p className="text-slate-400">[等待] 正在从远程池请求资产</p>
            <p className="text-slate-400">[成功] 已接收 142 个端点</p>
          </div>
        </div>
      );
    } else if (action === '结果') {
      return (
        <div className="space-y-3">
          <div className="grid grid-cols-4 text-[10px] font-bold uppercase tracking-widest text-slate-500 border-b border-white/5 pb-2">
            <span>请求方法</span>
            <span className="col-span-2">端点</span>
            <span className="text-right">状态码</span>
          </div>
          <div className="space-y-2 text-xs">
            <div className="grid grid-cols-4 border-b border-white/5 pb-2">
              <span className="text-secondary">GET</span>
              <span className="col-span-2 text-slate-200">/assets/config.json</span>
              <span className="text-right text-green-500">200 OK</span>
            </div>
            <div className="grid grid-cols-4 border-b border-white/5 pb-2">
              <span className="text-secondary">GET</span>
              <span className="col-span-2 text-slate-200">/uploads/backup.sql.gz</span>
              <span className="text-right text-green-500">200 OK</span>
            </div>
          </div>
        </div>
      );
    } else if (action === '添加字典') {
      return (
        <div className="space-y-4">
          <p className="text-xs">选择或上传用于资产发现的单词列表。</p>
          <div className="grid grid-cols-1 gap-2">
            <label className="flex items-center gap-3 p-3 bg-surface-container rounded-lg border border-white/5 cursor-pointer hover:bg-white/5">
              <input type="radio" name="dict" className="text-primary focus:ring-primary" />
              <span className="text-xs">common_web_paths.txt (14.2k)</span>
            </label>
            <label className="flex items-center gap-3 p-3 bg-surface-container rounded-lg border border-white/5 cursor-pointer hover:bg-white/5">
              <input type="radio" name="dict" className="text-primary focus:ring-primary" />
              <span className="text-xs">raft-large-directories.txt (62k)</span>
            </label>
          </div>
          <button className="w-full bg-primary text-on-primary py-2 rounded font-bold text-xs mt-4" onClick={closeModal}>
            确认选择
          </button>
        </div>
      );
    }
    return null;
  };

  return (
    <>
      <section className="flex flex-col md:flex-row gap-8">
        <div className="md:w-16 flex justify-center pt-8">
          <h2 className="vertical-text font-headline-lg text-headline-lg text-primary tracking-[0.2em] opacity-80 select-none">
          内容发现
        </h2>
        </div>
        <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-6">
          {discoveryTools.map((tool) => (
            <div key={tool.name} className="tool-card rounded-lg p-5 flex flex-col space-y-4 bg-surface-container-high border border-outline-variant hover:border-primary">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-bold text-primary">{tool.name}</h3>
                  <span className="text-[10px] text-slate-500 uppercase tracking-wider">{tool.type}</span>
                </div>
                <div className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.6)]" />
              </div>
              <div className="space-y-1 text-xs text-slate-400 font-mono">
                <p>目标: <span className="text-slate-200">{tool.target}</span></p>
                <p>参数: <span className="text-slate-200">{tool.params}</span></p>
              </div>
              <div className="pt-4 flex gap-2">
                {tool.name === 'feroxbuster' && (
                  <button onClick={() => openModal(`${tool.name} - 添加字典`, renderModalContent(tool.name, '添加字典'))} className="flex-1 bg-white/5 hover:bg-white/10 text-white text-[10px] py-1.5 rounded border border-white/5">
                    添加字典
                  </button>
                )}
                <button onClick={() => openModal(`${tool.name} - 扫描`, renderModalContent(tool.name, '扫描'))} className="flex-1 bg-primary/20 hover:bg-primary/30 text-primary text-[10px] py-1.5 rounded border border-primary/20">
                  扫描
                </button>
                <button onClick={() => openModal(`${tool.name} - 结果`, renderModalContent(tool.name, '结果'))} className="flex-1 bg-white/5 hover:bg-white/10 text-white text-[10px] py-1.5 rounded border border-white/5">
                  结果
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
      <Modal isOpen={isOpen} onClose={closeModal} title={modalContent.title} maxWidth="2xl">
        {modalContent.content}
      </Modal>
    </>
  );
}