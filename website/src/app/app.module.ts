import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LightboxModule } from 'ngx-lightbox';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { SwiperModule } from 'ngx-swiper-wrapper';
import { SWIPER_CONFIG } from 'ngx-swiper-wrapper';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';
import { NgxTypedJsModule } from 'ngx-typed-js';
import { NgxYoutubePlayerModule } from 'ngx-youtube-player';
import { FlatpickrModule } from 'angularx-flatpickr';
import { CountToModule } from 'angular-count-to';
import { NgxMasonryModule } from 'ngx-masonry';

import { SharedModule } from './shared/shared.module';

import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';

import { LoginComponent } from './auth/login/login.component';
import { RegistrationComponent } from './auth/registration/registration.component';
import { MasterPageComponent } from './core/components/master-page/master-page.component';
import { AuthCoverLoginComponent } from './auth/auth-cover-login/auth-cover-login.component';
import { AuthCoverRePasswordComponent } from './auth/auth-cover-re-password/auth-cover-re-password.component';
import { AuthCoverSignupComponent } from './auth/auth-cover-signup/auth-cover-signup.component';
import { AuthLoginComponent } from './auth/auth-login/auth-login.component';
import { AuthLoginThreeComponent } from './auth/auth-login-three/auth-login-three.component';
import { AuthRePasswordComponent } from './auth/auth-re-password/auth-re-password.component';
import { AuthRePasswordThreeComponent } from './auth/auth-re-password-three/auth-re-password-three.component';
import { AuthSignupComponent } from './auth/auth-signup/auth-signup.component';
import { AuthSignupThreeComponent } from './auth/auth-signup-three/auth-signup-three.component';
import { ComponentsComponent } from './core/components/components/components.component';
import { EmailAlertComponent } from './email/email-alert/email-alert.component';
import { EmailConfirmationComponent } from './email/email-confirmation/email-confirmation.component';
import { EmailInvoiceComponent } from './email/email-invoice/email-invoice.component';
import { EmailPasswordResetComponent } from './email/email-password-reset/email-password-reset.component';
import { IndexAgencyComponent } from './core/components/index-agency/index-agency.component';
import { IndexAppsComponent } from './core/components/index-apps/index-apps.component';
import { IndexBlogComponent } from './core/components/index-blog/index-blog.component';
import { IndexBusinessComponent } from './core/components/index-business/index-business.component';
import { IndexCarRidingComponent } from './core/components/index-car-riding/index-car-riding.component';
import { IndexClassicAppComponent } from './core/components/index-classic-app/index-classic-app.component';
import { IndexClassicSaasComponent } from './core/components/index-classic-saas/index-classic-saas.component';
import { IndexCorporateComponent } from './core/components/index-corporate/index-corporate.component';
import { IndexCourseComponent } from './core/components/index-course/index-course.component';
import { IndexCoworkingComponent } from './core/components/index-coworking/index-coworking.component';
import { IndexCryptoComponent } from './core/components/index-crypto/index-crypto.component';
import { IndexCustomerComponent } from './core/components/index-customer/index-customer.component';
import { IndexDigitalAgencyComponent } from './core/components/index-digital-agency/index-digital-agency.component';
import { IndexEbookComponent } from './core/components/index-ebook/index-ebook.component';
import { IndexEmailInboxComponent } from './core/components/index-email-inbox/index-email-inbox.component';
import { IndexEnterpriseComponent } from './core/components/index-enterprise/index-enterprise.component';
import { IndexEventComponent } from './core/components/index-event/index-event.component';
import { IndexHostingComponent } from './core/components/index-hosting/index-hosting.component';
import { IndexItSolutionComponent } from './core/components/index-it-solution/index-it-solution.component';
import { IndexJobComponent } from './core/components/index-job/index-job.component';
import { IndexLandingOneComponent } from './core/components/index-landing-one/index-landing-one.component';
import { IndexLandingThreeComponent } from './core/components/index-landing-three/index-landing-three.component';
import { IndexLandingTwoComponent } from './core/components/index-landing-two/index-landing-two.component';
import { IndexMarketingComponent } from './core/components/index-marketing/index-marketing.component';
import { IndexModernBusinessComponent } from './core/components/index-modern-business/index-modern-business.component';
import { IndexOnepageComponent } from './core/components/index-onepage/index-onepage.component';
import { IndexPersonalComponent } from './core/components/index-personal/index-personal.component';
import { IndexPortfolioComponent } from './core/components/index-portfolio/index-portfolio.component';
import { IndexSaasComponent } from './core/components/index-saas/index-saas.component';
import { IndexServicesComponent } from './core/components/index-services/index-services.component';
import { IndexSingleProductComponent } from './core/components/index-single-product/index-single-product.component';
import { IndexSocialMarketingComponent } from './core/components/index-social-marketing/index-social-marketing.component';
import { IndexSoftwareComponent } from './core/components/index-software/index-software.component';
import { IndexStudioComponent } from './core/components/index-studio/index-studio.component';
import { IndexTaskManagementComponent } from './core/components/index-task-management/index-task-management.component';
import { IndexTravelComponent } from './core/components/index-travel/index-travel.component';
import { PageAboutusComponent } from './core/components/page-aboutus/page-aboutus.component';
import { PageAboutusTwoComponent } from './core/components/page-aboutus-two/page-aboutus-two.component';
import { PageBlogDetailComponent } from './core/components/page-blog-detail/page-blog-detail.component';
import { PageBlogGridComponent } from './core/components/page-blog-grid/page-blog-grid.component';
import { PageBlogListComponent } from './core/components/page-blog-list/page-blog-list.component';
import { PageBlogListSidebarComponent } from './core/components/page-blog-list-sidebar/page-blog-list-sidebar.component';
import { PageBlogSidebarComponent } from './core/components/page-blog-sidebar/page-blog-sidebar.component';
import { PageCaseDetailComponent } from './core/components/page-case-detail/page-case-detail.component';
import { PageCasesComponent } from './core/components/page-cases/page-cases.component';
import { PageHistoryComponent } from './core/components/page-history/page-history.component';
import { PageMaintenanceComponent } from './core/components/page-maintenance/page-maintenance.component';
import { PageTeamComponent } from './core/components/page-team/page-team.component';
import { PageWorkClassicComponent } from './core/components/page-work-classic/page-work-classic.component';
import { PageWorkDetailComponent } from './core/components/page-work-detail/page-work-detail.component';
import { PageWorkGridComponent } from './core/components/page-work-grid/page-work-grid.component';
import { PageWorkMasonryComponent } from './core/components/page-work-masonry/page-work-masonry.component';
import { PageWorkModernComponent } from './core/components/page-work-modern/page-work-modern.component';
import { PageBlogDetailTwoComponent } from './core/components/page-blog-detail-two/page-blog-detail-two.component';
import { WidgetComponent } from './core/components/widget/widget.component';
import { FeatherModule } from 'angular-feather';

