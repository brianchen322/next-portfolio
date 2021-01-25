interface Props {
  text: string;
  type: 'solid' | 'outlined';
  // eslint-disable-next-line react/require-default-props
  onClickHandler?: () => void;
}
export default function Button({ text, type, onClickHandler = () => {} }: Props): JSX.Element {
  return (
    <>
      <button
        type="button"
        onClick={onClickHandler}
        className={`font-regular
                    px-6 sm:px-4 xl:px-6 py-4 w-64 sm:w-52 md:w-56 2xl:w-64 text-7xl h-25 transition-all
                    rounded overflow-hidden border-2 border-transparent
                    ${
                      type === 'solid'
                        ? 'bg-pink text-blue hover:outline-none hover:bg-transparent hover:text-pink hover:border-pink focus:outline-none focus:bg-transparent focus:text-pink focus:border-pink'
                        : 'text-pink bg-transparent border-pink hover:outline-none hover:bg-pink hover:text-blue hover:border-pink focus:outline-none focus:bg-pink focus:text-blue focus:border-pink'
                    }
                   `}>
        {text}
      </button>
    </>
  );
}
