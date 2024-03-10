import React from "react";
import Link from "next/link";

const Navbar = () => {
  const styles = {
    marginInline: 18,
    color: "black",
    fontSize: 18,
    textDecoration: "none",
  };
  return (
    <div style={{ background: "gold", padding: 24 }}>
      <Link href="/" style={styles}>
        Home
      </Link>
      <Link href="/about" style={styles}>
        About
      </Link>
      <Link href="/users" style={styles}>
        Users
      </Link>
    </div>
  );
};

export default Navbar;
