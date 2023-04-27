import { useState } from 'react';
import Card from './components/Card';

export type BrandType =
  | 'audi'
  | 'chevrolet'
  | 'ford'
  | 'honda'
  | 'hyundai'
  | 'lamborghini'
  | 'mazda'
  | 'mercedes'
  | 'opel'
  | 'skoda'
  | 'toyota'
  | 'volkswagen';

export default function App() {
  const [score, setScore] = useState(0);
  const [best, setBest] = useState(0);
  const [clicked, setClicked] = useState<BrandType[]>([]);

  const brands = [
    'audi',
    'chevrolet',
    'ford',
    'honda',
    'hyundai',
    'lamborghini',
    'mazda',
    'mercedes',
    'opel',
    'skoda',
    'toyota',
    'volkswagen',
  ] as BrandType[];

  const shuffledBrands = shuffledArray<BrandType>(brands);

  function handleClick(brand: BrandType) {
    if (clicked.includes(brand)) {
      if (score > best) setBest(score);
      setScore(0);
      setClicked([]);
      return;
    }
    setScore(score + 1);
    setClicked([...clicked, brand]);
  }

  return (
    <div className="min-h-screen bg-neutral-50 p-4">
      <div className="flex flex-col gap-2 pb-4 sm:px-[20vw]">
        <div className="text-2xl font-black underline decoration-neutral-500 sm:text-3xl">
          Car Brands Memory Game
        </div>
        <div className="text-xs italic sm:text-sm">
          Click on images but don't click any more than once
        </div>
        <div className="flex gap-4 text-sm sm:text-base">
          <div className="rounded bg-neutral-200 px-2 py-1 text-center">
            Score: <span className="font-bold">{score}</span>
          </div>
          <div className="rounded bg-neutral-200 px-2 py-1 text-center">
            Highscore: <span className="font-bold">{best}</span>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap justify-center gap-3">
        {shuffledBrands.map((brand) => (
          <Card handleClick={handleClick} brand={brand} key={brand} />
        ))}
      </div>
    </div>
  );
}

function shuffledArray<T>(array: T[]) {
  return [...array]
    .map((value) => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value);
}
