import React, { useState } from "react";

import { navigate } from "@reach/router";

import axios from "axios";

const NewDreamprint = (props) => {
  const [name, setName] = useState("");
  const [zipcode, setZipCode] = useState("");
  const [email, setEmail] = useState("");
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [imgUrl, setImgUrl] = useState("");
  const [donation, setDonation] = useState("");
  const [errors, setErrors] = useState({});

  const handleSubmit = (event) => {
    event.preventDefault();

    const newDreamprint = {
      name: name,
      zipcode: zipcode,
      email: email,
      title: title,
      category,
      description,
      imgUrl,
      donation: donation,
    };
    axios
      .post("http://localhost:8000/api/3dreamprints", newDreamprint)
      .then((res) => {
        console.log(res);
        navigate("/3dreamprints");
      })
      .catch((err) => {
        setErrors(err.response.data.errors);
        console.log(err.response);
      });
  };
  return (
    <form
      onSubmit={(event) => {
        handleSubmit(event);
      }}
    >
      <div>
        <label>Name: </label>
        <input
          type="text"
          value={name}
          onChange={(event) => {
            setName(event.target.value);
          }}
        />
        {errors.name ? (
          <span style={{ color: "red", marginLeft: "5px" }}>
            {errors.name.properties.message}
          </span>
        ) : (
          ""
        )}
      </div>
      <div>
        <label>ZipCode: </label>
        <input
          type="number"
          value={zipcode}
          onChange={(event) => {
            setZipCode(event.target.value);
          }}
        />
        {errors.zipcode ? (
          <span style={{ color: "red", marginLeft: "5px" }}>
            {errors.zipcode.properties.message}
          </span>
        ) : (
          ""
        )}
      </div>
      <div>
        <label>Email: </label>
        <input
          type="text"
          value={email}
          onChange={(event) => {
            setEmail(event.target.value);
          }}
        />
        {errors.email ? (
          <span style={{ color: "red", marginLeft: "5px" }}>
            {errors.email.properties.message}
          </span>
        ) : (
          ""
        )}
      </div>

      <div>
        <label>Title: </label>
        <input
          type="text"
          value={title}
          onChange={(event) => {
            setTitle(event.target.value);
          }}
        />
        {errors.title ? (
          <span style={{ color: "red", marginLeft: "5px" }}>
            {errors.title.properties.message}
          </span>
        ) : (
          ""
        )}
      </div>

      <div>
        <label> Category: </label>
        <input
          onChange={(event) => {
            setCategory(event.target.value);
          }}
          type="text"
          value={category}
        />
        {errors.category ? (
          <span style={{ color: "red", marginLeft: 5 }}>
            {errors.category.properties.message}
          </span>
        ) : (
          ""
        )}
      </div>

      <div>
        <label> Description: </label>
        <input
          type="text"
          value={description}
          onChange={(event) => {
            setDescription(event.target.value);
          }}
        />
        {errors.description ? (
          <span style={{ color: "red", marginLeft: "5px" }}>
            {errors.description.properties.message}
          </span>
        ) : (
          ""
        )}
      </div>
      <div>
        <label>Img Url: </label>
        <input
          type="text"
          value={imgUrl}
          onChange={(event) => {
            setImgUrl(event.target.value);
          }}
        />
        {errors.imgUrl ? (
          <span style={{ color: "red", marginLeft: "5px" }}>
            {errors.imgUrl.properties.message}
          </span>
        ) : (
          ""
        )}
      </div>
      <div>
        <label>Donation: </label>
        <input
          type="number"
          value={donation}
          onChange={(event) => {
            setDonation(event.target.value);
          }}
        />
        {errors.donation ? (
          <span style={{ color: "red", marginLeft: "5px" }}>
            {errors.donation.properties.message}
          </span>
        ) : (
          ""
        )}
      </div>
      <button> Submit </button>
    </form>
  );
};

export default NewDreamprint;
