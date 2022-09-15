interface ModalProps {
  children: React.ReactNode;
  title: string;
  onCloseClick: () => void;
}

export function Modal({ children, title, onCloseClick }: ModalProps) {
  return (
    <>
      <div className=" fixed bg-black/50 top-0 right-0 bottom-0 left-0"></div>
      <div className=" w-[500px] p-3 rounded bg-white absolute top-10 left-1/2 -translate-x-1/2">
        <button onClick={onCloseClick}>x</button>
        <h1 className="text-center mb-2">{title}</h1> 
        {children}
      </div>
    </>
  );
}
