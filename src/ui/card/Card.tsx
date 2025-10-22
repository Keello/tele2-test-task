import { useState, type FC, type PropsWithChildren, type ReactNode } from 'react';
import styles from './Card.module.scss';

interface CardProps {
  isActive?: boolean;
  disabled?: boolean;
  circleContent?: ReactNode;
  onClick?: () => void;
}

const Card: FC<PropsWithChildren<CardProps>> = ({
  isActive = false,
  disabled = false,
  children,
  circleContent,
  onClick,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const classList =
    styles.card +
    (isHovered ? ' ' + styles.card_hovered : '') +
    (isActive ? ' ' + styles.card_accent : '') +
    (disabled ? ' ' + styles.card_disabled : '');

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleClick = () => {
    if (onClick) {
      setIsHovered(false);
      onClick();
    }
  };

  return (
    <div
      className={classList}
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className={styles.card__body}>{children}</div>
      {circleContent && <div className={styles.card__circle}>{circleContent}</div>}
    </div>
  );
};

export default Card;
