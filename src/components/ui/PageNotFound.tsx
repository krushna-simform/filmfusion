import { Link } from "react-router";
import { Button } from "./Button";

export const PageNotFound = () => {
  return (
    <div className="w-[70%] m-auto h-full flex flex-col items-center pt-70">
      <p className="text-white text-9xl">404</p>
      <p className="text-white text-2xl">Page not found</p>
      <Link to="/" className="mt-6">
        <Button ariaLabel="Back to Home page" children="Back to Home page" />
      </Link>
    </div>
  );
};
