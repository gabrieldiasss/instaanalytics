import Head from "next/head";
import { useEffect } from "react";
import { Header } from "../../components/Header";
import { UserAnalytics } from "../../components/UserAnalytics";
import { UserProfile } from "../../components/UserProfile";
import { useFocus } from "../../contexts/useFocus";
import styles from '../../styles/profile.module.scss'


export default function User() {
    
    const { setOpen } = useFocus()

    useEffect(() => {
        setOpen(false)
    }, [])

    return (
        <>
            <Head>
                <title>Insta Analytics | Gabriel Dias</title>
            </Head>

            <Header />

            <main onClick={() => setOpen(false)} >
                <section className={styles.content} >
                    <UserProfile />

                    <UserAnalytics />
                </section>
            </main>
        </>
    )
}


