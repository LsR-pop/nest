import { Injectable } from '@nestjs/common';
import { UserInterface } from '../interfaces/user.interface';
import data  from '../../data'
import { User } from '../models/user.model';

@Injectable()
export class UserService {
    private readonly users: UserInterface[] = []

    constructor() {
        this.getData()
    }

    // insere un nouvel objet User dans le tableau users
    create(user: UserInterface): void {
        this.users.push(user)
    }

    // insere en boucle des objet User à partir des éléments du tableau
    // récupéré dans data.ts
    getData(): void {
        data.map((userInfo: any) => this.create(this.formatApiData(userInfo)))
    }

    // cree un objet de type UserInterface à partir des données
    // récupérées dans data.ts
    formatApiData(dataElement: any): UserInterface {
        if(
            !dataElement.id ||
            !dataElement.nom ||
            !dataElement.prenom ||
            !dataElement.email
        ) {
            return
        }

        const o = new User();
        o.id = parseInt(dataElement.id)
        o.nom = dataElement.nom
        o.prenom = dataElement.prenom
        o.email = dataElement.email

        return o
    }

    findAll(): UserInterface[] {
        return this.users
    }

    find(id: number): UserInterface {
        return this.users.find((el) => el.id === id)
    }

    update(id: number, newUSer: UserInterface): boolean {
        try {
            const itemIndex = this.users.findIndex((el) => el.id === id)
            this.users[itemIndex] = newUSer
            return true
        } catch (e) {
            console.log(e)
            return false
        }
    }

    delete(id: number): boolean {
        try {
            const itemIndex = this.users.findIndex((el) => el.id === id)
            delete this.users[itemIndex]
            return true
        } catch(e) {
            console.log(e)
            return false
        }
        
    }
}
