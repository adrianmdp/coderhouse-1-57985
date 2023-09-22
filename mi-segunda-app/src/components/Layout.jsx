import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ children, id, className, theme }) => {
  return (
    <div id={id} className={`${className} ${theme}`}>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
