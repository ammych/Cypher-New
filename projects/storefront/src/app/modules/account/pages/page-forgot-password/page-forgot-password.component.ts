import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AccountApi } from '../../../../api/base';
import { Subject } from 'rxjs';
import { finalize, takeUntil } from 'rxjs/operators';
import { HttpErrorResponse } from '@angular/common/http';
import { mustMatchValidator } from '../../../../functions/validators/must-match';

@Component({
    selector: 'app-page-forgot-password',
    templateUrl: './page-forgot-password.component.html',
})
export class PageForgotPasswordComponent implements OnInit, OnDestroy {
    private destroy$: Subject<void> = new Subject<void>();

    forgotpasswordForm: FormGroup;
    registerInProgress = false;

    constructor(
        private fb: FormBuilder,
        private router: Router,
        private account: AccountApi,
    ) { }

    ngOnInit(): void {
        
        this.forgotpasswordForm = this.fb.group({
			email: ['', [Validators.required, Validators.email]],
        });
    }

    ngOnDestroy(): void {
        this.destroy$.next();
        this.destroy$.complete();
    }

   
}
