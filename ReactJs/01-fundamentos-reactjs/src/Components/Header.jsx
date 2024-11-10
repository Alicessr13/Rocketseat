import styles from './Header.module.css';

import igniteLogo from '../assets/Ignite-logo.svg'

export function Header(){//sempre primeira letra maiuscula para não confundir com o html
    return(
        <header className={styles.header}>
            <img src={igniteLogo} alt="Logotipo do Ignite" />

        </header>
    );    
}