import styles from "./Quote.module.css";
const Quote = (props) =>{
    return(
        <p className={styles.quote}>"{props.quote}"</p>
    )
}

export default Quote;