import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-[80vh]">
      <h1 className="text-6xl font-bold text-primary mb-4">404</h1>
      <p className="text-xl text-on-surface-variant mb-8">页面未找到</p>
      <Link to="/" className="bg-primary text-on-primary px-6 py-2 rounded-lg hover:opacity-90 transition">
        返回首页
      </Link>
    </div>
  );
}