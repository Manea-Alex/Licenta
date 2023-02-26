import React from "react";
import "./searchbar.css";
import { useState } from "react";
import { useEffect } from "react";
import { type } from "@testing-library/user-event/dist/type";

const SearchBar = () => {
  const [departurePoint, setDeparturePoint] = useState("");
  const [arrivalPoint, setArrivalPoint] = useState("");
  const [searchResults, setSearchResults] = useState("");
  const [endPoint, setEndPoint] = useState("");
  const [container, setContainer] = useState([]);

  const [finalPoint, setFinalPoint] = useState("");
  // useEffect(() => {
  //   fetchMe();
  // }, [finalPoint]);

  // const fetchMe = () => {
  //   console.log(typeof container);
  //   const options = {
  //     method: "GET",
  //     headers: {
  //       "X-RapidAPI-Key": "89d56e36afmsh05c1f8ba11993c0p1aeed3jsn89cb4b1e6983",
  //       "X-RapidAPI-Host": "imdb8.p.rapidapi.com",
  //     },
  //   };
  //   fetch(`https://imdb8.p.rapidapi.com/auto-complete?q=+${endPoint}`, options)
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setContainer(data.d);
  //       console.log(data.d);
  //     })
  //     .catch((err) => console.error(err));
  // };

  // const sampleData = [
  //   {
  //     id: 1,
  //     airline: "Turkish Airlines",
  //     departureCity: "Cluj-Napoca",
  //     arrivalCity: "Istanbul",
  //     date: "06.03.2023",
  //     departureTime: "9:35 AM",
  //     arrivalTime: "10:40 AM",
  //     price: 90,
  //   },
  //   {
  //     id: 2,
  //     airline: "Pegasus",
  //     departureCity: "Bucuresti",
  //     arrivalCity: "Rome",
  //     date: " 27.06.2023",
  //     departureTime: "18:40",
  //     arrivalTime: "20:30",
  //     price: 60,
  //   },
  //   {
  //     id: 3,
  //     airline: "Wizz Air",
  //     departureCity: "Cluj-Napoca",
  //     arrivalCity: "Istanbul",
  //     date: "06.03.2023",
  //     departureTime: "9:35 AM",
  //     arrivalTime: "10:40 AM",
  //     price: 90,
  //   },
  // ];

  const handleChange = (e) => {
    e.preventDefault();
    // let data = document.getElementsByClassName("Departure"); cu classname nu merge ciudat
    let departureInput = document.getElementById("departure");
    let arrivalInput = document.getElementById("arrival");
    // console.log(departureInput.value, arrivalInput.value);
    // console.log(departurePoint, arrivalPoint);
    // let data;

    // const results = sampleData.filter(
    //   (data) =>
    //     data.departureCity.toLowerCase() === departurePoint.toLowerCase() &&
    //     data.arrivalCity.toLowerCase() === arrivalPoint.toLowerCase()
    // );
    // setSearchResults(results);
    // console.log(results);

    setFinalPoint(endPoint);
  };

  // vreau sa introduc un arrival si un destination iar cand dau click sa mi cauate daca exista in
  // sample data arrival si departure la fel si mi returneze tabelul
  return (
    <div>
      <form className="form-container" onSubmit={handleChange}>
        <input
          type="text"
          // value={departurePoint}
          // onChange={(e) => setDeparturePoint(e.target.value)}
          value={endPoint}
          onChange={(e) => setEndPoint(e.target.value)}
          placeholder="Departure point"
          className="form-input"
          id="departure"
        />
        <input
          type="text"
          value={arrivalPoint}
          onChange={(e) => setArrivalPoint(e.target.value)}
          placeholder="Arrival Point"
          className="form-input"
          id="arrival"
        />
        <button type="submit" className="form-submit">
          Search
        </button>
      </form>

      {Array.isArray(container) &&
        container !== null &&
        container !== undefined &&
        container.map((item) => {
          return (
            <div>
              <img src={item.i.imageUrl} alt="" />
              <p>{item.l}</p>;
            </div>
          );
        })}
    </div>

    //  {searchResults.length > 0 ? (
    //     <table className="search-results">
    //       <thead>
    //         <tr>
    //           <th>Airline</th>
    //           <th>Departure city</th>
    //           <th>Arrival city</th>
    //           <th>Departure time</th>
    //           <th>Arrival time</th>
    //           <th>Price</th>
    //         </tr>
    //       </thead>
    //       <tbody>
    //         {searchResults.map((result) => (
    //           <tr key={result.id}>
    //             <td>{result.airline}</td>
    //             <td>{result.departureCity}</td>
    //             <td>{result.arrivalCity}</td>
    //             <td>{result.departureTime}</td>
    //             <td>{result.arrivalTime}</td>
    //             <td>{result.price}</td>
    //           </tr>
    //         ))}
    //       </tbody>
    //     </table>
    //   ) : (
    //     <p>Not found</p>
    //   )}
    // </div>
  );
  //   return <div>Hello Kitty</div>;
};
export default SearchBar;
