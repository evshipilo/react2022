import { useEffect, useState } from 'react';

export function HookUseEffect() {
  const [value, setValue] = useState(1);
  const [value1, setValue1] = useState(1);

  useEffect(() => {
    console.log('Run every time');
    //запускается прикаждом рендере
  });

  useEffect(() => {
    console.log('Run on value change');
    //запускается при изменении value
    //  return window.removeEventListener(....)  в return отписываемся от подписок для избежания утечек
  }, [value]);

  useEffect(() => {
    console.log('Run once');
    //запускается 1 раз
  }, []);


  return (
    <>
    
      <button className="border p-2 bg-red-300 mr-2" onClick={()=>{setValue(prev=>prev+1)}}>
        +Val
      </button>
      <button className="border p-2 bg-red-300 mr-2" onClick={()=>{setValue1(prev=>prev+1)}}>
        +Val1
      </button>
    </>
  );
}
