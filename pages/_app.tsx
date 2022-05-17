import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import { FocusProvider } from '../contexts/useFocus'


function MyApp({ Component, pageProps }: AppProps) {

	return (
		<FocusProvider>
			<Component  {...pageProps} />
		</FocusProvider>

	)
}

export default MyApp
