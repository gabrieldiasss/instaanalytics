import Head from "next/head";
import Link from "next/link";
import { BsFillArrowLeftSquareFill } from "react-icons/bs";
import { FiSearch } from "react-icons/fi";
import { MdOutlineClose } from "react-icons/md";
import styles from '../styles/search.module.scss'

export default function Search() {

    return (
        <>
            <Head>
                <title>Insta Analytics | Pesquisar</title>
            </Head>

            <header className={styles.inputContainer} >

                <Link href="/dashboard" >
                    <BsFillArrowLeftSquareFill className={styles.arrow} />
                </Link>
                
                <div className={styles.inputFake}>
                    <FiSearch />
                    <input placeholder='Search' type="text" />
                </div>

                <button type="button"><FiSearch />  </button>
            </header>

            <main className={styles.recents}>

                <header>
                    <span>Recentes</span>
                    <span  /* onClick={openModal} */ className={styles.clear} >Limpar histórico</span>
                </header>

                <div>
                    <li className={styles.dataItem}>
                        <img src="https://github.com/diego3g.png" alt="" />

                        <div className={styles.dataInfos}>
                            <div>
                                <Link href="/profile/gabriel">Diego Fernandes</Link>
                                <span>diego3g</span>
                            </div>

                            <MdOutlineClose />
                        </div>
                    </li>

                    <li className={styles.dataItem}>
                        <img src="https://github.com/diego3g.png" alt="" />

                        <div className={styles.dataInfos}>
                            <div>
                                <Link href="/profile/gabriel">Diego Fernandes</Link>
                                <span>diego3g</span>
                            </div>

                            <MdOutlineClose />
                        </div>
                    </li>
                </div>

            </main>
        </>
    )
}