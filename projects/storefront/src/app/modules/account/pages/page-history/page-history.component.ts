import { Component, forwardRef, OnDestroy, OnInit } from '@angular/core';
import { AccountApi } from '../../../../api/base';
import { combineLatest, Observable, of, Subject } from 'rxjs';
import { finalize, map, switchMap, takeUntil } from 'rxjs/operators';
import { ActivatedRoute, Router } from '@angular/router';


let uniqueId = 0;

@Component({
    selector: 'app-page-history',
    templateUrl: './page-history.component.html',
})
export class PageHistoryComponent implements OnInit, OnDestroy {
    private destroy$: Subject<void> = new Subject<void>();
	
    
	constructor(
		public account: AccountApi,
        private router: Router,
        private route: ActivatedRoute,
    ) { }
	
   

    ngOnInit(): void {
        
    }

    ngOnDestroy(): void {
        this.destroy$.next();
        this.destroy$.complete();
    }
	
	
}
