import Head from 'next/head'
import { useRouter } from 'next/router'

export default function Layout({ title, keywords, description, children }) {
	const router = useRouter()
	return (
		<div>
			<Head>
				<title>{title}</title>
				<meta name='description' content={description} />
				<meta name='keywords' content={keywords} />
				<link
					href='https://fonts.googleapis.com/css2?family=Montserrat'
					rel='stylesheet'
				/>
			</Head>
			<div>{children}</div>
		</div>
	)
}

Layout.defaultProps = {
	title: 'Brian Shimkus | Personal Site',
	description: 'The personal site of Brian Shimkus',
	keywords: 'entrepreneur, musician, software engineer',
}
