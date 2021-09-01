import { Skill } from "../skill/skill";
import { User } from "./user";

export interface UserDetailDto{
    user:User;
    skill: Skill[];
}