import styles from './Card.module.css';

function Card(props){
return <div className={`${styles.card} ${props.cssClass} ${props.onUserList} ${props.classModal}`}>{props.children}</div>
}

export default Card;