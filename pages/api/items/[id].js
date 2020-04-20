/* eslint-disable camelcase */
import axios from "axios";

export default async (req, res) => {
  res.setHeader("Content-Type", "application/json");
  const [{ data: productData }, { data: descriptionData }] = await Promise.all([
    axios.get(`https://api.mercadolibre.com/items/${req.query.id}`),
    axios.get(`https://api.mercadolibre.com/items/${req.query.id}/description`),
  ]);
  res.statusCode = 200;
  const {
    id,
    title,
    price,
    category_id,
    pictures,
    condition,
    shipping: { free_shipping },
    sold_quantity,
    currency_id,
  } = productData;

  const { data: categoryData } = await axios.get(
    `https://api.mercadolibre.com/categories/${category_id}`
  );

  const { plain_text: description } = descriptionData;
  res.end(
    JSON.stringify({
      author: {
        name: "Damian",
        lastname: "Crespi",
      },
      item: {
        id,
        title,
        price,
        picture: pictures[0],
        condition,
        free_shipping,
        sold_quantity,
        description,
        currency_id,
        categories: categoryData.path_from_root.map(
          (category) => category.name
        ),
      },
    })
  );
};
