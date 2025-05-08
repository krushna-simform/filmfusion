const timing = [
  "9:15 AM",
  "11:45 AM",
  "02:15 PM",
  "4:45 PM",
  "7:15 PM",
  "9:45 PM",
];

export const MovieTiming = () => {
  return (
    <div className="mt-8 max-w-[70%] mx-auto flex items-center gap-6 bg-gradient-to-r from-[#0f0c29] via-[#302b63] to-[#aa3780] rounded-md px-4 py-6">
      <p
        className="text-white text-2xl font-semibold"
        aria-label="PVR: Maruti Solaris, Anand"
      >
        PVR: Maruti Solaris, Anand
      </p>
      <div
        className="flex gap-3 overflow-x-auto"
        style={{ scrollbarWidth: "none" }}
      >
        {timing.map((item, idx) => (
          <p
            key={idx}
            className="text-white border border-white px-4 py-2 font-semibold rounded-sm whitespace-nowrap hover:bg-white hover:text-black transition"
            aria-label="Movie time"
          >
            {item}
          </p>
        ))}
      </div>
    </div>
  );
};
