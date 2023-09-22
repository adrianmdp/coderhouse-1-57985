import Button from "../components/Button";
import Layout from "../components/Layout";
import Prueba from "../components/Prueba";
import useCounter from "../hooks/userCounter";

const Dashboard = () => {
  const { valor, restar, sumar } = useCounter(123484, 6253);

  return (
    <Layout>
      <h1>Mi Dashboard en React</h1>

      <Button onClick={restar}>Restar</Button>
      {valor}
      <Button onClick={sumar}>Sumar</Button>

      <hr />

      <Prueba>
        {(param1, param2) => (
          <div>
            {param1} - {param2}
          </div>
        )}
      </Prueba>
    </Layout>
  );
};

export default Dashboard;
