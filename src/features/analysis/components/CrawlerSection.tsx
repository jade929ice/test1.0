import { useModal } from '../../../shared/hooks/useModal';
import Modal from '../../../shared/components/Modal';

export default function CrawlerSection() {
  const { isOpen, openModal, closeModal, modalContent } = useModal();

  const ScanModal = () => (
    <div className="space-y-4">
      <div className="flex justify-between text-xs">
        <span>爬取进度</span>
        <span className="text-primary">45%</span>
      </div>
      <div className="w-full bg-surface-container rounded-full h-2">
        <div className="bg-primary h-2 rounded-full" style={{ width: '45%' }} />
      </div>
      <div className="bg-black/40 rounded p-4 font-mono text-[11px] h-40 overflow-y-auto">
        <p className="text-secondary">[信息] 正在爬取 URL...</p>
        <p className="text-slate-400">[发现] /api/v1/users</p>
        <p className="text-slate-400">[发现] /admin/login</p>
      </div>
    </div>
  );

  const ResultsModal = () => (
    <div className="space-y-3">
      <div className="grid grid-cols-3 text-[10px] font-bold uppercase tracking-widest text-slate-500 border-b pb-2">
        <span>URL</span>
        <span>状态码</span>
        <span>大小</span>
      </div>
      <div className="space-y-2 text-xs">
        <div className="grid grid-cols-3 border-b pb-2">
          <span className="text-primary">/index.html</span>
          <span className="text-green-500">200</span>
          <span>12KB</span>
        </div>
        <div className="grid grid-cols-3 border-b pb-2">
          <span className="text-primary">/about</span>
          <span className="text-green-500">200</span>
          <span>8KB</span>
        </div>
      </div>
    </div>
  );

  return (
    <>
      <section className="flex flex-col md:flex-row gap-8">
        <div className="md:w-16 flex justify-center pt-8">
        <h2 className="vertical-text font-headline-lg text-headline-lg text-primary tracking-[0.2em] opacity-80 select-none">
          爬虫
        </h2>
      </div>
        <div className="flex-1 flex flex-col gap-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { name: 'gospider', desc: 'JS 爬虫', target: 'https://example.com', config: '深度[3] 并发[5] 延迟[500ms] 解析JS[✓]' },
              { name: 'katana', desc: '下一代爬虫', target: 'https://example.com', config: '深度[5] 表单填充[✓] 自定义Header[✓] 输出[JSON]' },
            ].map((tool) => (
              <div key={tool.name} className="tool-card rounded-lg p-5 flex flex-col space-y-4 bg-surface-container-high border border-outline-variant hover:border-primary">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-xl font-bold text-primary">{tool.name}</h3>
                    <span className="text-[10px] text-slate-500 uppercase tracking-wider">{tool.desc}</span>
                  </div>
                  <div className="w-2 h-2 rounded-full bg-slate-600" />
                </div>
                <div className="space-y-1 text-xs text-slate-400 font-mono">
                  <p>目标: <span className="text-slate-200">{tool.target}</span></p>
                  <p>配置: <span className="text-slate-200">{tool.config}</span></p>
                </div>
                <div className="pt-4 flex gap-4">
                  <button onClick={() => openModal(`${tool.name} - 扫描`, <ScanModal />)} className="flex-1 bg-primary/20 hover:bg-primary/30 text-primary text-sm py-2 rounded-md border border-primary/20 transition font-medium">
                    扫描
                  </button>
                  <button onClick={() => openModal(`${tool.name} - 结果`, <ResultsModal />)} className="flex-1 bg-white/5 hover:bg-white/10 text-white text-sm py-2 rounded-md border border-white/5 transition font-medium">
                    结果
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Modal isOpen={isOpen} onClose={closeModal} title={modalContent.title} maxWidth="2xl">
        {modalContent.content}
      </Modal>
    </>
  );
}