import { Routes } from "@angular/router";

export const routes: Routes = [
    {
        path: '', redirectTo: 'subreddis', pathMatch: 'full'
    },
    {
        path: 'subreddis', loadChildren: './components/subreddis/subreddis.module#SubreddisModule'
    },
    {
        path: '**', redirectTo: 'subreddis'
    }
]