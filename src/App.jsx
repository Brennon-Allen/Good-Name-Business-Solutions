import "./App.css";
import Logo from "./assets/Logo.png";
import Menu from "./Menu";

export default function App() {
  return (
    <>
      <img src={Logo} alt="logo" className="logo" />
      <Menu />
    </>
  );
}
