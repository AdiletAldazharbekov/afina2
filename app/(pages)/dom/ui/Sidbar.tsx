import NavLinks from './Nav-links'
import { PowerIcon } from '@heroicons/react/24/outline'

// import { revalidatePath } from 'next/cache';
// import { redirect } from 'next/navigation';

export default function Sidebar() {
	return (
		<div className='flex h-full md:flex-col px-3 py-1 md:py-0 md:pb-4 md:px-1'>
			{/* <div className='my-1 flex h-20 w-full items-center justify-center rounded-md bg-sky-900 text-white md:h-20'>
				Logo
			</div> */}

			<div className='flex grow flex-row justify-between space-x-2 md:flex-col md:gap-1 md:space-x-0'>
				<NavLinks />
				<div className='hidden h-auto w-full grow bg-inherit md:block'></div>
				<form
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
						className='flex h-[48px] grow items-center justify-center gap-3 rounded-md rounded-ee-2xl bg-sky-900 p-3 text-sm font-medium hover:text-sky-400 md:flex-none md:justify-start md:p-2 md:px-3'
					>
						<PowerIcon className='w-6' />
						<p className='hidden md:block'>Выйти</p>
					</a>

					{/* <button className='flex h-[48px] w-full grow items-center justify-center gap-2 rounded-md bg-inherit p-3 text-sm font-medium hover:text-blue-300 md:flex-none md:justify-start md:p-2 md:px-3'>
						<div className='hidden md:block'>
							<a className='block w-max' href='/'>
								<PowerIcon className='w-6 md:hidden' />
								Выйти
							</a>
						</div>
					</button> */}
				</form>
			</div>
		</div>
	)
}
