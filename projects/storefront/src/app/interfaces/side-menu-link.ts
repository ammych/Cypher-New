import { Menu } from './menu';
import { Link } from './link';


export interface SideMenuLink extends Link {
    submenu?: Menu;
}
