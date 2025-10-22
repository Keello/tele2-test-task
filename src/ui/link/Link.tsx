import { type FC, type PropsWithChildren } from 'react';
import styles from './Link.module.scss';

interface LinkProps {
  onClick?: () => void;
}

const Link: FC<PropsWithChildren<LinkProps>> = ({ children, onClick }) => {
  return (
    <a className={styles.link} onClick={onClick}>
      {children}
    </a>
  );
};

export default Link;
