import { SideMenuLink } from '../app/interfaces/side-menu-link';

export const sideMenu: SideMenuLink[] = [
    {
        title: 'Sell',
        url: '/sell',
    },
    {
        title: 'Categories',
        url: '#',
        submenu: {
            type: 'menu',
            links: [
                {title: 'Sneakers', url: '/shop/category/sneakers/products'},
                {title: 'Apparel', url: '/shop/category/apparel/products'},
                {title: 'Accessories', url: '/shop/category/accessories/products'},
            ],
        },
    },
	{
        title: 'Feed',
        url: '/',
    },
    {
        title: 'Account',
        url: '#',
        submenu: {
            type: 'menu',
            links: [
                {title: 'Profile', url: '/account/profile'},
                {title: 'Portfolio', url: '/'},
                {title: 'Seller Dashboard', url: '/account/dashboard'},
				{title: 'Orders', url: '/'},
            ],
        },
    },
	{
        title: 'Wishlist',
        url: '/',
    },
];
