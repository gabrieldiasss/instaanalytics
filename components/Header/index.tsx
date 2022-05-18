
import { Input } from '../Input'
import styles from './styles.module.scss'

import { IoMdArrowDropdown } from 'react-icons/io'
import Link from 'next/link'
import Image from 'next/image'

export function Header() {

    return (
        <header className={styles.container} >
            <div className={styles.content} >

                <Link href="/dashboard" >
                    <Image width={42} height={42} src="/images/logo.png" alt="" />
                </Link>

                <Input />

                <div className={styles.profile} >

                    <IoMdArrowDropdown />

                    <span>
                        Gabriel Dias
                    </span>

                    <img src="https://github.com/gabrieldiasss.png" alt="" />
                </div>
            </div>
        </header>
    )
}