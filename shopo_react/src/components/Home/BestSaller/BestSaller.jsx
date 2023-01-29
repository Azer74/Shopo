import React from "react";
import { useEffect } from "react";
import BestStyle from "../BestSaller/BestSaller.module.scss";
import { Icon } from "@iconify/react";
import Saller1 from "../../../assets/saller-1.png";
import Saller2 from "../../../assets/saller-2.png";
import Saller3 from "../../../assets/saller-3.png";
import Saller4 from "../../../assets/saller-4.png";
import Saller5 from "../../../assets/saller-5.png";
import Saller6 from "../../../assets/saller-6.png";
import AOS from "aos";
import "aos/dist/aos.css";
import Ads1 from "../../../assets/ads-1.png";
import Ads2 from "../../../assets/ads-2.png";
const BestSaller = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <section className={BestStyle.fifth_section}>
      <div className="container px-3">
        <div className="row px-5">
          <div className="col-xl-12">
            <div className={BestStyle.section_heading}>
              <h2>Best Saller</h2>
              <div className={BestStyle.btn_more}>
                <span>View More</span>
                <Icon icon="line-md:upload-outline-loop" rotate={1} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container px-3 mt-3">
        <div className="row px-5">
          <div className="col-xl-2" data-aos="fade-left">
            <div className={BestStyle.division}>
              <div className={BestStyle.division_image}>
                <img src={Saller1} alt="" />
              </div>
              <div className={BestStyle.division_name}>Shopno BD</div>
            </div>
          </div>
          <div className="col-xl-2" data-aos="fade-left">
            <div className={BestStyle.division}>
              <div className={BestStyle.division_image}>
                <img src={Saller2} alt="" />
              </div>
              <div className={BestStyle.division_name}>Eecoms Shop</div>
            </div>
          </div>
          <div className="col-xl-2" data-aos="fade-left">
            <div className={BestStyle.division}>
              <div className={BestStyle.division_image}>
                <img src={Saller3} alt="" />
              </div>
              <div className={BestStyle.division_name}>Fusion X</div>
            </div>
          </div>
          <div className="col-xl-2" data-aos="fade-left">
            <div className={BestStyle.division}>
              <div className={BestStyle.division_image}>
                <img src={Saller4} alt="" />
              </div>
              <div className={BestStyle.division_name}>Rikayi Rox</div>
            </div>
          </div>
          <div className="col-xl-2" data-aos="fade-left">
            <div className={BestStyle.division}>
              <div className={BestStyle.division_image}>
                <img src={Saller5} alt="" />
              </div>
              <div className={BestStyle.division_name}>Habbriyi</div>
            </div>
          </div>
          <div className="col-xl-2" data-aos="fade-left">
            <div className={BestStyle.division}>
              <div className={BestStyle.division_image}>
                <img src={Saller6} alt="" />
              </div>
              <div className={BestStyle.division_name}>Rayhans</div>
            </div>
          </div>
        </div>
      </div>
      <div className="container px-3 mt-5 pt-3">
        <div className="row px-5">
          <div className="col-xl-6" data-aos="fade-right">
            <div className={BestStyle.ads}>
              <img src={Ads1} alt="" />
            </div>
          </div>
          <div className="col-xl-6" data-aos="fade-left">
            <div className={BestStyle.ads}>
              <img src={Ads2} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BestSaller;
