import { Link } from "@reach/router";

import React from "react";

const Help = (props) => {
  return (
    <div>
      <h1>How it all works!</h1>
      <ul>
        <li>
          1-Create a new 3DP request with all the info needed for specifications
          on design and functionality and submit{" "}
        </li>
        <li>
          2-Your request will be among the posted requests for 3D printing
          engineers to scroll for{" "}
        </li>
        <li>
          3-Requests with donations are more likely to be helped with , 3D
          Printing is not a cheap alternative so show the engineers some sort of
          love
        </li>
        <li>
          4-If your request is chosen , you will recieve an email with info on
          the CAD model of your request{" "}
        </li>
      </ul>
      <h2>Get started now by submitting your request! </h2>
      <Link to="/3dreamprints/new" style={{ color: "red" }}>
        Create a 3DP request
      </Link>
      <h2>Still have unanswered questions? Contact us below </h2>
      <Link to="/3dreamprints/contact" style={{ color: "red" }}>
        Contact Us
      </Link>
    </div>
  );
};
export default Help;
