import { NgModule } from '@angular/core';

// modules (angular)
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// modules (third-party)
import { CarouselModule } from 'ngx-owl-carousel-o';
// modules
import { SharedModule } from '../shared/shared.module';
import { SiteRoutingModule } from './site-routing.module';

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

// blocks
import { BlockMapComponent } from './blocks/block-map/block-map.component';
import { BlockReviewsComponent } from './blocks/block-reviews/block-reviews.component';
import { BlockTeammatesComponent } from './blocks/block-teammates/block-teammates.component';


@NgModule({
    declarations: [
        // pages
        PageAboutUsComponent,
        PagePrivacyComponent,
		PageCareersComponent,
		PageReviewsComponent,
        PageContactUsOneComponent,
        PageHowItWorksComponent,
        PageFaqComponent,
        PageTermsComponent,
        PageFeedComponent,
        // blocks
        BlockMapComponent,
        BlockReviewsComponent,
        BlockTeammatesComponent,
    ],
    imports: [
        // modules (angular)
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        // modules (third-party)
        CarouselModule,
        // modules
        SharedModule,
        SiteRoutingModule,
    ],
})
export class SiteModule { }
