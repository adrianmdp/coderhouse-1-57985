const config = {
  routes: {
    public: ["/login", "/register", "/about", "/"],
    private: ["/profile", "/dashboard", "/settings", "/contact"],
  },
};

const withAuth = (Component) => {
  // En este hoc vamos a verificar en que url estamos
  // Si estamos en una ruta login o register publica y el usuario esta logueado, vamos a dashboard
  // Si estamos desloguedos y estamos en una ruta privada, vamos a login
  //

  return; // COmponente
};

export default withAuth;
