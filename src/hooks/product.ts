import axios, { AxiosError } from 'axios';
import { useContext, useEffect, useState } from 'react';
import { ModalContext } from '../context/ModalContext';
import { IProduct } from '../models';

export function useProducts() {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [loading, setloading] = useState(false);
  const [error, setError] = useState('');

  const {closeModal} = useContext(ModalContext)

  const onProductCreate = (product: IProduct) => {
    closeModal();
    setProducts((prev) => [product, ...prev]);
  };

  async function fetchProducts() {
    try {
      setError('');
      setloading(true);
      const response = await axios.get<IProduct[]>(
        'https://fakestoreapi.com/products?limit=5'
      );
      setProducts(response.data);
      setloading(false);
    } catch (e: unknown) {
      const error = e as AxiosError;
      setloading(false);
      setError(error.message);
    }
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  return { products, loading, error, onProductCreate };
}
