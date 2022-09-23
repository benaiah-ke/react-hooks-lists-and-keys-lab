import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];
  const nav_link_list = links.map((link,key) => (
    <a href={"#"+link} key={key}>{link}</a>
  ))
  return <nav>{nav_link_list}</nav>;
}

export default NavBar;
