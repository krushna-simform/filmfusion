import { Button } from "./ui/Button.tsx";
import { Search } from "./ui/Search.tsx";

const Header = () => {
  return (
    <header className="w-[70%] mx-auto text-white flex justify-between py-6 items-center">
      <div>
        <p
          className="text-[var(--primary-color)] text-4xl font-bold"
          role="heading"
        >
          FilmFusion
        </p>
      </div>
      <div className="flex items-center gap-4">
        <Search />
        <Button ariaLabel="Login" children="Login" />
      </div>
    </header>
  );
};

export default Header;
