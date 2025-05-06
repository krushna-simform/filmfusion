interface ButtonType {
  ariaLabel: string;
  innerText: string;
}

export const Button = ({ ariaLabel, innerText }: ButtonType) => {
  return (
    <button
      className={`bg-[var(--primary-color)] py-2 px-4 text-lg rounded-lg cursor-pointer hover:bg-[var(--secondary-color)] transition ease-in-out`}
      aria-label={`${ariaLabel} Button`}
    >
      {innerText}
    </button>
  );
};
