import { BsFillPeopleFill } from 'react-icons/bs'
import styles from './styles.module.scss'

export function UserProfile() {

    return (
        <aside className={styles.userProfile} >
            <img src="https://github.com/diego3g.png" alt="" />

            <strong>Diego Fernandes</strong>
            <span>diego3g</span>

            <section className={styles.infos} >

                <div className={styles.info} >
                    <BsFillPeopleFill />
                    <b>300</b>
                    <span>Followers</span>
                </div>

                &bull;

                <div className={styles.info} >
                    <b>5</b>
                    <span>Following</span>
                </div>

                &bull;

                <div className={styles.info} >
                    <b>30</b>
                    <span>Posts</span>
                </div>

            </section>

            <p>
                Desenvolvedor Frontend
            </p>

        </aside>
    )
}