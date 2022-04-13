


export class User {
    id: number = Math.floor(Math.random() * 100);
    email: string;
    displayName: string;
    photo: string;
    phone: string;
    token: string;
    constructor(name:string, email:string, photo?: string, phone?: string, token?: string){
        this.email = email
        this.displayName = name;
        this.photo = photo || '';
        this.phone = phone || '';
        this.token = token || '';
    }
}

