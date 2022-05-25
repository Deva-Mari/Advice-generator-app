// import React from "react";
import React, { useState } from "react";

import styles from "./Card.module.css";
import Header from "./Header";
import Quote from "./Quote";
import patternDividerDesk from "../assets/pattern-divider-desktop.svg";
import patternDividerMobi from "../assets/pattern-divider-mobile.svg";
import Dice from "./Dice";

const Card = () =>{
    const w = document.documentElement.clientWidth || document.body.clientWidth || window.innerWidth;
    const [id, setId] = useState("177");
    const [quote, setQuote] = useState("It is easy to sit up and take notice, what's difficult is getting up and taking action.");
    

    const getQuoteHandler = (quoteData) =>{
        setId(quoteData.slip.id);
        setQuote(quoteData.slip.advice);
    }

    return(<main className={styles.card}>
        <Header id={id}/>
        <Quote quote={quote}/>
        <img src={w > 375 ? patternDividerDesk : patternDividerMobi} alt=""/>
        <Dice onGetQuote={getQuoteHandler}/>
    </main>);
}
export default Card;