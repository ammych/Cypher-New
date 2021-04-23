import { Component, OnDestroy, HostBinding } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { AccountApi } from '../../../../api/base';
import { Router } from '@angular/router';
import { sideMenu } from '../../../../../data/header-side-menu';
import { SideMenuLink } from '../../../../interfaces/side-menu-link';
import { HeaderService } from '../../../../services/header.service';

@Component({
    selector: 'app-sidenav',
    templateUrl: './sidenav.component.html',
})

export class SidenavComponent {
	private destroy$: Subject<void> = new Subject<void>();
    items: SideMenuLink[] = sideMenu;
	
    hoveredItem;

    @HostBinding('class.side-menu') classSideMenu = true;

    constructor(
		public account: AccountApi,
        public header: HeaderService,
		private router: Router,
    ) {}

    onItemEnter(item: any): void {
        this.hoveredItem = item;
    }
	logout(): void {
        this.account.signOut().pipe(takeUntil(this.destroy$)).subscribe(() => {
            this.router.navigateByUrl('/account/login').then();
        });
    }

    onItemLeave(item: any): void {
        if ( this.hoveredItem === item ) {
            this.hoveredItem = null;
        }
    }

    onItemClick(): void {
        this.hoveredItem = null;
    }
}