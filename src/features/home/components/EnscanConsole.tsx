import { useState, useEffect } from 'react';
import { useModal } from '../../../shared/hooks/useModal';
import Modal from '../../../shared/components/Modal';
import { Button } from '../../../shared/components';

export default function EnscanConsole() {
  const [scanStatus, setScanStatus] = useState('已完成 (2025-06-14 15:32:10)');
  const { isOpen, openModal, closeModal, modalContent } = useModal();

  useEffect(() => {
    const interval = setInterval(() => {
      setScanStatus(`已完成 (${new Date().toLocaleString()})`);
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  const HistoryTable = () => (
    <table className="w-full text-sm font-data-mono">
      <thead className="text-outline border-b border-outline-variant/30">
        <tr>
          <th className="text-left pb-4 font-label-caps">时间戳</th>
          <th className="text-left pb-4 font-label-caps">目标</th>
          <th className="text-left pb-4 font-label-caps">状态</th>
        </tr>
      </thead>
      <tbody className="text-on-surface-variant">
        {[
          ['2025-06-14 15:32', 'example.com', '已完成'],
          ['2025-06-13 10:15', 'internal.target.io', '已完成'],
          ['2025-06-12 22:45', '192.168.1.0/24', '失败'],
        ].map((row, i) => (
          <tr key={i} className="hover:bg-primary/5 transition-colors">
            <td className="py-4">{row[0]}</td>
            <td className="py-4">{row[1]}</td>
            <td className={row[2] === '已完成' ? 'text-secondary' : 'text-error'}>{row[2]}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );

  const AddTargetForm = () => (
    <div className="space-y-4">
      <input
        type="text"
        placeholder="添加"
        className="w-full bg-surface-dim border border-outline-variant rounded-lg p-3 text-on-surface font-data-mono focus:ring-2 focus:ring-primary outline-none"
      />
     
      <Button className="w-full" onClick={closeModal}>
        立即添加
      </Button>
    </div>
  );

  const ScanSimulator = () => {
    const [progress, setProgress] = useState(0);
    useEffect(() => {
      const interval = setInterval(() => {
        setProgress((p) => (p < 100 ? p + 5 : 100));
      }, 300);
      return () => clearInterval(interval);
    }, []);
    return (
      <div className="space-y-6">
        <div className="flex justify-between text-xs font-data-mono">
          <span className="text-outline">总进度: {progress}%</span>
          <span className="text-primary">正在枚举子域名...</span>
        </div>
        <div className="h-2 w-full bg-surface-container-highest rounded-full overflow-hidden">
          <div className="h-full bg-primary transition-all duration-300" style={{ width: `${progress}%` }} />
        </div>
        <div className="bg-surface-dim rounded-lg p-4 font-data-mono text-xs text-on-surface-variant h-48 overflow-y-auto border border-outline-variant/20">
          <p className="text-outline">[15:40:01] 初始化扫描引擎...</p>
          <p className="text-outline">[15:40:02] 加载指纹库 v4.2.1</p>
          <p className="text-secondary">[15:40:05] 发现活动主机: 104.21.35.12</p>
          <p className="text-primary">[15:40:10] 检索 SSL 证书: *.target.com</p>
        </div>
        <div className="flex gap-4">
          <Button variant="outline" className="flex-1 border-error text-error hover:bg-error/10">
            停止扫描
          </Button>
          <Button variant="outline" className="flex-1">
            后台运行
          </Button>
        </div>
      </div>
    );
  };

  const ResultsView = () => (
  <div className="space-y-4">
    <div className="flex items-center justify-between border-b border-outline-variant/30 pb-3">
      <h4 className="font-label-caps text-outline">发现域名</h4>
      <span className="text-primary font-data-mono">42 个</span>
    </div>

    <div className="max-h-[500px] overflow-y-auto rounded-lg border border-outline-variant/30">
      {[
        'www.example.com',
        'api.example.com',
        'admin.example.com',
        'dev.example.com',
        'test.example.com',
        'mail.example.com',
        'cdn.example.com',
        'vpn.example.com',
        'oa.example.com',
        'git.example.com',
      ].map((domain, index) => (
        <div
          key={domain}
          className="flex items-center justify-between px-4 py-3 border-b border-outline-variant/20 last:border-b-0 hover:bg-primary/5"
        >
          <span className="font-data-mono text-on-surface">
            {domain}
          </span>

          <span className="text-xs text-outline">
            #{index + 1}
          </span>
        </div>
      ))}
    </div>
  </div>
);

  return (
    <>
      <div className="glass-card rounded-xl p-8 active-glow relative overflow-hidden group">
        <div className="absolute -right-20 -top-20 w-64 h-64 bg-primary opacity-5 blur-[120px] rounded-full group-hover:opacity-10 transition-opacity" />
        <div className="text-center space-y-4 mb-10 relative z-10">
          <h3 className="font-headline-xl text-headline-xl text-on-surface">ENScan</h3>
          <p className="font-body-lg text-body-lg text-on-surface-variant">专注于国内企业信息收集的开源情报工具</p>
          <div className="mt-6 flex flex-col items-center gap-2">
            <div className="flex items-center gap-3 text-data-mono font-data-mono text-outline">
              <span>当前扫描目标:</span>
              <span className="text-primary-fixed-dim">example.com</span>
              <span className="bg-surface-variant px-2 py-0.5 rounded text-xs text-on-surface-variant">(ASN: 15169)</span>
            </div>
            <div className="flex items-center gap-2 text-secondary font-data-mono">
              <span className="w-3 h-3 rounded-full bg-secondary shadow-[0_0_10px_#4edea3]" />
              扫描状态: {scanStatus}
            </div>
          </div>
        </div>
        <div className="flex flex-wrap justify-center gap-4 relative z-10">
          <Button variant="outline" onClick={() => openModal('扫描历史记录', <HistoryTable />)}>
            <span className="material-symbols-outlined text-lg">history</span>
            历史记录
          </Button>
          <Button variant="outline" onClick={() => openModal('添加扫描目标', <AddTargetForm />)}>
            <span className="material-symbols-outlined text-lg">add_circle</span>
            添加目标
          </Button>
          <Button variant="primary" onClick={() => openModal('正在执行实时扫描', <ScanSimulator />)}>
            <span className="material-symbols-outlined text-lg">play_arrow</span>
            扫描
          </Button>
          <Button variant="secondary" onClick={() => openModal('扫描结果汇总: example.com', <ResultsView />)}>
            <span className="material-symbols-outlined text-lg">bar_chart</span>
            结果
          </Button>
        </div>
      </div>
      <Modal isOpen={isOpen} onClose={closeModal} title={modalContent.title} maxWidth="4xl">
        {modalContent.content}
      </Modal>
    </>
  );
}