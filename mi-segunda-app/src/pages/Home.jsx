import Button from "../components/Button";
import Layout from "../components/Layout";
import useCounter from "../hooks/userCounter";

const Home = () => {
  const { valor, sumar, restar } = useCounter(10, 5);

  return (
    <Layout>
      <h1>Mi sitio en React</h1>

      <Button onClick={restar}>Restar</Button>
      {valor}
      <Button onClick={sumar}>Sumar</Button>
    </Layout>
  );
};

export default Home;
