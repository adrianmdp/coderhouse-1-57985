import { useEffect, useRef } from "react";
import Layout from "../components/Layout";

const Contact = () => {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <Layout className="page caontact" id="contact-page">
      <main>
        <h1>Contacto</h1>
        <form action="">
          <div>
            <label htmlFor=""></label>
            <input type="text" name="" id="" ref={inputRef} />
          </div>

          <button>Enviar</button>
        </form>
      </main>
    </Layout>
  );
};
export default Contact;
