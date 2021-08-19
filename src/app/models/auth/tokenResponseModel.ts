import { ResponseModel } from "../responseModel";
import { TokenModel } from "./tokenModel";

export interface TokenResponseModel extends ResponseModel{
    data:TokenModel;
}