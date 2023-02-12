import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { User } from "src/models/user/user.model";

@Injectable()
export class UserService {

    constructor() { }

    getUser(userId: number): Observable<User> {
        // Get the user from server, based on the ID
        return of(new User("Alex", userId, true));
    }
}   