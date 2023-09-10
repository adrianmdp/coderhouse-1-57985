const Button = ({ txt, classes, disabled, id, type, icon }) => {
  return (
    <button id={id} class={classes.join(" ")} type={type} disabled={disabled}>
      {txt}
      <i class={`fa ${icon}`}></i>
    </button>
  );
};

const Main = () => {
  return (
    <main>
      <Button txt="Cancelar" />
      <Button
        txt="Borrar"
        classes={["btn", "btn-primary"]}
        disabled={true}
        id="btn"
        type="button"
        icon="fa-spinner fa-spin"
      />
      <Button
        txt="Enviar"
        classes={["btn", "btn-primary"]}
        disabled={false}
        id="btn"
        type="button"
        icon="fa-spinner fa-spin"
      />
    </main>
  );
};
