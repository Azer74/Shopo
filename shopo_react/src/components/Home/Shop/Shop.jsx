import React from "react";
import { useEffect } from "react";
import ShopStyle from "../Shop/Shop.module.scss";
import AOS from "aos";
import "aos/dist/aos.css";
import { Icon } from "@iconify/react";
import Brand1 from "../../../assets/brand-1.png";
import Brand2 from "../../../assets/brand-2.png";
import Brand3 from "../../../assets/brand-3.png";
import Brand4 from "../../../assets/brand-4.png";
import Brand5 from "../../../assets/brand-5.png";
import Brand6 from "../../../assets/brand-6.png";
import Brand7 from "../../../assets/brand-7.png";
import Brand8 from "../../../assets/brand-8.png";
import Brand9 from "../../../assets/brand-9.png";
import Brand10 from "../../../assets/brand-10.png";
import Brand11 from "../../../assets/brand-11.png";
import Brand12 from "../../../assets/brand-12.png";
import Playstore from "../../../assets/play-store.png";
import Appstore from "../../../assets/apple-store.png";
import AppScreen from "../../../assets/app-screen.png";
const Shop = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <section className={ShopStyle.third_section}>
      <div className="container px-3 mb-3" data-aos="fade-up">
        <div className={`row ${ShopStyle.row_media}`}>
          <div className="col-xl-12">
            <div className={ShopStyle.section_heading}>
              <h2>Shop by Brand</h2>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`container ${ShopStyle.container_media}`}
        data-aos="fade-up"
      >
        <div className={`row ${ShopStyle.row_media}`}>
          <div className="col-xl-12">
            <div className={`row ${ShopStyle.row_media1}`}>
              <div
                className={`col-xl-2 col-lg-3 col-md-4 col-sm-6 col-xs-6 ${ShopStyle.mobile_logo}`}
              >
                <div className={ShopStyle.logo_container}>
                  <img src={Brand1} alt="" />
                </div>
              </div>
              <div
                className={`col-xl-2 col-lg-3 col-md-4 col-sm-6 col-xs-6 ${ShopStyle.mobile_logo}`}
              >
                <div className={ShopStyle.logo_container}>
                  <img src={Brand2} alt="" />
                </div>
              </div>
              <div
                className={`col-xl-2 col-lg-3 col-md-4 col-sm-6 col-xs-6 ${ShopStyle.mobile_logo}`}
              >
                <div className={ShopStyle.logo_container}>
                  <img src={Brand3} alt="" />
                </div>
              </div>
              <div
                className={`col-xl-2 col-lg-3 col-md-4 col-sm-6 col-xs-6 ${ShopStyle.mobile_logo}`}
              >
                <div className={ShopStyle.logo_container}>
                  <img src={Brand4} alt="" />
                </div>
              </div>
              <div
                className={`col-xl-2 col-lg-3 col-md-4 col-sm-6 col-xs-6 ${ShopStyle.mobile_logo}`}
              >
                <div className={ShopStyle.logo_container}>
                  <img src={Brand5} alt="" />
                </div>
              </div>
              <div
                className={`col-xl-2 col-lg-3 col-md-4 col-sm-6 col-xs-6 ${ShopStyle.mobile_logo}`}
              >
                <div className={ShopStyle.logo_container}>
                  <img src={Brand6} alt="" />
                </div>
              </div>
              <div
                className={`col-xl-2 col-lg-3 col-md-4 col-sm-6 col-xs-6 ${ShopStyle.mobile_logo}`}
              >
                <div className={ShopStyle.logo_container}>
                  <img src={Brand7} alt="" />
                </div>
              </div>
              <div
                className={`col-xl-2 col-lg-3 col-md-4 col-sm-6 col-xs-6 ${ShopStyle.mobile_logo}`}
              >
                <div className={ShopStyle.logo_container}>
                  <img src={Brand8} alt="" />
                </div>
              </div>
              <div
                className={`col-xl-2 col-lg-3 col-md-4 col-sm-6 col-xs-6 ${ShopStyle.mobile_logo}`}
              >
                <div className={ShopStyle.logo_container}>
                  <img src={Brand9} alt="" />
                </div>
              </div>
              <div
                className={`col-xl-2 col-lg-3 col-md-4 col-sm-6 col-xs-6 ${ShopStyle.mobile_logo}`}
              >
                <div className={ShopStyle.logo_container}>
                  <img src={Brand10} alt="" />
                </div>
              </div>
              <div
                className={`col-xl-2 col-lg-3 col-md-4 col-sm-6 col-xs-6 ${ShopStyle.mobile_logo}`}
              >
                <div className={ShopStyle.logo_container}>
                  <img src={Brand11} alt="" />
                </div>
              </div>
              <div
                className={`col-xl-2 col-lg-3 col-md-4 col-sm-6 col-xs-6 ${ShopStyle.mobile_logo}`}
              >
                <div className={ShopStyle.logo_container}>
                  <img src={Brand12} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container px-3 mt-5 pt-2">
        <div className={`row ${ShopStyle.row_media}`}>
          <div className="col-xl-6 mb-4" data-aos="fade-right">
            <div className={ShopStyle.backgrounded_adds1}>
              <div className={ShopStyle.add_info}>
                <ul className={ShopStyle.time}>
                  <li>
                    <span>33</span>
                    <small>Days</small>
                  </li>
                  <li>
                    <span>9</span>
                    <small>Hours</small>
                  </li>
                  <li>
                    <span>56</span>
                    <small>Minutes</small>
                  </li>
                  <li>
                    <span>6</span>
                    <small>Seconds</small>
                  </li>
                </ul>
                <h2>WOO! Flash Sale</h2>
                <span className={ShopStyle.banner_btn}>
                  Shop Now
                  <Icon icon="material-symbols:chevron-right" />
                </span>
              </div>
            </div>
          </div>
          <div className="col-xl-6" data-aos="fade-left">
            <div className={ShopStyle.backgrounded_adds2}>
              <div className={ShopStyle.add_info}>
                <h6>MOBILE APP VERSION</h6>
                <h2>
                  Get Our <span>Mobile App</span>
                  <br />
                  It’s Make easy for you life !
                </h2>
                <div className={ShopStyle.stores}>
                  <div className={ShopStyle.store}>
                    <img src={Playstore} alt="" />
                  </div>
                  <div className={ShopStyle.store}>
                    <img src={Appstore} alt="" />
                  </div>
                </div>
                <div className={ShopStyle.lying_phone}>
                  <img src={AppScreen} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Shop;
