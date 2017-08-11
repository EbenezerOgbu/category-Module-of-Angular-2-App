import { Injectable } from "@angular/core";
import { Response } from "@angular/http";
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { AuthHttpService } from "../../core/services/auth-http.service";


@Injectable()
export class MainCategoryService {
    constructor(private http: AuthHttpService) { }

    private baseUrl = "http://localhost:3080/";  

    getMainCategories() {
        var url = this.baseUrl + "api/MainCategory";  
        return this.http.get(url)
            .map(response => response.json())
            .catch(this.handleError);
    }

    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || "Server error");
    }
}
