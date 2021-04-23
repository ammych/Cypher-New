import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PageForgotPasswordComponent } from './page-forgot-password.component';

describe('PageForgotPasswordComponent', () => {
    let component: PageForgotPasswordComponent;
    let fixture: ComponentFixture<PageForgotPasswordComponent>;

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            declarations: [ PageForgotPasswordComponent ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(PageForgotPasswordComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
