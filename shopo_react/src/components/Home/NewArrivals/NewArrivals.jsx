import React from "react";
import { useEffect } from "react";
import NewStyle from "../NewArrivals/NewArrivals.module.scss";
import { Icon } from "@iconify/react";
import AOS from "aos";
import "aos/dist/aos.css";
import products from "../../../Mock/MockData";
import Ads4 from "../../../assets/ads-4.png";
const NewArrivals = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <section className={NewStyle.seven_section} data-aos="fade-up">
      <div className="container px-3 mb-3">
        <div className="row px-5">
          <div className="col-xl-12">
            <div className={NewStyle.section_heading}>
              <h2>New Arrivals</h2>
              <div className={NewStyle.btn_more}>
                <span>View More</span>
                <Icon icon="line-md:upload-outline-loop" rotate={1} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container px-3">
        <div className="row px-5">
          {products.slice(0, 12).map((element, index) => (
            <React.Fragment key={`data_id ${element.id}`}>
              <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 px-3">
                <div className={NewStyle.main_card}>
                  <div className={NewStyle.product_image}>
                    <img src={element.image} alt="" />
                    <div className={NewStyle.popular_banner}>
                      {element.bannerPopular}
                    </div>
                    <div className={NewStyle.new_banner}>
                      {element.bannerNew}
                    </div>
                    <div className={NewStyle.card_action}>
                      <ul>
                        <li>
                          <Icon icon="uil:expand-arrows-alt" />
                        </li>
                        <li>
                          <Icon icon="bytesize:heart" />
                        </li>
                        <li>
                          <Icon icon="akar-icons:arrow-cycle" rotate={1} />
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className={NewStyle.card_texts}>
                    <div className={NewStyle.stars}>
                      <Icon icon="emojione:star" />
                      <Icon icon="emojione:star" />
                      <Icon icon="emojione:star" />
                      <Icon icon="emojione:star" />
                      <Icon icon="emojione:star" />
                    </div>
                    <h5>{element.productName}</h5>
                    <div className={NewStyle.price_field}>
                      <span className={NewStyle.old_price}>
                        {element.oldprice}
                      </span>
                      <span className={NewStyle.new_price}>
                        ${element.newprice}
                      </span>
                      <button>
                        <Icon icon="bi:handbag" />
                        Add To Cart
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
      <div className="container px-3 mt-4">
        <div className="row px-5">
          <div className="col-xl-12" data-aos="fade-right">
            <div className={NewStyle.ads_4}>
              <img src={Ads4} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewArrivals;
