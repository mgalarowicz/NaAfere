// import { Photo } from './photo';

export interface User {
    id: number;
    firstName: string;
    lastName: string;
    gender: string;
    age: number;
    email: string;
    city: string;
    country: string;
    lastActive: Date;
    createDate: Date;
    photoUrl: string;
}
