import type { Director as DirectorType } from "../../utils/interface";
import { Image } from "./Image";

export const Director = ({ director }: { director: Array<DirectorType> }) => {
  return (
    <div className="pt-8">
      <p className="text-amber-200 text-2xl font-semibold mb-5">Director</p>
      <div className="flex gap-8 flex-wrap">
        {director.map((item) => (
          <div
            className="max-w-40 text-center flex flex-col items-center"
            key={item.directorName}
            tabIndex={0}
          >
            <div className="h-30 w-30 rounded-full overflow-hidden">
              <Image source={item.imageUrl} alt={item.imageUrl} />
            </div>
            <p
              className="text-white font-semibold mt-2 text-lg"
              aria-label={`Director: ${item.directorName}`}
            >
              {item.directorName}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
