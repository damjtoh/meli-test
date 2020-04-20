import axios from "axios";

export default async (req, res) => {
  const { data } = await axios.get(
    `https://api.mercadolibre.com/sites/MLA/search?q=${req.query.q}`
  );
  let categories = [req.query.q];
  const categoriesFilter = data.filters.find(
    (filter) => filter.id === "category"
  );
  if (categoriesFilter)
    categories = categoriesFilter.values[0].path_from_root.map(
      (category) => category.name
    );
  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");
  res.end(
    JSON.stringify({
      author: {
        name: "Damian",
        lastname: "Crespi",
      },
      items: data.results.slice(0, 4),
      categories,
    })
  );
};
