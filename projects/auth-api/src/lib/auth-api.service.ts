import { Router } from '@angular/router';
import { IloginResData } from './interface/IloginRes';
import { Injectable, inject } from '@angular/core';
import { AuthAPI } from './base/AuthAPI';
import { catchError, map, Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { AuthEndPoint } from './enums/AuthAPI.endPoints';
import { AuthAPIAdaptorService } from './adaptor/auth-api.adaptor';
import { IloginData } from './interface/IloginData';
import { IregisterData } from './interface/IregisterData';
import { IregisterResData } from './interface/IRegisterResData';
import { IforgotData } from './interface/IforgotData';
import { IforgotResData } from './interface/IforgotResData';
import { IverifyAPIData, IverifyResData } from './interface/IverifyResData';
import { IresetResData } from './interface/IresetResData';
import { IverifyData } from './interface/IverifyData';
import { IresetData } from './interface/IresetData';
import { jwtDecode } from 'jwt-decode';



@Injectable({
  providedIn: 'root'
})
export class AuthApiService implements AuthAPI {
  constructor(private _httpClient :HttpClient, private _authAPIAdaptorService :AuthAPIAdaptorService ,private _router:Router) { }
  userData:any;


    login(data: IloginData): Observable<IloginResData> {
      return this._httpClient.post(AuthEndPoint.LOGIN , data).pipe(
        map ((res:any) => this._authAPIAdaptorService.loginAdaptor(res)),
        catchError((err) => {
          throw err;
        }))}

  register(data: IregisterData): Observable<IregisterResData> {
    return this._httpClient.post(AuthEndPoint.REGISTER , data).pipe(
      map ((res:any) => this._authAPIAdaptorService.registerAdaptor(res)),
      catchError((err) => {
        throw err;
      }))}


forgotPassword(data: IforgotData): Observable<IforgotResData> {
  return this._httpClient.post(AuthEndPoint.FORGET_PASSWORD , data).pipe(
    map ((res:any) => this._authAPIAdaptorService.forgotAdaptor(res)),
    catchError((err) => {
      throw err;
    }))}

verifyCode(data: IverifyData): Observable<IverifyResData> {
  return this._httpClient.post(AuthEndPoint.VERIFY_CODE , data).pipe(
    map ((res:any) => this._authAPIAdaptorService.verifyAdaptor(res)),
    catchError((err) => {
        throw err;
      }))}


resetPassword(data: IresetData): Observable<IresetResData> {
  return this._httpClient.put(AuthEndPoint.RESET_PASSWORD , data).pipe(
    map ((res:any) => this._authAPIAdaptorService.resetAdaptor(res)),
    catchError((err) => {
      throw err;
    }))}

getUserData():void{
  this.userData =   jwtDecode(localStorage.getItem("token")!)
  console.log(this.userData);
}

resendCode(data: IforgotData): Observable<IforgotResData> {
  return this._httpClient.post(AuthEndPoint.FORGET_PASSWORD , data).pipe(
    map ((res:any) => this._authAPIAdaptorService.forgotAdaptor(res)),
    catchError((err) => {
      throw err;
    }))}


    logout():any {
    localStorage.removeItem('token')
    this.userData = null;
    this._router.navigate(['/auth'])
  }

  logoutUser(): void {
    localStorage.removeItem('token');
    this.userData = null;
    this._router.navigate(['/auth'])
  }}
