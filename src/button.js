import PropTypes from "prop-types";
import styles from "./button.module.css";
import styles2 from "./App.module.css";
import { useState, useEffect } from "react";

const Button = ({ text }) => {
  const [show, setShow] = useState(false);
  const onClick = () => {
    setShow((current) => !current);
  };
  const Hello = () => {
    useEffect(() => {
      console.log("ㅎㅇ");
      return () => console.log("ㅂㅇ");
    }, []);
    return <h1>안녕</h1>;
  };

  return (
    <div>
      {show ? <Hello /> : null}
      <button onClick={onClick} className={styles.Btn}>
        {show ? "보이는상태" : "숨은상태"}
      </button>
    </div>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Button;
