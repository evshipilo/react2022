import { memo, useEffect, useMemo, useState } from 'react';

// memo - это high order component или компонент высшего порядка.
// Компонент высшего порядка - это функция, которая принимает компонент и возвращает его улучшенную версию.
// memo - это функция, которая принимает react компонент, а возвращает react компонент,
//  который будет обновляться только если его предыдущие пропсы не равны новым пропсам.

export const MemoChild = memo(() => {
    return (
      <div>
          Теперь я точно никогда не буду обновляться
      </div>
      );
  },
//   (prevProps, nextProps) => deepEqual(prevProps, nextProps) вторым аргументом можно передать ф спавнения пропсов
  );

export function HookUseMemo() {
  const [value, setValue] = useState(1);
  const [value1, setValue1] = useState(1);
  const [isBlack, setIsBlack] = useState(false);

  const complexCalculation = ()=>{
    // затратные вычисления c value
    console.log('complex calculations');
    
    return value
  }

  const result = useMemo(complexCalculation, [value]) 
//   result = complexCalculation() будет вычисляться каждый раз при рендере компонента 
// а нам нужно пересчитать только если поменяется value

const someStyles = useMemo(()=>({color: isBlack? 'black': 'red'}), [isBlack]) 
// теперь обьект будет пересоздаваться только при изменении  isBlack

useEffect(()=>{
    console.log('styles changed'); // будет вызываться при каждом рендере потому что каждый раз пересоздаётся
    // обьект const someStyles = {color: isBlack? 'black': 'red'} а ссылки в [someStyles] не равны
    
}, [someStyles])

  return (
    <>
    
      <button className="border p-2 bg-red-300 mr-2" onClick={()=>{setValue(prev=>prev+1)}}>
        +Val
      </button>
      <button className="border p-2 bg-red-300 mr-2" onClick={()=>{setValue1(prev=>prev+1)}}>
        +Val1
      </button>
      <button className="border p-2 bg-red-300 mr-2" onClick={()=>{setIsBlack(prev=>!prev)}}>
        {'Black or Red'}
      </button>
      <div style={someStyles}>
        {result}
      </div>
    </>
  );
}
