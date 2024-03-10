import React from "react";
import Image from "next/image";

const Page = () => {
  console.log("hello world");
  return (
    <div>
      <h2 style={{ padding: 30 }}>
        Home Page
        <p>Thes place where you live or where you feel that you belong.</p>
      </h2>
      <div style={{ display: "grid", placeItems: "center" }}>
        <Image
          src="/shutterstock_2112380714-scaled.webp"
          width={500}
          height={300}
          alt="Picture of the author"
          style={{
            borderRadius: "4px",
            boxShadow:
              "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px",
          }}
        />
      </div>
    </div>
  );
};

export default Page;
