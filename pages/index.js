import Image from 'next/image'
import headshot from '../public/images/headshot.jpg'
import Layout from '../components/Layout'

export default function Home() {
	return (
		<Layout>
			<div className='flex h-full min-h-screen font-primary'>
				<div className='m-auto'>
					<div className='grid xl:grid-cols-2 grid-cols-1 px-8'>
						<div className='0'>
							<Image
								className='rounded-full'
								src={headshot}
								alt='Portait of Brian Shimkus'
								width={500}
								height={500}
							/>
						</div>
						<div className='text-gray-400  xl:text-left text-center pt-8 xl:pt-0 ml-0 xl:ml-8'>
							<h1 className='text-3xl xl:text-4xl'>Brian Shimkus</h1>
							<ul className='text-xl xl:text-2xl py-4'>
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
