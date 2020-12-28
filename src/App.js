import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

function App(props) {
  const [apiData, setApiData] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.spacexdata.com/v3/launches?limit=100")
      .then((response) => {
        setApiData(response.data);
      });
  }, []);

  return (
    <div className="container">
      <h4 className="main-heading">SpaceX Launch Programs</h4>
      <div className="cards">
        {apiData && apiData.length > 0
          ? apiData.map((data) => {
              return (
                <div className="card">
                  <picture className="thumbnail">
                    <img src={data.links.mission_patch_small} />
                  </picture>
                  <div className="card-content">
                    <h2>
                      <a href="#">{`${data.mission_name}#${data.flight_number}`}</a>
                    </h2>
                    <ul>
                      <li>
                        <div>Mission Ids : </div>
                        <div className="display-value"></div>
                      </li>
                      <li>
                        <div>Launch Year : </div>
                        <div className="display-value">{data.launch_year}</div>
                      </li>
                      <li>
                        <div>Successful Launch : </div>
                        <div className="display-value">
                          {data.launch_success ? "true" : "false"}
                        </div>
                      </li>
                      <li>
                        <div>Successful Landing : </div>
                        <div className="display-value"></div>
                      </li>
                    </ul>
                  </div>
                </div>
              );
            })
          : ""}
      </div>
    </div>
  );
}

export default App;
