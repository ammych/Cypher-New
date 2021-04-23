import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AccountApi } from '../../../../api/base';
import { Subject } from 'rxjs';
import { finalize, takeUntil } from 'rxjs/operators';
import { HttpErrorResponse } from '@angular/common/http';
import { mustMatchValidator } from '../../../../functions/validators/must-match';

@Component({
    selector: 'app-page-login',
    templateUrl: './page-login.component.html',
})
export class PageLoginComponent implements OnInit, OnDestroy {
    private destroy$: Subject<void> = new Subject<void>();

    loginForm: FormGroup;
    loginInProgress = false;

    constructor(
        private fb: FormBuilder,
        private router: Router,
        private account: AccountApi,
    ) { }

    ngOnInit(): void {
        this.loginForm = this.fb.group({
            email: ['test@gmail.com', [Validators.required, Validators.email]],
            password: ['123456', [Validators.required]],
            remember: [false],
        });

        
    }

    ngOnDestroy(): void {
        this.destroy$.next();
        this.destroy$.complete();
    }

    login(): void {
        this.loginForm.markAllAsTouched();

        if (this.loginInProgress || this.loginForm.invalid) {
            return;
        }

        this.loginInProgress = true;

        this.account.signIn(
            this.loginForm.value.email,
            this.loginForm.value.password,
        ).pipe(
            finalize(() => this.loginInProgress = false),
            takeUntil(this.destroy$),
        ).subscribe(
            () => this.router.navigateByUrl('/account/dashboard'),
            error => {
                if (error instanceof HttpErrorResponse) {
                    this.loginForm.setErrors({
                        server: `ERROR_API_${error.error.message}`,
                    });
                } else {
                    alert(error);
                }
            },
        );
    }

    
}
