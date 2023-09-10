//  import Image from "./Image";
//  import Title from "./Title";
//  import Views from "./Views";
import "./Title.css";
import "./Views.css";


const Card = (props) => {
console.log(props.item);
  return (
    <div className=" card w-full bg-base-100 shadow-xl ">
      <div className="card-body">
      <img className="w-80" src="./images/kazi mehedi.jpg" alt="" />

        <h1
          style={{
            textAlign: "center",
            fontSize: "40px",
            fontWeight: "bold",
            color: "green",
          }}
        >
         {props.Shape}
        </h1>
        <p className="title-class">{props.item.name} </p>
        <p>

        </p>
        <p className="views-class">{props.item.id}</p>

        <p className="text-center">{}</p>
      </div>
    </div>
  );
};
export default Card;

// 1.27 mint dekha hoiche