import CatCard from '@components/catCard/CatCard';
import styles from './App.module.scss';
import Link from '@ui/link/Link';
import { useState } from 'react';

const mockData = [
  {
    id: 1,
    name: 'Нямушка',
    taste: 'с фуа-гра',
    features: ['10 порций', 'мышь в подарок'],
    weigth: 0.5,
    count: 5,
  },
  {
    id: 2,
    name: 'Нямушка',
    taste: 'с рыбой',
    features: ['40 порций', '2 мыши в подарок'],
    weigth: 2,
    count: 0,
  },
  {
    id: 3,
    name: 'Нямушка',
    taste: 'с курой',
    features: ['100 порций', '5 мышей в подарок', 'заказчик доволен'],
    weigth: 5,
    count: 1,
  },
];

const App = () => {
  const [selectedCardIDs, setSelectedCardIDs] = useState<number[]>([]);

  const handleCardClick = (id: number) => {
    const isSelected = selectedCardIDs.includes(id);
    if (isSelected) {
      setSelectedCardIDs((prev) => prev.filter((cardID) => id !== cardID));
    } else {
      setSelectedCardIDs((prev) => [...prev, id]);
    }
  };

  return (
    <section className={styles.wrapper}>
      <h1>Ты сегодня покормил кота?</h1>

      <div className={styles.cardContainer}>
        {mockData?.map((item) => (
          <CatCard
            key={item.id}
            disabled={item.count === 0}
            isActive={selectedCardIDs.includes(item.id)}
            header="Сказочное заморское яство"
            name={item.name}
            taste={item.taste}
            features={item.features}
            weight={item.weigth}
            onClick={() => {
              handleCardClick(item.id);
            }}
            description={
              item.count === 0 ? (
                <span className="text_center text_secondaryAccent">
                  Печалька, {item.taste} закончился.
                </span>
              ) : (
                <span className="text_center">
                  Чего сидишь? Порадуй котэ,{' '}
                  <Link
                    onClick={() => {
                      handleCardClick(item.id);
                    }}
                  >
                    купи.
                  </Link>
                </span>
              )
            }
          />
        ))}
      </div>
    </section>
  );
};

export default App;
