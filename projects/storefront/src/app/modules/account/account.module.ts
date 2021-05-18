import { NgModule } from '@angular/core';

// modules (angular)
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// modules (third-party)
import { CarouselModule } from 'ngx-owl-carousel-o';
import { TranslateModule } from '@ngx-translate/core';
import { PopoverModule } from 'ngx-bootstrap/popover';


// modules
import { AccountRoutingModule } from './account-routing.module';
import { SharedModule } from '../shared/shared.module';

// components
import { LayoutComponent } from './components/layout/layout.component';

// pages
//import { PageAddressesComponent } from './pages/page-addresses/page-addresses.component';
import { PageDashboardComponent } from './pages/page-dashboard/page-dashboard.component';
import { PageActiveComponent } from './pages/page-active/page-active.component';
import { PagePendingComponent } from './pages/page-pending/page-pending.component';
import { PageHistoryComponent } from './pages/page-history/page-history.component';
import { PageMostwantedComponent } from './pages/page-mostwanted/page-mostwanted.component';
import { PageSettingsComponent } from './pages/page-settings/page-settings.component';
import { PageEditAddressComponent } from './pages/page-edit-address/page-edit-address.component';
import { PageSellerComponent } from './pages/page-seller/page-seller.component';
import { PageLoginComponent } from './pages/page-login/page-login.component';
import { PageRegisterComponent } from './pages/page-register/page-register.component';
import { PageForgotPasswordComponent } from './pages/page-forgot-password/page-forgot-password.component';
import { PageOrderDetailsComponent } from './pages/page-order-details/page-order-details.component';
import { PageOrdersComponent } from './pages/page-orders/page-orders.component';
import { PagePasswordComponent } from './pages/page-password/page-password.component';
import { PageProfileComponent } from './pages/page-profile/page-profile.component';


@NgModule({
    declarations: [
        // components
        LayoutComponent,
        // pages
        //PageAddressesComponent,
        PageDashboardComponent,
		PageActiveComponent,
		PagePendingComponent,
		PageHistoryComponent,
		PageMostwantedComponent,
		PageSettingsComponent,
        PageEditAddressComponent,
        PageSellerComponent,
        PageLoginComponent,
		PageRegisterComponent,
		PageForgotPasswordComponent,
        PageOrderDetailsComponent,
        PageOrdersComponent,
        PagePasswordComponent,
        PageProfileComponent,
    ],
    imports: [
        // modules (angular)
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        // modules (third-party)
		CarouselModule,
        TranslateModule.forChild(),
        // modules
        AccountRoutingModule,
        SharedModule,
		PopoverModule,
	],
})
export class AccountModule { }
