import React from "react";
import PropTypes from "prop-types";

const Breadcrumbs = ({ categories }) => {
  return (
    <div className="flex flex-row text-xs pt-6 text-gray-600 pb-2 container mx-auto md:text-sm">
      {categories.map((category, index) => (
        <div key={category}>
          {index !== 0 && " > "}
          {category}
        </div>
      ))}
    </div>
  );
};

Breadcrumbs.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.string),
};
Breadcrumbs.defaultProps = {
  categories: [],
};

export default Breadcrumbs;
