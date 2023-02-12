export class User {
    name: string = '';
    id: number = 0;
    isAdmin: boolean = false;

    constructor(name: string = '', id: number = 0, isAdmin: boolean = false) {
        this.name = name;
        this.id = id;
        this.isAdmin = isAdmin;
    }
}
