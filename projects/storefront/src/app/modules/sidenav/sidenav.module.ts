import { NgModule } from '@angular/core';

// modules (angular)
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CollapseModule } from '../collapse';
// components
import { SidenavComponent } from './components/sidenav/sidenav.component';



@NgModule({
    declarations: [
        // components
        SidenavComponent,
    ],
    exports: [
        // components
        SidenavComponent,
    ],
    imports: [
        // modules (angular)
        CommonModule,
		RouterModule,
		CollapseModule,
    ],
	
})
export class SidenavModule { }

