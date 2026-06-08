interface NmapCardProps {
  onScan: () => void;
  onResult: () => void;
}

export default function NmapCard({
  onScan,
  onResult,
}: NmapCardProps) {
  return (
    <div className="glass-panel rounded-xl p-6 border-primary/20 bg-surface-container-high/50 backdrop-blur-sm">
      <div className="text-center mb-4">
        <h3 className="text-xl font-bold text-white">
          Nmap 服务识别
        </h3>
      </div>

      <div className="max-w-md mx-auto">
        <div className="tool-card p-md rounded-xl flex flex-col gap-sm bg-surface-container-high border border-outline-variant">
          <span className="text-center font-bold">
            nmap
          </span>

          <div className="text-[10px] font-data-mono">
            <span>识别服务：ssh, Apache</span>
            <span>操作系统：Linux</span>
          </div>

          <div className="grid grid-cols-2 gap-2">
            <button onClick={onScan}>扫描</button>
            <button onClick={onResult}>结果</button>
          </div>
        </div>
      </div>
    </div>
  );
}