import { CanActivate, CanDeactivate, CanActivateChild, Router, ActivatedRouteSnapshot } from '@angular/router';
import { CommonService } from './common.service';
import { Injectable } from '@angular/core';
import { AppInjector } from './appinjector';
import { Registration, UserTypes } from '../models/user.model';
import { HttpClient } from '@angular/common/http';


// import {InjectorInstance} from './app.module';

export class Authuser {
    public static ID:number;
    public static fullName:string;
    public static get token():string {
        var commonService = AppInjector.get(CommonService);
        return commonService.getCookie("at").toString();
    }

    public static modules:Module[];
    public static isAdmin:boolean = null;
    public static userType:UserTypes = UserTypes.Freelancer;

   static checkUser() {
        return this.token.length > 0  // if someone is logged in Go ahead. if not redirect to login
    }

   static userLoggedIn() {
        return this.checkUser();
    }

   static async getUserData(onSuccess:Function = null, forceGet:boolean = false) {

        if (this.token.length == 0) return;
        if (Authuser.fullName && Authuser.fullName.length > 0 && !forceGet) {
            if (onSuccess != null) {
                onSuccess(Authuser);
                return;
            }
        }

        var commonService = AppInjector.get(CommonService);
        var http = AppInjector.get(HttpClient);
    
        var headers = commonService.getHttpOptions();
        await http.post(commonService.baseUrl + "Users/GetUserData",null,headers).toPromise().then((data) => {
             Authuser.ID = data["rootElement"]["DATA"].userData.ID;
             Authuser.fullName = data["rootElement"]["DATA"].userData.fullName;
             Authuser.userType = data["rootElement"]["DATA"].userData.userType;
            
            if (onSuccess != null) onSuccess(data["rootElement"]["DATA"].userData);

        }, 
        (err) => {
            commonService.clearCookies();
            location.reload();
        })
    }

    static getUserModules() {
        if (this.token.length == 0) return;
        
        var commonService = AppInjector.get(CommonService);
        commonService.post("Users/GetUserModules",null, 
        (data) => {
            Authuser.modules = data.DATA;
        });

    }

    static logout() {
        var commonService = AppInjector.get(CommonService);
        commonService.post("Users/Logout",null, (d) => {
            commonService.clearCookies();
            location.reload();
        },null,true,false)
    }

}
export class Module {
    public ID:number;
    public moduleName:string;
    public moduleNameEn:string;
    public iconName:string;
    public iconType:string;
    public url:string;
}
export class UserData extends Registration {
    
}