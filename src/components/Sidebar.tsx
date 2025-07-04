
import Image from 'next/image';
import { IoBrowsersOutline, IoCalculator, IoLogoReact } from 'react-icons/io5';
import { SidebarMenuItems } from './SidebarMenuItems';

const MenuItems = [
  {
    path: '/dashboard/main',
    icon: <IoBrowsersOutline className="w-6 h-6" />,
    title: 'Dashboard',
    subtitle: 'Data Overview',
  },
    {
    path: '/dashboard/counter',
    icon: <IoCalculator className="w-6 h-6" />,
    title: 'Counter',
    subtitle: 'Counter Client Side',
  },
  {
    path: '/dashboard/pokemons',
    icon: <IoCalculator className="w-6 h-6" />,
    title: 'Pokemons page',
    subtitle: 'Generación estática',
  },
  {
    path: '/reports',
    icon: <IoCalculator className="w-6 h-6" />,
    title: 'Reports',
    subtitle: 'Manage Reports',
  },
  {
    path: '/security',
    icon: <IoCalculator className="w-6 h-6" />,
    title: 'Security',
    subtitle: 'Generate Security Keys',
  },
  {
    path: '/extensions',
    icon: <IoCalculator className="w-6 h-6" />,
    title: 'Extensions',
    subtitle: 'Manage Extensions',
  },
  {
    path: '/settings',
    icon: <IoCalculator className="w-6 h-6" />,
    title: 'Settings',
    subtitle: 'Edit App Settings',
  },
]

export default function Sidebar() {
  const customStyles = {
    width: '400px',
    scrollbarWidth: 'none' as const, // Hide scrollbar in Firefox
    msOverflowStyle: 'none' as const, // Hide scrollbar in IE and Edge
  }

  return (
    <div id="menu" className="bg-gray-900 min-h-screen z-10 text-slate-300 w-64 left-0 overflow-y-scroll" style={customStyles}>

      <div id="logo" className="my-4 px-6">
        <h1 className="flex items-center space-x-2 text-lg md:text-2xl font-bold text-white">
          <IoLogoReact className="inline-block text-blue-500" />
          <span>Dash</span>
          <span className="text-blue-500">8</span>.
        </h1>
        <p className="text-slate-500 text-sm">Manage your actions and activities</p>
      </div>

      <div id="profile" className="px-6 py-10">
        <p className="text-slate-500">Welcome back,</p>
        <a href="#" className="inline-flex space-x-2 items-center">
          <span>
            <Image
              width={32}
              height={32}
              className="rounded-full w-8 h-8"
              src="https://images.unsplash.com/photo-1542909168-82c3e7fdca5c"
              alt="User Avatar"
            />
          </span>
          <span className="text-sm md:text-base font-bold">
            Edward Tompson
          </span>
        </a>
      </div>

      <div id="nav" className="w-full px-6">

        <nav className="space-y-2">
          {MenuItems.map((item, index) => (
            <SidebarMenuItems key={index} item={item} />
          ))}
        </nav>
      </div>

    </div>
  );
}
