export default function Layout({ children }: { children: React.ReactNode }) {
	return (
		<div className='flex flex-col h-[100dvh] md:fixed md:top-0 md:bottom-0 md:left-0 md:right-0'>
			<div className='bg-sky-900 text-white px-4 leading-[4rem]'>Header</div>
			<div className='flex flex-col-reverse md:flex-row grow'>
				<div className='w-full flex-none bg-sky-900 text-white md:w-64 md:rounded-ee-[2.5rem]'>
					Test{' '}
				</div>
				<div className='flex flex-col grow bg-sky-900 px-1 md:pl-0'>
					<div className='flex flex-col h-full rounded-2xl md:rounded-t-2xl bg-white text-sky-900 md:max-h-[100%] md:rounded-es-none md:rounded-ee-[2.5rem] p-2 md:pb-4'>
						{children}
					</div>
				</div>
			</div>
		</div>
	)
}
