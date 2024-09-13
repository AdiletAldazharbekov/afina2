import Sidebar from './ui/Sidbar'

export default function Layout({ children }: { children: React.ReactNode }) {
	return (
		<div className='flex h-screen flex-col md:flex-row md:overflow-hidden'>
			<div className='w-full flex-none bg-sky-900 text-white md:w-64 md:rounded-ee-[2.5rem]'>
				<Sidebar />
			</div>
			<div className='dark bg-sky-900 md:p-0 md:pr-3'>
				<div className='px-4 leading-[4rem] text-white'>Header Home</div>
				<div className='flex h-full flex-col rounded-t-2xl bg-white p-2 text-sky-900 md:max-h-[91.8%] md:rounded-ee-[2.5rem]'>
					<div className='flex h-full w-full flex-col p-2'>{children}</div>
				</div>
			</div>
		</div>
	)
}
