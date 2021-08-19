import { Skill } from "./skill";

export interface UserDetailDto{
    firstName: string;
    lastName: string;
    email: string;
    tel?: any;
    city: string;
    county: string;
    address: string;
    educationInfo: string;
    skills: Skill[];
}