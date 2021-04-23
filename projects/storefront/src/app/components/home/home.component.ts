import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DesktopHeaderVariant, HeaderService, MobileHeaderVariant } from '../../services/header.service';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';


export interface HomeComponentData {
    desktopHeader: DesktopHeaderVariant;
    mobileHeader: MobileHeaderVariant;
}


@Component({
    selector: 'app-root',
    templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit, OnDestroy {
    destroy$: Subject<void> =  new Subject<void>();

    constructor(
        private route: ActivatedRoute,
        public header: HeaderService,
    ) { }

    ngOnInit(): void {
        this.route.data.pipe(
            takeUntil(this.destroy$),
        ).subscribe((data: HomeComponentData) => {
            this.header.setDesktopVariant(data.desktopHeader || 'spaceship/one');
            this.header.setMobileVariant(data.mobileHeader || 'one');
        });
    }

    ngOnDestroy(): void {
        this.destroy$.next();
        this.destroy$.complete();
    }
}
