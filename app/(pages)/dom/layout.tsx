// import Sidebar from './ui/Sidbar'
import NavLinks from './ui/Nav-links'
import AppHeader from './ui/AppHeader'
import { PowerIcon } from '@heroicons/react/24/outline'

export default function Layout({ children }: { children: React.ReactNode }) {
	return (
		<div className='flex flex-col   h-[100dvh] md:fixed md:top-0 md:bottom-0 md:left-0 md:right-0'>
			<AppHeader />

			{/* <div className='flex leading-[4rem] bg-sky-900 text-white'>
				<div className=' hidden w-full md:flex justify-center md:w-64'>Logo</div>
				<div className='flex justify-between grow px-3'>
					<div className='hidden md:flex md:w-64 overflow-x-hidden whitespace-nowrap'>
						<div className='inline-block animate-marquee'>
							<span className='mr-10'>Всякие показатели +15%</span>{' '}
							<span className='mr-10'>Рост показателя на 45 ед</span>
						</div>
					</div>
					<div className='flex items-center gap-2'>
						<div className='hidden md:flex md:flex-col md:text-sm'>
							<p className='flex justify-end'>Aldazharbekov</p>
							<p className='flex justify-end'>Adilet</p>
						</div>
						<div className='flex items-center justify-center rounded-full my-2 h-[32px] w-[32px] bg-sky-500 text-xs'>
							AA
						</div>
					</div>
				</div>
			</div> */}
			<div className='flex flex-col-reverse md:flex-row grow bg-white'>
				<div className='flex md:flex-col md:w-64 justify-between md:gap-1 space-x-0 md:rounded-ee-3xl bg-sky-800 text-white px-3 py-1 md:px-1'>
					<NavLinks />
					<div className='hidden h-auto w-full grow bg-inherit md:block'></div>
					<form
						className='hidden md:block'
						action={async () => {
							'use server'
							// await signOut();
							// revalidatePath('/');
							// redirect('/');
							// cookies().delete('AUTH_TOKEN');
						}}
					>
						<a
							href='/'
							className='flex h-[48px] items-center justify-center gap-3 rounded-md p-3 text-sm font-medium hover:text-sky-400 md:flex-none md:justify-start md:p-2 md:px-3'
						>
							<PowerIcon className='w-6' />
							<p className='hidden md:block'>Выйти</p>
						</a>
					</form>
				</div>
				<div className='grow px-1 md:pl-0 bg-sky-800'>
					<div className='flex flex-col h-full md:max-h-[100%] rounded-xl md:rounded-t-xl md:rounded-es-none md:rounded-ee-3xl p-2 md:pb-4  bg-white'>
						{children}
					</div>
				</div>
			</div>
		</div>
	)
}
