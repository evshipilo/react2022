import { createContext, useState } from 'react';

interface IModalContext {
  modal: boolean;
  closeModal: () => void;
  openModal: () => void;
}

export const ModalContext = createContext<IModalContext>({
  modal: false,
  closeModal: () => {},
  openModal: () => {},
});

export const ModalState = ({ children }: { children: React.ReactNode }) => {
  const [modal, setModal] = useState(false);
  const openModal = () => {
    setModal(true);
  };

  const closeModal = () => {
    setModal(false);
  };

  return (
    <ModalContext.Provider value={{ modal, openModal, closeModal }}>
      {children}
    </ModalContext.Provider>
  );
};
