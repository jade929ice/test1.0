import { useState } from 'react';
import { useModal } from '../../../shared/hooks/useModal';
import Modal from '../../../shared/components/Modal';


export default function UtilityTools() {
  const { isOpen, openModal, closeModal, modalContent } = useModal();

  const tools = [
  {
    name: 'gospider',
    desc: '一款高速、智能的网络爬虫工具',
    buttons: ['扫描', '结果'],
  },
  {
    name: 'dnsx',
    desc: '一款灵活、快速且高度可扩展的 DNS 工具包',
    buttons: ['扫描', '结果'],
  },
];

  const bottomTools = [
    { name: 'naabu', stats: ['存活主机：23', '开放端口数：107', '高危端口：34'] },
    
    { name: 'httpx', stats: ['探测域名：342', '存活：280'] },
    { name: 'observer_ward', stats: ['指纹库：11,102', '命中：112'] },
  ];

const [mergedDomains, setMergedDomains] = useState<string[]>([]);

  const alterxDomains = [
    'admin.example.com',
    'dev.example.com',
    'test.example.com',
  ];

  const shufflednsDomains = [
    'api.example.com',
    'mail.example.com',
    'cdn.example.com',
  ];

  const handleMerge = () => {
    setMergedDomains([
      ...alterxDomains,
      ...shufflednsDomains,
    ]);
  };

 



  return (
    <>
      
<section className="grid grid-cols-[auto_1fr] gap-md mb-lg">

  {/* 左侧标题 */}
  <div className="md:w-16 flex justify-center pt-8">
  <h2 className="vertical-text font-headline-lg text-headline-lg text-primary tracking-[0.2em] opacity-80 select-none">
    
  </h2>
</div>

  {/* 右侧边框区域 */}
  <div className="flex-1 border border-outline-variant rounded-xl p-lg bg-surface-containerhigh">

    {/* 右侧内容 */}
    <div className="flex-1 flex flex-col gap-lg">

      {/* 第一行 */}
      <div className="grid md:grid-cols-2 gap-lg">

        {/* alterx */}
        <div className="tool-card p-lg rounded-xl border border-outline-variant flex flex-col">
          <h2 className="text-4xl text-center mb-3">
            alterx
          </h2>

          <p className="text-center text-sm text-on-surface-variant mb-8">
            一款基于模式的子域名字典生成器
          </p>

          <button
            onClick={() =>
              openModal(
                'alterx - 生成',
                <div>生成内容占位</div>
              )
            }
            className="mt-auto bg-surface-container-highest py-3 rounded-full border border-outline-variant"
          >
            生成
          </button>
          
        </div>


        {/* shuffledns */}
        <div className="tool-card p-lg rounded-xl border border-outline-variant flex flex-col">
          <h2 className="text-4xl text-center mb-3">
            shuffledns
          </h2>

          <p className="text-center text-sm text-on-surface-variant">
            一款高速主动子域名解析与爆破工具
          </p>

          <div className="text-xs text-center text-on-surface-variant mt-8 mb-4">
            共 2,567 个有效子域名
          </div>

          <div className="grid grid-cols-3 gap-sm mt-auto">
            <button
              onClick={() =>
                openModal(
                  'shuffledns - 添加字典',
                  <div>添加字典</div>
                )
              }
              className="bg-surface-container-highest py-3 rounded-full border border-outline-variant"
            >
              添加字典
            </button>

            <button
              onClick={() =>
                openModal(
                  'shuffledns - 扫描',
                  <div>扫描占位</div>
                )
              }
              className="bg-surface-container-highest py-3 rounded-full border border-outline-variant"
            >
              扫描
            </button>

            <button
              onClick={() =>
                openModal(
                  'shuffledns - 结果',
                  <div>结果占位</div>
                )
              }
              className="bg-surface-container-highest py-3 rounded-full border border-outline-variant"
            >
              扫描结果
            </button>
          </div>
        </div>

      </div>

      {/* 第二行 */}
      <div className="grid md:grid-cols-2 gap-lg">
        <button
  onClick={handleMerge}
  className="bg-surface-container-highest py-3 rounded-full border border-outline-variant"
>
  合并
</button>

        <button
  onClick={() =>
    openModal(
      'Shuffledns 合并结果',
      <div className="max-h-[500px] overflow-y-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-outline-variant">
              <th className="text-left p-2">#</th>
              <th className="text-left p-2">域名</th>
            </tr>
          </thead>

          <tbody>
            {mergedDomains.map((domain, index) => (
              <tr
                key={domain}
                className="border-b border-outline-variant/30"
              >
                <td className="p-2">{index + 1}</td>
                <td className="p-2 font-data-mono">
                  {domain}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    )
  }
  className="bg-surface-container-highest py-3 rounded-full border border-outline-variant"
>
  合并结果
</button>
      </div>

        </div>
  </div>

</section>

    <section className="grid grid-cols-[auto_1fr] gap-md mb-lg">

  {/* 左侧标题 */}
  <div className="md:w-16 flex justify-center pt-8">
    <h2 className="vertical-text font-headline-lg text-headline-lg text-primary tracking-[0.2em] opacity-80 select-none">
      
    </h2>
  </div>

  {/* 右侧内容 */}
  <div className="tool-card p-xl rounded-xl bg-surface-container-high border border-outline-variant">

    <div className="grid grid-cols-1 md:grid-cols-3 gap-lg">

      {bottomTools.map((tool) => (
        <div
          key={tool.name}
          className="tool-card h-full p-md rounded-xl flex flex-col gap-sm bg-surface-container-highest border border-outline-variant"
        >
          <span className="font-headline-md text-headline-md text-center">
            {tool.name}
          </span>

          <div className="flex flex-col gap-1 text-[10px] text-on-surface-variant font-data-mono">
            {tool.stats.map((stat, i) => (
              <span key={i}>{stat}</span>
            ))}
          </div>

          <div className="grid grid-cols-2 gap-xs pt-xs">
            <button
              onClick={() =>
                openModal(`${tool.name} 扫描`, <div>扫描占位</div>)
              }
              className="bg-surface-container-highest py-xs rounded-lg text-[10px] font-label-caps border border-outline-variant hover:border-primary"
            >
              扫描
            </button>

            <button
              onClick={() =>
                openModal(`${tool.name} 结果`, <div>结果占位</div>)
              }
              className="bg-surface-container-highest py-xs rounded-lg text-[10px] font-label-caps border border-outline-variant hover:border-primary"
            >
              结果
            </button>
          </div>
        </div>
      ))}

    </div>

  </div>

</section>
{/* 汇总数据模块 */}
<section className="grid grid-cols-[auto_1fr] gap-md mb-lg">

  {/* 左侧标题 */}
  <div className="md:w-16 flex justify-center pt-8">
    <h2 className="vertical-text font-headline-lg text-headline-lg text-primary tracking-[0.2em] opacity-80 select-none">
      汇总结果
    </h2>
  </div>

  {/* 右侧内容 */}
  <div className="bg-surface-container-highest p-lg rounded-xl border border-outline-variant">

    <div className="grid grid-cols-2 md:grid-cols-4 gap-md">

      <div className="text-center">
        <div className="text-body-sm text-on-surface-variant">
          存活主机
        </div>
        <div className="text-display-small font-bold text-primary">
          23
        </div>
      </div>

      <div className="text-center">
        <div className="text-body-sm text-on-surface-variant">
          开放端口
        </div>
        <div className="text-display-small font-bold text-primary">
          107
        </div>
      </div>

      <div className="text-center">
        <div className="text-body-sm text-on-surface-variant">
          高危端口
        </div>
        <div className="text-display-small font-bold text-primary">
          34
        </div>
      </div>

      <div className="text-center">
        <div className="text-body-sm text-on-surface-variant">
          探测域名
        </div>
        <div className="text-display-small font-bold text-primary">
          342
        </div>
      </div>

      <div className="text-center">
        <div className="text-body-sm text-on-surface-variant">
          存活域名
        </div>
        <div className="text-display-small font-bold text-primary">
          280
        </div>
      </div>

      <div className="text-center">
        <div className="text-body-sm text-on-surface-variant">
          指纹库大小
        </div>
        <div className="text-display-small font-bold text-primary">
          11,102
        </div>
      </div>

      <div className="text-center">
        <div className="text-body-sm text-on-surface-variant">
          指纹命中
        </div>
        <div className="text-display-small font-bold text-primary">
          112
        </div>
      </div>

      <div className="text-center">
        <div className="text-body-sm text-on-surface-variant">
          工具总数
        </div>
        <div className="text-display-small font-bold text-primary">
          {tools.length + bottomTools.length}
        </div>
      </div>

    </div>
  </div>

</section>

      <Modal isOpen={isOpen} onClose={closeModal} title={modalContent.title} maxWidth="lg">
        {modalContent.content}
      </Modal>
    </>
  );
}