import rocket from '../../assets/rocket.svg';

import styles from './header.module.scss';
import common from '../../styles/common.module.scss';

export function Header() {
  return (
    <header className={styles.header}>
      <div className={`${styles.logo} ${common.container}`}>
        <img src={rocket} width={22} height={36} alt='Rocket' />
        <p>to</p><p>do</p>
      </div>
    </header>
  );
}
