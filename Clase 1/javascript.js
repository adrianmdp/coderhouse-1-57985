const makeBUtton = (txt, classes, disabled, id, type) => {
  const button = document.createElement("button");
  const text = document.createTextNode(txt);
  button.appendChild(text);

  classes.forEach((c) => {
    button.classList.add(c);
  });
  button.setAttribute("disabled", disabled);
  button.setAttribute("id", id);
  button.setAttribute("type", type);
  return button;
};

const btn1 = makeBUtton(
  "Enviar",
  ["btn", "btn-primary", "btn-contant"],
  false,
  "btn-contact",
  "submit"
);
const btn2 = makeBUtton(
  "Enviar",
  ["btn", "btn-primary", "btn-contant"],
  false,
  "btn-contact",
  "submit"
);
