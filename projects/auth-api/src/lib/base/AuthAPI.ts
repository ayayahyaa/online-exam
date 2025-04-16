import { Observable } from "rxjs"


export abstract class AuthAPI {
  abstract login(data:any):Observable<any>
  abstract register(data:any):Observable<any>
  abstract forgotPassword(data:any):Observable<any>
  abstract verifyCode(data:any):Observable<any>
  abstract resetPassword(data:any):Observable<any>
  abstract resendCode(data:any):Observable<any>
  abstract logout(data: any): Observable<any>;
}
