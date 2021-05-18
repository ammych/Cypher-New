import { Component, forwardRef, OnDestroy, OnInit } from '@angular/core';
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
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

let uniqueId = 0;

export interface AddressFormValue {
    selleraddress: string;
	sellerstate: string;
	sellerzipcode: string;
	sellercountry: string;
	selleremail: string;
    sellerphone: string;
	bankaccountholdername: string;
	bankaccountnumber: string;
	ifsccode: string;
	aadharnumber: string;
}

@Component({
    selector: 'app-address-form',
    templateUrl: './address-form.component.html',
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => AddressFormComponent),
            multi: true,
        },
        {
            provide: NG_VALIDATORS,
            useExisting: forwardRef(() => AddressFormComponent),
            multi: true,
        },
    ],
})
export class AddressFormComponent implements OnInit, OnDestroy, ControlValueAccessor, Validator {
    private destroy$: Subject<void> = new Subject<void>();
    private readonly dataId: number = ++uniqueId;

    form: FormGroup;

    
    get formId(): string {
        return `app-address-form-id-${this.dataId}`;
    }

    changeFn: (_: AddressFormValue) => void = () => {};

    touchedFn: () => void = () => {};

    constructor(
        private fb: FormBuilder,
    ) { }

    ngOnInit(): void {
        this.form = this.fb.group({
            selleraddress: ['', Validators.required],
            sellerstate:  ['', Validators.required],
            sellerzipcode:   ['', Validators.required],
            sellercountry:  ['', Validators.required],
			selleremail:     ['', [Validators.required, Validators.email]],
            sellerphone:     ['', Validators.required],
            bankaccountholdername:      ['', Validators.required],
            bankaccountnumber:     ['', Validators.required],
            ifsccode:  ['', Validators.required],
			aadharnumber:  ['', Validators.required],
            
        });

        this.form.valueChanges.subscribe(value => {
            this.changeFn(value);
            this.touchedFn();
        });

       
    }

    ngOnDestroy(): void {
        this.destroy$.next();
        this.destroy$.complete();
    }

    registerOnChange(fn: any): void {
        this.changeFn = fn;
    }

    registerOnTouched(fn: any): void {
        this.touchedFn = fn;
    }

    setDisabledState(isDisabled: boolean): void {
        if (isDisabled) {
            this.form.disable({emitEvent: false});
        } else {
            this.form.enable({emitEvent: false});
        }
    }

    writeValue(value: any): void {
        if (typeof value !== 'object') {
            value = {};
        }

        this.form.setValue(
            {
                selleraddress: '',
				sellerstate: '',
				sellerzipcode: '',
				sellercountry: '',
				selleremail: '',
				sellerphone: '',
				bankaccountholdername: '',
				bankaccountnumber: '',
				ifsccode: '',
				aadharnumber: '',
                ...value,
            },
            {emitEvent: false},
        );
    }

    validate(control: AbstractControl): ValidationErrors | null {
        return this.form.valid ? null : {addressForm: this.form.errors};
    }

    markAsTouched(): void {
        this.form.markAllAsTouched();
    }
}
