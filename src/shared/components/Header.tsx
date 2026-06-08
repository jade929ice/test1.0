import { NavLink } from 'react-router-dom';
import { useState } from 'react';

const navItems = [
  { path: '/', label: '公司分析模块' },
  { path: '/subdomains', label: '子域名收集模块' },
  { path: '/analysis', label: '网站分析模块' },
  { path: '/ai', label: '智能对话' },
];

export default function Header() {
  const [showSettings, setShowSettings] = useState(false);

  const [baseUrl, setBaseUrl] = useState(
  localStorage.getItem('baseUrl') || 'https://api.deepseek.com'
);

const [apiKey, setApiKey] = useState(
  localStorage.getItem('apiKey') || ''
);

const [model, setModel] = useState(
  localStorage.getItem('model') || 'deepseek-v4-flash'
);

const [fofaBaseUrl, setFofaBaseUrl] = useState(
  localStorage.getItem('fofaBaseUrl') ||
  'https://fofa.info/api/v1/search/all'
);

const [fofaEmail, setFofaEmail] = useState(
  localStorage.getItem('fofaEmail') || ''
);

const [fofaKey, setFofaKey] = useState(
  localStorage.getItem('fofaKey') || ''
);

const handleSaveConfig = () => {
  localStorage.setItem('baseUrl', baseUrl);
  localStorage.setItem('apiKey', apiKey);
  localStorage.setItem('model', model);

  localStorage.setItem('fofaBaseUrl', fofaBaseUrl);
  localStorage.setItem('fofaEmail', fofaEmail);
  localStorage.setItem('fofaKey', fofaKey);

  setShowSettings(false);
};

  return (
    <header className="fixed top-0 left-0 right-0 h-16 bg-surface-container-low border-b border-outline-variant z-50">
      <div className="flex justify-between items-center w-full px-lg max-w-container-max mx-auto h-full">
        <div className="flex items-center gap-8">
          <h1 className="text-headline-md font-headline-md font-bold tracking-tighter text-primary">
            CYBERCORE
          </h1>
          <nav className="hidden lg:flex gap-6 items-center">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `pb-1 transition-colors ${
                    isActive
                      ? 'text-primary font-bold border-b-2 border-primary'
                      : 'text-on-surface-variant font-medium hover:text-primary'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <div className="relative hidden sm:block">
            <input
              type="text"
              placeholder="Search Assets..."
              className="bg-surface-dim border border-outline-variant rounded-full py-1.5 pl-10 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-primary w-64"
            />
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline-variant text-lg">
              search
            </span>
          </div>
          <button className="p-2 text-on-surface-variant hover:text-primary transition-colors">
            <span className="material-symbols-outlined">notifications</span>
          </button>
          <button
  onClick={() => setShowSettings(true)}
  className="p-2 text-on-surface-variant hover:text-primary transition-colors"
>
  <span className="material-symbols-outlined">settings</span>
</button>
         
        </div>
      </div>
      {showSettings && (
  <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-[100]">

    <div className="
  bg-surface-container
  border border-outline-variant
  rounded-xl
  shadow-2xl
  w-[680px]
  max-w-[90vw]
  max-h-[80vh]
  overflow-y-auto
">

      <div className="p-8">

        {/* 标题 */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-headline-large font-bold text-on-surface">
            基本设置
          </h2>

          <button
            onClick={() => setShowSettings(false)}
            className="text-on-surface-variant hover:text-primary"
          >
            <span className="material-symbols-outlined text-3xl">
              close
            </span>
          </button>
        </div>

        {/* OpenAI配置 */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold mb-8">
            OpenAI 配置
          </h3>

          <div className="space-y-6">

            <div>
              <label className="block font-medium mb-2">
                Base URL <span className="text-red-500">*</span>
              </label>

              <input
  type="text"
  value={baseUrl}
  placeholder="输入 OpenAI Base URL"
  onChange={(e) => setBaseUrl(e.target.value)}
  className="
    w-full
    bg-surface-dim
    border border-outline-variant
    rounded-xl
    px-5 py-4
    text-on-surface
    focus:outline-none
    focus:ring-2
    focus:ring-primary
  "
/>
            </div>

            <div>
              <label className="block font-medium mb-2">
                API Key <span className="text-red-500">*</span>
              </label>

              <input
  type="password"
  value={apiKey}
  placeholder="输入 OpenAI API Key"
  onChange={(e) => setApiKey(e.target.value)}
  className="
    w-full
    bg-surface-dim
    border border-outline-variant
    rounded-xl
    px-5 py-4
    text-on-surface
    focus:outline-none
    focus:ring-2
    focus:ring-primary
  "
/>
            </div>

            <div>
              <label className="block font-medium mb-2">
                模型 <span className="text-red-500">*</span>
              </label>

             <input
  type="text"
  value={model}
  placeholder="输入 OpenAI 模型名称"
  onChange={(e) => setModel(e.target.value)}
  className="
    w-full
    bg-surface-dim
    border border-outline-variant
    rounded-xl
    px-5 py-4
    text-on-surface
    focus:outline-none
    focus:ring-2
    focus:ring-primary
  "
/>
            </div>

          </div>
        </div>

        {/* FOFA配置 */}
        <div>
          <h3 className="text-title-large font-semibold text-primary mb-8">
            FOFA 配置
          </h3>

          <div className="space-y-6">

            <div>
              <label className="block font-medium mb-2">
                Base URL
              </label>

              <input
  type="text"
  placeholder="输入 FOFA Base URL"
  value={fofaBaseUrl}
  onChange={(e) => setFofaBaseUrl(e.target.value)}
  className="
    w-full
    bg-surface-dim
    border border-outline-variant
    rounded-xl
    px-5 py-4
    text-on-surface
    focus:outline-none
    focus:ring-2
    focus:ring-primary
  "
/>

              <p className="text-on-surface-variant text-sm mt-2">
                留空则使用默认地址。
              </p>
            </div>

            <div>
              <label className="block font-medium mb-2">
                Email
              </label>

              <input
  type="email"
  placeholder="输入 FOFA 账号邮箱"
  value={fofaEmail}
  onChange={(e) => setFofaEmail(e.target.value)}
  className="
    w-full
    bg-surface-dim
    border border-outline-variant
    rounded-xl
    px-5 py-4
    text-on-surface
    focus:outline-none
    focus:ring-2
    focus:ring-primary
  "
/>
            </div>

            <div>
              <label className="block font-medium mb-2">
                FOFA Key
              </label>

              <input
  type="password"
  value={fofaKey}
  placeholder="输入 FOFA API Key"
  onChange={(e) => setFofaKey(e.target.value)}
  className="
    w-full
    bg-surface-dim
    border border-outline-variant
    rounded-xl
    px-5 py-4
    text-on-surface
    focus:outline-none
    focus:ring-2
    focus:ring-primary
  "
/>
            </div>

          </div>
        </div>

        {/* 底部按钮 */}
        <div className="flex justify-end gap-4 mt-10">

          <button
            onClick={() => setShowSettings(false)}
           className="
px-6 py-3
border border-outline-variant
rounded-lg
text-on-surface
hover:bg-surface-dim
transition-colors
"
          >
            取消
          </button>

          <button
  onClick={handleSaveConfig}
  className="
  px-6 py-3
  bg-primary
  text-on-primary
  rounded-lg
  hover:opacity-90
  transition-all
  "
>
  保存配置
</button>

        </div>

      </div>

    </div>

  </div>

)}
    </header>
  );
}