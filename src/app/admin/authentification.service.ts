import { Injectable } from '@angular/core';
import { utilisateur } from './utilisateur';
@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {

  constructor() { }
  seConnecter(userData:utilisateur){
    localStorage.setItem('ACCESS_TOKEN',"access_token");

  }
  estConnecte(){
    return localStorage.getItem('ACCESS_TOKEN')!==null;
  }
  seDeconnecter(){
    localStorage.removeItem('ACCESS_TOKEN')
  }
}
