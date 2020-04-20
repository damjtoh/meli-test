import React from "react";
import Head from "next/head";
import PropTypes from "prop-types";
import Link from "next/link";
import slugify from "slugify";
import ItemsService from "../../services/items";
import Breadcrumbs from "../../components/Breadcrumbs";
import ItemPrice from "../../components/ItemPrice";

const Items = ({ data, searchTerm }) => {
  return (
    <>
      <Head>
        <title>{searchTerm} - Mercado Libre Argentina</title>
        <meta
          name="description"
          content={`Encontrá ${searchTerm} en Mercado Libre Argentina. Descubrí la mejor forma de comprar online.`}
        />
      </Head>
      {data.items.length === 0 ? (
        <h4 className="text-2xl text-center flex-grow pt-64">
          No encontramos resultados para la busqueda{" "}
          <strong>{searchTerm}</strong>
        </h4>
      ) : (
        <>
          <Breadcrumbs categories={data.categories} />
          <div className="container mx-auto bg-white mb-6 rounded-sm">
            {data.items.map((item) => (
              <Link
                key={item.id}
                as={`/items/${item.id}-${slugify(item.title)}`}
                href="/items/[slug]"
              >
                <div className="flex flex-col border-b p-4 my-4 cursor-pointer">
                  <div className="flex flex-row">
                    <img
                      src={item.thumbnail}
                      className="rounded-lg mr-4 w-40"
                      alt={item.title}
                    />
                    <div className="info flex-grow  flex flex-col justify-center">
                      <div className="text-xl font-medium">
                        <ItemPrice
                          size="2xl"
                          currency={item.currency_id}
                          price={item.price}
                        />
                      </div>
                      <div className="mt-2">{item.title}</div>
                    </div>
                    <div className="hidden md:flex location flex-col justify-center ml-4 text-sm w-32">
                      {item.address.state_name}
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </>
      )}
    </>
  );
};

Items.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  data: PropTypes.object.isRequired,
  searchTerm: PropTypes.string.isRequired,
};

export async function getServerSideProps(ctx) {
  const data = await ItemsService.searchByTerm(encodeURI(ctx.query.search));
  return { props: { data, searchTerm: ctx.query.search } };
}

export default Items;
