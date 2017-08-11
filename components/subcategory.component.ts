import { Component, OnInit } from '@angular/core';
import { SubCategoryService } from "../services/subcategory.service";
import { SubCategoryData } from "../models/data/subcategory.data";
import { ActivatedRoute } from "@angular/router";

@Component({
    selector: 'subcategory',
    template: require('./subcategory.component.html')
})

export class SubCategoryComponent implements OnInit {

    public subCategories: SubCategoryData[];

    constructor(private subCategoryService: SubCategoryService,
                private activeRoute: ActivatedRoute) { }

    ngOnInit() {
        this.subCategoryService.getSubCategories(this.activeRoute.snapshot.params["id"]).subscribe(data => {
            this.subCategories = data;
        }); 
    }
}