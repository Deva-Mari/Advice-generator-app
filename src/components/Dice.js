import styles from "./Dice.module.css";
import diceIcon from "../assets/icon-dice.svg";

const Dice = (props) => {
  const fetchQuotesHandler = async () => {
    try {
      const response = await fetch("https://api.adviceslip.com/advice");
      if (!response.ok) {
        throw new Error("Something went wrong!");
      }
      const data = await response.json();
      return data;
    } catch (error) {
        console.log(error.message);
    }
  }

  const clickHandler = async () => {
    const quoteData = await fetchQuotesHandler();
    props.onGetQuote(quoteData); // relaying quoteData to parent
  };

  return (
    <div className={styles.dice} onClick={clickHandler}>
      <img src={diceIcon} alt=""/>
    </div>
  );
};

export default Dice;
