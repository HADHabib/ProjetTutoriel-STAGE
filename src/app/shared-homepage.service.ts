import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
@Injectable({
providedIn: 'root'
})
export class SharedHomepageService {
  private subject = new Subject<any>();
  private approvalStageMessage = new BehaviorSubject('Basic Approval is required!');
 currentApprovalStageMessage = this.approvalStageMessage.asObservable();

 constructor() {

 }
 updateApprovalMessage(message: string) {
  this.approvalStageMessage.next(message)
 }
 sendClickEvent() {
  this.subject.next("1");
}
getClickEvent(): Observable<any>{ 
  return this.subject.asObservable();
}
}