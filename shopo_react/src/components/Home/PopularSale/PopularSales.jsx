import React from "react";
import { useEffect } from "react";
import PopularSaleStyle from "../PopularSale/PopularSales.module.scss";
import { Icon } from "@iconify/react";
import products from "../../../Mock/MockData";
import AOS from "aos";
import "aos/dist/aos.css";
const PopularSales = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <section className={PopularSaleStyle.eight_section}>
      <div className="container px-3 mb-3">
        <div className={`row ${PopularSaleStyle.row_media}`}>
          <div className="col-xl-12">
            <div className={PopularSaleStyle.section_heading}>
              <h2>Popular Sales</h2>
              <div className={PopularSaleStyle.btn_more}>
                <span>View More</span>
                <Icon icon="line-md:upload-outline-loop" rotate={1} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container px-3">
        <div className={`row ${PopularSaleStyle.row_media}`}>
          {products.slice(0, 12).map((element, index) => (
            <React.Fragment key={`data_id ${element.id}`}>
              <div
                className="col-xl-4 col-lg-4 col-md-6 col-sm-12 px-3"
                data-aos="fade-up"
              >
                <div className={PopularSaleStyle.main_card}>
                  <div className={PopularSaleStyle.product_image}>
                    <img src={element.image} alt="" />
                  </div>
                  <div className={PopularSaleStyle.card_texts}>
                    <h5>{element.productName}</h5>
                    <div className={PopularSaleStyle.price_field}>
                      <span className={PopularSaleStyle.old_price}>
                        {element.oldprice}
                      </span>
                      <span className={PopularSaleStyle.new_price}>
                        ${element.newprice}
                      </span>
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

export default PopularSales;
