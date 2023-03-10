import React from "react";
import { useEffect } from "react";
import GamerStyle from "../GamerWorld/GamerWorld.module.scss";
import { Icon } from "@iconify/react";
import AOS from "aos";
import "aos/dist/aos.css";
import products from "../../../Mock/MockData";

const GamerWorld = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <section className={GamerStyle.gamer} data-aos="fade-up">
      <div className="container px-3 mb-3">
        <div className={`row ${GamerStyle.row_media}`}>
          <div className="col-xl-12">
            <div className={GamerStyle.section_heading}>
              <h2>Gamer World</h2>
              <div className={GamerStyle.btn_more}>
                <span>View More</span>
                <Icon icon="line-md:upload-outline-loop" rotate={1} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container px-3">
        <div className={`row ${GamerStyle.row_media}`}>
          <div className={`col-xl-3 ${GamerStyle.col_dnone}`}>
            <div className={GamerStyle.blue_banner}>
              <div className={GamerStyle.marks}>
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
                <div className={GamerStyle.btn_shop}>
                  <span>
                    Shop Now <Icon icon="material-symbols:chevron-right" />
                  </span>
                </div>
              </div>
            </div>
          </div>
          {products.slice(0, 3).map((element, index) => (
            <React.Fragment key={`data_id ${element.id}`}>
              <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12 px-3">
                <div className={GamerStyle.main_card}>
                  <div className={GamerStyle.product_image}>
                    <img src={element.image} alt="" />
                    <div className={GamerStyle.popular_banner}>
                      {element.bannerPopular}
                    </div>
                    <div className={GamerStyle.new_banner}>
                      {element.bannerNew}
                    </div>
                    <div className={GamerStyle.card_action}>
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
                  <div className={GamerStyle.card_texts}>
                    <div className={GamerStyle.stars}>
                      <Icon icon="emojione:star" />
                      <Icon icon="emojione:star" />
                      <Icon icon="emojione:star" />
                      <Icon icon="emojione:star" />
                      <Icon icon="emojione:star" />
                    </div>
                    <h5>{element.productName}</h5>
                    <div className={GamerStyle.price_field}>
                      <span className={GamerStyle.old_price}>
                        {element.oldprice}
                      </span>
                      <span className={GamerStyle.new_price}>
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
    </section>
  );
};

export default GamerWorld;
