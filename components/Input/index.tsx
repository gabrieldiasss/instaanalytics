import { useState } from 'react'
import { FiSearch } from 'react-icons/fi'
import { GrClose } from 'react-icons/gr'

import styles from './styles.module.scss'

export function Input() {

    const [open, setOpen] = useState(false)

    function handleSearchFocus() {
        setOpen(!open)
    }

    return (
        <div className={styles.inputContainer}>
            <div className={styles.input} >
                <div className={styles.inputFake}>
                    <FiSearch />
                    <input placeholder='Search' onFocus={handleSearchFocus} onBlur={handleSearchFocus} type="text" />
                </div>

                {open && (
                    <div className={styles.recents}>

                        <header>
                            <span>Recentes</span>
                            <span className={styles.clear}>Limpar histórico</span>
                        </header>

                        <li className={styles.dataItem}>
                            <img src="https://github.com/diego3g.png" alt="" />

                            <div className={styles.dataInfos} >

                                <div>
                                    <p>Diego Fernandes</p>
                                    <span>diego3g</span>
                                </div>

                                <GrClose />

                            </div>
                        </li>
                    </div>
                )}
            </div>

            <button><FiSearch /></button>
        </div>
    )
}

