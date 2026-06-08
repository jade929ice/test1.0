import { useModal } from '../../../shared/hooks/useModal';
import Modal from '../../../shared/components/Modal';

export default function ThreatModeling() {
  const { isOpen, openModal, closeModal, modalContent } = useModal();

  // Nmap 扫描配置模态框内容
  const NmapScanModal = () => (
    <div className="space-y-4">
      <div className="bg-black/40 rounded p-4 font-mono text-[11px] space-y-2">
        <p className="text-secondary">[配置] 扫描参数设置</p >
        <div className="flex justify-between text-xs">
          <span>扫描类型：</span>
          <span className="text-primary">SYN扫描 (-sS)</span>
        </div>
        <div className="flex justify-between text-xs">
          <span>端口范围：</span>
          <span className="text-primary">1-1000</span>
        </div>
        <div className="flex justify-between text-xs">
          <span>服务探测：</span>
          <span className="text-primary">版本识别 (-sV)</span>
        </div>
        <div className="flex justify-between text-xs">
          <span>操作系统检测：</span>
          <span className="text-primary">是 (-O)</span>
        </div>
      </div>
    </div>
  );

  // Nmap 扫描结果模态框内容
  const NmapResultsModal = () => (
    <div className="space-y-3">
      <div className="grid grid-cols-3 text-[10px] font-bold uppercase tracking-widest text-slate-500 border-b pb-2">
        <span>端口</span>
        <span>服务</span>
        <span>版本</span>
      </div>
      <div className="space-y-2 text-xs">
        <div className="grid grid-cols-3 border-b border-white/5 pb-2">
          <span className="text-primary">22/tcp</span>
          <span className="text-green-500">ssh</span>
          <span>OpenSSH 8.9p1</span>
        </div>
        <div className="grid grid-cols-3 border-b border-white/5 pb-2">
          <span className="text-primary">80/tcp</span>
          <span className="text-green-500">http</span>
          <span>Apache httpd 2.4.52</span>
        </div>
        <div className="grid grid-cols-3 border-b border-white/5 pb-2">
          <span className="text-primary">443/tcp</span>
          <span className="text-green-500">https</span>
          <span>nginx/1.18.0</span>
        </div>
      </div>
    </div>
  );

  const ThreatLevelModal = () => (
    <table className="w-full text-xs text-left border-collapse">
      <thead className="bg-white/5 text-primary">
        <tr>
          <th className="p-3 border border-white/10">等级</th>
          <th className="p-3 border border-white/10">描述</th>
          <th className="p-3 border border-white/10">响应时间</th>
        </tr>
      </thead>
      <tbody className="text-slate-300">
        <tr>
          <td className="p-3 border border-white/10 text-red-500 font-bold">P0 - 紧急</td>
          <td className="p-3 border border-white/10">系统核心功能受损，数据泄露</td>
          <td className="p-3 border border-white/10">&lt; 1小时</td>
        </tr>
        <tr>
          <td className="p-3 border border-white/10 text-orange-500">P1 - 高危</td>
          <td className="p-3 border border-white/10">非关键业务受损，特权提升风险</td>
          <td className="p-3 border border-white/10">&lt; 4小时</td>
        </tr>
        <tr>
          <td className="p-3 border border-white/10 text-yellow-500">P2 - 中危</td>
          <td className="p-3 border border-white/10">敏感信息暴露，局部拒绝服务</td>
          <td className="p-3 border border-white/10">24小时内</td>
        </tr>
      </tbody>
    </table>
  );

  const GenericModal = (type: string) => (
    <div className="p-4 bg-white/5 border border-white/10 rounded-lg">
      <p className="mb-4">详细分析 [{type}] 的相关评估参数：</p >
      <ul className="space-y-3 text-xs list-disc pl-5 text-slate-300">
        <li><strong>评估基准：</strong> 基于业界通用的 CVSS v3.1 评分系统。</li>
        <li><strong>探测逻辑：</strong> 结合静态代码分析 (SAST) 与动态应用扫描 (DAST)。</li>
        <li><strong>覆盖范围：</strong> 当前项目全量 API 与逻辑鉴权点。</li>
        <li><strong>实时状态：</strong> 数据每 15 分钟自动从扫描引擎同步一次。</li>
      </ul>
    </div>
  );

  const buttons = [
    { label: '威胁等级', content: <ThreatLevelModal /> },
    { label: 'STRIDE类别', content: GenericModal('STRIDE类别') },
    { label: '探测状态', content: GenericModal('探测状态') },
    { label: '安全控制', content: GenericModal('安全控制') },
    { label: '汇总分析', content: GenericModal('汇总分析') },
  ];

  return (
    <>
      {/* 漏洞扫描工具区域 - 完全模仿 CrawlerSection 布局 */}
      <section className="flex flex-col md:flex-row gap-8">
        {/* 左侧垂直标题 */}
        <div className="md:w-16 flex justify-center pt-8">
          <h2 className="vertical-text font-headline-lg text-headline-lg text-primary tracking-[0.2em] opacity-80 select-none">
            漏洞扫描
          </h2>
        </div>

        {/* 右侧工具卡片区 */}
        <div className="flex-1 flex flex-col gap-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Nmap 卡片 - 样式与 gospider/katana 完全一致 */}
            <div className="rounded-lg p-5 flex flex-col space-y-4 bg-surface-container-high border border-outline-variant hover:border-primary transition-all duration-200">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-bold text-primary">Nmap</h3>
                  <span className="text-[10px] text-slate-500 uppercase tracking-wider">端口扫描与指纹识别</span>
                </div>
                <div className="w-2 h-2 rounded-full bg-slate-600" />
              </div>
              <div className="space-y-1 text-xs text-slate-400 font-mono">
                <p>目标: <span className="text-slate-200">localhost</span></p >
                <p>配置: <span className="text-slate-200">深度[端口1-1000] 服务探测[✓] 操作系统[✓]</span></p >
              </div>
              <div className="pt-4 flex gap-4">
                <button
                  onClick={() => openModal('Nmap - 扫描', <NmapScanModal />)}
                  className="flex-1 bg-primary/20 hover:bg-primary/30 text-primary text-sm py-2 rounded-md border border-primary/20 transition font-medium"
                >
                  扫描
                </button>
                <button
                  onClick={() => openModal('Nmap - 结果', <NmapResultsModal />)}
                  className="flex-1 bg-white/5 hover:bg-white/10 text-white text-sm py-2 rounded-md border border-white/5 transition font-medium"
                >
                  结果
                </button>
              </div>
            </div>

            {/* 此处可继续添加其他漏洞扫描工具卡片，例如 OpenVAS、Nessus 等 */}
          </div>
        </div>
      </section>

      {/* 威胁建模分析主面板 */}
<section className="flex flex-col md:flex-row gap-8 mt-8">
  <div className="hidden md:block md:w-16" />

  <div className="flex-1">
    <div className="glass-panel rounded-xl p-8 border-primary/20 bg-surface-container-high/50 backdrop-blur-sm">
      <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-white tracking-tight">威胁建模分析</h2>
          <p className="text-primary text-sm mt-1 uppercase tracking-widest font-label-caps">Threat Modeling Analysis</p >
        </div>
        <div className="max-w-4xl mx-auto">
          <p className="text-on-surface-variant text-sm text-center mb-8 leading-relaxed">
            运用STRIDE方法进行全面的威胁建模，以识别六大类别中的安全威胁。
          </p >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4 mb-10">
            {[
              '欺骗行为 (Spoofing)', '篡改 (Tampering)', '否认 (Repudiation)',
              '信息披露 (Information Disclosure)', '服务中断 (Denial of Service)', '特权提升 (Elevation of Privilege)',
            ].map((item) => (
              <div key={item} className="flex justify-between items-center border-b border-white/5 pb-2">
                <span className="text-primary font-medium">{item.split(' ')[0]}</span>
                <span className="text-on-surface-variant text-xs">{item.split(' ').slice(1).join(' ')}</span>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {buttons.map((btn) => (
              <button
                key={btn.label}
                onClick={() => openModal(btn.label, btn.content)}
                className="bg-surface-container-highest hover:bg-primary-container/20 hover:border-primary/50 text-on-surface py-3 rounded-lg border border-outline-variant transition text-xs font-bold font-label-caps"
              >
                {btn.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
</section>
        

      {/* 通用模态框 */}
      <Modal isOpen={isOpen} onClose={closeModal} title={modalContent.title} maxWidth="2xl">
        {modalContent.content}
      </Modal>
    </>
  );
}