import scss from "./Footer.module.scss";
import brand_name from "../../../assets/BRANDNAME.svg";
import domen from "../../../assets/Frame 105.svg";
import left from "../../../assets/div.footer-links-wrap.svg";
import right from "../../../assets/div.footer-link-second-wrap.svg";
const Footer = () => {
  return (
    <div className={scss.Footer}>
      <div className="container">
        <div className={scss.Content}>
          <div className={scss.info_shop}>
            <div className={scss.left_Content}>
              <img src={brand_name} alt="" />
            </div>
            <div className={scss.right_Content}>
              <div>
                <p>О нас </p>
                <p>Контакты</p>
              </div>
              <div>
                <p>Способы оплаты</p>
                <p>Условия доставки</p>
              </div>
              <div>
                {" "}
                <p>Пользовательское соглашение</p>
                <p>Политика конфиденциальности</p>
              </div>
            </div>
          </div>
          <div className={scss.txt}>
            <img src={domen} alt="" />
            <p>2023</p>
            <p>Все права защищены</p>
          </div>
        </div>
      </div>
      <div className={scss.end_footer}>
        <img src={left} alt="" />
        <img src={right} alt="" />
      </div>
    </div>
  );
};

export default Footer;
