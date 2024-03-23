import { useGetFavoritesQuery } from "../../../redux/api/favorite";
import scss from "./Favorite.module.scss";
const Favorite = () => {
  const { data } = useGetFavoritesQuery();

  return (
    <div className={scss.Favorite}>
      <div className="container">
        <div className={scss.Content}>
          <div className={scss.rendering}>
            {data?.map((item) => (
              <div key={item.product?._id}>
                <h1>{item.product?.price}</h1>
                <img src={item.product?.photoUrl} alt="" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Favorite;
