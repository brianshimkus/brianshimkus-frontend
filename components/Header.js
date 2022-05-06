import HeaderMenu from './HeaderMenu'
import Link from 'next/link'

export default function Header() {
	return (
		<div className='flex'>
			<div className='flex flex-grow'>
				<Link href='/'>
					<a>Brian Shimkus</a>
				</Link>
			</div>
			<div className='flex'>
				<HeaderMenu />
			</div>
		</div>
	)
}
