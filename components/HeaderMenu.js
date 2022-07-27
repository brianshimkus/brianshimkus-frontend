import Link from 'next/link'

export default function HeaderMenu() {
	return (
		<div className='flex'>
			<ul className='flex space-x-6 font-semibold upper'>
				<li className='hover:text-rose-400 transition duration:700 ease-in-out'>
					<Link href='/about'>
						<a>About</a>
					</Link>
				</li>
				<li className='hover:text-rose-400 transition duration:700 ease-in-out'>
					<Link href='/code'>
						<a>Code</a>
					</Link>
				</li>
				<li className='hover:text-rose-400 transition duration:700 ease-in-out'>
					<Link href='/entrepreneurship'>
						<a>Entrepreneurship</a>
					</Link>
				</li>
				<li className='hover:text-rose-400 transition duration:700 ease-in-out'>
					<Link href='/music'>
						<a>Music</a>
					</Link>
				</li>
				<li className='hover:text-rose-400 transition duration:700 ease-in-out'>
					<Link href='/reef'>
						<a>Reef</a>
					</Link>
				</li>
				<li className='hover:text-rose-400 transition duration:700 ease-in-out'>
					<Link href='/contact'>
						<a>Contact</a>
					</Link>
				</li>
			</ul>
		</div>
	)
}
