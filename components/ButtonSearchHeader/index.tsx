import Link from "next/link";
import { FiSearch } from "react-icons/fi";
import styles from './styles.module.scss'

export default function ButtonSearchHeader() {

    return (
        <button type="button" className={styles.button} >
            <Link href="/search" >
                <FiSearch className='search' />
            </Link>
        </button>
    )
}