import { Button } from "./ui/Button.tsx";
import { Search } from "./ui/Search.tsx";

const Header = () => {
  return (
    <header className="text-white flex justify-between py-6 lg:px-20 sm:px-3">
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
        <Button ariaLabel="Login" innerText="Login" />
        <Button ariaLabel="Register" innerText="Register" />
      </div>
    </header>
  );
};

export default Header;
