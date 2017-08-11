import {ModuleWithProviders} from '@angular/core';

import { Routes, RouterModule } from '@angular/router';

import { MainCategoryComponent } from "./components/maincategory.component";
import { SubCategoryComponent } from "./components/subcategory.component";
import { CategoryBaseComponent } from "./components/category-base.component";

export const categoryBaseRouting: Routes = [
    { path: '', component: MainCategoryComponent },
    //{ path: ':id', redirectTo: "/subcategory", pathMatch: "full" },
    { path: ':id', component: SubCategoryComponent }
];

export const categoryBaseRoutingModule = RouterModule.forChild(categoryBaseRouting);
