import { NavLink, Outlet } from "react-router-dom";

export const Layout = () => {
  return (
    <>
      <header className="header">
        <h1>What'Z OOp?</h1>
        <nav>
          <ul>
            <li>
              <NavLink to={"/"}>Hem</NavLink>
            </li>
            <li>
              <NavLink to={"/animals"}>Till djuren</NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <Outlet></Outlet>
      </main>
      <footer></footer>
    </>
  );
};
