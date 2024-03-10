import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <div>
      <h2 style={{ padding: 30 }}>About Life: </h2>
      <div style={{ display: "grid", placeItems: "center" }}>
        <Image
          src="/life-quotes-happy.jpg"
          width={500}
          height={500}
          alt="Picture of the author"
        />
      </div>
    </div>
  );
};

export default About;
