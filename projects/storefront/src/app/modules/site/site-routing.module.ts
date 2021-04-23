import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// pages
import { PageAboutUsComponent } from './pages/page-about-us/page-about-us.component';
import { PagePrivacyComponent } from './pages/page-privacy/page-privacy.component';
import { PageContactUsOneComponent } from './pages/page-contact-us-one/page-contact-us-one.component';
import { PageHowItWorksComponent } from './pages/page-how-it-works/page-how-it-works.component';
import { PageFaqComponent } from './pages/page-faq/page-faq.component';
import { PageTermsComponent } from './pages/page-terms/page-terms.component';
import { PageTypographyComponent } from './pages/page-typography/page-typography.component';


const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'about-us',
    },
    {
        path: 'about-us',
        component: PageAboutUsComponent,
    },
    {
        path: 'contact-us-v1',
        component: PageContactUsOneComponent,
    },
    {
        path: 'how-it-works',
        component: PageHowItWorksComponent,
    },
    {
        path: 'terms',
        component: PageTermsComponent,
    },
    {
        path: 'faq',
        component: PageFaqComponent,
    },
    {
        path: 'privacy',
        component: PagePrivacyComponent,
    },
    {
        path: 'typography',
        component: PageTypographyComponent,
    },
];


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class SiteRoutingModule { }
