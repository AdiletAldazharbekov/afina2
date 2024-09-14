export default function Page() {
	return (
		<div className='grid grid-cols-12 grid-rows-12 h-[100dvh] fixed top-0 bottom-0 left-0 right-0'>
			<div className='bg-slate-300 col-span-12 row-span-1'>Header</div>
			<div className='bg-slate-400 col-span-2 row-span-11'>Sidebar</div>
			<div className='bg-slate-600 col-span-10 row-span-11'>
				<a href='/'>Главная страница</a>
			</div>
		</div>
	)
}
