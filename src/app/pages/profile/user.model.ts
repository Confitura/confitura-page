import {Presentation} from "../../profile/shared/presentation.model";
export class User {
    id: string;
    name: string;
    twitter: string;
    github: string;
    www: string;
    email: string;
    bio: string;
    photo: string;
    admin:boolean;
    presentations: Presentation[];


}