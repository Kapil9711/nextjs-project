import Link from "next/link";
import Image from "next/image";
const url = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";

const getDrinkFromId = async (id) => {
  const res = await fetch(`${url + id}`);
  if (!res.ok) throw new Error("Error in getting data for id");
  return await res.json();
};

const SinglePage = async ({ params }) => {
  const data = await getDrinkFromId(params.id);
  const title = data.drinks[0].strDrink;
  const imgSrc = data.drinks[0].strDrinkThumb;
  console.log(imgSrc, title);
  return (
    <div>
      <Link href={"/drinks"} className="btn btn-accent px-10 btn-lg mb-8">
        Drinks
      </Link>
      <Image
        src={imgSrc}
        width={300}
        height={300}
        className="w-48 h-48 mb-12 rounded-lg shadow-lg"
        priority
        alt={title}
      />
      <h2 className="text-8xl">{title}</h2>
    </div>
  );
};

export default SinglePage;
