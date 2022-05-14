import Head from "next/head";
import Link from "next/link";

import { BsInstagram } from 'react-icons/bs'

import styles from '../styles/Home.module.scss'

export default function Home() {

	return (
		<>
			<Head>
				<title>Insta Analytics | Login</title>
			</Head>

			<div className={styles.card}>
				<h2>
					Faça login com a sua
					conta do instagram
				</h2>

				<Link href="/dashboard" passHref >
					<button>
						<BsInstagram />

						Logar
					</button>
				</Link>
			</div>
		</>
	)
}