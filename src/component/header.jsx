import logo from "../assets/logo.svg";
import Button from "./button.jsx";

const Header = () => {
  const runME = () => {
    console.log("clicked!");
  };
  return (
    <header className="flex items-center justify-between  mx-auto w-full rounded-t py-2 px-3 gap-2">
      <div>
        <img src={logo} alt="couldnt load image" className="inline w-8" />
        <h1 className="inline text-white-900">
          <span className="text-blue-600">Todo</span>
          App
        </h1>
      </div>
      <Button onClick={runME} />
    </header>
  );
};
export default Header;
