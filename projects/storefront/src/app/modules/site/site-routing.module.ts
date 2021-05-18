import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// pages
import { PageAboutUsComponent } from './pages/page-about-us/page-about-us.component';
import { PagePrivacyComponent } from './pages/page-privacy/page-privacy.component';
import { PageCareersComponent } from './pages/page-careers/page-careers.component';
import { PageReviewsComponent } from './pages/page-reviews/page-reviews.component';
import { PageContactUsOneComponent } from './pages/page-contact-us-one/page-contact-us-one.component';
import { PageHowItWorksComponent } from './pages/page-how-it-works/page-how-it-works.component';
import { PageFaqComponent } from './pages/page-faq/page-faq.component';
import { PageTermsComponent } from './pages/page-terms/page-terms.component';
import { PageFeedComponent } from './pages/page-feed/page-feed.component';


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
        path: 'contact-us',
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
        path: 'careers',
        component: PageCareersComponent,
    },
	{
        path: 'reviews',
        component: PageReviewsComponent,
    },
    {
        path: 'feed',
        component: PageFeedComponent,
    },
];


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class SiteRoutingModule { }
