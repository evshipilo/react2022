import { useEffect, useState } from 'react';

const calculateInitialState = () => {
  console.log('some calculations');
  return 5;
};
// будет вызываться при каждом рендеренге компонента если useState(calculateInitialState())
// чтоб избежать ненужных вычислений - useState(calculateInitialState)

export function HookUseState() {
  const [value, setValue] = useState<any>(calculateInitialState);
  const [state, setState] = useState<any>([]);
console.log(state);

  useEffect(()=>{console.log('render')})

  const increment = () => {
    // setValue(value + 1);
    // setValue(value + 1);
    // добавится только +1 тк SetValue асинхронный, реакт собирает все изменения состояния а потом применяет
    setValue((prev: any) => prev + 1);
    setValue((prev: any) => prev + 1);
    // если новое состояние основано на предыдущем то передаём колбек
  };

  const decrement = () => {
    setValue((prev: any) => prev - 1);
  };

  const changeStateObject = () => {
    setState([]);
    // так как обьекты сравнивают по ссылке setState([]); каждый раз будет вызывать рендер
    // чтоб его избежать нужно проверять содержимое обьектов еслионо не изменилось то не вызывать setState
    //  не мутировать обьекты в стейте, возвращать новый обьект  (prev) => [...prev, newVal]
  };

  return (
    <>
      <h1>Set state works</h1>
      <button className="border p-2 bg-red-300 mr-2" onClick={increment}>
        +
      </button>
      <button className="border p-2 bg-red-300 mr-2" onClick={decrement}>
        -
      </button>
      <span>{value}</span>
      <div><button className="border p-2 bg-red-300 mr-2" onClick={changeStateObject}>Change object</button></div>
    </>
  );
}
