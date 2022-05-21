import React from "react";
import cn from "classnames";
import styles from "./CheckoutComplete.module.sass";
import Control from "../../components/Control";
import CheckoutSlider from "./CheckoutSlider";
import CheckoutComplete from "../../components/CheckoutComplete";

const breadcrumbs = [
  {
    title: "Things to do",
    url: "/#",
  },
  {
    title: "Checkout completed",
  },
];

const gallery = [
  {
    src: "/images/content/slider-pic-3.jpg",
    srcSet: "/images/content/slider-pic-3@2x.jpg",
  },
  {
    src: "/images/content/slider-pic-3.jpg",
    srcSet: "/images/content/slider-pic-3@2x.jpg",
  },
  {
    src: "/images/content/slider-pic-3.jpg",
    srcSet: "/images/content/slider-pic-3@2x.jpg",
  },
];

const parameters = [
  {
    title: "Best tour guide",
    icon: "user",
  },
  {
    title: "Queenstown, New Zealand",
    icon: "flag",
  },
];

const options = [
  {
    title: "Booking code:",
    content: "UI8_150989",
    icon: "hand-cart",
  },
  {
    title: "Date:",
    content: "30 Apr, 2021",
    icon: "calendar",
  },
  {
    title: "Total:",
    content: "$833",
    icon: "receipt",
  },
  {
    title: "Payment method:",
    content: "Credit card",
    icon: "wallet",
  },
];

const items = [
  {
    title: "Dates",
    content: "May 15 - 22, 2021",
    icon: "clock",
    color: "#92A5EF",
  },
  {
    title: "Guests",
    content: "2 guest",
    icon: "user",
    color: "#FA8F54",
  },
];

const StaysCheckoutComplete = () => {
  return (
    <div className={cn("section-mb80", styles.section)}>
      <div className={cn("container", styles.container)}>
        <Control
          className={styles.control}
          urlHome="/"
          breadcrumbs={breadcrumbs}
        />
        <div className={styles.row}>
          <div className={styles.col}>
            <CheckoutComplete
              className={styles.complete}
              title="Premium milford sound tour ex queenstown"
              parameters={parameters}
              options={options}
              items={items}
            />
          </div>
          <div className={styles.col}>
            <CheckoutSlider className={styles.slider} gallery={gallery} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StaysCheckoutComplete;
