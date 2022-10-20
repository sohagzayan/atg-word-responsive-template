import React, { useEffect, useState } from "react";
import Logo from "../../assets/whole.png";
import { AiOutlineSearch } from "react-icons/ai";
import "./Header.css";
import AnimatedHamburgerMenu from "../AnimatedHamburgerMenu/AnimatedHamburgerMenu";
const Header = () => {
  /** Show Searchber Hamber Condetion */
  const [hamberger, setHamberger] = useState(false);

  /** Hode hmaberger History When window resize */
  useEffect(() => {
    window.addEventListener("resize", () => {
      if (window.innerWidth >= 991) {
        setHamberger(false);
      }
    });
  }, []);

  return (
    <div className="main_header">
      <div className="our_container">
        <div className="row d-flex align-items-center">
          <div className="logo col ">
            <img src={Logo} alt="" />
          </div>
          <div className="searchBer col flex align-items-center justify-content-center">
            <form
              action=""
              className={hamberger ? "search_box active" : "search_box "}
            >
              <input
                type="text"
                className=""
                placeholder="Search for your favorite groups in ATG"
              />
              <h4>
                <AiOutlineSearch />
              </h4>
            </form>
          </div>
          <div className="accountCreate col d-flex justify-content-end">
            <div className="d-flex align-items-center">
              <span className="d-lg-none d-block ">
                <AnimatedHamburgerMenu
                  hamberger={hamberger}
                  setHamberger={setHamberger}
                />
              </span>
              <h6 className="d-lg-block d-none">
                Create account. <a href="/">It’s free!</a>
              </h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
