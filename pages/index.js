import Link from 'next/link'
import Image from 'next/image'
import headshot from '../public/images/headshot.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
	faGithub,
	faInstagram,
	faLinkedinIn,
} from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faList } from '@fortawesome/free-solid-svg-icons'
import Layout from '../components/Layout'

export default function Home() {
	return (
		<Layout>
			<div className='flex h-screen font-primary bg-gray-700'>
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
							<h1 className='text-3xl xl:text-4xl text-green-300 font-black'>
								Brian Shimkus
							</h1>
							<h2 className='text-xl xl:text-2xl py-4 text-blue-200'>
								Entrepreneur • Musician • Software Engineer
							</h2>
							<div className='text-3xl flex space-x-5 xl:justify-start justify-center'>
								<div className='has-tooltip'>
									<span className='tooltip rounded p-1 bg-green-300 text-gray-700 mt-12 transition text-base'>
										Instagram
									</span>
									<Link href='https://www.instagram.com/brianshimkus.me/'>
										<a target='_blank'>
											<FontAwesomeIcon
												icon={faInstagram}
												className='hover:text-green-300 transition'
												alt='Instagram'
											/>
										</a>
									</Link>
								</div>
								<div className='has-tooltip'>
									<span className='tooltip rounded p-1 bg-green-300 text-gray-700 mt-12 transition text-base'>
										GitHub
									</span>
									<Link href='https://github.com/brianshimkus'>
										<a target='_blank'>
											<FontAwesomeIcon
												icon={faGithub}
												className='hover:text-green-300 transition'
												alt='GitHub'
											/>
										</a>
									</Link>
								</div>
								<div className='has-tooltip'>
									<span className='tooltip rounded p-1 bg-green-300 text-gray-700 mt-12 transition text-base'>
										LinkedIn
									</span>
									<Link href='https://www.linkedin.com/in/brianshimkus1/'>
										<a target='_blank'>
											<FontAwesomeIcon
												icon={faLinkedinIn}
												className='hover:text-green-300 transition'
												alt='LinkedIn'
											/>
										</a>
									</Link>
								</div>
								<div className='has-tooltip'>
									<span className='tooltip rounded p-1 bg-green-300 text-gray-700 mt-12 transition text-base'>
										My Resume
									</span>
									<Link href='https://drive.google.com/file/d/1GvkcStF_UoTrFL5A2Z-AHIqXnFQG_D1P/view'>
										<a target='_blank'>
											<FontAwesomeIcon
												icon={faList}
												className='hover:text-green-300 transition'
												alt='Resume'
											/>
										</a>
									</Link>
								</div>
								<div className='has-tooltip'>
									<span className='tooltip rounded p-1 bg-green-300 text-gray-700 mt-12 transition text-base'>
										Email Me
									</span>
									<Link href='mailto:brianshimkus1@gmail.com'>
										<a target='_blank'>
											<FontAwesomeIcon
												icon={faEnvelope}
												className='hover:text-green-300 transition'
												alt='Email'
											/>
										</a>
									</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</Layout>
	)
}
