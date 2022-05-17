import Link from 'next/link'
import { FiSearch } from 'react-icons/fi'
import { MdOutlineClose } from 'react-icons/md'
import { useFocus } from '../../contexts/useFocus'

import Modal from 'react-modal'

import styles from './styles.module.scss'
import { useState } from 'react'
import CleanHistoryModal from '../CleanHistoryModal'

export function Input() {

    const { open, handleSearchFocus, handleSearchOnBlur } = useFocus()

    const [modalIsOpen, setIsOpen] = useState(false);

    function openModal() {
        setIsOpen(true)
    }

    function closeModal() {
        setIsOpen(false)
    }

    return (
        <>
            <div className={styles.inputContainer}>
                <div className={styles.input} >
                    <div className={styles.inputFake}>
                        <FiSearch />
                        <input placeholder='Search' onFocus={handleSearchFocus} type="text" />
                    </div>

                    {open && (
                        <div className={styles.recents}  >

                            <MdOutlineClose onClick={() => handleSearchOnBlur()} className={styles.icon} />

                            <header>
                                <span>Recentes</span>
                                <span onClick={openModal} className={styles.clear}>Limpar histórico</span>
                            </header>

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
                    )}
                </div>

                <button type="button"><FiSearch />  </button>
            </div>

            <CleanHistoryModal isOpen={modalIsOpen} onRequestClose={closeModal} />
        </>
    )
}

