import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';

const APP_ROUTES: Routes = [

    { path: '', component: HomeComponent },
    { path: 'recipes', loadChildren: 'app/recipes/recipes.module#RecipesModule' },
    { path: 'shopping-list', loadChildren: 'app/shopping-list/shopping-list.module#ShoppingListModule' },

];

export const routing = RouterModule.forRoot(APP_ROUTES);