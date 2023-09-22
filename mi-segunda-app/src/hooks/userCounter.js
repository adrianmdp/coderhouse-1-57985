import { useState } from "react";

const useCounter = (valorInicial, intervalo) => {
  const [valor, setValor] = useState(valorInicial);

  const sumar = () => {
    setValor(valor + intervalo);
  };

  const restar = () => {
    setValor(valor - intervalo);
  };

  return { valor, sumar, restar };
};

export default useCounter;
