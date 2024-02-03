import React, { useState, useEffect } from "react";
import axios from "axios";

const tournaments = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://api.pandascore.co/tournaments/running",

          {
            params: { page: "1", per_page: "4" },
            headers: {
              accept: "application/json",
              authorization:
                "Bearer Y1JAtsgFYn-Ujc7fmUtXxvJ4Dt2iwEjuqJuAKlC6tEpWJsW60bU",
            },
          }
        );

        setData(response.data);
      } catch (error) {
        console.error(error);
        // Handle errors as needed
      }
    };

    fetchData();
  }, []);

  return (
    <div className="w-full m-auto pt-20 grid grid-cols-2 ">
      <div></div>
      <ul className=" gap-3 bg-violet-600">
        {data.map((tournament) => (
          <div
            key={tournament.id}
            className=" h-40 w-full justify-center m-auto items-center "
          >
            <div
              className="min-h-40 m-auto justify-center items-center flex  
            cursor-pointer transition duration-700 ease-in-out hover:bg-violet-100
             hover:text-black hover:font-semibold border border-opacity-50  "
            >
              {" "}
              <img
                src={tournament.league.image_url}
                alt={tournament.name}
                className=" max-h-26 w-28"
              />
              <div className="m-4">
                {" "}
                <p>{tournament.league.name}</p>
                <p>{tournament.begin_at}</p>
              </div>
            </div>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default tournaments;
