import { Component, OnInit } from '@angular/core';
import { Http } from "@angular/http";
import { MainCategoryService } from "../services/maincategory.service";
import { MainCategoryData } from "../models/data/maincategory.data";

@Component({
    selector: 'maincategory',
    template: require('./maincategory.component.html'),
})

export class MainCategoryComponent implements OnInit {

    public mainCategories: MainCategoryData[];

    constructor(private mainCategoryService: MainCategoryService) { }

    ngOnInit() {
        this.mainCategoryService.getMainCategories().subscribe(data => {
            this.mainCategories = data; 
        });
    }
}