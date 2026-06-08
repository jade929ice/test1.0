import ContentDiscovery from '../features/analysis/components/ContentDiscovery';
import CrawlerSection from '../features/analysis/components/CrawlerSection';
import ThreatModeling from '../features/analysis/components/ThreatModeling';

export default function AnalysisPage() {
  return (
    <div className="p-8 space-y-12 bg-[radial-gradient(circle_at_50%_50%,_#0e172a_0%,_#060e20_100%)] min-h-full">
      <ContentDiscovery />
      <CrawlerSection />
      <ThreatModeling />
    </div>
  );
}