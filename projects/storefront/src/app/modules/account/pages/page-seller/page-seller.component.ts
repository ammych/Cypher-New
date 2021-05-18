import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { combineLatest, Observable, of, Subject } from 'rxjs';
import { finalize, map, switchMap, takeUntil } from 'rxjs/operators';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AddressFormComponent } from '../../../shared/components/address-form/address-form.component';
import { AccountApi, EditAddressData } from '../../../../api/base';
import { Address } from '../../../../interfaces/address';
import { ToastrService } from 'ngx-toastr';
import { TranslateService } from '@ngx-translate/core';

@Component({
    selector: 'app-page-seller',
    templateUrl: './page-seller.component.html',
})
export class PageSellerComponent implements OnInit, OnDestroy {
    private destroy$: Subject<void> = new Subject<void>();

    form: FormGroup;

    @ViewChild(AddressFormComponent) addressForm: AddressFormComponent;

    addressId: number = null;
    saveInProgress = false;
    firstOrDefaultAddress = false;

    constructor(
        private accountApi: AccountApi,
        private router: Router,
        private route: ActivatedRoute,
        private fb: FormBuilder,
		private toastr: ToastrService,
        private translate: TranslateService,
		
    ) { }

    ngOnInit(): void
	{
        this.form = this.fb.group({
            address: [],
            default: [false],
        });
		
		
		
		
		

        this.route.params.pipe(
            //map(x => x.id ? parseFloat(x.id) : null),
            switchMap(addressId => combineLatest([
                addressId = this.accountApi.getDefaultAddress(),
                this.accountApi.getDefaultAddress(),
            ])),
            takeUntil(this.destroy$),
        ).subscribe(([address, defaultAddress]) =>
		{
            if (address)
			{
                this.addressId = address.id;

                this.form.get('address').setValue({
                    selleraddress: address.selleraddress,
                    sellerstate: address.sellerstate,
                    sellerzipcode: address.sellerzipcode,
                    sellercountry: address.sellercountry,
                    selleremail: address.selleremail,
                    sellerphone: address.sellerphone,
                    bankaccountholdername: address.bankaccountholdername,
                    bankaccountnumber: address.bankaccountnumber,
                    ifsccode: address.ifsccode,
                    aadharnumber: address.aadharnumber,
                });
            }

            this.firstOrDefaultAddress = !defaultAddress || (address && address.default);
            this.form.get('default').setValue(this.firstOrDefaultAddress);

            if (this.firstOrDefaultAddress)
			{
                this.form.get('default').disable();
            }
			else
			{
                this.form.get('default').enable();
            }
        });
    }

    ngOnDestroy(): void {
        this.destroy$.next();
        this.destroy$.complete();
    }

    save(): void {
        this.form.markAllAsTouched();
        this.addressForm.markAsTouched();

        if (this.saveInProgress || this.form.invalid){
            return;
        }

        const addressData: EditAddressData = {
            ...this.form.value.address,
            default: this.form.value.default || this.firstOrDefaultAddress,
        };

        this.saveInProgress = true;

        let saveMethod: Observable<Address>;

        if (this.addressId)
		{
            saveMethod = this.accountApi.editAddress(this.addressId, addressData);
        }
		else
		{
            saveMethod = this.accountApi.addAddress(addressData);
        }

        saveMethod.pipe(
            finalize(() => this.saveInProgress = false),
            takeUntil(this.destroy$),
        ).subscribe(() => {
            this.toastr.success(this.translate.instant('TEXT_TOAST_PROFILE_SAVED'));
        });
    }
}
