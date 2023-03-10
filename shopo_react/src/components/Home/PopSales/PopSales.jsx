import React from "react";
import { useEffect } from "react";
import PopSalesStyle from "../PopSales/PopSales.module.scss";
import { Icon } from "@iconify/react";
import AOS from "aos";
import "aos/dist/aos.css";
import products from "../../../Mock/MockData";
import Ads3 from "../../../assets/ads-3.png";
const PopSales = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <section className={PopSalesStyle.six_section} data-aos="fade-up">
      <div className="container px-3 mb-3">
        <div className={`row ${PopSalesStyle.row_media}`}>
          <div className="col-xl-12">
            <div className={PopSalesStyle.section_heading}>
              <h2>Popular Sales</h2>
              <div className={PopSalesStyle.btn_more}>
                <span>View More</span>
                <Icon icon="line-md:upload-outline-loop" rotate={1} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container px-3">
        <div className={`row ${PopSalesStyle.row_media}`}>
          <div className={`col-xl-3 ${PopSalesStyle.col_dnone}`}>
            <div className={PopSalesStyle.blue_banner}>
              <div className={PopSalesStyle.marks}>
                <h6>Mobile & Tablet</h6>
                <ul>
                  <li>
                    <span>Xiaomi</span>
                  </li>
                  <li>
                    <span>Apple</span>
                  </li>
                  <li>
                    <span>Google</span>
                  </li>
                  <li>
                    <span>Samsung</span>
                  </li>
                </ul>
                <div className={PopSalesStyle.btn_shop}>
                  <span>
                    Shop Now <Icon icon="material-symbols:chevron-right" />
                  </span>
                </div>
              </div>
            </div>
          </div>
          {products.slice(4, 7).map((element, index) => (
            <React.Fragment key={`data_id ${element.id}`}>
              <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12 px-3">
                <div className={PopSalesStyle.main_card}>
                  <div className={PopSalesStyle.product_image}>
                    <img src={element.image} alt="" />
                    <div className={PopSalesStyle.popular_banner}>
                      {element.bannerPopular}
                    </div>
                    <div className={PopSalesStyle.new_banner}>
                      {element.bannerNew}
                    </div>
                    <div className={PopSalesStyle.card_action}>
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
                  <div className={PopSalesStyle.card_texts}>
                    <div className={PopSalesStyle.stars}>
                      <Icon icon="emojione:star" />
                      <Icon icon="emojione:star" />
                      <Icon icon="emojione:star" />
                      <Icon icon="emojione:star" />
                      <Icon icon="emojione:star" />
                    </div>
                    <h5>{element.productName}</h5>
                    <div className={PopSalesStyle.price_field}>
                      <span className={PopSalesStyle.old_price}>
                        {element.oldprice}
                      </span>
                      <span className={PopSalesStyle.new_price}>
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
      <div className="container px-3 mt-5 pt-2">
        <div className={`row ${PopSalesStyle.row_media}`}>
          <div className="col-xl-12" data-aos="fade-right">
            <div className={PopSalesStyle.long_prop}>
              <img src={Ads3} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PopSales;
