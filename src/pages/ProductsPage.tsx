import { ErrorMessage } from '../components/ErrorMessage';
import { Loader } from '../components/Loader';
import { Modal } from '../components/Modal';
import { CreateProduct } from '../components/CreateProduct';
import { Product } from '../components/Product';
import { useProducts } from '../hooks/product';
import { Button } from '../components/Button';
import { ModalContext } from '../context/ModalContext';
import { useContext } from 'react';

export function ProductsPage(){
    const {
        products,
        error,
        loading,
        onProductCreate,
      } = useProducts();
    
      const {modal, openModal, closeModal} = useContext(ModalContext)
    
      return (
        <div className="container mx-auto max-w-2xl pt-5">
          {loading && <Loader />}
          {error && <ErrorMessage error={error} />}
          <button className=" bg-red-300 mb-3 p-2 rounded" onClick={openModal}>
            Add product
          </button>
          {products.map((product) => (
            <Product product={product} key={product.id} />
          ))}
          {modal && (
            <Modal onCloseClick={closeModal} title={'Create product'}>
              <CreateProduct
                onProductCreate={onProductCreate}
                button={<Button buttonText={'Create'} />}
              />
            </Modal>
          )}
        </div>
      );
} 