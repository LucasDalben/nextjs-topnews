import { FaGithub } from 'react-icons/fa';
import { FiX } from 'react-icons/fi';

import styles from './style.module.scss';

export function SignInButton() {

    const isUserloggedIn = true;

    return isUserloggedIn ? (
        <button
            type="button"
            className={styles.signInButton}
            >
            <FaGithub color='#04d361' />
            Lucas Dalbem
            <FiX color='#737380' className={styles.closeIcon} /> 
        </button>
    ) : (
        <button
            type="button"
            className={styles.signInButton}
            >
            <FaGithub color='#eba417' />
            Sign in with Githhub
    </button>
    )
}