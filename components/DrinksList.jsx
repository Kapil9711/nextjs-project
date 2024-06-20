import Link from "next/link";
import Image from "next/image";

const DrinksList = ({ drinks }) => {
  return (
    <ul className="grid sm:grid-cols-2 gap-6 mt-6">
      {drinks.map((drink) => (
        <li key={drink.idDrink}>
          <Link className="text-xl" href={`/drinks/${drink.idDrink}`}>
            <div className="relative h-48 mb-4">
              <Image
                src={drink.strDrinkThumb}
                className=" shadow-lg "
                fill
                sizes="(max-width:778px) 100%,(max-width:1200px) 50%"
                priority
                alt={drink.strDrink}
              />
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default DrinksList;
