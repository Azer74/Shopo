import React from "react";
import { useEffect } from "react";
import EmailStyle from "../SendEmail/SendEmail.module.scss";
import { Icon } from "@iconify/react";
import AOS from "aos";
import "aos/dist/aos.css";
const SendEmail = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <section className={EmailStyle.nine_section}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-6 col-lg-6">
            <div className={EmailStyle.col12_adaptation}>
              <div className={EmailStyle.email_heading} data-aos="fade-up">
                <h2>
                  Get <span>20%</span> Off Discount Coupon
                </h2>
                <p>by Subscribe our Newsletter</p>
              </div>
              <div className={EmailStyle.input_field} data-aos="fade-right">
                <form>
                  <span>
                    <Icon icon="ion:mail-outline" />
                  </span>
                  <input type="text" placeholder="EMAIL ADDRESS" />
                  <button>Get the Coupon</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SendEmail;
