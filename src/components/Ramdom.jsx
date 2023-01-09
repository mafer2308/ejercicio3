import axios from "axios";
import { useEffect, useState } from "react";
import Cards from "./Cards";

const Ramdom = () => {
  const [rickLocation, setRickLocation] = useState({});
  const random = Math.floor(Math.random() * 126) + 1;
  const [searchText, setSearchText] = useState("");
  useEffect(() => {
    axios
      .get(`https://rickandmortyapi.com/api/location/${random}/`)
      .then((res) => setRickLocation(res.data));
  }, []);

  const changeNext = () => {
    axios
      .get(`https://rickandmortyapi.com/api/location/${searchText}/`)
      .then((res) => setRickLocation(res.data));
  };

  console.log(rickLocation);

  return (
    <div>
      <div className="container-filter">
        <input
          type="text"
          value={searchText}
          placeholder="Ingrese id"
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button onClick={changeNext}>Search</button>
      </div>
      <div className="container-description">
        <p className="name-filter" >{rickLocation?.name}</p>
        <div className="description">
          <p className="item-filter" >
            Type: <span>{rickLocation?.type}</span>{" "}
          </p>
          <p className="item-filter">
            Dimension: <span>{rickLocation?.dimension}</span>{" "}
          </p>
          <p className="item-filter">
            Population: <span>{rickLocation.residents?.length}</span>{" "}
          </p>
        </div>
      </div>
        <div className="container-cards" >
      {rickLocation?.residents?.map((url) => (
        <Cards residents={url} key={url} />
      ))}
      </div>
    </div>
  );
};

export default Ramdom;
