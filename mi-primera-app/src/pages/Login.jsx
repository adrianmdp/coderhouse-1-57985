import { useEffect, useState } from "react";
import Layout from "../components/Layout";

const Login = () => {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(100);

  const sumarDeAUno = () => {
    setCount(count + 1);
  };

  const sumarDeACien = () => {
    setCount2(count2 + 100);
  };

  useEffect(() => {
    const myFunction = () => {
      // Realizo las operaciones
    };

    // console.log("addEventListener");
    // document.addEventListener("click", myFunction);

    // return () => {
    //   console.log("removeEventListener");
    //   document.removeEventListener("click", myFunction);
    // };
  }, [count]);

  useEffect(() => {
    console.log("Llamado a una api para traer libros");

    return () => {
      console.log("unmount");
    };
  }, []);

  return (
    <Layout className="page login" id="login-page">
      <h1>{count}</h1>
      <h2>{count2}</h2>
      <button onClick={sumarDeAUno}>Sumar de a 1</button>
      <button onClick={sumarDeACien}>Sumar de a 100</button>
      <main>
        <h1>Login</h1>
        <form action="">
          <div>
            <label htmlFor=""></label>
            <input type="text" name="" id="" />
          </div>

          <button>Enviar</button>
        </form>
      </main>
    </Layout>
  );
};

export default Login;
