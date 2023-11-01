import BlackButton from "../BlackButton"
import styles from "./styles.module.css"

export default

// eslint-disable-next-line react/prop-types
function Card({title, posterImg}) {
    return (
    
    <div className={styles.mainContainer}>

    <div className={styles.card}>

        <div className="image-container">
            <img className={styles.poster} src={posterImg} alt="Star Wars poster" />
        </div>

        <div className={styles.textContainer}>
            
            <h1 className={styles.title}>{title}</h1>

            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                Aperiam, impedit, commodi magnam maxime, ipsa inventore itaque eveniet officiis 
                consequuntur vel tempora blanditiis. Sit, vitae alias 
                quam omnis maiores labore nisi.
            </p>

            < BlackButton text="Compra agora"/>

        </div>
        
    </div>

    </div>

    );
}