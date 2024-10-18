import { Routes } from '@angular/router';
import { HistoryComponent } from "./history/history.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { OverviewComponent } from './overview/overview.component';  

export const routes: Routes = [
    {path: 'history', component: HistoryComponent},
    {path: 'overview', component: OverviewComponent},
    {path: '', redirectTo: '/overview', pathMatch: 'full'},
    {path: '**', component: PageNotFoundComponent},
];
