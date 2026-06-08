import { useModal } from '../../../shared/hooks/useModal';
import Modal from '../../../shared/components/Modal';

export default function ConsolidationBox() {
  const { isOpen, openModal, closeModal, modalContent } = useModal();

  const RefineDomains = () => (
    <div className="space-y-4">
      <p className="text-body-sm text-on-surface-variant">选择需要从主列表中移除或精简的重复/无效域名。</p>
      <div className="space-y-2 max-h-60 overflow-y-auto">
        {['example.com', 'target.com', 'dev.target.co'].map((domain) => (
          <label key={domain} className="flex items-center gap-3 p-3 bg-surface-dim rounded border border-outline-variant/30 cursor-pointer hover:bg-primary/5">
            <input type="checkbox" defaultChecked className="rounded bg-surface-container border-outline-variant text-primary focus:ring-primary" />
            <span className="font-data-mono text-sm">{domain}</span>
          </label>
        ))}
      </div>
      <div className="flex gap-4">
        <button className="flex-1 py-2.5 bg-surface-container-highest rounded-lg font-bold hover:bg-primary/10" onClick={closeModal}>
          取消
        </button>
        <button className="flex-1 py-2.5 bg-primary text-on-primary rounded-lg font-bold shadow-lg hover:opacity-90">
          应用精简
        </button>
      </div>
    </div>
  );

  const ConsolidateStatus = () => (
    <div className="text-center space-y-6">
      <div className="relative inline-block">
        <div className="w-20 h-20 border-4 border-primary/20 border-t-primary rounded-full animate-spin" />
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="material-symbols-outlined text-3xl text-primary">merge_type</span>
        </div>
      </div>
      <div className="space-y-2">
        <h3 className="font-headline-md text-headline-md text-on-surface">正在整合根域名</h3>
        <p className="text-body-sm text-on-surface-variant">正在将 8 个独特根域名合并至主列表...</p>
      </div>
      <div className="h-1.5 w-full bg-surface-container-highest rounded-full overflow-hidden">
        <div className="h-full bg-secondary animate-[progress_2s_ease-in-out_infinite]" style={{ width: '100%' }} />
      </div>
      <button className="w-full py-3 bg-surface-container-highest text-on-surface font-bold rounded-lg hover:bg-primary/10" onClick={closeModal}>
        完成
      </button>
    </div>
  );

  const InvestigateWhois = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-2 gap-4">
        <div className="p-4 bg-surface-dim rounded-xl border border-outline-variant/30 space-y-3">
          <h4 className="text-label-caps text-outline">Whois 信息</h4>
          <div className="text-xs font-data-mono space-y-1">
            <p><span className="text-outline">注册商:</span> Google LLC</p>
            <p><span className="text-outline">到期日:</span> 2026-05-15</p>
            <p><span className="text-outline">联系人:</span> Privacy Service</p>
          </div>
        </div>
        <div className="p-4 bg-surface-dim rounded-xl border border-outline-variant/30 space-y-3">
          <h4 className="text-label-caps text-outline">DNS 历史</h4>
          <div className="text-xs font-data-mono space-y-1">
            <p>A: 104.21.35.12</p>
            <p>MX: mx1.google.com</p>
            <p>TXT: v=spf1 include...</p>
          </div>
        </div>
      </div>
      <button className="w-full py-3 bg-primary text-on-primary font-bold rounded-lg hover:opacity-90" onClick={closeModal}>
        生成完整报告
      </button>
    </div>
  );

  const VerifyConnectivity = () => (
    <div className="space-y-4">
      <div className="space-y-2">
        {[
          { domain: 'example.com', status: 'REACHABLE (24ms)', color: 'secondary' },
          { domain: 'target.com', status: 'REACHABLE (42ms)', color: 'secondary' },
          { domain: 'old.target.io', status: 'TIMED OUT', color: 'error' },
        ].map((item) => (
          <div key={item.domain} className={`flex items-center justify-between p-3 bg-surface-dim rounded border-l-4 border-${item.color}`}>
            <span className="font-data-mono text-sm text-on-surface">{item.domain}</span>
            <span className={`text-[10px] text-${item.color} font-bold`}>{item.status}</span>
          </div>
        ))}
      </div>
      <button className="w-full py-3 bg-secondary text-on-secondary font-bold rounded-lg hover:opacity-90" onClick={closeModal}>
        重新校验
      </button>
    </div>
  );

  const WildcardSuccess = () => (
    <div className="text-center space-y-4">
      <div className="w-16 h-16 bg-primary/20 text-primary rounded-full flex items-center justify-center mx-auto">
        <span className="material-symbols-outlined text-4xl">verified</span>
      </div>
      <h3 className="font-headline-md text-headline-md text-on-surface">通配符已添加</h3>
      <p className="font-body-sm text-on-surface-variant">根域名已成功整合并添加为子域名枚举的通配符目标。</p>
      <button className="w-full py-3 bg-primary text-on-primary font-bold rounded-lg hover:opacity-90" onClick={closeModal}>
        确定
      </button>
    </div>
  );

  return (
    <>
      <div className="glass-card rounded-2xl p-10 border-2 border-primary/20 bg-gradient-to-b from-surface-container to-surface-dim relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#89ceff 0.5px, transparent 0.5px)', backgroundSize: '20px 20px' }} />
        <div className="text-center space-y-4 mb-12">
          <h3 className="font-headline-lg text-headline-lg text-on-surface">整合根域名</h3>
          <p className="font-body-md text-on-surface-variant max-w-2xl mx-auto">
            每种工具均已为您侦测出根域名。将这些域名整合至一份包含唯一域名的列表中，并将其作为子域名枚举时的通配符目标加以添加。
          </p>
        </div>
        <div className="flex justify-center gap-24 mb-12">
          <div className="text-center group cursor-pointer">
            <div className="w-24 h-24 rounded-full border-2 border-primary flex items-center justify-center mb-3 group-hover:bg-primary/10 transition-colors">
              <span className="text-4xl font-headline-xl text-primary">8</span>
            </div>
            <span className="font-label-caps text-label-caps text-on-surface-variant">独特根域名</span>
          </div>
          <div className="text-center group cursor-pointer">
            <div className="w-24 h-24 rounded-full border-2 border-outline flex items-center justify-center mb-3 group-hover:bg-surface-variant transition-colors">
              <span className="text-4xl font-headline-xl text-on-surface">0</span>
            </div>
            <span className="font-label-caps text-label-caps text-outline">通配符目标已创建</span>
          </div>
        </div>
        <div className="flex flex-wrap justify-center gap-4">
          <button onClick={() => openModal('精简根域名', <RefineDomains />)} className="px-6 py-2.5 bg-surface-container-highest border border-outline-variant text-sm font-bold rounded-lg hover:border-primary transition-all">
            精简根域名
          </button>
          <button onClick={() => openModal('正在整合根域名', <ConsolidateStatus />)} className="px-6 py-2.5 bg-surface-container-highest border border-outline-variant text-sm font-bold rounded-lg hover:border-primary transition-all">
            巩固
          </button>
          <button onClick={() => openModal('域名调查报告', <InvestigateWhois />)} className="px-6 py-2.5 bg-surface-container-highest border border-outline-variant text-sm font-bold rounded-lg hover:border-primary transition-all">
            调查
          </button>
          <button onClick={() => openModal('连通性校验', <VerifyConnectivity />)} className="px-6 py-2.5 bg-surface-container-highest border border-outline-variant text-sm font-bold rounded-lg hover:border-primary transition-all">
            验证
          </button>
          <button onClick={() => openModal('通配符已添加', <WildcardSuccess />)} className="px-8 py-2.5 bg-primary text-on-primary text-sm font-bold rounded-lg shadow-lg hover:opacity-90 active:scale-95 transition-all">
            添加通配符目标
          </button>
        </div>
      </div>
      <Modal isOpen={isOpen} onClose={closeModal} title={modalContent.title} maxWidth="lg">
        {modalContent.content}
      </Modal>
    </>
  );
}