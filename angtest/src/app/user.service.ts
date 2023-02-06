import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Userprof } from "./Userprof";


@Injectable({
    providedIn: "root"
}
)
export class UserService {
    constructor(private http: HttpClient) { }

    public saveUser(user: Userprof): Observable<Userprof> {
        const url = 'http://localhost:3000/db';
        const body = JSON.stringify(user);
        console.log(body);
        return this.http.post<Userprof>(url, body, {
            headers: {
                'Content-Type': 'application/json'
            },
        });
    }

    public adminUser() : Observable<Array<Userprof>> {
        return this.http.get<Array<Userprof>>('http://localhost:3000/admin/users', 
        {headers: {'Accept': 'application/json'}});
    }



}
