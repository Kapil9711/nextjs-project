import DrinksList from "@/components/DrinksList";

const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a";

const fetchData = async () => {
  await new Promise((res) => setTimeout(res, 1000));
  const res = await fetch(url);
  const data = await res.json();
  return data;
};

const DrinksPage = async () => {
  const data = await fetchData(url);

  return (
    <div className="text-6xl font-bold">
      <DrinksList {...data} />
    </div>
  );
};

export default DrinksPage;
