import { useState } from 'react';

interface ModalContent {
  title: string;
  content: React.ReactNode;
}

export function useModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [modalContent, setModalContent] = useState<ModalContent>({ title: '', content: null });

  const openModal = (title: string, content: React.ReactNode) => {
    setModalContent({ title, content });
    setIsOpen(true);
  };

  const closeModal = () => setIsOpen(false);

  return { isOpen, openModal, closeModal, modalContent };
}