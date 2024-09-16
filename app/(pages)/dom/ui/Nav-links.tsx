'use client'
import {
	UserGroupIcon,
	HomeIcon,
	DocumentDuplicateIcon,
	BuildingOffice2Icon
} from '@heroicons/react/24/outline'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import clsx from 'clsx'

// import { useContext } from 'react'

// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
export const links = [
	{ name: 'Главная', href: '/dom', icon: HomeIcon },
	{ name: 'Dashboard', href: '/dom/dashboard', icon: HomeIcon },
	{ name: 'Клиенты', href: '/dom/clients', icon: UserGroupIcon },
	{ name: 'Кредиты', href: '/dom/page1', icon: DocumentDuplicateIcon },
	{ name: 'Филиалы', href: '/dom/page2', icon: BuildingOffice2Icon }
	// { name: 'Журнал операций', href: '/dom/page2', icon: UserGroupIcon },
	// { name: 'Отчеты', href: '/dom/page3', icon: UserGroupIcon }
	// { name: 'Залоги', href: '/home/guatartees', icon: UserGroupIcon },
	// { name: 'Сотрудники', href: '/home/employees', icon: UserGroupIcon },
	// { name: 'Продукты', href: '/home/products', icon: UserGroupIcon },
	// { name: 'Таблицы БД', href: '/home/tables', icon: UserGroupIcon },
	// { name: 'Академия', href: '/home/academy', icon: UserGroupIcon },
	// { name: 'Настройки', href: '/home/settings', icon: UserGroupIcon },
]

export default function NavLinks() {
	const pathname = usePathname()

	// function handleClick(title: string) {
	// 	setTitle(title)
	// }

	return (
		<>
			{links.map(link => {
				const LinkIcon = link.icon
				return (
					<Link
						key={link.name}
						href={`${link.href}`}
						className={clsx(
							'flex h-[48px] w-[48px] md:w-full items-center justify-center gap-3 rounded-full md:rounded-xl text-sm font-medium hover:bg-sky-700 md:flex-none md:justify-start md:p-2 md:px-3',
							{ 'md:bg-sky-500 md:hover:bg-sky-500': pathname === link.href }
						)}
						// onClick={() => handleClick(link.name)}
					>
						<LinkIcon className='w-6' />
						<p className='hidden md:block'>{link.name}</p>
					</Link>
				)
			})}
		</>
	)
}
