import { MobileMenuLink } from '../app/interfaces/mobile-menu-link';

export const mobileMenuLinks: MobileMenuLink[] = [
    {
        title: 'Sell',
        url: '/',
    },
    {
        title: 'Categories',
        url: '/',
        submenu: [
            {title: 'Sneakers', url: '/'},
            {title: 'Apparel', url: '/'},
            {title: 'Accessories', url: '/'},
        ],
    },
	{
        title: 'Feed',
        url: '/',
    },
    {
        title: 'Account',
        url: '/',
        submenu: [
            {title: 'Profile', url: '/'},
            {title: 'Portfolio', url: '/'},
            {title: 'Seller Dashboard', url: '/'},
			{title: 'Orders', url: '/'},
			{title: 'Settings', url: '/'},
        ],
    },
    {
        title: 'Wishlist',
        url: '/',
    },
	{
        title: 'Settings',
        url: '/',
    },
];
