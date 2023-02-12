import { Injectable, OnInit } from "@angular/core";
import { Observable, of } from "rxjs";
import { User } from "src/models/user/user.model";
import { UserService } from "./user.service";

@Injectable()
export class AuthService {

    constructor(private userService: UserService) { }

    isAdmin(): boolean {
        // Check if the current user is admin and return true or false
        return false;
    }
}   