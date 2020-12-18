import React, { useEffect, useState } from "react";

import { Link, navigate } from "@reach/router";

import axios from "axios";

const AllDreamprints = (props) => {
  const [allDreamprints, setAllDreamprints] = useState([]);
  const [dreamprints, setDreamprints] = useState(null);
  // cchange1 use effect without setting fetch method
  // useEffect(() => {
  //   axios.get("http://localhost:8000/api/3dreamprints").then((res) => {
  //     console.log(res);
  //     setDreamprints(res.data);
  //   });
  // }, []);
  useEffect(() => {
    fetchDreamprints();
  }, []);

  const fetchDreamprints = () => {
    axios
      .get("http://localhost:8000/api/3dreamprints")
      .then((res) => {
        console.log(res.data);
        setAllDreamprints(res.data);
        setDreamprints(res.data);
      })
      .catch((err) => {
        console.log(err.response);
      });
  };

  const handleDelete = (id) => {
    axios
      .delete("http://localhost:8000/api/3dreamprints/" + id)
      .then((res) => {
        const filteredDreamprints = dreamprints.filter((dreamprint) => {
          return dreamprint._id !== id;
        });

        setDreamprints(filteredDreamprints);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  if (dreamprints === null) {
    return "Loading...";
  }

  const handleLike = (dreamprint) => {
    dreamprint.likeCount++;

    axios
      .put(
        `http://localhost:8000/api/3dreamprints/${dreamprint._id}`,
        dreamprint
      )
      .then((res) => {
        fetchDreamprints();
      })
      .catch((err) => {
        console.log(err.response);
      });
  };
  const handleDislike = (id, idx) => {
    axios
      .put(`http://localhost:8000/api/3dreamprints/${id}/dislike`)
      .then((res) => {
        const updatedDreamprints = [...dreamprints];
        updatedDreamprints[idx] = res.data;
        setDreamprints(updatedDreamprints);
      })
      .catch((err) => {
        console.log(err.response);
      });
  };
  return (
    <div>
      <div>
        <h2 className="main-info">
          3Dreamprint Galleria{" "}
          <br>
            {" "}
            Click <a href="/3dreamprints/new">
              {" "}
              here to create a request{" "}
            </a>{" "}
          </br>
        </h2>
        <hr></hr>
      </div>
      {dreamprints.map((dreamprint, idx) => {
        return (
          <div key={dreamprint._id}>
            <h2>
              <Link to={`/3dreamprints/${dreamprint._id}`}>
                {dreamprint.title}
              </Link>
            </h2>
            <p>
              Likes: {dreamprint.likeCount}
              {/* | Dislikes:{dreamprint.dislikeCount}{" "} */}
            </p>
            <div>
              <button
                onClick={(event) => {
                  handleLike(dreamprint);
                }}
              >
                Like ({dreamprint.likeCount})
              </button>

              <button
                onClick={(event) => {
                  handleDislike(dreamprint._id, idx);
                }}
              >
                Dislike
                {/* ({dreamprint.dislikeCount}) */}
              </button>
            </div>
            <div style={{ marginBottom: "5px" }}>
              <button
                onClick={(event) => {
                  handleDelete(dreamprint._id);
                }}
              >
                Delete
              </button>{" "}
              {/* this could be an anchor tag instead of using navigate, but we want it to look like a button. If using bootstrap could use a class to make the anchor tag look like a button */}
              <button
                onClick={(event) => {
                  navigate(`/3dreamprints/${dreamprint._id}/edit`);
                }}
              >
                Edit
              </button>
            </div>
            <Link to={`/3dreamprints/${dreamprint._id}`}>
              <img
                src={dreamprint.imgUrl}
                alt={dreamprint.name}
                style={{
                  paddingBottom: 20,
                  borderBottom: "2px solid gray",
                  width: "25%",
                }}
              />
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default AllDreamprints;
