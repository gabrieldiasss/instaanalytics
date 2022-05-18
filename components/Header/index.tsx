
import { Input } from '../Input'
import styles from './styles.module.scss'

import Link from 'next/link'
import Image from 'next/image'
import User from '../User'
import ButtonSearchHeader from '../ButtonSearchHeader'

export function Header() {

    return (
        <header className={styles.container} >
            <div className={styles.content} >

                <Link href="/dashboard" >
                    <Image width={42} height={42} src="/images/logo.png" alt="" />
                </Link>

                <Input />

                <Link href="/" >
                    <ButtonSearchHeader />
                </Link>

                <User />
            </div>
        </header>
    )
}