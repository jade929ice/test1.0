import { Routes, Route } from 'react-router-dom';
import Layout from './shared/components/Layout';
import HomePage from './pages/HomePage';
import SubdomainsPage from './pages/SubdomainsPage';
import AnalysisPage from './pages/AnalysisPage';
import AIPage from './pages/AIPage';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="subdomains" element={<SubdomainsPage />} />
        <Route path="analysis" element={<AnalysisPage />} />
        <Route path="ai" element={<AIPage />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;