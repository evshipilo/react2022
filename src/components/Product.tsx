import { useState } from 'react';
import { IProduct } from '../models';

interface ProductProps {
  product: IProduct;
}

export function Product({ product }: ProductProps) {
  const [isDetails, setIsDetails] = useState(false);

  const defaultBtnClasses = 'p-2 border text-yellow-50 rounded';
  const btnClasses = isDetails
    ? defaultBtnClasses + ' bg-slate-500'
    : defaultBtnClasses + ' bg-yellow-500';
  return (
    <div className=" p-2 border rounded mb-2 flex flex-col items-center">
      <img src={product.image} className="w-1/6" alt={product.description} />
      <p>{product.title}</p>
      <span className="font-bold">{product.price}</span>
      <button
        onClick={() => setIsDetails((prev) => !prev)}
        className={btnClasses}
      >
        {isDetails ? 'Hide Details' : 'Show details'}
      </button>
      {isDetails && <p>{product.description}</p>}
      { product.rating?.rate && <p>
        Rating:
        <span style={{ fontWeight: 'bold' }}> {product.rating.rate}</span>
      </p>}
    </div>
  );
}
