import { useModal } from '../../../shared/hooks/useModal';
import Modal from '../../../shared/components/Modal';

const tools = [
  {
    name: 'amss-Intel',
    badge: 'OSINT',
    desc: '情报收集与ASN枚举功能用于全面网络范围侦查。',
    stats: [
      { label: '发现关联资产: 3个 (IP 203.0.113.5、域名 dev.target.co)', color: 'secondary' },
      { label: '威胁情报: 1个中危告警 (过期SSL证书)', color: 'tertiary' },
    ],
  },
  {
    name: 'CRT',
    badge: 'CERTIFICATE',
    desc: '用于网络情报发现的OSINT工具,追踪SSL证书透明度日志。',
    extra: '- 近期新证书: 2025-06-10 颁发 *.newapi.target.com',
  },
];

const extraTools = [
  {
    name: 'google hacking',
    desc: '利用搜索引擎对公司域名、子域名及公开信息的先进搜索侦察技术。',
    buttons: ['生成', '添加'],
  },
  {
    name: 'Fofa语法',
    desc: '生成插件',
    buttons: ['生成', '添加'],
  },
  {
    name: 'whoxy',
    desc: '使用Whoxy进行反向Whois查询，以查找相关注册的其他域名或联系信息。',
    buttons: ['生成', '添加'],
  },
];

