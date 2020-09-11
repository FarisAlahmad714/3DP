import React, { useEffect, useState } from "react";

import axios from "axios";
import { navigate } from "@reach/router";

const EditDreamprint = (props) => {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [imgUrl, setImgUrl] = useState("");
  const [errors, setErrors] = useState({});

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/3dreamprints/" + props.id)
      .then((res) => {
        setTitle(res.data.title);
        setCategory(res.data.category);
        setImgUrl(res.data.imgUrl);
        setDescription(res.data.description);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [props.id]);

  const handleSubmit = (event) => {
    event.preventDefault();

    const editedDreamprint = {
      // long-form: name key: value of name state var
      title: title,
      category,
      imgUrl,
      description,
    };

    axios
      .put(
        "http://localhost:8000/api/3dreamprints/" + props.id,
        editedDreamprint
      )
      .then((res) => {
        console.log(res);
        navigate("/3dreamprints/" + res.data._id);
      })
      .catch((err) => {
        setErrors(err.response.data.errors);
        console.log(err.response.data.errors);
      });
  };

  return (
    <form
      onSubmit={(event) => {
        handleSubmit(event);
      }}
    >
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
            {errors.title.message}
          </span>
        ) : (
          ""
        )}
      </div>

      <div>
        <label>Category: </label>
        {/* <input
          type="text"
          value={category}
          onChange={(event) => {
            setCategory(event.target.value);
          }}
        /> */}
        <select name="category" id="category">
          <option value="Medical">Medical</option>
          <option value="Animals">Animals</option>
          <option value="Personal">Personal</option>
          <option value="Home">Home Appliances</option>
          onChange=
          {(event) => {
            setCategory(event.target.value);
          }}
        </select>
        {errors.category ? (
          <span style={{ color: "red", marginLeft: "5px" }}>
            {errors.category.message}
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
            {errors.imgUrl.message}
          </span>
        ) : (
          ""
        )}
      </div>
      <div>
        <label>Description: </label>
        <textarea
          type="text"
          value={description}
          onChange={(event) => {
            setDescription(event.target.value);
          }}
        />
        {errors.description ? (
          <span style={{ color: "red", marginLeft: "5px" }}>
            {errors.description.message}
          </span>
        ) : (
          ""
        )}
      </div>
      <button>Submit</button>
    </form>
  );
};

export default EditDreamprint;
