import { Component, HostBinding, Input, TemplateRef } from '@angular/core';
import { MobileMenuService } from '../../../../services/mobile-menu.service';
import { AccountApi } from '../../../../api/base';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
    selector: 'app-mobile-menu-panel',
    templateUrl: './mobile-menu-panel.component.html',
})
export class MobileMenuPanelComponent {
	
	private destroy$: Subject<void> = new Subject<void>();
	
    @Input() level = 0;

    @Input() label = '';

    @Input() content: TemplateRef<any>;

    @HostBinding('class.mobile-menu__panel') classMobileMenuPanel = true;

    @HostBinding('style.transform') get styleTransform(): string {
        return `translateX(${this.level * 100}%)`;
    }

    constructor(
        public menu: MobileMenuService,
		public account: AccountApi,
		private router: Router,
    ) { }
	logout(): void {
        this.account.signOut().pipe(takeUntil(this.destroy$)).subscribe(() => {
            this.router.navigateByUrl('/account/login').then();
        });
    }
}
