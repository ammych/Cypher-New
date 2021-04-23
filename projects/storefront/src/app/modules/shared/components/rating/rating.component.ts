import { Component, HostBinding, Input } from '@angular/core';

@Component({
    selector: 'app-rating',
    templateUrl: './rating.component.html',
})
export class RatingComponent {
    @Input() value = 0;

    @HostBinding('class.rating') classRating = true;

    constructor() { }
}
