import styles from "./Header.module.css";
const Header = (props) =>{
    return (
        <p className={styles.header}>Advice #{props.id}</p>
    );
} 

export default Header;