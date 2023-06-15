import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = (props) => {
	return (
		<div className="text-center">
			<h1>
				{props.centenas}
				{props.decimal}
				{props.unidad}
			</h1>
		</div>
	);
};

export default Home;
