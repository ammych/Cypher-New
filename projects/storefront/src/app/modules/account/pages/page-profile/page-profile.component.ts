import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AccountApi } from '../../../../api/base';
import { finalize, takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { TranslateService } from '@ngx-translate/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-page-profile',
    templateUrl: './page-profile.component.html',
})
export class PageProfileComponent implements OnInit, OnDestroy {
    private destroy$: Subject<void> = new Subject<void>();

    form: FormGroup;
    saveInProgress = false;

    constructor(
        private account: AccountApi,
        private fb: FormBuilder,
        private toastr: ToastrService,
        private translate: TranslateService,
		private router: Router,
    ) { }

    ngOnInit(): void {
        this.form = this.fb.group({
            firstName: [this.account.user.firstName, [Validators.required]],
            lastName: [this.account.user.lastName, [Validators.required]],
			address: [this.account.user.address, [Validators.required]],
			state: [this.account.user.state, [Validators.required]],
			zipcode: [this.account.user.zipcode, [Validators.required]],
			country: [this.account.user.country, [Validators.required]],
            email: [this.account.user.email, [Validators.required, Validators.email]],
            phone: [this.account.user.phone, [Validators.required]],
			selleraddress: [this.account.user.selleraddress],
			sellerstate: [this.account.user.sellerstate],
			sellerzipcode: [this.account.user.sellerzipcode],
			sellercountry: [this.account.user.sellercountry],
			selleremail: [this.account.user.selleremail],
            sellerphone: [this.account.user.sellerphone],
			bankaccountholdername: [this.account.user.bankaccountholdername],
			bankaccountnumber: [this.account.user.bankaccountnumber],
			ifsccode: [this.account.user.ifsccode],
			aadharnumber: [this.account.user.aadharnumber],
        });
    }

    ngOnDestroy(): void {
        this.destroy$.next();
        this.destroy$.complete();
    }
	logout(): void {
        this.account.signOut().pipe(takeUntil(this.destroy$)).subscribe(() => {
            this.router.navigateByUrl('/account/login').then();
        });
    }

    save(): void {
        this.form.markAllAsTouched();

        if (this.saveInProgress || this.form.invalid){
            return;
        }

        this.saveInProgress = true;
        this.account.editProfile(this.form.value).pipe(
            finalize(() => this.saveInProgress = false),
            takeUntil(this.destroy$),
        ).subscribe(() => {
            this.toastr.success(this.translate.instant('TEXT_TOAST_PROFILE_SAVED'));
        });
    }
}
