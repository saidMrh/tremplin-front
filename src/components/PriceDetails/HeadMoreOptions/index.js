import React from "react";
import cn from "classnames";
import styles from "./HeadMoreOptions.module.sass";
import Icon from "../../Icon";

const parameters = ["1 bedroom", "1 private bath"];

const HeadMoreOptions = ({ className, image, title }) => {
  return (
    <div className={cn(className, styles.head)}>
      <div className={styles.preview}>
        <img src={image} alt="Nature" />
      </div>
      <div className={styles.details}>
        <div className={styles.title}>{title}</div>
        <div className={styles.author}>
          <div className={styles.text}>Hosted by</div>
          <div className={styles.avatar}>
            <img src="/images/content/avatar.jpg" alt="Avatar" />
          </div>
          <div className={styles.man}>Zoe Towne</div>
        </div>
        <div className={styles.parameters}>
          {parameters.map((x, index) => (
            <div className={styles.parameter} key={index}>
              {x}
            </div>
          ))}
        </div>
        <div className={styles.rating}>
          <Icon name="star" size="20" />
          <div className={styles.number}>4.8</div>
          <div className={styles.reviews}>(256 reviews)</div>
        </div>
      </div>
    </div>
  );
};

export default HeadMoreOptions;
