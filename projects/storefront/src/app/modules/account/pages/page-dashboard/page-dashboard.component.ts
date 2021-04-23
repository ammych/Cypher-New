import { ChangeDetectorRef, Component, forwardRef, OnDestroy, OnInit } from '@angular/core';
import { OwlCarouselOConfig } from 'ngx-owl-carousel-o/lib/carousel/owl-carousel-o-config';
import { AccountApi } from '../../../../api/base';
import { timer, combineLatest, Observable, of, Subject } from 'rxjs';
import { LanguageService } from '../../../language/services/language.service';
import { finalize, map, switchMap, takeUntil } from 'rxjs/operators';
import { ActivatedRoute, Router } from '@angular/router';
import {
    AbstractControl,
    ControlValueAccessor,
    FormBuilder,
    FormGroup,
    NG_VALIDATORS,
    NG_VALUE_ACCESSOR, ValidationErrors,
    Validator,
    Validators,
} from '@angular/forms';

let uniqueId = 0;

@Component({
    selector: 'app-page-dashboard',
    templateUrl: './page-dashboard.component.html',
})
export class PageDashboardComponent implements OnInit, OnDestroy {
    private destroy$: Subject<void> = new Subject<void>();
	showCarousel = true;

    carouselOptions: Partial<OwlCarouselOConfig>;
	
	private readonly dataId: number = ++uniqueId;
	form: FormGroup;
	saveInProgress = false;
	get formId(): string {
        return `app-addproduct-form-id-${this.dataId}`;
    }
    
	constructor(
		private language: LanguageService,
        private cd: ChangeDetectorRef,
        public account: AccountApi,
        private router: Router,
        private route: ActivatedRoute,
        private fb: FormBuilder,
    ) { }
	
   

    ngOnInit(): void {
        this.form = this.fb.group({
            sku: ['', Validators.required],
            sneakerName:  ['', Validators.required],
            brand:   ['', Validators.required],
            colorway:   ['', Validators.required],
            size:  ['', Validators.required],
            boxcondition:      ['', Validators.required],
			images:  [''],
            price:     ['', Validators.required],
        });
		this.initOptions();

        // Since ngx-owl-carousel-o cannot re-initialize itself, we will do it manually when the direction changes.
        this.language.directionChange$.pipe(
            switchMap(() => timer(250)),
            takeUntil(this.destroy$),
        ).subscribe(() => {
            this.initOptions();

            this.showCarousel = false;
            this.cd.detectChanges();
            this.showCarousel = true;
        });
    }
	initOptions(): void {
        this.carouselOptions = {
            items: 1,
            dots: true,
            loop: true,
			nav: true,
			navText : ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"],
            rtl: this.language.isRTL(),
        };
    }

    ngOnDestroy(): void {
        this.destroy$.next();
        this.destroy$.complete();
    }
	
	save(): void {
        this.form.markAllAsTouched();
        
        if (this.saveInProgress || this.form.invalid){
            return;
        }


        this.saveInProgress = true;

        
    }
}
