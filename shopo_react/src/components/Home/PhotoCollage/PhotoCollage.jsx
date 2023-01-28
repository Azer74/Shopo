import { useEffect } from "react";
import { Icon } from "@iconify/react";
import CollageStyle from "../PhotoCollage/Photo.module.scss";
import PinkPhone from "../../../assets/banner-1.png";
import SmartWatch from "../../../assets/banner-2.png";
import Xbox from "../../../assets/banner-3.png";
import AOS from "aos";
import "aos/dist/aos.css";

const PhotoCollage = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <section className={CollageStyle.first_section}>
      <div className="container px-3">
        <div className="row px-5">
          <div className="col-xl-8" data-aos="fade-right">
            <div className={CollageStyle.image1}>
              <img src={PinkPhone} alt="" />
            </div>
          </div>
          <div className="col-xl-4" data-aos="fade-left">
            <div className="col-xl-12 px-0">
              <div className={CollageStyle.image2}>
                <img src={SmartWatch} alt="" />
              </div>
            </div>
            <div className="col-xl-12 px-0">
              <div className={CollageStyle.image3}>
                <img src={Xbox} alt="" />
              </div>
            </div>
          </div>
          <div className="col-xl-12" data-aos="fade-up">
            <div className={CollageStyle.white_col_adapt}>
              <div className={CollageStyle.ability}>
                <div className={CollageStyle.ability_icon}>
                  <Icon icon="noto-v1:shopping-cart" hFlip={true} />
                </div>
                <div className={CollageStyle.ability_text}>
                  <h6>Free Shipping</h6>
                  <p>When ordering over $100</p>
                </div>
              </div>
              <div className={CollageStyle.ability}>
                <div className={CollageStyle.ability_icon}>
                  <Icon icon="eva:refresh-fill" />
                </div>
                <div className={CollageStyle.ability_text}>
                  <h6>Free Shipping</h6>
                  <p>When ordering over $100</p>
                </div>
              </div>
              <div className={CollageStyle.ability}>
                <div className={CollageStyle.ability_icon}>
                  <Icon icon="mdi:security-lock-outline" />
                </div>
                <div className={CollageStyle.ability_text}>
                  <h6>Free Shipping</h6>
                  <p>When ordering over $100</p>
                </div>
              </div>
              <div className={CollageStyle.ability}>
                <div className={CollageStyle.ability_icon}>
                  <Icon icon="noto:trophy" />
                </div>
                <div className={CollageStyle.ability_text}>
                  <h6>Free Shipping</h6>
                  <p>When ordering over $100</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PhotoCollage;
