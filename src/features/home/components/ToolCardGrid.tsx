import { useModal } from '../../../shared/hooks/useModal';
import Modal from '../../../shared/components/Modal';

const tools = [
  { name: '小蓝本', desc: '销售加速与拓客工具' },
  { name: '天眼查', desc: '综合企业信息查询平台' },
  { name: '爱企查', desc: '综合企业信息查询平台' },
];

export default function ToolCardGrid() {
  const { isOpen, openModal, closeModal, modalContent } = useModal();

  const JumpConfirm = () => (
    <div className="text-center space-y-6">
      <p className="font-body-sm text-on-surface-variant">您即将离开本系统跳转至外部网站进行查询。是否继续？</p>
      <div className="flex gap-3">
        <button className="flex-1 py-2.5 bg-surface-container-highest rounded-lg font-bold hover:bg-primary/10" onClick={closeModal}>
          取消
        </button>
        <button className="flex-1 py-2.5 bg-primary text-on-primary rounded-lg font-bold shadow-lg hover:opacity-90">
          立即跳转
        </button>
      </div>
    </div>
  );

 const AddDomainForm = () => (
  <div className="space-y-4">
    <div>
      <label className="block text-sm mb-2 text-on-surface">
        域名
      </label>
      <input
        type="text"
        placeholder="例如：example.com"
        className="w-full px-3 py-2 rounded-lg bg-surface-container-highest border border-outline/30 focus:outline-none focus:border-primary"
      />
    </div>

    <div>
      <label className="block text-sm mb-2 text-on-surface">
        备注
      </label>
      <textarea
        placeholder="可选备注信息"
        rows={3}
        className="w-full px-3 py-2 rounded-lg bg-surface-container-highest border border-outline/30 focus:outline-none focus:border-primary"
      />
    </div>

    <div className="flex gap-3">
      <button
        className="flex-1 py-2.5 bg-surface-container-highest rounded-lg font-bold"
        onClick={closeModal}
      >
        取消
      </button>

      <button
        className="flex-1 py-2.5 bg-secondary text-on-secondary rounded-lg font-bold"
        onClick={() => {
          // 后续提交逻辑
          closeModal();
        }}
      >
        添加
      </button>
    </div>
  </div>
);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {tools.map((tool) => (
          <div key={tool.name} className="glass-card rounded-lg p-5 flex flex-col items-center text-center hover:border-primary transition-colors">
            <h4 className="font-headline-md text-headline-md text-on-surface mb-1">{tool.name}</h4>
            <p className="text-[10px] font-label-caps text-outline mb-4">{tool.desc}</p>
            <div className="text-left w-full space-y-1 mb-6 text-xs text-on-surface-variant font-data-mono">
              <p>跳转情况：即将跳转到外部网站</p>
              <p>添加状况</p>
            </div>
            <div className="flex w-full gap-2 mt-auto">
              <button
                className="flex-1 py-1.5 bg-surface-container-highest text-xs rounded hover:bg-primary-container transition-colors"
                onClick={() => openModal('外部跳转确认', <JumpConfirm />)}
              >
                跳转
              </button>
              
              <button
  className="flex-1 py-1.5 bg-surface-container-highest text-xs rounded hover:bg-secondary-container transition-colors"
  onClick={() =>
    openModal(
      `添加域名 - ${tool.name}`,
      <AddDomainForm />
    )
  }
>
  添加
</button>
            </div>
          </div>
        ))}
      </div>
      <Modal isOpen={isOpen} onClose={closeModal} title={modalContent.title} maxWidth="sm">
        {modalContent.content}
      </Modal>
    </>
  );
}