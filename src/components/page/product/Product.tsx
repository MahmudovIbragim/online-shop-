import { useParams } from "react-router";
import { useGetProductQuery } from "../../../redux/api/product";
import scss from "./Product.module.scss";

const Product = () => {
  const { productId } = useParams();
  const { data, isLoading } = useGetProductQuery(productId!);
  if (isLoading) {
    return <div>...Laoding</div>;
  }
  console.log(data);

  return (
    <div className={scss.Product}>
      <div className="container">
        <div className={scss.Content}>
          <div className={scss.card}>
            <img src={data?.photoUrl} alt="" />
            <div className={scss.right}>
              <h1>{data?.productName}</h1>
              <button>Купить</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