export default function DomainTools() {
  const { isOpen, openModal, closeModal, modalContent } = useModal();

  const HistoryModal = () => <div className="p-4 text-on-surface-variant">历史记录内容占位</div>;
  const ScanModal = () => <div className="p-4 text-on-surface-variant">扫描进度占位</div>;
  const ResultsModal = () => <div className="p-4 text-on-surface-variant">扫描结果占位</div>;

  const GoogleHackingModal = () => (
  <div className="p-4 space-y-4 text-sm text-on-surface-variant">
    <div>
      <h4 className="font-semibold text-primary mb-2">
        Google Hacking 语法生成
      </h4>

      <div className="space-y-2">
        <input
          placeholder="目标域名，例如 target.com"
          className="w-full bg-surface-container border border-outline/30 rounded-lg px-3 py-2"
        />

        <textarea
          rows={6}
          className="w-full bg-surface-container border border-outline/30 rounded-lg px-3 py-2 font-mono"
          defaultValue={`site:target.com

site:target.com inurl:admin

site:target.com ext:sql

site:target.com ext:xlsx

site:target.com intitle:"index of"

site:target.com filetype:pdf`}
        />
      </div>
    </div>

    <div className="flex gap-2 justify-end">
      <button className="px-4 py-2 rounded-lg bg-primary text-on-primary">
        生成搜索语法
      </button>
    </div>
  </div>
);

const FofaGenerateModal = () => (
  <div className="space-y-6 text-sm">

    {/* FOFA查询语法 */}
    <div className="bg-surface-container rounded-xl p-4 border border-outline/20">
      <h4 className="font-semibold text-on-surface mb-3">
        FOFA 查询语法
      </h4>

      <input
        type="text"
        placeholder='例如：app="Apache" && country="CN"'
        className="w-full rounded-lg border border-outline/20 bg-surface px-4 py-3"
      />

      <p className="text-xs text-on-surface-variant mt-3">
        查询语法参考 FOFA 文档，支持 && / || / () 等。
      </p>

      <div className="flex flex-wrap gap-2 mt-4">
        <button className="px-3 py-1 rounded-full bg-surface-container-highest text-xs">
          Apache + 中国
        </button>

        <button className="px-3 py-1 rounded-full bg-surface-container-highest text-xs">
          登录页 + 中国
        </button>

        <button className="px-3 py-1 rounded-full bg-surface-container-highest text-xs">
          指定域名
        </button>

        <button className="px-3 py-1 rounded-full bg-surface-container-highest text-xs">
          指定IP
        </button>
      </div>
    </div>

    {/* AI解析 */}
    <div className="bg-surface-container rounded-xl p-4 border border-outline/20">
      <h4 className="font-semibold text-on-surface mb-3">
        自然语言（AI解析为 FOFA 语法）
      </h4>

      <div className="flex gap-3">
        <input
          type="text"
          placeholder="例如：找美国 Missouri 的 Apache 站点，标题包含 Home"
          className="flex-1 rounded-lg border border-outline/20 bg-surface px-4 py-3"
        />

        <button className="px-5 rounded-lg bg-primary text-on-primary whitespace-nowrap">
          AI解析
        </button>
      </div>

      <p className="text-xs text-on-surface-variant mt-3">
        解析后会自动生成 FOFA 查询语法，可手动修改。
      </p>
    </div>

    {/* 参数 */}
    <div className="grid grid-cols-3 gap-4">

      <div>
        <label className="block font-medium mb-2">
          返回数量
        </label>

        <input
          defaultValue="100"
          className="w-full rounded-lg border border-outline/20 bg-surface px-4 py-3"
        />
      </div>

      <div>
        <label className="block font-medium mb-2">
          页码
        </label>

        <input
          defaultValue="1"
          className="w-full rounded-lg border border-outline/20 bg-surface px-4 py-3"
        />
      </div>

      <div>
        <label className="block font-medium mb-2">
          Full
        </label>

        <div className="h-[48px] flex items-center">
          <input
            type="checkbox"
            className="w-4 h-4"
          />
        </div>
      </div>

    </div>

    {/* 返回字段 */}
    <div className="bg-surface-container rounded-xl p-4 border border-outline/20">

      <h4 className="font-semibold text-on-surface mb-3">
        返回字段（逗号分隔）
      </h4>

      <textarea
        rows={3}
        className="w-full rounded-lg border border-outline/20 bg-surface px-4 py-3 font-mono"
        defaultValue="host,ip,port,domain,title,protocol,country,province,city,server"
      />

      <div className="flex gap-2 mt-4 flex-wrap">
        <button className="px-3 py-1 rounded-full bg-surface-container-highest text-xs">
          最小字段
        </button>

        <button className="px-3 py-1 rounded-full bg-surface-container-highest text-xs">
          Web常用
        </button>

        <button className="px-3 py-1 rounded-full bg-surface-container-highest text-xs">
          情报增强
        </button>
      </div>

    </div>

    {/* 底部按钮 */}
    <div className="flex justify-end gap-3">

      <button className="px-4 py-2 rounded-lg bg-surface-container-highest">
        保存模板
      </button>

      <button className="px-4 py-2 rounded-lg bg-secondary text-on-secondary">
        添加任务
      </button>

      <button className="px-5 py-2 rounded-lg bg-primary text-on-primary font-semibold">
        执行查询
      </button>

    </div>

  </div>
);

const FofaAddModal = () => (
  <div className="space-y-4">

    <div>
      <label className="block mb-2 font-semibold">
        添加目标域名
      </label>

      <textarea
        rows={8}
        placeholder={`example.com
api.example.com
test.com`}
        className="w-full rounded-lg border border-outline/20 bg-surface px-4 py-3 font-mono"
      />
    </div>

    <div className="bg-surface-container rounded-lg p-3 text-xs">
      支持批量添加域名，一行一个。
    </div>

    <div className="flex justify-end gap-2">
      <button className="px-4 py-2 rounded-lg bg-surface-container-highest">
        清空
      </button>

      <button className="px-4 py-2 rounded-lg bg-primary text-on-primary">
        添加
      </button>
    </div>

  </div>
);

const  WhoxyModal= () => <div className="p-4 text-on-surface-variant">扫描进度占位</div>;

  return (
  <div className="md:col-span-2 flex flex-col gap-6">
    {/* 第一行：amss-Intel、CRT */}
    <div className="grid grid-cols-2 gap-6">
      {tools.map((tool) => (
        <div
  key={tool.name}
  className="glass-card rounded-xl p-6 hover:shadow-2xl transition-shadow flex flex-col"
>
          <div className="flex justify-between items-start mb-4">
            <h3 className="font-headline-md text-headline-md text-on-surface">
              {tool.name}
            </h3>

            <span
              className={`bg-${
                tool.badge === 'OSINT' ? 'primary' : 'secondary'
              }/10 text-${
                tool.badge === 'OSINT' ? 'primary' : 'secondary'
              } text-[10px] px-2 py-0.5 rounded border border-${
                tool.badge === 'OSINT' ? 'primary' : 'secondary'
              }/20`}
            >
              {tool.badge}
            </span>
          </div>

          <p className="text-xs text-on-surface-variant mb-6 h-10 overflow-hidden">
            {tool.desc}
          </p>

         <div className="bg-surface-dim/50 rounded-lg p-4 mb-6 text-xs font-data-mono border border-outline-variant/30 h-[90px]">
            {tool.stats ? (
              tool.stats.map((stat, i) => (
                <p
                  key={i}
                  className={`text-${stat.color} mb-1 flex items-center gap-2`}
                >
                  <span
                    className={`w-1.5 h-1.5 rounded-full bg-${stat.color}`}
                  />
                  {stat.label}
                </p>
              ))
            ) : (
              <p className="italic text-outline">{tool.extra}</p>
            )}
          </div>

          <div className="grid grid-cols-3 gap-2 mt-auto">
            <button
              onClick={() => openModal('历史记录', <HistoryModal />)}
              className="bg-surface-container-highest py-2 rounded text-xs hover:bg-primary hover:text-on-primary transition-all "
            >
              历史记录
            </button>

            <button
              onClick={() => openModal('扫描', <ScanModal />)}
              className="bg-surface-container-highest py-2 rounded text-xs hover:bg-primary hover:text-on-primary transition-all"
            >
              扫描
            </button>

            <button
              onClick={() => openModal('结果', <ResultsModal />)}
              className="bg-secondary text-on-secondary py-2 rounded text-xs hover:opacity-90 font-bold transition-all"
            >
              结果
            </button>
          </div>
        </div>
      ))}
    </div>

   {/* 第二行 */}
<div className="grid grid-cols-3 gap-3 mt-auto">
  {extraTools.map((tool) => (
    <div
      key={tool.name}
      className="glass-card rounded-xl p-6 hover:shadow-2xl transition-shadow min-h-[200px] flex flex-col"
    >
      <div>
        <h3 className="text-xl font-semibold text-on-surface text-center mb-3">
          {tool.name}
        </h3>

        <p className="text-xs text-on-surface-variant text-center leading-relaxed">
          {tool.desc}
        </p>
      </div>

      <div className="grid grid-cols-2 gap-2 mt-auto">
       {tool.buttons.map((btn) => (
  <button
    key={btn}
    onClick={() => {

      // Google Hacking
      if (tool.name === 'google hacking') {

        if (btn === '生成') {
          openModal(
            'Google Hacking 语法生成',
            <GoogleHackingModal />
          );
        }

        if (btn === '添加') {
          openModal(
            '添加 Google Hacking 域名',
            <FofaAddModal />
          );
        }
      }

      // FOFA
      if (tool.name === 'Fofa语法') {

        if (btn === '生成') {
          openModal(
            'FOFA 查询语法生成器',
            <FofaGenerateModal />
          );
        }

        if (btn === '添加') {
          openModal(
            '添加 FOFA 域名',
            <FofaAddModal />
          );
        }
      }

      // Whoxy
      if (tool.name === 'whoxy') {

        if (btn === '生成') {
          openModal(
            'Whoxy 查询',
            <WhoxyModal />
          );
        }

        if (btn === '添加') {
          openModal(
            '添加 Whoxy 域名',
            <FofaAddModal />
          );
        }
      }

    }}
    className="bg-surface-container-highest py-2 rounded-full text-xs hover:bg-primary hover:text-on-primary transition-all"
  >
    {btn}
  </button>
))}
    
      </div>
    </div>
  ))}
</div>

    <Modal
      isOpen={isOpen}
      onClose={closeModal}
      title={modalContent.title}
      maxWidth="lg"
    >
      {modalContent.content}
    </Modal>
  </div>
)}