import Image from 'next/image'
import headshot from '../public/images/headshot.jpg'
import Layout from '../components/Layout'

export default function Home() {
	return (
		<Layout>
			<div className='flex'>
				<div className='m-auto'>
					<div className='grid xl:grid-cols-2 grid-cols-1 px-8 my-24'>
						<div>
							<Image
								className='rounded-full border-solid border-2 border-sky-200'
								src={headshot}
								alt='Portait of Brian Shimkus'
								width={600}
								height={600}
							/>
						</div>
						<div className='text-gray-400 xl:text-left text-center pt-8 xl:pt-0 ml-0 xl:ml-8'>
							<h1 className='text-5xl xl:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-br from-yellow-300 to-rose-600'>
								Brian Shimkus
							</h1>
							<ul className='text-xl xl:text-3xl py-4 text-gray-400'>
								<li className='pb-2'>Entrepreneur</li>
								<li className='pb-2'>Mental Health Advocate</li>
								<li className='pb-2'>Mixed Martial Artist</li>
								<li className='pb-2'>Musician</li>
								<li className='pb-2'>Reef Tank Enthusiast</li>
								<li className='pb-2'>Software Engineer</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</Layout>
	)
}
