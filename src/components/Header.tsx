import { Link, useLocation } from "react-router";
import { Button } from "./ui/Button.tsx";
import { Search } from "./ui/Search.tsx";

const Header = () => {
  const location = useLocation();

  return (
    <header className="w-[70%] mx-auto text-white flex justify-between py-6 items-center">
      <div>
        <Link to="/">
          <h1 className="text-[var(--primary-color)] text-4xl font-bold">
            FilmFusion
          </h1>
        </Link>
      </div>
      <div className="flex items-center gap-4">
        {location.pathname === "/" && <Search />}
        <Button ariaLabel="Login" children="Login" />
      </div>
    </header>
  );
};

export default Header;