import { allIcons } from 'angular-feather/icons';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { SwitcherComponent } from './shared/switcher/switcher.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { IndexConstructionComponent } from './core/components/index-construction/index-construction.component';
import { IndexRealEstateComponent } from './core/components/index-real-estate/index-real-estate.component';
import { IndexDeveloperComponent } from './core/components/index-developer/index-developer.component';
import { IndexSeoAgencyComponent } from './core/components/index-seo-agency/index-seo-agency.component';
import { IndexHospitalComponent } from './core/components/index-hospital/index-hospital.component';
import { IndexFinanceComponent } from './core/components/index-finance/index-finance.component';
import { IndexItSolutionTwoComponent } from './core/components/index-it-solution-two/index-it-solution-two.component';
import { IndexFreelancerComponent } from './core/components/index-freelancer/index-freelancer.component';
import { IndexCryptoTwoComponent } from './core/components/index-crypto-two/index-crypto-two.component';
import { IndexIntegrationComponent } from './core/components/index-integration/index-integration.component';
import { IndexLandingFourComponent } from './core/components/index-landing-four/index-landing-four.component';
import { PortfolioModernTwoComponent } from './core/components/portfolio-modern-two/portfolio-modern-two.component';
import { PortfolioModernThreeComponent } from './core/components/portfolio-modern-three/portfolio-modern-three.component';
import { PortfolioModernFourComponent } from './core/components/portfolio-modern-four/portfolio-modern-four.component';
import { PortfolioModernFiveComponent } from './core/components/portfolio-modern-five/portfolio-modern-five.component';
import { PortfolioModernSixComponent } from './core/components/portfolio-modern-six/portfolio-modern-six.component';
import { PortfolioClassicTwoComponent } from './core/components/portfolio-classic-two/portfolio-classic-two.component';
import { PortfolioClassicThreeComponent } from './core/components/portfolio-classic-three/portfolio-classic-three.component';
import { PortfolioClassicFourComponent } from './core/components/portfolio-classic-four/portfolio-classic-four.component';
import { PortfolioClassicFiveComponent } from './core/components/portfolio-classic-five/portfolio-classic-five.component';
import { PortfolioClassicSixComponent } from './core/components/portfolio-classic-six/portfolio-classic-six.component';
import { PortfolioGridTwoComponent } from './core/components/portfolio-grid-two/portfolio-grid-two.component';
import { PortfolioGridThreeComponent } from './core/components/portfolio-grid-three/portfolio-grid-three.component';
import { PortfolioGridFourComponent } from './core/components/portfolio-grid-four/portfolio-grid-four.component';
import { PortfolioGridFiveComponent } from './core/components/portfolio-grid-five/portfolio-grid-five.component';
import { PortfolioGridSixComponent } from './core/components/portfolio-grid-six/portfolio-grid-six.component';
import { PortfolioMasonryTwoComponent } from './core/components/portfolio-masonry-two/portfolio-masonry-two.component';
import { PortfolioMasonryThreeComponent } from './core/components/portfolio-masonry-three/portfolio-masonry-three.component';
import { PortfolioMasonryFourComponent } from './core/components/portfolio-masonry-four/portfolio-masonry-four.component';
import { PortfolioMasonryFiveComponent } from './core/components/portfolio-masonry-five/portfolio-masonry-five.component';
import { PortfolioMasonrySixComponent } from './core/components/portfolio-masonry-six/portfolio-masonry-six.component';
import { PortfolioDetailOneComponent } from './core/components/portfolio-detail-one/portfolio-detail-one.component';
import { PortfolioDetailTwoComponent } from './core/components/portfolio-detail-two/portfolio-detail-two.component';
import { PortfolioDetailThreeComponent } from './core/components/portfolio-detail-three/portfolio-detail-three.component';
import { PortfolioDetailFourComponent } from './core/components/portfolio-detail-four/portfolio-detail-four.component';

