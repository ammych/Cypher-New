import { NgModule } from '@angular/core';

// modules (angular)
import { CommonModule } from '@angular/common';
import { BlocksModule } from '../blocks/blocks.module';
// components
import { SlideshowComponent } from './components/slideshow/slideshow.component';



@NgModule({
    declarations: [
        // components
        SlideshowComponent,
    ],
    exports: [
        // components
        SlideshowComponent,
    ],
    imports: [
        // modules (angular)
        CommonModule,
		BlocksModule,
    ],
	
})
export class SlideshowModule { }
