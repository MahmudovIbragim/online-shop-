import { FC, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import Modal from "../../ui/modal/Modal";
import scss from "./Home.module.scss";
import HomeForm from "./Form/Form";
import heart from "../../../assets/heart.svg";
import heartbg from "../../../assets/heart_bg.svg";
import plus_icon from "../../../assets/ic_baseline-plus.svg";
import edit_icon from "../../../assets/preferences-svgrepo-com.svg";
import EditForm from "./editForm/EditForm";
import {
  useDeleteProductMutation,
  useGetProductsQuery,
} from "../../../redux/api/product";
import { useAddFavoriteMutation } from "../../../redux/api/favorite";
import { useAddBasketMutation } from "../../../redux/api/basket";
import { Link } from "react-router-dom";

interface TypeHome {}

const Home: FC<TypeHome> = () => {
  const navigate = useNavigate();
  const { data } = useGetProductsQuery();
  const [createFavorite] = useAddFavoriteMutation();
  const [postBasket] = useAddBasketMutation();
  const [isOpen, setIsOpen] = useState(false);
  const [favoriteHeart, setFavoriteHeat] = useState<null | string>(null);
  const [editId, setEditId] = useState<null | string>(null);
  const [deleteProduct] = useDeleteProductMutation();

  useEffect(() => {
    const isAuth = localStorage.getItem("isAuth");
    if (isAuth !== "true") {
      navigate("/login");
    }
  }, [navigate]);

  const hadnleAddTohhleFavorite = async (id: string) => {
    await createFavorite(id);
    setFavoriteHeat(id);
  };

  const handleAddBasket = async (id: string) => {
    await postBasket(id);
  };

  const handleDeleteProductItem = async (id: string) => {
    await deleteProduct(id);
  };

  return (
    <div className={scss.HomePage}>
      <div className="container">
        <div className={scss.Content}>
          <div className={scss.add_btn}>
            <button onClick={() => setIsOpen(!isOpen)}> Добавить Товар</button>
          </div>
          <div className={scss.rendergin}>
            {data?.map((item) => (
              <div className={scss.card} key={item._id}>
                {item._id === editId ? (
                  <>
                    <div className={scss.modalContent}>
                      <div className={scss.modal_navBar}>
                        <p>Редактировать товар</p>
                      </div>
                      <div className={scss.froms}>
                        <EditForm
                          onClose={() => {
                            setEditId(null);
                          }}
                          itemName={item.productName}
                          itemPrice={item.price}
                          itemQueantity={item.quantity}
                          itemUrl={item.photoUrl}
                          itemId={item._id}
                        />
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <Link to={`/products/${item._id}`}>
                      <img src={item.photoUrl} alt="" />
                    </Link>
                    <div className={scss.content_card}>
                      <div className={scss.info_card}>
                        <p className={scss.now}>NEW NOW</p>
                        <p className={scss.name}> {item.productName}</p>
                        <p className={scss.price}>KGS {item.price}$</p>
                      </div>
                      <div className={scss.favoriteImg}>
                        {favoriteHeart === item._id ||
                        item.isFavorite === true ? (
                          <>
                            <img
                              src={heartbg}
                              alt=""
                              onClick={() => {
                                hadnleAddTohhleFavorite(item._id);
                                setFavoriteHeat(null);
                              }}
                            />
                          </>
                        ) : (
                          <>
                            <img
                              src={heart}
                              alt=""
                              onClick={() => hadnleAddTohhleFavorite(item._id)}
                            />
                          </>
                        )}
                        <button
                          onClick={() => {
                            setEditId(item._id);
                          }}
                        >
                          <img src={edit_icon} />
                        </button>
                      </div>
                    </div>
                    <div className={scss.basketBtn}>
                      <button onClick={() => handleAddBasket(item._id!)}>
                        Добавить в карзину
                      </button>
                      <button
                        onClick={() => {
                          handleDeleteProductItem(item._id);
                        }}
                      >
                        delete
                      </button>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
          <Modal
            isOpen={isOpen}
            onClose={() => {
              setIsOpen(false);
            }}
          >
            <div className={scss.modalContent}>
              <div className={scss.modal_navBar}>
                <p>
                  Добавить новую <br />
                  позицию
                </p>
              </div>
              <div className={scss.froms}>
                <HomeForm
                  onClose={() => {
                    setIsOpen(false);
                  }}
                />
                <p>
                  <img src={plus_icon} /> Добавить следующий <br />
                  цвет
                </p>
              </div>
            </div>
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default Home;
