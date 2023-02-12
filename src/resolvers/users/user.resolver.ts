import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { User } from "src/models/user/user.model";
import { UserService } from "src/services/users/user.service";

@Injectable()
export class UserResolver implements Resolve<User> {
    constructor(private userService: UserService) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<User> {
        // Get the currentUserId on login and save it in a store
        // Here it is hard coded for the simplicity of the example
        const currentUserId: number = 5;
        return this.userService.getUser(currentUserId);
    }
}