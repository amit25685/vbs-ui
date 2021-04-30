import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ServicesComponent } from './pages/services/services.component';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { PricingComponent } from './pages/pricing/pricing.component';
import { BlogComponent } from './pages/blog/blog.component';


const routes: Routes = [
  { path:'about',   component:AboutComponent },
  { path:'contact',   component:ContactComponent },
  { path:'services',   component:ServicesComponent },
  { path:'portfolio',   component:PortfolioComponent },
  { path:'pricing',   component:PricingComponent },
  { path:'blog',   component:BlogComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
