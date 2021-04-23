import { Component, HostBinding, Input } from '@angular/core';

@Component({
    selector: 'app-arrow',
    templateUrl: './arrow.component.html',
})
export class ArrowComponent {
    @Input() direction: 'next'|'prev' = 'next';

    @HostBinding('class.arrow') classArrow = true;

    @HostBinding('class.arrow--direction--next') get classArrowDirectionNext(): boolean {
        return this.direction === 'next';
    }

    @HostBinding('class.arrow--direction--prev') get classArrowDirectionPrev(): boolean {
        return this.direction === 'prev';
    }

    constructor() { }
}
