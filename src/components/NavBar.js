import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  const allLinks=links.map((linkString)=><a href="#home" key={linkString}>{linkString}</a>)

  return <nav>{allLinks}</nav>;
}

export default NavBar;
