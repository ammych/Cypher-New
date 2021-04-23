import { Component, HostBinding, Input } from '@angular/core';
import { Product } from '../../../interfaces/product';

export interface BlockCatproductsColumnsItem {
    title: string;
    products: Product[];
	bannerimg: string;
	mobilebannerimg: string;
}

@Component({
    selector: 'app-block-catproducts-columns',
    templateUrl: './block-catproducts-columns.component.html',
})
export class BlockCatproductsColumnsComponent {
    @Input() columns: BlockCatproductsColumnsItem[] = [];

    @HostBinding('class.block') classBlock = true;

    @HostBinding('class.block-products-columns') classBlockProductsColumns = true;

    constructor() { }
}
