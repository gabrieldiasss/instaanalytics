import styles from './styles.module.scss'

export function Header() {

    return (
        <header className={styles.container} >
            <div className={styles.content} >
                
                <img src="/images/logo.png" alt="" />
                
                <div>
                    <input />
                </div>

                <div>
                    perfil
                </div>
            </div>
        </header>
    )
}