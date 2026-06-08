import { useModal } from '../../../shared/hooks/useModal';
import Modal from '../../../shared/components/Modal';

export default function AmassHero() {
  const { isOpen, openModal, closeModal, modalContent } = useModal();

  const ScanSimulator = () => (
    <div className="flex flex-col items-center gap-xl py-lg">
      <div className="relative flex items-center justify-center">
        <div className="w-32 h-32 rounded-full border-4 border-primary/20 animate-pulse" />
        <div className="absolute inset-0 w-32 h-32 rounded-full border-t-4 border-primary animate-spin" />
        <span className="absolute font-data-mono text-primary text-headline-md">75%</span>
      </div>
      <div className="w-full bg-surface-container-highest h-2 rounded-full overflow-hidden">
        <div className="bg-primary h-full w-3/4 animate-[shimmer_2s_infinite]" />
      </div>
      <p className="text-body-sm text-on-surface-variant italic font-data-mono">Status: Analyzing target infrastructure...</p>
    </div>
  );

  const ResultsView = () => (
    <div className="max-h-80 overflow-y-auto">
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="border-b border-outline-variant bg-surface-container-highest">
            <th className="p-xs font-label-caps text-on-surface-variant">Asset Name</th>
            <th className="p-xs font-label-caps text-on-surface-variant">IP Address</th>
            <th className="p-xs font-label-caps text-on-surface-variant">Port/Type</th>
          </tr>
        </thead>
        <tbody className="font-data-mono text-body-sm">
          {[
            ['dev.cybercore.io', '172.24.8.102', 'HTTPS'],
            ['api.internal.svc', '10.0.42.11', '8080/TCP'],
            ['stage.portal.com', '203.0.113.5', '443/TCP'],
          ].map((row, i) => (
            <tr key={i} className="border-b border-outline-variant/30 hover:bg-surface-variant">
              <td className="p-xs text-primary">{row[0]}</td>
              <td className="p-xs">{row[1]}</td>
              <td className="p-xs">{row[2]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  return (
    <>
      <div className="grid grid-cols-[auto_1fr] gap-md mb-lg">
         <div className="md:w-16 flex justify-center pt-8">
          <h2 className="vertical-text font-headline-lg text-headline-lg text-primary tracking-[0.2em] opacity-80 select-none">
              网络资产收集
            </h2>
        </div>
        <div className="tool-card p-xl rounded-xl relative overflow-hidden group bg-surface-container-high border border-outline-variant hover:border-primary transition-all">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-50" />
          <div className="flex flex-col items-center text-center gap-md relative z-10">
            <h1 className="font-headline-xl text-headline-xl text-on-surface mb-xs">Amass Enum</h1>
            <p className="font-body-md text-body-md text-primary max-w-3xl">
              一个通过被动数据收集与主动探测技术，系统化地枚举目标子域名、相关 IP 地址及自治系统（ASN）等信息的工具
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-lg w-full max-w-4xl my-lg">
              {[
                { label: '扫描到的网页总数', value: '1,247', color: 'primary' },
                { label: '活跃子域名数量', value: '289', color: 'secondary' },
                { label: '唯一 IP 地址数', value: '87', color: 'tertiary' },
                { label: '关联 ASN 数量', value: '12', color: 'on-surface' },
              ].map((stat) => (
                <div key={stat.label} className="flex flex-col border-l border-outline-variant pl-md">
                  <span className="font-label-caps text-label-caps text-on-surface-variant">{stat.label}</span>
                  <span className={`font-data-mono text-headline-md text-${stat.color}`}>{stat.value}</span>
                </div>
              ))}
            </div>
            <div className="flex flex-wrap justify-center gap-md">
              <button onClick={() => openModal('Amass 扫描记录', <ResultsView />)} className="bg-surface-container-highest px-xl py-sm rounded-full font-label-caps text-label-caps border border-outline-variant hover:border-primary transition-all">
                扫描记录
              </button>
              <button onClick={() => openModal('全部记录', <ResultsView />)} className="bg-surface-container-highest px-xl py-sm rounded-full font-label-caps text-label-caps border border-outline-variant hover:border-primary transition-all">
                全部记录
              </button>
              <button onClick={() => openModal('DNS 结果列表', <ResultsView />)} className="bg-surface-container-highest px-xl py-sm rounded-full font-label-caps text-label-caps border border-outline-variant hover:border-primary transition-all">
                DNS结果
              </button>
              <button onClick={() => openModal('子域名详情', <ResultsView />)} className="bg-surface-container-highest px-xl py-sm rounded-full font-label-caps text-label-caps border border-outline-variant hover:border-primary transition-all">
                子域名
              </button>
              <button onClick={() => openModal('Amass 全量扫描', <ScanSimulator />)} className="bg-primary text-on-primary px-xl py-sm rounded-full font-label-caps text-label-caps shadow-lg shadow-primary/20 hover:brightness-110 active:scale-95 transition-all">
                开始扫描
              </button>
            </div>
          </div>
          <div className="absolute -bottom-10 -right-10 opacity-5 pointer-events-none group-hover:opacity-10 transition-opacity">
            <span className="material-symbols-outlined text-[200px]" style={{ fontVariationSettings: "'FILL' 1" }}>security</span>
          </div>
        </div>
      </div>
      <Modal isOpen={isOpen} onClose={closeModal} title={modalContent.title} maxWidth="4xl">
        {modalContent.content}
      </Modal>
    </>
  );
}