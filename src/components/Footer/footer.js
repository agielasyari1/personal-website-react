import React from "react";
import PropTypes from "prop-types";

const Footer = ({ footerClass }) => ( <
    div className = { `defaultFooter ${footerClass}` } >
    <
    p >
    View site source on { " " } <
    a href = "https://github.com/agielasyari1/personal-website-react"
    target = "_blank"
    rel = "noreferrer" >
    Github <
    /a>{" "} |
    Designer { " " } <
    a href = "https://dribbble.com/sabrine"
    target = "_blank"
    rel = "noreferrer" >
    Sabrine M <
    /a> < /
    p > <
    /div>
);
Footer.propTypes = {
    footerClass: PropTypes.string,
};
export default Footer;