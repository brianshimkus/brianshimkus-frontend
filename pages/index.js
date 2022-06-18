import Link from 'next/link'
import Image from 'next/image'
import headshot from '../public/images/headshot.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
	faGithub,
	faInstagram,
	faLinkedinIn,
	faTwitter,
} from '@fortawesome/free-brands-svg-icons'
import {
	faBrain,
	faEnvelope,
	faGuitar,
	faLaptopCode,
	faLightbulb,
	faList,
	faFish,
} from '@fortawesome/free-solid-svg-icons'
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
							<h1 className='text-3xl xl:text-4xl text-green-300 font-black pb-4'>
								Brian Shimkus
							</h1>
							<hr />
							<ul className='text-xl xl:text-2xl py-4 text-blue-200'>
								<li className='pb-2'>
									<FontAwesomeIcon
										icon={faLightbulb}
										alt='Light Bulb'
										className='text-yellow-100'
									/>
									<span className='md:pl-6 pl-2'>Entrepreneur</span>
								</li>
								<li className='pb-2'>
									<FontAwesomeIcon
										icon={faBrain}
										alt='Brain'
										className='text-red-200'
									/>
									<span className='md:pl-3 pl-2'>Mental Health Advocate</span>
								</li>
								<li className='pb-2'>
									🥋
									<span className='md:pl-4 pl-2'>Mixed Martial Artist</span>
								</li>
								<li className='pb-2'>
									<FontAwesomeIcon
										icon={faGuitar}
										alt='Guitar'
										className='text-yellow-500'
									/>
									<span className='md:pl-4 pl-2'>Musician</span>
								</li>
								<li className='pb-2'>
									<FontAwesomeIcon
										icon={faFish}
										alt='Fish'
										className='text-green-400'
									/>
									<span className='md:pl-3 pl-2'>Reef Tank Enthusiast</span>
								</li>
								<li className='pb-2'>
									<FontAwesomeIcon
										icon={faLaptopCode}
										alt='Laptop'
										className='text-gray-200'
									/>
									<span className='md:pl-3 pl-2'>Software Engineer</span>
								</li>
							</ul>
							<hr />
							<div className='text-3xl flex space-x-5 xl:justify-start justify-center pt-4'>
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
										Twitter
									</span>
									<Link href='https://www.twitter.com/brianshimkus'>
										<a target='_blank'>
											<FontAwesomeIcon
												icon={faTwitter}
												className='hover:text-green-300 transition'
												alt='Twitter'
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