const DEFAULT_SWIPER_CONFIG: SwiperConfigInterface = {
  direction: 'horizontal',
  slidesPerView: 'auto'
};

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    RegistrationComponent,
    MasterPageComponent,
    AuthCoverLoginComponent,
    AuthCoverRePasswordComponent,
    AuthCoverSignupComponent,
    AuthLoginComponent,
    AuthLoginThreeComponent,
    AuthRePasswordComponent,
    AuthRePasswordThreeComponent,
    AuthSignupComponent,
    AuthSignupThreeComponent,
    ComponentsComponent,
    EmailAlertComponent,
    EmailConfirmationComponent,
    EmailInvoiceComponent,
    EmailPasswordResetComponent,
    IndexAgencyComponent,
    IndexAppsComponent,
    IndexBlogComponent,
    IndexBusinessComponent,
    IndexCarRidingComponent,
    IndexClassicAppComponent,
    IndexClassicSaasComponent,
    IndexCorporateComponent,
    IndexCourseComponent,
    IndexCoworkingComponent,
    IndexCryptoComponent,
    IndexCustomerComponent,
    IndexDigitalAgencyComponent,
    IndexEbookComponent,
    IndexEmailInboxComponent,
    IndexEnterpriseComponent,
    IndexEventComponent,
    IndexHostingComponent,
    IndexItSolutionComponent,
    IndexJobComponent,
    IndexLandingOneComponent,
    IndexLandingThreeComponent,
    IndexLandingTwoComponent,
    IndexMarketingComponent,
    IndexModernBusinessComponent,
    IndexOnepageComponent,
    IndexPersonalComponent,
    IndexPortfolioComponent,
    IndexSaasComponent,
    IndexServicesComponent,
    IndexSingleProductComponent,
    IndexSocialMarketingComponent,
    IndexSoftwareComponent,
    IndexStudioComponent,
    IndexTaskManagementComponent,
    IndexTravelComponent,
    PageAboutusComponent,
    PageAboutusTwoComponent,
    PageBlogDetailComponent,
    PageBlogGridComponent,
    PageBlogListComponent,
    PageBlogListSidebarComponent,
    PageBlogSidebarComponent,
    PageCaseDetailComponent,
    PageCasesComponent,
    PageHistoryComponent,
    PageMaintenanceComponent,
    PageTeamComponent,
    PageWorkClassicComponent,
    PageWorkDetailComponent,
    PageWorkGridComponent,
    PageWorkMasonryComponent,
    PageWorkModernComponent,
    PageBlogDetailTwoComponent,
    WidgetComponent,
    SwitcherComponent,
    IndexConstructionComponent,
    IndexRealEstateComponent,
    IndexDeveloperComponent,
    IndexSeoAgencyComponent,
    IndexHospitalComponent,
    IndexFinanceComponent,
    IndexItSolutionTwoComponent,
    IndexFreelancerComponent,
    IndexCryptoTwoComponent,
    IndexIntegrationComponent,
    IndexLandingFourComponent,
    PortfolioModernTwoComponent,
    PortfolioModernThreeComponent,
    PortfolioModernFourComponent,
    PortfolioModernFiveComponent,
    PortfolioModernSixComponent,
    PortfolioClassicTwoComponent,
    PortfolioClassicThreeComponent,
    PortfolioClassicFourComponent,
    PortfolioClassicFiveComponent,
    PortfolioClassicSixComponent,
    PortfolioGridTwoComponent,
    PortfolioGridThreeComponent,
    PortfolioGridFourComponent,
    PortfolioGridFiveComponent,
    PortfolioGridSixComponent,
    PortfolioMasonryTwoComponent,
    PortfolioMasonryThreeComponent,
    PortfolioMasonryFourComponent,
    PortfolioMasonryFiveComponent,
    PortfolioMasonrySixComponent,
    PortfolioDetailOneComponent,
    PortfolioDetailTwoComponent,
    PortfolioDetailThreeComponent,
    PortfolioDetailFourComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    RouterModule,
    CarouselModule,
    FeatherModule.pick(allIcons),
    ScrollToModule.forRoot(),
    RouterModule.forRoot([], { relativeLinkResolution: 'legacy' }),
    NgxYoutubePlayerModule,
    NgbDropdownModule,
    CKEditorModule,
    NgbModule,
    NgbNavModule,
    FormsModule,
    SwiperModule,
    NgxTypedJsModule,
    FlatpickrModule.forRoot(),
    CountToModule,
    NgxMasonryModule,
    LightboxModule,
    SharedModule
  ],
  exports: [
    FeatherModule,
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  providers: [
    {
      provide: SWIPER_CONFIG,
      useValue: DEFAULT_SWIPER_CONFIG
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
