import styles from "./Header.module.css";
const Header = (props) =>{
    return (
        <h1 className={styles.header}>Advice #{props.id}</h1>
    );
} 

export default Header;