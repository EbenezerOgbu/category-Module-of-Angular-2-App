import { Injectable } from "@angular/core";
import {Response} from "@angular/http";
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { AuthHttpService } from "../../core/services/auth-http.service";

@Injectable()
export class SubCategoryService {
    constructor(private http: AuthHttpService) { }

    private baseUrl = "http://localhost:3080/";  

    getSubCategories(id : number) {
        var url = this.baseUrl + "api/SubCategory/" + id + "/SubCategories";
        return this.http.get(url)
            .map(response => response.json())
            .catch(this.handleError);
    }

    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || "Server error");
    }
}
