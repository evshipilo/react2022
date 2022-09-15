import { useEffect, useState, useRef } from 'react';

export function HookUseRef() {
  const [value, setValue] = useState(1);

  const renderCount = useRef(1);
  //   создаём переменную (обьект) которая сохраняет значение между рендерами но не вызывает перерендера при изменениии

  const inputRef: any = useRef(null);


  const prevRef: any = useRef(null);
//   можем хранить предыдущее значение стейта



  useEffect(() => {
    renderCount.current++;

    console.log(inputRef);
  });

  useEffect(() => {
    prevRef.current = value;

  }, [value]);

  return (
    <>

      <button
        className="border p-2 bg-red-300 mr-2"
        onClick={() => {
          setValue((prev) => prev + 1);
        }}
      >
        +Val
      </button>
      <p>Rendered {renderCount.current} times</p>
      <input className='border' type="text" ref={inputRef} />
      {/* положили в inputRef.current ссылку на дом элемент */}
      <button className='bg-green-200' onClick={() => inputRef.current?.focus()}>Focuse on input</button>
      <div>
        <p>предыдущее значение value {prevRef.current}</p>
        <p>текущее значение value {value}</p>
      </div>
    </>
  );
}
