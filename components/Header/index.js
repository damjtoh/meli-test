import React, { useCallback, useRef, useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import Router, { useRouter } from "next/router";

const Header = () => {
  const inputRef = useRef(null);
  const [searchTerm, setSearchTerm] = useState(null);
  const { query } = useRouter();

  useEffect(() => {
    if (query && query.search) setSearchTerm(query.search);
  }, []);

  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    if (!inputRef.current.value) return;
    Router.push(`/items?search=${inputRef.current.value}`);
  }, []);
  return (
    <header className="p-4  bg-yellow-400">
      <div className="mx-auto container flex flex-row justify-between">
        <a href="/" className="flex flex-col justify-center align-center">
          <img
            src="/logo-small.png"
            alt="Mercado Libre Logo"
            className="w-10 md:hidden"
          />
          <img
            src="/logo-large.png"
            alt="Mercado Libre Logo"
            className="w-32 hidden md:block"
          />
        </a>
        <div className="flex flex-col justify-center align-center flex-grow ml-4">
          <form onSubmit={handleSubmit}>
            <div className="flex flex-row justify-between rounded-sm py-2 px-4 block w-full appearance-none leading-normal bg-white shadow-md">
              <input
                ref={inputRef}
                placeholder="Estoy buscando..."
                type="text"
                defaultValue={searchTerm}
                className="focus:outline-none flex-grow"
              />
              <button
                type="submit"
                className="focus:outline-none text-gray-500 border-l pl-3"
              >
                <FontAwesomeIcon icon={faSearch} />
              </button>
            </div>
          </form>
        </div>
      </div>
    </header>
  );
};

Header.propTypes = {};

export default Header;
