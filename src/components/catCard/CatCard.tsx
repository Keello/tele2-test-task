import React from 'react';
import Card from '@ui/card/Card';
import styles from './CatCard.module.scss';
import type { FC, ReactNode } from 'react';

interface CatCardProps {
  header: string;
  name: string;
  taste: string;
  features: string[];
  weight: number;
  description: string | ReactNode;
  isActive?: boolean;
  disabled?: boolean;
  onClick?: () => void;
}

const CatCard: FC<CatCardProps> = ({
  header,
  name,
  taste,
  features,
  weight,
  description = '',
  isActive = false,
  disabled = false,
  onClick,
}) => {
  const weightWithComma = weight.toString().replace('.', ',');
  const weighUnit = 'кг';

  return (
    <div className={styles.wrapper}>
      <Card
        isActive={isActive}
        disabled={disabled}
        circleContent={
          <>
            <span>{weightWithComma}</span>
            <span className={styles.card__weighUnit}>{weighUnit}</span>
          </>
        }
        onClick={onClick}
      >
        <div className={`${styles.card} ${disabled ? styles.card_disabled : ''}`}>
          <p className={styles.card__header}>{header}</p>
          <h2 className={styles.card__title}>{name}</h2>
          <h4 className={styles.card__subTitle}>{taste}</h4>
          <ul className={styles.card__features}>
            {features?.map((feature, idx) => (
              // eslint-disable-next-line react-x/no-array-index-key
              <li key={feature + idx}>{feature}</li>
            ))}
          </ul>
        </div>
      </Card>
      {React.isValidElement(description) ? (
        description
      ) : (
        <span className={`${styles.description} ${disabled ? styles.description_disabled : ''}`}>
          {description}
        </span>
      )}
    </div>
  );
};

export default CatCard;
