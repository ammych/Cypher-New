import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PageCareersComponent } from './page-careers.component';

describe('PageCareersComponent', () => {
    let component: PageCareersComponent;
    let fixture: ComponentFixture<PageCareersComponent>;

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            declarations: [ PageCareersComponent ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(PageCareersComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
