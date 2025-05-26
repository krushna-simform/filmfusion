interface ImageProps {
  source: string;
  alt: string;
}

export const Image = ({ source, alt }: ImageProps) => {
  return (
    <img
      src={source}
      alt={alt}
      loading="lazy"
      className="h-full w-full object-cover"
    />
  );
};
