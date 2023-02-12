import { Routes } from "@angular/router";
import { resolve } from "dns";
import { AuthGuard } from "src/guards/auth/auth.guard";
import { UserResolver } from "src/resolvers/users/user.resolver";
import { AboutComponent } from "./about/about.component";
import { AdminPanelComponent } from "./admin/admin-panel/admin-panel.component";
import { ContactComponent } from "./contact/contact.component";
import { HomeComponent } from "./home/home.component";
import { ProductListComponent } from "./product-list/product-list.component";
import { ProductComponent } from "./product/product.component";

export const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'home', component: HomeComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'about', component: AboutComponent },
    {
        path: 'products',
        children: [
            { path: '', component: ProductListComponent },
            {
                path: ':id',
                component: ProductComponent,
                resolve: {
                    user: UserResolver
                }
            }
        ]
    },
    {
        path: 'admin-panel',
        component: AdminPanelComponent,
        canActivate: [AuthGuard]
    }
];
