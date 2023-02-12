import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { appRoutes } from './app.routing';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductComponent } from './product/product.component';
import { UserService } from 'src/services/users/user.service';
import { UserResolver } from 'src/resolvers/users/user.resolver';
import { AdminPanelComponent } from './admin/admin-panel/admin-panel.component';
import { AuthService } from 'src/services/users/auth.service';
import { AuthGuard } from 'src/guards/auth/auth.guard';

@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    HomeComponent,
    ProductListComponent,
    ProductComponent,
    AdminPanelComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    RouterModule.forRoot(appRoutes),
    NgbModule
  ],
  providers: [UserService, UserResolver, AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
