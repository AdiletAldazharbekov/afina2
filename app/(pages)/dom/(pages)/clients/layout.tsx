export default function Layout({ children }: { children: React.ReactNode }) {
	return (
		<>
			<div className='flex h-14 items-center justify-between bg-gray-100'>
				<h1 className='text-2xl text-sky-900'>Клиенты</h1>
			</div>
			<div className='flex h-12 items-center justify-between  gap-2 bg-gray-200'>Панель инструментов</div>
			<div className='flex max-h-[84%] grow flex-col gap-2 overflow-auto bg-gray-300 pt-4 md:h-full'>
				{children}
			</div>
		</>
	)
}
