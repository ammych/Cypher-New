import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AccountApi } from '../../../../api/base';
import { Subject } from 'rxjs';
import { finalize, takeUntil } from 'rxjs/operators';
import { HttpErrorResponse } from '@angular/common/http';
import { mustMatchValidator } from '../../../../functions/validators/must-match';

@Component({
    selector: 'app-page-register',
    templateUrl: './page-register.component.html',
})
export class PageRegisterComponent implements OnInit, OnDestroy {
    private destroy$: Subject<void> = new Subject<void>();

    registerForm: FormGroup;
    registerInProgress = false;

    constructor(
        private fb: FormBuilder,
        private router: Router,
        private account: AccountApi,
    ) { }

    ngOnInit(): void {
        
        this.registerForm = this.fb.group({
			firstName: ['', [Validators.required]],
			lastName: ['', [Validators.required]],
            email: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required]],
            confirmPassword: ['', [Validators.required]],
        }, {validators: [mustMatchValidator('password', 'confirmPassword')]});
    }

    ngOnDestroy(): void {
        this.destroy$.next();
        this.destroy$.complete();
    }

    register(): void {
        this.registerForm.markAllAsTouched();

        if (this.registerInProgress || this.registerForm.invalid) {
            return;
        }

        this.registerInProgress = true;

        this.account.signUp(
			this.registerForm.value.firstName,
			this.registerForm.value.lastName,
            this.registerForm.value.email,
            this.registerForm.value.password,
        ).pipe(
            finalize(() => this.registerInProgress = false),
            takeUntil(this.destroy$),
        ).subscribe(
            () => this.router.navigateByUrl('/account/dashboard'),
            error => {
                if (error instanceof HttpErrorResponse) {
                    this.registerForm.setErrors({
                        server: `ERROR_API_${error.error.message}`,
                    });
                } else {
                    alert(error);
                }
            },
        );
    }
}
