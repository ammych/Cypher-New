import { Component, forwardRef, OnDestroy, OnInit, TemplateRef } from '@angular/core';
import { AccountApi } from '../../../../api/base';
import { combineLatest, Observable, of, Subject } from 'rxjs';
import { finalize, map, switchMap, takeUntil } from 'rxjs/operators';
import { ActivatedRoute, Router } from '@angular/router';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';


let uniqueId = 0;

@Component({
    selector: 'app-page-mostwanted',
    templateUrl: './page-mostwanted.component.html',
})
export class PageMostwantedComponent implements OnInit, OnDestroy {
    private destroy$: Subject<void> = new Subject<void>();
	modalRef: BsModalRef;
	
    
	constructor(
		public account: AccountApi,
        private router: Router,
        private route: ActivatedRoute,
		private modalService: BsModalService,
    ) { }
	
   

    ngOnInit(): void {
        
    }
	openModal(template: TemplateRef<any>, id: any)
	{
		this.modalRef = this.modalService.show(template, { class: 'modal-md ' });
	}

    ngOnDestroy(): void {
        this.destroy$.next();
        this.destroy$.complete();
    }
	
	
}
