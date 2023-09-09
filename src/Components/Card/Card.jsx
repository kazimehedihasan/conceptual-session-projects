//  import Image from "./Image";
//  import Title from "./Title";
//  import Views from "./Views";
import "./Title.css";
import "./Views.css";

const pStyles = {
  color: "red",
  fontSize: "16px",
};

const viewsItem = {
  views: "100k",
};

const resultSum = (a, b) => {
  return a + b;
};
const Card = () => {
  const title = "";
  return (
    <div className=" card w-full bg-base-100 shadow-xl ">
      <img className="w-80" src="./images/kazi mehedi.jpg" alt="" />
      <div className="card-body">
        <h1
          style={{
            textAlign: "center",
            fontSize: "40px",
            fontWeight: "bold",
            color: "green",
          }}
        >
          Shape of You
        </h1>
        <p className="title-class">{title? title:"not found"}</p>
        <p style={pStyles}>
          dolor sit amet consectetur adipisicing elit. Qui minus pro
        </p>
        <p className="views-class">{viewsItem.views}</p>

        <p className="text-center">{resultSum(100, 200)}</p>
      </div>
    </div>
  );
};
export default Card;

// 1.27 mint dekha hoiche