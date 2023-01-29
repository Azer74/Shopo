import React from "react";
import { useEffect } from "react";
import TopSellStyle from "../TopSelling/TopSelling.module.scss";
import { Icon } from "@iconify/react";
import AOS from "aos";
import "aos/dist/aos.css";
import products from "../../../Mock/MockData";

const TopSelling = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <section className={TopSellStyle.fourth_section}>
      <div className="container px-3 mb-3">
        <div className="row px-5">
          <div className="col-xl-12">
            <div className={TopSellStyle.section_heading}>
              <h2>Top Selling Products</h2>
              <div className={TopSellStyle.btn_more}>
                <span>View More</span>
                <Icon icon="line-md:upload-outline-loop" rotate={1} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container px-3" data-aos="fade-left">
        <div className="row px-5">
          {products.slice(3, 7).map((element, index) => (
            <React.Fragment key={`data_id ${element.id}`}>
              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                <div className={TopSellStyle.main_card}>
                  <div className={TopSellStyle.product_image}>
                    <img src={element.image} alt="" />
                    <div className={TopSellStyle.popular_banner}>
                      {element.bannerPopular}
                    </div>
                    <div className={TopSellStyle.new_banner}>
                      {element.bannerNew}
                    </div>
                  </div>
                  <div className={TopSellStyle.card_texts}>
                    <div className={TopSellStyle.stars}>
                      <Icon icon="emojione:star" />
                      <Icon icon="emojione:star" />
                      <Icon icon="emojione:star" />
                      <Icon icon="emojione:star" />
                      <Icon icon="emojione:star" />
                    </div>
                    <h5>{element.productName}</h5>
                    <div className={TopSellStyle.price_field}>
                      <span className={TopSellStyle.old_price}>
                        {element.oldprice}
                      </span>
                      <span className={TopSellStyle.new_price}>
                        ${element.newprice}
                      </span>
                    </div>
                    <button>Add To Cart</button>
                    <div className={TopSellStyle.card_action}>
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
                </div>
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopSelling;
