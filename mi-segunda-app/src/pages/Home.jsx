import { useEffect } from "react";
import Button from "../components/Button";
import useCounter from "../hooks/userCounter";
import Image from "../assets/images/ditto.png";

const Home = () => {
  const { valor, sumar, restar } = useCounter(10, 5);

  useEffect(() => {
    const myEventFunction = (event) => {};

    window.addEventListener("resize", myEventFunction);

    return () => {
      window.removeEventListener("resize", myEventFunction);
    };
  }, []);

  const handleClick = (event) => {};

  const realizarCompra = (event) => {
    event.stopPropagation();
    console.log("Click al button");
  };

  return (
    <>
      <h1>Mi sitio en React</h1>

      <button id="my-button" onClick={handleClick}></button>

      <Button onClick={restar}>Restar</Button>
      {valor}
      <Button onClick={sumar}>Sumar</Button>

      <div
        style={{ border: "1px solid #DDD", padding: 10, borderRadius: 5 }}
        onClick={() => {
          console.log("Click al div");
        }}
      >
        <img src={Image} alt="" />
        <h2>Ditto</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Necessitatibus cupiditate a veniam tenetur consequuntur dignissimos
          minus minima asperiores maxime veritatis porro natus ducimus iusto
          illo praesentium corporis mollitia, nulla in?
        </p>
        <Button onClick={realizarCompra}>Comprar</Button>
      </div>
    </>
  );
};

export default Home;
