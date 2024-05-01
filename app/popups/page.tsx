
import styles from './page.module.css';

export default function Popups()
{
    return(
        <div className={styles['main']}>
            <div className={styles['image-div']}></div>
            <h1 className={styles['head-div']}></h1>
            <p className={styles['para']}></p>
            <div className={styles['link-div']}></div>
            <div className={styles['foot-div']}></div>
        </div>
    );
};

