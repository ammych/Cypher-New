import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PagePendingComponent } from './page-pending.component';

describe('PagePendingComponent', () => {
    let component: PageActiveComponent;
    let fixture: ComponentFixture<PagePendingComponent>;

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            declarations: [ PagePendingComponent ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(PagePendingComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
