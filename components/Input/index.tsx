import { useState } from 'react'
import { FiSearch } from 'react-icons/fi'
import styles from './styles.module.scss'

export function Input() {

    const [open, setOpen] = useState(false)

    function handleSearchFocus() {
        setOpen(true)
    }

    function handleSearchOut() {
        setOpen(false)
    }

    return (
        <div className={styles.inputContainer} >
            <div className={styles.inputFake} >
                <FiSearch />
                <input onFocus={handleSearchFocus} onFocusCapture type="text" />
            </div>

            <button><FiSearch /></button>
        </div>
    )
}