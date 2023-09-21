const Layout = ({ children, id, className }) => {
  return (
    <div id={id} className={className}>
      <header>Header en layout</header>
      <nav>
        <li>
          <a href="/prueba">Ir a la pagina Login</a>
        </li>
        <li>
          <a href="">Ir a la pagina Contact</a>
        </li>
      </nav>
      {children}
      <footer>Footer en layout</footer>
    </div>
  );
};

export default Layout;
