import styles from '@/app/workshop/page.module.css';

import image from '@/public/pencil.png';
import Navbar from '@/component/navbar/navbar';
import Card from '@/component/card/card';
import Footer from '@/component/footer/footer';

import Image from 'next/image';

export default function Workshop()
{
  return (
   <div className={styles['workshop-container']}>
	<Navbar />
	{/* <div className={styles['main']}> */}
		<div className={styles['head-section']}>
			<div className={styles['head-box']}>
                <div className={styles['pic']}>
                    <Image
                    className={styles['pencil-image']}
                    src={image}
                    alt="pencil-image"
                    />
                </div>
                <div className={styles['text']}>
                    <h2 className={styles['educational-text']}>EDUCATIONAL</h2>
                    <h1 className={styles['workshops-text']}>Workshops</h1>
                </div>
            </div>
		</div>
		<div className={styles['cards-container']}>
			<Card title="Card 1 Title" content="Content for Card 1" />
			<Card title="Card 1 Title" content="Content for Card 1" />
			<Card title="Card 1 Title" content="Content for Card 1" />
			<Card title="Card 1 Title" content="Content for Card 1" />
			<Card title="Card 1 Title" content="Content for Card 1" />
			<Card title="Card 1 Title" content="Content for Card 1" />
			<Card title="Card 1 Title" content="Content for Card 1" />
			<Card title="Card 1 Title" content="Content for Card 1" />
		</div>
	{/* </div> */}
	<Footer />
   </div>
  );
};


