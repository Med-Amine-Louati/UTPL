import { Injectable } from '@angular/core';
import * as AppUtil from '../../app/common/common.utill'
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }
saveUserData(token,user) {
  localStorage.setItem(AppUtil.AUTH_Token,token);

  localStorage.setItem(AppUtil.USER_INFO,JSON.stringify(user));

}
getCurrentUser() {
  return JSON.parse(localStorage.getItem(AppUtil.USER_INFO));
}

}
