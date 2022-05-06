import Link from 'next/link'

export default function HeaderMenu() {
	return (
		<div className='flex'>
			<div className='flex'>
				<ul className='flex'>
					<li>
						<Link href='/about'>
							<a>About</a>
						</Link>
					</li>
					<li className='ml-4'>
						<Link href='/code'>
							<a>Code</a>
						</Link>
					</li>
					<li className='ml-4'>
						<Link href='/entrepreneurship'>
							<a>Entrepreneurship</a>
						</Link>
					</li>
					<li className='ml-4'>
						<Link href='/music'>
							<a>Music</a>
						</Link>
					</li>
					<li className='ml-4'>
						<Link href='/reef'>
							<a>Reef</a>
						</Link>
					</li>
					<li className='ml-4'>
						<Link href='/contact'>
							<a>Contact</a>
						</Link>
					</li>
				</ul>
			</div>
		</div>
	)
}
