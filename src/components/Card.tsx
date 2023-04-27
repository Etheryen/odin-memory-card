import { BrandType } from '../App';
import { imagesObject } from '../assets';

interface CardProps {
  brand: BrandType;
  handleClick: (brand: BrandType) => void;
}

export default function Card({ brand, handleClick }: CardProps) {
  const image = imagesObject[brand];

  return (
    <div
      onClick={() => handleClick(brand)}
      className="group flex w-44 cursor-pointer flex-col gap-1 rounded border-2 border-solid border-neutral-200 bg-neutral-100 p-1 transition-all ease-in-out hover:border-neutral-400 hover:bg-neutral-300 hover:shadow-xl hover:shadow-neutral-400"
    >
      <img
        src={image}
        alt={brand}
        className="h-40 w-full rounded object-cover"
      />
      <div className="rounded bg-neutral-300 px-2 py-1 text-center font-medium group-hover:bg-neutral-400 group-hover:text-white">
        {capitalized(brand)}
      </div>
    </div>
  );
}

function capitalized(string: string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
