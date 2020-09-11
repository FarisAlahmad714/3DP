import React, { useEffect, useState } from "react";

import axios from "axios";

// const City = ({ id }) => {
const DreamPrint = (props) => {
  console.log(props);

  const [dreamprint, setDreamprint] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/3dreamprints/" + props.id)
      .then((res) => {
        setDreamprint(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [props.id]);

  if (dreamprint === null) {
    return "Loading...";
  }

  return (
    <div>
      <h2 className="request-info">{dreamprint.name}'s Request</h2>
      <h2 className="request-info">
        Donation Amount: {dreamprint.donation} ${" "}
      </h2>
      <p className="request-info">
        Category:<h4 className="the-h4">{dreamprint.category}</h4>
      </p>
      <p className="request-info">Description:{dreamprint.description} </p>
      <img
        src={dreamprint.imgUrl}
        alt={dreamprint.name}
        style={{
          paddingBottom: 20,
          borderBottom: "2px solid gray",
          width: "50%",
        }}
      />
      <h1 className="request-info">Wisher Info</h1>
      <p className="request-info">
        {dreamprint.name} , {dreamprint.email}
      </p>
      <p className="request-info">{dreamprint.zipcode}</p>
    </div>
  );
};

export default DreamPrint;
