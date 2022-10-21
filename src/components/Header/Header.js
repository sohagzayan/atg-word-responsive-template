import React, { useEffect, useState } from "react";
import Logo from "../../assets/whole.png";
import { AiOutlineSearch } from "react-icons/ai";
import { RiAccountCircleLine } from "react-icons/ri";
import "./Header.css";
import AnimatedHamburgerMenu from "../AnimatedHamburgerMenu/AnimatedHamburgerMenu";
const Header = ({ setShowAccountCreateModal }) => {
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
    <div className="main_header sticky-top ">
      <div className="container-fluid py-3">
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
              <span
                onClick={() => setShowAccountCreateModal((prev) => !prev)}
                className="d-lg-none d-block AccountIcons"
              >
                <RiAccountCircleLine className="fs-1 " />
              </span>
              <span className="d-lg-none d-block ">
                <AnimatedHamburgerMenu
                  hamberger={hamberger}
                  setHamberger={setHamberger}
                />
              </span>
              <h6 className="d-lg-block d-none">
                Create account.{" "}
                <span
                  className="itsFree"
                  onClick={() => setShowAccountCreateModal((prev) => !prev)}
                >
                  It’s free!
                </span>
              </h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
