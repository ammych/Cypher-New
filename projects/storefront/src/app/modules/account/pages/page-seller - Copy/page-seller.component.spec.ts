import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PageSellerComponent } from './page-seller.component';

describe('PageSellerComponent', () => {
    let component: PageSellerComponent;
    let fixture: ComponentFixture<PageSellerComponent>;

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            declarations: [ PageSellerComponent ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(PageSellerComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
