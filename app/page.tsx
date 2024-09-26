import Image from 'next/image'

export default function Home() {
	return (
		<main className='flex h-[100dvh] flex-col items-center justify-start'>
			<div className='flex h-8 w-full items-center justify-between bg-gray-200'>
				<div className='w-60 pl-6 text-sm'>
					<a
						href=' https://www.linkedin.com/in/adilet-aldazharbekov/'
						className='text-gray-500 hover:text-gray-950'
						target='_blank'
					>
						Linkedin
					</a>
				</div>
				<div className='flex grow items-center justify-end gap-6 pr-6 text-sm'>
					<a href='/login' className='text-gray-500 hover:text-gray-950'>
						Войти
					</a>
				</div>
			</div>
			<div className='flex w-full flex-grow-[1] flex-col items-center justify-center text-2xl'>
				<main className='flex flex-col gap-8 row-start-2 items-center sm:items-start'>
					<Image
						className='dark:invert'
						src='/logo 9.png'
						// src='https://nextjs.org/icons/next.svg'
						alt='Next.js logo'
						width={180}
						height={38}
						priority
					/>
					<div className='flex gap-1 items-center flex-col sm:flex-row'>
						<a
							className='rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44'
							href='/dom'
							rel='noopener noreferrer'
						>
							Home page
						</a>
						<a
							className='rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44'
							href='/grid'
							rel='noopener noreferrer'
						>
							Poligon
						</a>
					</div>
				</main>
			</div>
		</main>
	)
}
