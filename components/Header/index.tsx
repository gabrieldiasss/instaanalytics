import { Input } from '../Input'
import styles from './styles.module.scss'

import { IoMdArrowDropdown } from 'react-icons/io'

export function Header() {

    return (
        <header className={styles.container} >
            <div className={styles.content} >
                
                <img src="/images/logo.png" alt="" />
                
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