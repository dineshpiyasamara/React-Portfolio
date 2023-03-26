import React from "react";
import { BsLinkedin, BsGithub, BsYoutube, BsFacebook } from "react-icons/bs";

// get icons: https://react-icons.github.io/react-icons/search?q=l

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a href="https://linkedin.com" target="_blank">
        <BsLinkedin />
      </a>
      <a href="https://github.com" target="_blank">
        <BsGithub />
      </a>
      <a href="https://youtube.com" target="_blank">
        <BsYoutube />
      </a>
      <a href="https://facebook.com" target="_blank">
        <BsFacebook />
      </a>
    </div>
  );
};

export default HeaderSocials;
