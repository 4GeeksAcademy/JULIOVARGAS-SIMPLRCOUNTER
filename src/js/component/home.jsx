import React from "react";
//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


//create your first component
const Home = (props) => {
  return (
    <div className="text-center">
      <div className="card" style={{ color: "white", padding:"100px"}}>
        <div className="card-body" style={{ backgroundColor: "black", fontSize: "70px"}}>
		<FontAwesomeIcon icon="fa-duotone fa-clock" />
          {props.centenas}
          {props.decimal}
          {props.unidad}
        </div>
      </div>
    </div>
  );
};

export default Home;