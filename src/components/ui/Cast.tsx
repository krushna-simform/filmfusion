import type { Actor } from "../../utils/interface";
import { Image } from "./Image";

export const Cast = ({ cast }: { cast: Array<Actor> }) => {
  return (
    <div className="border-t border-t-amber-100 pt-8">
      <p className="text-amber-200 text-2xl font-semibold mb-5">Cast</p>
      <div className="flex gap-8 flex-wrap">
        {cast.map((item) => (
          <div
            className="max-w-40 text-center flex flex-col items-center"
            key={item.actorName}
            tabIndex={0}
          >
            <div className="h-30 w-30 rounded-full overflow-hidden">
              <Image source={item.imageUrl} alt={item.actorName} />
            </div>
            <p
              className="text-white font-semibold mt-2 text-lg"
              aria-label={`Actor: ${item.actorName}`}
            >
              {item.actorName}
            </p>
            <p className="text-lg text-gray-400">{item.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
