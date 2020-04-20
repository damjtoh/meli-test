import React from "react";
import Head from "next/head";
import PropTypes from "prop-types";
import ItemsService from "../../services/items";
import ItemPrice from "../../components/ItemPrice";
import { ITEM_CONDITIONS } from "../../constants";
import Breadcrumbs from "../../components/Breadcrumbs";

const ItemDetails = ({ data }) => {
  const { item } = data;
  return (
    <>
      <Head>
        <title>{item.title} - Mercado Libre Argentina</title>
      </Head>
      <Breadcrumbs categories={item.categories} />
      <div className="container mx-auto bg-white mb-6 mt-3 rounded-md p-6">
        <div className="flex flex-col md:flex-row border-b pb-6 md:border-b-0 md:pb-0">
          <div className="md:w-1/2">
            <img
              src={item.picture.secure_url}
              alt={item.title}
              className="mx-auto"
            />
          </div>
          <div className="flex flex-col pl-4">
            <span className="text-sm">
              {ITEM_CONDITIONS[item.condition]} - {item.sold_quantity} vendidos
            </span>
            <h1 className="text-xl font-semibold mt-2">{item.title}</h1>
            <h2 className="my-4">
              <ItemPrice
                size="3xl"
                currency={item.currency_id}
                price={item.price}
              />
            </h2>
            <button
              type="button"
              className="mt-4 bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded"
            >
              Comprar
            </button>
          </div>
        </div>
        <div>
          <h4 className="text-xl mt-6 md:mt-0 font-semibold">
            Descripción del producto
          </h4>
          <p className="mt-6 whitespace-pre-line">{item.description}</p>
        </div>
      </div>
    </>
  );
};

ItemDetails.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  data: PropTypes.object.isRequired,
};

export async function getServerSideProps(ctx) {
  const id = ctx.query.slug.split("-").shift();
  const data = await ItemsService.getById(id);
  return { props: { data } };
}

export default ItemDetails;
