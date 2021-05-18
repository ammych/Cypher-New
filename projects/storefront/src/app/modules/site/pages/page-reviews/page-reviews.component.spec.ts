import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PageReviewsComponent } from './page-reviews.component';

describe('PageReviewsComponent', () => {
    let component: PageReviewsComponent;
    let fixture: ComponentFixture<PageReviewsComponent>;

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            declarations: [ PageReviewsComponent ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(PageReviewsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
