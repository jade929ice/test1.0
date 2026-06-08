import DomainTools from './DomainTools';
import ConsolidationBox from './ConsolidationBox';

export default function DomainSection() {
  return (
    
    <section className="flex flex-col md:flex-row gap-8">
      <div className="md:w-16 flex justify-center pt-8">
        <h2 className="vertical-text font-headline-lg text-headline-lg text-primary tracking-[0.2em] opacity-80 select-none">
          根域名收集
        </h2>
      </div>
      <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-8">
        <DomainTools />
        <div className="md:col-span-2">
          <ConsolidationBox />
        </div>
      </div>
    </section>
  );
}