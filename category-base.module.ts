import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";

import {MainCategoryComponent} from "./components/maincategory.component";
import {SubCategoryComponent} from "./components/subcategory.component";

import {SubCategoryService} from "./services/subcategory.service";
import {MainCategoryService} from "./services/maincategory.service";
import { categoryBaseRoutingModule } from './category-base.routing';
import { CategoryBaseComponent } from "./components/category-base.component";
import { CategoryNavMenuComponent } from "./components/category-nav-menu.component";



@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        categoryBaseRoutingModule     
    ],
    exports: [
    ],
    declarations: [
        CategoryBaseComponent,
        CategoryNavMenuComponent,
        MainCategoryComponent,
        SubCategoryComponent
    ],
    providers: [
      MainCategoryService,
      SubCategoryService 
    ]
})
export class CategoryBaseModule { }
