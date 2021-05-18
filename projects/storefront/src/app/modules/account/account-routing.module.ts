import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
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

const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'login',
    },
    {
        path: '',
        component: LayoutComponent,
        children: [
            {
                path: '',
                pathMatch: 'full',
                redirectTo: 'dashboard',
            },
            {
                path: 'dashboard',
                component: PageDashboardComponent,
            },
			{
                path: 'active',
                component: PageActiveComponent,
            },
			{
                path: 'pending',
                component: PagePendingComponent,
            },
			{
                path: 'settings',
                component: PageSettingsComponent,
            },
			{
                path: 'history',
                component: PageHistoryComponent,
            },
			{
                path: 'mostwanted',
                component: PageMostwantedComponent,
            },
            {
                path: 'seller',
                component: PageSellerComponent,
            },
            {
                path: 'profile',
                component: PageProfileComponent,
            },
            {
                path: 'orders',
                component: PageOrdersComponent,
            },
            {
                path: 'orders/:id',
                component: PageOrderDetailsComponent,
            },
            {
                path: 'password',
                component: PagePasswordComponent,
            },
            // --- START ---
            // The following routes are only needed to demonstrate possible layouts of some pages. You can delete them.
            {
                path: 'order-details',
                component: PageOrderDetailsComponent,
                data: {
                    orderId: 1,
                },
            },
            
            // --- END ---
        ],
        canActivate: [AuthGuard],
    },
    {
        path: 'login',
        component: PageLoginComponent,
        canActivate: [AuthGuard],
        data: {
            authGuardMode: 'redirectToDashboard',
        },
    },
	{
        path: 'register',
        component: PageRegisterComponent,
        canActivate: [AuthGuard],
        data: {
            authGuardMode: 'redirectToDashboard',
        },
    },
	{
        path: 'forgot-password',
        component: PageForgotPasswordComponent,
        canActivate: [AuthGuard],
        data: {
            authGuardMode: 'redirectToDashboard',
        },
    },
	
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class AccountRoutingModule { }
