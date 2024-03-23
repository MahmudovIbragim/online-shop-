import scss from "./Header.module.scss";
import brName from "../../../assets/logo.svg";
import heart from "../../../assets/Vector (6).svg";
import member from "../../../assets/member.svg";
import basket from "../../../assets/Group.svg";
import { useNavigate } from "react-router";
import { useEffect, useState } from "react";
const Header = () => {
  const navigate = useNavigate();
  const [isAuth, setIsAuth] = useState<null | string>(null);
  const [isNavigate, setIsNavigate] = useState(false);

  const navigatePageFunc = () => {
    setIsNavigate(!isNavigate);
    if (isNavigate === false) {
      navigate("/");
    } else if (isNavigate === true) {
      navigate("/favorite");
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("isAuth");
    navigate("/login");
  };

  const auth = localStorage.getItem("isAuth");

  useEffect(() => {
    setIsAuth(auth);
  }, [auth]);

  return (
    <header className={scss.Header}>
      <div className="container">
        <div className={scss.Content}>
          <nav>
            <div className={scss.left}>
              <img src={brName} alt="" />
            </div>
            <div className={scss.right}>
              <ul>
                <li>
                  {isAuth !== null ? (
                    <>
                      <img src={member} onClick={logout} alt="" />
                      Выйти
                    </>
                  ) : (
                    <>
                      <img
                        src={member}
                        onClick={() => {
                          navigate("/register");
                        }}
                        alt=""
                      />
                      Войти
                    </>
                  )}
                </li>
                <li onClick={navigatePageFunc}>
                  <img src={heart} alt="" />
                  {isNavigate ? <>Избранные</> : <>Вернутся</>}
                </li>
                <li
                  onClick={() => {
                    navigate("/basket");
                  }}
                >
                  <img src={basket} alt="" />
                  Корзина
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
