import EnscanConsole from '../features/home/components/EnscanConsole';
import ToolCardGrid from '../features/home/components/ToolCardGrid';
import DomainSection from '../features/home/components/DomainSection';

export default function HomePage() {
  return (
      <div className="max-w-7xl mx-auto space-y-12">
        <section className="flex flex-col md:flex-row gap-8">
          <div className="md:w-16 flex justify-center pt-8">
            <h2 className="vertical-text font-headline-lg text-headline-lg text-primary tracking-[0.2em] opacity-80 select-none">
              企业信息收集
            </h2>
          </div>
          <div className="flex-1 space-y-8">
            <EnscanConsole />
            <ToolCardGrid />
            <div className="my-6 border-t border-outline/30" />
          </div>
        </section>
        <DomainSection />
      </div>
  );
}