import HeaderMenu from './HeaderMenu'
import Link from 'next/link'

export default function Header() {
	return (
		<div className='flex text-xl max-w-screen-2xl mx-auto'>
			<div className='flex flex-grow text-2xl'>
				<Link href='/'>
					<a className='font-bold bg-clip-text text-transparent bg-gradient-to-br from-yellow-300 to-rose-600'>
						Brian Shimkus
					</a>
				</Link>
			</div>
			<div className='flex'>
				<HeaderMenu />
			</div>
		</div>
	)
}
