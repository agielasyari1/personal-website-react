import React from "react";
import RashSelfIcon from "../assets/images/poyntdeveloper.png";
import AboutBox from "../components/About/AboutBox";
import about from "../data/About";
import {
    UserWrapper,
    UserTitle,
    UserDescription,
    DownloadButton,
    UserTopic,
} from "../styles/indexStyle.js";
import Layout from "../components/layout";

const IndexPage = () => {
    return ( <
        Layout >
        <
        UserWrapper >
        <
        UserTitle >
        Agiel < span > Asyari < /span> < /
        UserTitle > <
        UserDescription >
        <
        div >
        <
        p >
        Hello there, welcome to my portfolio.I am a front end developer, data analist and a gamer based out of Surabaya. <
        /p> <
        DownloadButton href = "https://github.com/agielasyari/personal-website-react/raw/master/Agiel-Resume.pdf"
        download title = "Resume" >
        Download Resume <
        /DownloadButton> < /
        div > <
        img src = { RashSelfIcon }
        alt = "agiel self" / >
        <
        /UserDescription> <
        UserTopic > {
            about.map((item) => ( <
                AboutBox key = { item.id }
                info = { item }
                />
            ))
        } <
        /UserTopic> < /
        UserWrapper > <
        /Layout>
    );
};

export default IndexPage;