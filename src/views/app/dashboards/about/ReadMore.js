import { props } from "ramda";
import React, { useState } from "react";
import Classes from "./style.module.css";

const Content = (props) => {
  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };

  return (
    <div className={Classes.container_read_more}>
      <h2>
        <text className={Classes.read_more_text}>
          {isReadMore ? props.text.slice(0, props.value) : props.text}
          <span onClick={toggleReadMore} className={Classes.read_or_hide}>
            {isReadMore ? "...Read More" : " Show Less"}
          </span>
        </text>
      </h2>
    </div>
  );
};

export default Content;
