import { Chart, options, optionsImpressions, series, seriesImpressions } from '../../data/optionsAndSeries'
import styles from './styles.module.scss'

export function UserAnalytics() {

    return (
        <main className={styles.container} >
            <section className={styles.analytics}>
                <div className={styles.analytic1}>
                    <h1>Novos Seguidores</h1>

                    <Chart options={options} series={series} type="area" height={200} />
                </div>

                <div className={styles.analytic2} >
                    <h1>Pessoas que visualizaram este perfil</h1>

                    <Chart options={options} series={series} type="area" height={200} />
                </div>

                <div className={styles.analytic3} >
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
                </div>

                <div className={styles.analytic4} >
                    <h1>Impressões</h1>

                    <Chart options={optionsImpressions} series={seriesImpressions} type="area" height={200} />
                </div>
            </section>
        </main>
    )
}