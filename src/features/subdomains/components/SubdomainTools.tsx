import { useModal } from '../../../shared/hooks/useModal';
import Modal from '../../../shared/components/Modal';

const tools = [
  { name: 'Subfinder', badge: 'PASSIVE ENUM', desc: '一款高速被动子域名枚举工具', subdomains: '578', pages: '6,782' },
  { name: 'one for all', badge: 'ALL-IN-ONE', desc: '一款功能强大的子域名收集工具', subdomains: '578', pages: '6,782' },
];

export default function SubdomainTools() {
  const { isOpen, openModal, closeModal, modalContent } = useModal();

  const ScanModal = () => <div className="p-4">扫描模拟...</div>;
  const ResultsModal = () => <div className="p-4">结果展示...</div>;

  return (
    <>
      <div className="grid grid-cols-[auto_1fr] gap-md mb-lg">

  <div className="md:w-16 flex justify-center pt-8">
    <h2 className="vertical-text font-headline-lg text-headline-lg text-primary tracking-[0.2em] opacity-80 select-none">
      子域名分析
    </h2>
  </div>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-lg">
          
          {tools.map((tool) => (
            <div key={tool.name} className="tool-card p-lg rounded-xl flex flex-col gap-md bg-surface-container-high border border-outline-variant hover:border-primary transition-all">
              <div className="flex justify-between items-start">
                <h2 className="font-headline-md text-headline-md">{tool.name}</h2>
                <span className="bg-secondary-container/20 text-secondary px-sm py-xs rounded font-label-caps text-[10px]">{tool.badge}</span>
              </div>
              
              <p className="font-body-sm text-body-sm text-on-surface-variant italic">{tool.desc}</p>
              <div className="flex gap-lg border-y border-outline-variant py-sm">
                <div className="flex flex-col">
                  <span className="text-label-caps font-label-caps text-on-surface-variant">子域名</span>
                  <span className="font-data-mono text-primary">{tool.subdomains}</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-label-caps font-label-caps text-on-surface-variant">网页总数</span>
                  <span className="font-data-mono text-primary">{tool.pages}</span>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-sm pt-xs">
                <button onClick={() => openModal(`${tool.name} 扫描`, <ScanModal />)} className="bg-surface-container-highest py-xs rounded-lg font-label-caps text-label-caps border border-outline-variant hover:border-primary">
                  扫描
                </button>
                <button onClick={() => openModal(`${tool.name} 结果`, <ResultsModal />)} className="bg-surface-container-highest py-xs rounded-lg font-label-caps text-label-caps border border-outline-variant hover:border-primary">
                  结果
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Modal isOpen={isOpen} onClose={closeModal} title={modalContent.title} maxWidth="lg">
        {modalContent.content}
      </Modal>
    </>
  );
}