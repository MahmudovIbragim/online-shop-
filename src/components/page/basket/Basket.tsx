/* eslint-disable react-hooks/exhaustive-deps */
import { FC, useEffect, useState } from "react";
import scss from "./Basket.module.scss";

import { useNavigate } from "react-router";
import {
  useGetBasketsQuery,
  useProductBuyBasketMutation,
} from "../../../redux/api/basket";

interface TypeBasket {}
const Basket: FC<TypeBasket> = () => {
  const { data } = useGetBasketsQuery();
  const [pathRequest] = useProductBuyBasketMutation();
  const [allPrice, setAllPrice] = useState(0);
  const navigate = useNavigate();

  const handleCount = async (_id: string | undefined) => {
    const newData = {
      quantityToDecrease: 1,
    };
    await pathRequest({ _id, newData });
  };
  useEffect(() => {
    let totalPrice = "0";
    data?.forEach((el) => {
      totalPrice += el.product?.price;
      return setAllPrice(+totalPrice);
    });
  }, [data]);
  return (
    <div className={scss.Basket}>
      <div className="container">
        <div className={scss.Content}>
          <div className={scss.back_btn}>
            <button
              onClick={() => {
                navigate("/");
              }}
            >
              Назад
            </button>
          </div>
          <div className={scss.basket_render}>
            {data?.map((item) => (
              <div className={scss.card} key={item._id}>
                <img src={item.product?.photoUrl} alt="" />
                <h1>{item.product?.productName}</h1>
                <p>{item.product?.price} KGS </p>
                <div className={scss.quantity}>
                  <p>{item.product?.quantity}</p>
                </div>
                <button
                  onClick={() => {
                    handleCount(item.product?._id);
                  }}
                >
                  Купить
                </button>
              </div>
            ))}
            <h2>Итог:{allPrice}$</h2>
            <button>Перейти к оплате</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Basket;
