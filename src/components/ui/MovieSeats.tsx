import { Image } from "./Image";
import screen from "../../../public/icons/screen.svg";
import seat from "../../../public/icons/seat.svg";

const rows = [
  [4, 10, 5],
  [4, 10, 5],
  [4, 10, 5],
  [4, 10, 5],
  [4, 10, 5],
  [4, 10, 5],
  [4, 10, 5],
  [4, 10, 5],
  [4, 10, 5],
  [4, 10, 5],
  [4, 10, 5],
  [21],
  [21],
];

export const MovieSeats = () => {
  return (
    <div className="py-5 mx-auto">
      <div className="w-[70%] mx-auto bg-[#2d135d] flex flex-col items-center py-10 rounded-lg">
        <div className="w-150 mb-10">
          <Image source={screen} alt="movie screen" />
        </div>

        {rows.map((group, index) => (
          <div key={index} className="flex gap-10 mt-3">
            {group.map((seatCount, colIndex) => (
              <div key={colIndex} className="flex gap-3">
                {Array.from({ length: seatCount }).map((_, seatIndex) => (
                  <Image key={seatIndex} source={seat} alt="seat" />
                ))}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};
