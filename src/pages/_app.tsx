import { Outlet } from "react-router";

export default function App() {
  console.debug(Outlet);
  return (
    <section>
      <header>
        <nav>...</nav>
      </header>
      <main>
        <Outlet />
      </main>
    </section>
  );
}
