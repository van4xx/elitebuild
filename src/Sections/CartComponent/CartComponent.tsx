import React, { useState, useEffect } from "react";
import { IoMdClose } from "react-icons/io";
import { IoIosHeartEmpty } from "react-icons/io";
import { IoHeart } from "react-icons/io5";
import { getSavedProducts, saveProduct, removeProduct } from "@/services/storageHelpers";
import { getCartItems, updateCartItem, removeCartItem } from "@/services/cartHelpers";
import { PaymentModal } from '../../Components/PaymentModal/PaymentModal';

const CartComponent: React.FC = () => {
  const [likedProducts, setLikedProducts] = useState<Record<number, boolean>>({});
  const [savedProducts, setSavedProducts] = useState<any[]>([]);
  const [cartItems, setCartItems] = useState<any[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const saved = getSavedProducts();
    setSavedProducts(saved);
    const liked = saved.reduce((acc: Record<number, boolean>, product: any) => {
      acc[product.id] = true;
      return acc;
    }, {});
    setLikedProducts(liked);
    setCartItems(getCartItems());
  }, []);

  const toggleLike = (product: any) => {
    const isLiked = likedProducts[product.id];
    if (isLiked) {
      removeProduct(product.id);
      setLikedProducts((prev) => ({ ...prev, [product.id]: false }));
      setSavedProducts((prev) => prev.filter((p) => p.id !== product.id));
    } else {
      saveProduct(product);
      setLikedProducts((prev) => ({ ...prev, [product.id]: true }));
      setSavedProducts((prev) => [...prev, product]);
    }
  };

  const handleIncreaseQuantity = (id: number) => {
    updateCartItem(id, 1);
    setCartItems(getCartItems());
  };
  
  const handleDecreaseQuantity = (id: number) => {
    updateCartItem(id, -1);
    setCartItems(getCartItems());
  };
  
  const handleRemoveItem = (id: number) => {
    removeCartItem(id);
    setCartItems(getCartItems());
  };

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  return (
    <section className="cart">
      <h1 className="cart__title">Корзина</h1>

      <div className="cart__items-wrapper">
        <div className="cart__items">
          {cartItems.length > 0 ? (
            cartItems.map((item) => (
              <div key={item.id} className="cart__item">
                <img src={item.image || "/images/product-placeholder.png"} alt={item.name} className="cart__item-image" />
                <div className="cart__item-details">
                  <p className="cart__item-name">{item.name}</p>
                  <p className="cart__item-article">Артикул: {item.article}</p>
                </div>

                <div className="cart__item-price-wrapper">
                  <p className="cart__item-price">{item.price} ₽</p>
                </div>

                <div className="cart__item-quantity">
                  <button className="cart__quantity-decrease" onClick={() => handleDecreaseQuantity(item.id)}>
                    -
                  </button>
                  <span className="cart__quantity-value">{item.quantity}</span>
                  <button className="cart__quantity-increase" onClick={() => handleIncreaseQuantity(item.id)}>
                    +
                  </button>
                </div>

                <div className="cart__item-actions">
                  <button className="cart__quantity-heart" onClick={() => toggleLike(item)}>
                    {likedProducts[item.id] ? (
                      <IoHeart className="cart__quantity-heart-icon active" />
                    ) : (
                      <IoIosHeartEmpty className="cart__quantity-heart-icon" />
                    )}
                  </button>
                  <button className="cart__quantity-delete" onClick={() => handleRemoveItem(item.id)}>
                    <IoMdClose className="cart__quantity-delete-icon" />
                  </button>
                </div>
              </div>
            ))
          ) : (
            <div className="cart__empty">
              <p className="cart__empty-message">Корзина пуста</p>
            </div>
          )}
        </div>

        <div className="cart__summary">
          <div className="cart__total-wrapper">
            <p className="cart__total-text">Итого к оплате:</p>
            <div className="cart__total-price-wrapper">
              <p className="cart__total-price">
                {calculateTotal()} ₽
              </p>
            </div>
          </div>
          <div className="cart__checkout-button-wrapper">
            <button 
              className="cart__checkout-button"
              onClick={handleOpenModal}
              disabled={cartItems.length === 0}
            >
              Оплатить
            </button>
          </div>
        </div>
      </div>

      <PaymentModal 
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        totalAmount={calculateTotal()}
      />
    </section>
  );
};

export default CartComponent;

