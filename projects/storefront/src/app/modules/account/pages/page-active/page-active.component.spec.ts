import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PageActiveComponent } from './page-active.component';

describe('PageActiveComponent', () => {
    let component: PageActiveComponent;
    let fixture: ComponentFixture<PageActiveComponent>;

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            declarations: [ PageActiveComponent ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(PageActiveComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
