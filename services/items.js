import axios from "axios";

const getAll = () => {};
const getById = async (id) => {
  const { data } = await axios.get(`${process.env.BASE_URL}/api/items/${id}`);
  return data;
};
const searchByTerm = async (term) => {
  const { data } = await axios.get(
    `${process.env.BASE_URL}/api/items?q=${term}`
  );
  return data;
};

export default { getAll, getById, searchByTerm };
