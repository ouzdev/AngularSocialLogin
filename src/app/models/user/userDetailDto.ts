import { Skill } from "./skill";

export interface UserDetailDto{
    id:number;
    firstName: string;
    lastName: string;
    email: string;
    tel?: any;
    city: string;
    county: string;
    address: string;
    educationInfo: string;
    profileAvatar:string;
    skills: Skill[];
}