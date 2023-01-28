import React from "react";
import GamerWorld from "./GamerWorld/GamerWorld";
import PhotoCollage from "./PhotoCollage/PhotoCollage";
import Shop from "./Shop/Shop";
import TopSelling from "./TopSelling/TopSelling";
import BestSaller from "./BestSaller/BestSaller";
import PopSales from "./PopSales/PopSales";
import NewArrivals from "./NewArrivals/NewArrivals";
import PopularSales from "./PopularSale/PopularSales";
import SendEmail from "./SendEmail/SendEmail";
const Home = () => {
  return (
    <>
      <PhotoCollage />
      <GamerWorld />
      <Shop />
      <TopSelling />
      <BestSaller />
      <PopSales />
      <NewArrivals />
      <PopularSales />
      <SendEmail />
    </>
  );
};

export default Home;
