
import { IforgotAPIData, IforgotResData } from "./IforgotResData";
import { IloginAPIData, IloginResData } from "./IloginRes";
import { IregisterAPIData, IregisterResData } from "./IRegisterResData";
import { IresetAPIData, IresetResData } from "./IresetResData";
import { IverifyAPIData, IverifyResData } from "./IverifyResData";
import { ILogout } from "./ilogout";

export interface Iadaptor {
  loginAdaptor(data:IloginAPIData):IloginResData,
  registerAdaptor(data:IregisterAPIData):IregisterResData,
  forgotAdaptor(data:IforgotAPIData):IforgotResData,
  verifyAdaptor(data:IverifyAPIData):IverifyResData,
  resetAdaptor(data:IresetAPIData):IresetResData,
  resendCodeAdaptor(data:IforgotAPIData):IforgotResData,
  logoutAdaptor(data:ILogout):ILogout,

}
