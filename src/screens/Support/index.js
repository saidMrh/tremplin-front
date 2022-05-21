import React from "react";
import styles from "./Support.module.sass";
import Main from "./Main";
import Topics from "./Topics";
import Faq from "./Faq";
import Live from "../../components/Live";

const Support = () => {
  return (
    <>
      <Main />
      <Topics />
      <Faq />
      <Live title="Awesome desitinations" />
    </>
  );
};

export default Support;
