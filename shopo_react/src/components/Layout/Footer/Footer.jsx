import React from "react";
import FooterStyle from "../Footer/Footer.module.scss";
import Logo from "../../../assets/shopo_logo.svg";
import { Icon } from "@iconify/react";
import PaymentScreenS from "../../../assets/payment-getways.png";
const Footer = () => {
  return (
    <footer>
      <div className="container px-3">
        <div className="row px-5">
          <div className="col-xl-12">
            <div className={FooterStyle.col_12_adapt}>
              <div className={FooterStyle.footer_logo}>
                <img src={Logo} alt="" />
              </div>
            </div>
          </div>
          {/* <div className="col-xl-12">
            <hr />
          </div> */}
        </div>
      </div>
      <div className="container px-3">
        <div className="row px-5 justify-content-between">
          <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6">
            <div className={FooterStyle.footer_list_col}>
              <h6>About Us</h6>
              <p>
                We know there are a lot of threa developers our but we pride
                into a firm in the industry.
              </p>
            </div>
          </div>
          <div className="col-xl-2 col-lg-2 col-md-6 col-sm-6">
            <div className={FooterStyle.footer_list_col}>
              <h6>Feature</h6>
              <ul>
                <li>
                  <span>About Us</span>
                </li>
                <li>
                  <span>Terms Condition</span>
                </li>
                <li>
                  <span>Best Products</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-xl-2 col-lg-2 col-md-6 col-sm-6">
            <div className={FooterStyle.footer_list_col}>
              <h6>General Links</h6>
              <ul>
                <li>
                  <span>Blog</span>
                </li>
                <li>
                  <span>Tracking Order</span>
                </li>
                <li>
                  <span>Become Seller</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-xl-2 col-lg-2 col-md-6 col-sm-6">
            <div className={FooterStyle.footer_list_col}>
              <h6>Helpful</h6>
              <ul>
                <li>
                  <span>Flash Sale</span>
                </li>
                <li>
                  <span>FAQ</span>
                </li>
                <li>
                  <span>Support</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-xl-12">
            <div className={FooterStyle.hr_col}>
              <hr />
            </div>
          </div>
        </div>
      </div>
      <div className="container px-3">
        <div className="row px-5">
          <div className="col-xl-6">
            <div className={FooterStyle.footer_bottom_left}>
              <ul>
                <li>
                  <Icon icon="mdi:instagram" />
                </li>
                <li>
                  <Icon icon="ri:facebook-fill" />
                </li>
                <li>
                  <Icon icon="ci:youtube" />
                </li>
                <li>
                  <p>
                    ©2022 <span>Quomodosoft</span> All rights reserved
                  </p>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-xl-6">
            <div className={FooterStyle.payment_logos}>
              <img src={PaymentScreenS} alt="" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
