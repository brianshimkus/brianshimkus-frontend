import Head from 'next/head'
import Header from './Header'

export default function Layout({ title, keywords, description, children }) {
	return (
		<div>
			<Head>
				<title>{title}</title>
				<meta name='description' content={description} />
				<meta name='keywords' content={keywords} />
				<link
					href='https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap'
					rel='stylesheet'
				/>
			</Head>
			<div className='bg-neutral-900 min-h-screen p-8 font-primary text-gray-400 tracking-wide'>
				<Header />
				<div className='max-w-screen-2xl mx-auto my-12'>{children}</div>
			</div>
		</div>
	)
}

Layout.defaultProps = {
	title: 'Brian Shimkus',
	description: 'The personal site of Brian Shimkus',
	keywords:
		'entrepreneur, mental health advocate, mixed martial artist, musician, reef tank enthusiast, software engineer',
}
