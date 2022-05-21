import Head from "next/head";
import { Header } from "../components/Header";
import { useFocus } from "../contexts/useFocus";
import styles from '../styles/dashboard.module.scss'
import { ApexOptions } from 'apexcharts'

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { Chart, options, optionsImpressions, series, seriesImpressions } from "../data/optionsAndSeries";





export default function Dashboard() {

    const { open, setOpen } = useFocus()

    const [assembleGraphics, setAssembleGraphics] = useState(false)

    console.log(assembleGraphics)

    useEffect(() => {
        setAssembleGraphics(true)
    }, [])

    return (
        <>
            <Head>
                <link rel="shortcut icon" href="favicon.png" type="image/png" />
                <title>Insta Analytics | Dashboard</title>
            </Head>

            <Header />

            <main onClick={() => setOpen(false)} className={styles.dashboard} >

                <h1>Your Analytics</h1>

                <section className={styles.analytics}>
                    {assembleGraphics && (
                        <div className={styles.analytic1}>
                            <h1>Novos Seguidores</h1>

                            <Chart options={options} series={series} type="area" height={160} />
                        </div>
                    )}

                    <div className={styles.analytic2}>

                        <h1>Pessoas que visualizaram seu perfil</h1>

                        <Chart options={options} series={series} type="area" height={160} />
                    </div>

                    <div className={styles.analytic3}>
                        <div>
                            <h1>Sexo da audiência</h1>

                            <Chart
                                type="pie"
                                width={320}
                                series={[120, 60]}
                                options={{
                                    labels: ['Homem', 'Mulher']
                                }} />
                        </div>

                        <div>
                            <h1>Paises da audiência</h1>

                            <Chart
                                type="donut"
                                width={360}
                                series={[1020, 980, 300, 200, 150]}
                                options={{
                                    labels: ['Brasil', 'Portugal', 'Moçambique', 'Angola', 'Estados Unidos']
                                }} />
                        </div>

                        <div>
                            <h1>Cidades da audiência</h1>

                            <Chart
                                type="donut"
                                width={360}
                                series={[120, 60, 120, 67, 58]}
                                options={{
                                    labels: ['São Paulo', 'Rio de Janeiro', 'Brasília', 'Salvador ', 'Fortaleza']
                                }} />
                        </div>
                    </div>

                    <div className={styles.analytic4}>
                        <h1>Impressões</h1>

                        <Chart options={optionsImpressions} series={seriesImpressions} type="area" height={380} />
                    </div>

                </section>
            </main>
        </>
    )
}