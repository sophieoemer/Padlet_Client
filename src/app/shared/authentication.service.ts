import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import jwt_decode from "jwt-decode";
//npm install --save-dev jwt-decode
interface Token {
  exp: number;
  user: {
    id: string;
  };
}
@Injectable()
export class AuthenticationService {
  private api: string =
    "http://padlet23.s2010456020.student.kwmhgb.at/api/auth";
//'http://localhost:8080/api/auth';
  constructor(private http: HttpClient) {}
  login(username: string, password: string) {
    return this.http.post(`${this.api}/login`, {
      username: username,
      password: password
    });
  }
  public getCurrentUserId() {
    return Number.parseInt(<string>sessionStorage.getItem("userId"));
  }

  public setSessionStorage(token: string) {
    console.log("Storing token");
    console.log(jwt_decode(token));
    const decodedToken = jwt_decode(token) as Token;
    console.log(decodedToken);
    console.log(decodedToken.user.id);
    sessionStorage.setItem("token", token);
    sessionStorage.setItem("userId", decodedToken.user.id);
  }
  logout() {
    this.http.post(`${this.api}/logout`, {});
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("userId");
    console.log("logged out");
  }
  public isLoggedIn() {
    if (sessionStorage.getItem("token")) {
      let token: string = <string>sessionStorage.getItem("token");
      console.log(jwt_decode(token));
      const decodedToken = jwt_decode(token) as Token;
      let expirationDate: Date = new Date(0);
      expirationDate.setUTCSeconds(decodedToken.exp);
      if (expirationDate < new Date()) {
        console.log("token expired");
        sessionStorage.removeItem("token");
        return false;
      } return true;
    } else {
      return false;

    }

  }
  isLoggedOut() {
    return !this.isLoggedIn();
  }
}
