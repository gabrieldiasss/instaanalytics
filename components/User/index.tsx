import { useState } from 'react'
import { IoMdArrowDropdown } from 'react-icons/io'
import { FiLogOut, FiSearch } from 'react-icons/fi'

import styles from './styles.module.scss'

export default function User() {

    const [openModalUser, setOpenModalUser] = useState(false)

    function handleModalUser() {
        setOpenModalUser(!openModalUser)
    }

    console.log(openModalUser)

    return (
        <div className={styles.profile} >

            <IoMdArrowDropdown className={styles.arrowSvg} onClick={handleModalUser} />

            <span onClick={handleModalUser}>
                Gabriel Dias
            </span>

            <img onClick={handleModalUser} src="https://github.com/gabrieldiasss.png" alt="" />

            {openModalUser ? (
                <div className={styles.modalUserHeader} >
                    <li> <FiLogOut className='logoutSvg' /> Logout</li>
                </div>
            ): (
                <></>
            )}
        </div>
    )
}