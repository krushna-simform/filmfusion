interface ButtonProps {
  ariaLabel: string;
  children: React.ReactNode;
}

export const Button = ({ ariaLabel, children }: ButtonProps) => {
  return (
    <button
      className="px-6 py-2 bg-[var(--primary-color)] cursor-pointer hover:brightness-90 rounded-md text-white font-medium"
      aria-label={`${ariaLabel} Button`}
    >
      {children}
    </button>
  );
};
