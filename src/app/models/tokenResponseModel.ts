import { ResponseModel } from "./responseModel";
import { TokenModel } from "./tokenModel";
import { User } from "./user";

export interface TokenResponseModel extends ResponseModel{
    data:TokenModel;
}