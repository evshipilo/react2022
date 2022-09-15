import axios from 'axios';
import React, { useState } from 'react';
import { IProduct } from '../models';
import { ErrorMessage } from './ErrorMessage';

interface ButtonProps {
  button: React.ReactNode;
  onProductCreate: (product: IProduct) => void;
}

export function CreateProduct({ button, onProductCreate }: ButtonProps) {
  const [value, setValue] = useState('');
  const [error, setError] = useState('');

  const productData: IProduct = {
    title: 'SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s',
    price: 109,
    description:
      'Easy upgrade for faster boot up, shutdown, application load and response (As compared to 5400 RPM SATA 2.5” hard drive; Based on published specifications and internal benchmarking tests using PCMark vantage scores) Boosts burst write performance, making it ideal for typical PC workloads The perfect balance of performance and reliability Read/write speeds of up to 535MB/s/450MB/s (Based on internal testing; Performance may vary depending upon drive capacity, host device, OS and application.)',
    category: 'electronics',
    image: 'https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg',
    rating: { rate: 2.9, count: 470 },
  };

  async function handleSubmit(event: React.FormEvent) {
    setError('');
    event?.preventDefault();
    if (value.trim().length === 0) {
      setError('invalid title');
      return;
    }

    try {
      productData.title = value;

      const responce = await axios.post<IProduct>(
        'https://fakestoreapi.com/products',
        productData
      );

      onProductCreate(responce.data);
    } catch (e) {
      setError('Network Error');
    }
  }

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        value={value}
        onChange={changeHandler}
        type="text"
        className=" w-full outline-0 border p-2 mb-2"
        placeholder="Input product title..."
      />
      {error && <ErrorMessage error={error} />}

      {button}
    </form>
  );
}
