'use client' // это клиентский компонент

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'

const AppHeader: React.FC = () => {
	const [isDropdownOpen, setIsDropdownOpen] = useState(false)
	const dropdownRef = useRef<HTMLDivElement>(null)

	const toggleDropdown = () => {
		setIsDropdownOpen(!isDropdownOpen)
	}

	const handleClickOutside = (event: MouseEvent) => {
		if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
			setIsDropdownOpen(false)
		}
	}

	useEffect(() => {
		// Добавляем обработчик кликов вне меню
		document.addEventListener('mousedown', handleClickOutside)

		// Удаляем обработчик при размонтировании компонента
		return () => {
			document.removeEventListener('mousedown', handleClickOutside)
		}
	}, [])

	return (
		<header className='bg-sky-800 p-4'>
			<div className='container mx-auto flex justify-between items-center'>
				<div className='text-white text-xl font-bold'>
					<a href='#'>MyLogo</a>
				</div>

				<div className='relative' ref={dropdownRef}>
					<div className='flex items-center space-x-4'>
						<button onClick={toggleDropdown} className='focus:outline-none flex gap-2'>
							<div className='hidden md:flex md:flex-col md:text-sm text-white'>
								<span className='flex justify-end'>Алдажарбеков</span>
								<span className='flex justify-end'>Адилет</span>
							</div>
							<Image
								src='https://lh3.googleusercontent.com/ogw/AF2bZygwd2R_rnMGwF_DJh7x13WtF007quKUXo8Qd4VTjRPev98=s64-c-mo'
								alt='Avatar'
								width={40}
								height={40}
								className='w-10 h-10 rounded-full border-2 border-white'
							/>
						</button>
					</div>

					{isDropdownOpen && (
						<div className='absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2'>
							<a href='#' className='block px-4 py-2 text-gray-800 hover:bg-gray-200'>
								Профиль
							</a>
							<a href='#' className='block px-4 py-2 text-gray-800 hover:bg-gray-200'>
								Настройки
							</a>
							<a href='/' className='block px-4 py-2 text-red-600 hover:bg-red-200'>
								Выйти
							</a>
						</div>
					)}
				</div>
			</div>
		</header>
	)
}

export default AppHeader
