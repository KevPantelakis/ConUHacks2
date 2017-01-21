import { HomeComponent } from './components/home/home.component';
import { ModuleWithProviders } from '@angular/core/src/metadata/ng_module';
import { Routes, RouterModule } from '@angular/router';



export const ROUTES: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'home', component: HomeComponent},
];

export const ROUTING: ModuleWithProviders = RouterModule.forRoot(ROUTES);