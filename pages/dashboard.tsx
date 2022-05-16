import Head from "next/head";
import { Header } from "../components/Header";
import styles from '../styles/dashboard.module.scss'

export default function Dashboard() {

    return (
        <>

            <Head>
                <title>Insta Analytics | Dashboard</title>
            </Head>

            <Header />

            <main className={styles.dashboard} >

                <h1>Your Analytics</h1>

                <section className={styles.analytics} >

                    <div className={styles.analytic1} >
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet error fugiat nam suscipit minus, corporis cumque omnis, pariatur a minima molestiae, unde officiis impedit repellendus corrupti nisi aperiam exercitationem tempore?
                    </div>

                    <div className={styles.analytic2} >
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta molestias delectus pariatur animi nam vero accusantium! Facere pariatur explicabo dicta earum, nulla reiciendis sunt magni aspernatur! Debitis at nisi architecto!
                    </div>

                    <div className={styles.analytic3}>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium veniam velit nulla totam eveniet laboriosam placeat quas. Quisquam sunt eius alias, quod illum, veritatis eos, facere quis harum ab libero.
                    </div>

                    <div className={styles.analytic4}>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium veniam velit nulla totam eveniet laboriosam placeat quas. Quisquam sunt eius alias, quod illum, veritatis eos, facere quis harum ab libero.
                    </div>

                    <div className={styles.analytic5}>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium veniam velit nulla totam eveniet laboriosam placeat quas. Quisquam sunt eius alias, quod illum, veritatis eos, facere quis harum ab libero.
                    </div>

                    <div className={styles.analytic6}>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium veniam velit nulla totam eveniet laboriosam placeat quas. Quisquam sunt eius alias, quod illum, veritatis eos, facere quis harum ab libero.
                    </div>

                </section>


            </main>
        </>
    )
}