import { useCallback, useEffect, useMemo, useState } from 'react';

export function HookUseCallback() {
  const [value, setValue] = useState(1);
  const [value1, setValue1] = useState(1);

  // const someFunction = () => {
  //   return <div>From Parent {value1}</div>;
  // }
  // при каждом рендере родителя будет пересоздаваться функция передаваемая ребенку
  // из-за неравенства ссылок на обьект функции дочерний компонент будет также перерендериваться
  // чтоб этого избежать нужно обернуть передаваемую функцию в useCallback со списком зависимостей, 
  // который вернет мемоизированную функцию

  const someFunction = useCallback(() => {
    return <div>From Parent {value1}</div>;
  }, [value1]);

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
      <button
        className="border p-2 bg-red-300 mr-2"
        onClick={() => {
          setValue1((prev) => prev + 1);
        }}
      >
        +Val1
      </button>
      <ChildComponent someFunction={someFunction} />
    </>
  );
}

interface ChildComponentProps {
  someFunction: () => {};
}

function ChildComponent({ someFunction }: ChildComponentProps) {
  useEffect(() => {
    console.log('child rerender');
  },[someFunction]);

  return <>{someFunction()}</>;
}
