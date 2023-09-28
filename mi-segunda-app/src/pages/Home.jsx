import Button from "../components/Button";
import useCounter from "../hooks/userCounter";

const Home = () => {
  const { valor, sumar, restar } = useCounter(10, 5);

  return (
    <>
      <h1>Mi sitio en React</h1>

      <Button onClick={restar}>Restar</Button>
      {valor}
      <Button onClick={sumar}>Sumar</Button>
    </>
  );
};

export default Home;
