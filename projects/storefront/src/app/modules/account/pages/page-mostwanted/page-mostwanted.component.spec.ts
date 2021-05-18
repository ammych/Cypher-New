import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PageMostwantedComponent } from './page-mostwanted.component';

describe('PageMostwantedComponent', () => {
    let component: PageMostwantedComponent;
    let fixture: ComponentFixture<PageMostwantedComponent>;

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            declarations: [ PageMostwantedComponent ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(PageMostwantedComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
