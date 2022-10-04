import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];
  const nav_link_list = links.map((link) => (
    <a href={"#"+link} key={link}>{link}</a>
  ))
  return <nav>{nav_link_list}</nav>;
}

export default NavBar;
