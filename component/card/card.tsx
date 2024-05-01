import Styles from './card.module.css';

interface cardprops{
    title:string;
    content:string;
}

export default function Card({title,content}:cardprops){
    return (
        <div className={Styles['card']}>
            <h3>{title}</h3>
            <p>{content}</p>
        </div>  
    );
}