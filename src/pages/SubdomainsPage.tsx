import AmassHero from '../features/subdomains/components/AmassHero';
import SubdomainTools from '../features/subdomains/components/SubdomainTools';
import UtilityTools from '../features/subdomains/components/UtilityTools';

export default function SubdomainsPage() {
  return (
    <div className="max-w-container-max mx-auto px-gutter py-lg">
      <AmassHero />
       <div className="my-xl border-t border-outline-variant opacity-60" />
      <SubdomainTools />
      <UtilityTools />
    </div>
  );
}