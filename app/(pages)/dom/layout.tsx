import Sidebar from './ui/Sidbar'

export default function Layout({ children }: { children: React.ReactNode }) {
	return (
		// <div className='flex h-screen md:flex-row md:overflow-hidden w-full'>
		// 	<div className='w-full flex-none bg-sky-900 text-white md:w-64 md:rounded-ee-[2.5rem]'>
		// 		<Sidebar />
		// 	</div>
		// 	<div className='dark bg-sky-900 md:p-0 md:pr-3'>
		// 		<div className='px-4 leading-[4rem] text-white'>Header Home</div>
		// 		<div className='flex h-full flex-col rounded-t-2xl bg-white p-2 text-sky-900 md:max-h-[91.8%] md:rounded-ee-[2.5rem]'>
		// 			<div className='h-full w-full'>{children}</div>
		// 		</div>
		// 	</div>
		// </div>
		<div className='flex flex-col h-[100dvh] md:fixed md:top-0 md:bottom-0 md:left-0 md:right-0'>
			<div className='bg-sky-900 text-white px-4 leading-[4rem]'>Header</div>
			<div className='flex flex-col-reverse md:flex-row grow'>
				<div className='w-full flex-none bg-sky-900 text-white md:w-64 md:rounded-ee-[2.5rem]'>
					<Sidebar />
				</div>
				<div className='flex flex-col grow bg-sky-900 px-1 md:pl-0'>
					<div className='flex flex-col h-full rounded-2xl md:rounded-t-2xl bg-white text-sky-900 md:max-h-[100%] md:rounded-ee-[2.5rem] p-2 md:pb-4'>
						{children}
					</div>
				</div>
			</div>
		</div>
	)
}
