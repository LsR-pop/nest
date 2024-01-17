import { UserInterface } from '../interfaces/user.interface';
export declare class UserService {
    private readonly users;
    constructor();
    create(user: UserInterface): void;
    getData(): void;
    formatApiData(dataElement: any): UserInterface;
    findAll(): UserInterface[];
    find(id: number): UserInterface;
    update(id: number, newUSer: UserInterface): boolean;
    delete(id: number): boolean;
}
