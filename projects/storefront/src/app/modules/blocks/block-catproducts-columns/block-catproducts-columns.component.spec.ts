import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { BlockCatproductsColumnsComponent } from './block-catproducts-columns.component';

describe('BlockCatproductsColumnsComponent', () => {
    let component: BlockCatroductsColumnsComponent;
    let fixture: ComponentFixture<BlockCatroductsColumnsComponent>;

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            declarations: [ BlockCatroductsColumnsComponent ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(BlockCatroductsColumnsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
