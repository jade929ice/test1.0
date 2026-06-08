import ChatSidebar from '../features/ai/components/ChatSidebar';
import ChatHeader from '../features/ai/components/ChatHeader';
import ChatMessages from '../features/ai/components/ChatMessages';
import ChatInput from '../features/ai/components/ChatInput';

export default function AIPage() {
  return (
    <div className="h-[calc(100vh-64px)] flex p-gutter gap-gutter max-w-[1600px] mx-auto">
      <ChatSidebar />
      <div className="flex-1 flex flex-col glass-card rounded-xl overflow-hidden shadow-2xl relative">
        <ChatHeader />
        <ChatMessages />
        <ChatInput />
      </div>
    </div>
  );
}