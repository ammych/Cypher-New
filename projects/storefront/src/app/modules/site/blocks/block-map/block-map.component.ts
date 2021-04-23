import { Component, HostBinding } from '@angular/core';

@Component({
    selector: 'app-block-map',
    templateUrl: './block-map.component.html',
})
export class BlockMapComponent {
    @HostBinding('class.block') classBlock = true;

    @HostBinding('class.block-map') classBlockMap = true;

    constructor() { }
}
