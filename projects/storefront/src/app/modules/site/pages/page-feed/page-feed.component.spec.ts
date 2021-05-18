import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PageFeedComponent } from './page-feed.component';

describe('PageFeedComponent', () => {
    let component: PageFeedComponent;
    let fixture: ComponentFixture<PageFeedComponent>;

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            declarations: [ PageFeedComponent ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(PageFeedComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
