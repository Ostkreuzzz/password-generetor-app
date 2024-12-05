interface Props {
  handleSubmit: () => void;
  buttonTitle: string;
}

export function Button({ handleSubmit, buttonTitle }: Props) {
  return (
    <button
      onClick={handleSubmit}
      className='h-64 w-full  items-center border-neon-green bg-neon-green 
        text-xl font-bold uppercase text-gray-dark transition-colors duration-300
        hover:border-2 hover:border-solid hover:bg-gray-dark hover:text-neon-green'
    >
      {buttonTitle}
    </button>
  );
}
