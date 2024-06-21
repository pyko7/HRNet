import "./Layout.css";
/**
 *
 * @param {string} title page title
 * @param children page children
 * @returns
 */
const Layout = ({ title, children }) => {
  return (
    <div className="layout">
      <h1 className="title">{title}</h1>
      {children}
    </div>
  );
};

export default Layout;
