import React from "react";
import NavStyle from "../Navbar/Navbar.module.scss";
import Logo from "../../../assets/shopo_logo.svg";
import { Icon } from "@iconify/react";
const Navbar = () => {
  return (
    <nav>
      <section className={NavStyle.up_nav}>
        <div className="container px-3">
          <div className="row px-5">
            <div className="col-3">
              <div className={NavStyle.left_nav_adapt}>
                <div className={NavStyle.logo}>
                  <img src={Logo} alt="" />
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className={NavStyle.middle_nav_adapt}>
                <div className={NavStyle.searching_tools}>
                  <div className={NavStyle.common_padding}>
                    <form>
                      <input type="text" placeholder="Search Product..." />
                    </form>
                    <div className={NavStyle.select_option}>
                      <span>All Categories</span>
                      <span>
                        <Icon icon="ion:chevron-down" />
                      </span>
                    </div>
                  </div>
                  <button>Search</button>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className={NavStyle.right_nav_adapt}>
                <ul>
                  <li>
                    <Icon icon="akar-icons:arrow-cycle" rotate={1} />
                  </li>
                  <li>
                    <Icon icon="ph:heart" />
                  </li>
                  <li>
                    <Icon icon="bi:handbag" />
                  </li>
                  <li>
                    <Icon icon="heroicons:user" />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={NavStyle.down_nav}>
        <div className="container px-3 h-100">
          <div className="row px-5 h-100">
            <div className="col-3">
              <div className={NavStyle.left_side_down_nav}>
                <div className={NavStyle.accordion_head}>
                  <h6>
                    <Icon icon="heroicons:bars-3-center-left-solid" />
                    All Categories
                  </h6>
                  <span>
                    <Icon icon="ion:chevron-down" />
                  </span>
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className={NavStyle.middle_side_down_nav}>
                <ul>
                  <li>
                    <div className={NavStyle.hover_li}>
                      <span>Homepage</span>
                      <Icon icon="ion:chevron-down" />
                    </div>
                    <div className={NavStyle.hover_menu}>
                      <ul>
                        <li>
                          <span>Home One</span>
                        </li>
                        <li>
                          <span>Home Two</span>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li>
                    <div className={NavStyle.hover_li}>
                      <span>Shop</span>
                      <Icon icon="ion:chevron-down" />
                    </div>
                  </li>
                  <li>
                    <div className={NavStyle.hover_li}>
                      <span>Pages</span>
                      <Icon icon="ion:chevron-down" />
                    </div>
                  </li>
                  <li>
                    <span>About</span>
                  </li>
                  <li>
                    <span>Blog</span>
                  </li>
                  <li>
                    <span>Contact</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-3">
              <div className={NavStyle.right_side_down_nav}>
                <button>
                  Become a Seller
                  <Icon icon="ic:sharp-chevron-right" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </nav>
  );
};

export default Navbar;
