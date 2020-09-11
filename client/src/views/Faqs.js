import { Link } from "@reach/router";

import React from "react";

const Faqs = (props) => {
  return (
    <div>
      {" "}
      <h1>Frequently Asked Questions</h1>
      <h2 className="faq-1">Am I required to pay anything? </h2>
      <p className="faq-1">
        {" "}
        There are no intiation fees!Although we provided the ability for
        donations because 3D printing materials can also be costy , the more you
        donate the higher the chances of getting contacted by one of our 3D
        printing engineers! This organization is built to donate for those that
        have little to no resources and are in desperate need of their request!{" "}
      </p>
      <hr />
      <h2 className="faq-2">ADINFINITUM ADNASEUM </h2>
      <p className="faq-2">
        {" "}
        3D printing is a way of creating three dimensional (3D) solid objects.
        3D printing is done by building up the object layer by layer. Usually,
        3D printers use plastic, because it is easier to use and cheaper. Some
        3D printers can 3D print with other materials, like metals and ceramics,
        but they cost too much money for most people.3D printers are useful
        because they can make new objects very fast, and are good at making them
        very detailed. This means an engineer can test a lot of new designs and
        not have to wait for someone else to make them. They are also useful for
        fixing parts made of plastic, and for making toys, figures, and models.
        There are a lot of people who print 3D objects at home!{" "}
      </p>
      <hr />
      <h2 className="faq-1">What can I request </h2>
      <p className="faq-1">
        {" "}
        As an organization that was built to help individuals or groups that are
        affected by poverty or a lack of resource , we aimed to choose the most
        in need categories and put them together to help achieve what is needed
        to be done . Our categories range from : Printable Body Parts ,
        Toys,Prothetics & Medical , Home Appliances ,{" "}
      </p>
      <hr />
      <h2 className="faq-2">ADINFINITUM ADNASEUM </h2>
      <p className="faq-2">
        {" "}
        3D printing is a way of creating three dimensional (3D) solid objects.
        3D printing is done by building up the object layer by layer. Usually,
        3D printers use plastic, because it is easier to use and cheaper. Some
        3D printers can 3D print with other materials, like metals and ceramics,
        but they cost too much money for most people.3D printers are useful
        because they can make new objects very fast, and are good at making them
        very detailed. This means an engineer can test a lot of new designs and
        not have to wait for someone else to make them. They are also useful for
        fixing parts made of plastic, and for making toys, figures, and models.
        There are a lot of people who print 3D objects at home!{" "}
      </p>
      <hr />
      <h2>Still have unanswered questions? Contact us below </h2>
      <Link to="/3dreamprints/contact" style={{ color: "red" }}>
        Contact Us
      </Link>
    </div>
  );
};
export default Faqs;
