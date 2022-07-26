import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { HttpClient, HttpEventType, HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { finalize, Subscription } from 'rxjs';
import { datatype } from './datatype';
import { FileuploadService } from './fileupload.service';

@Component({
  selector: 'app-currencyconv',
  templateUrl: './currencyconv.component.html',
  styleUrls: ['./currencyconv.component.css']
})
export class DraganddropComponent implements OnInit {

  uploadSub: Subscription = new Subscription;
  link: string = "";
  filelist: datatype[]=[];
  dragEl: any;
  constructor(private http: HttpClient, private fileservice: FileuploadService) { }

  ngOnInit(): void {
  }
  onFileSelected(event: any) {
    this.link="";
    let files: any = undefined;
    if(event.type=='change'){
      files=[event.target.files[0]]
    }else{
      files= event;
    }
 
  
    for(let file of files){
      if (file) {
        let newdata : datatype = {
          link:'',
          filename:file.name,
          size:file.size,
          type:file.type,
          uploadprogress:0,
          filesrc:"/assets/"+file.name.split(".",2)[1].toLowerCase()+".png"

        };

        
        this.fileservice.upload(file).pipe(finalize(()=>this.reset())).subscribe((event:any)=>{
          
          if(event.type == HttpEventType.Response) {
            newdata.link=event.body.link
            this.filelist.push(newdata);
          }
            
          
          if(event.type == HttpEventType.UploadProgress) {
            newdata.uploadprogress = Math.round(100 * (event.loaded / event.total!));
          }
          
      });
      }
      console.log(this.filelist)
    }

  }
  reset() {
    this.uploadSub = null!;
  }
  swapup(index: number){
    let datastock:datatype=this.filelist[index];
    this.filelist[index]=this.filelist[index-1];
    this.filelist[index-1]=datastock;
  }
  swapdown(index: number){
    let datastock:datatype=this.filelist[index];
    this.filelist[index]=this.filelist[index+1];
    this.filelist[index+1]=datastock;
  }
  remove(index:number){
    this.filelist.splice(index,1);
  }
 
  drop(event: CdkDragDrop<any[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }
  update(event : any, index : number){
    let file= event.target.files[0]
    if (file) {
      let newdata : datatype = {
        link:'',
        filename:file.name,
        size:file.size,
        type:file.type,
        uploadprogress:0,
        filesrc:"/assets/"+file.name.split(".",2)[1].toLowerCase()+".png"

      };

      
      this.fileservice.upload(file).pipe(finalize(()=>this.reset())).subscribe((event:any)=>{
        
        if(event.type == HttpEventType.Response) {
          newdata.link=event.body.link;
          this.filelist[index]=newdata;
        }
          
        
        if(event.type == HttpEventType.UploadProgress) {
          newdata.uploadprogress = Math.round(100 * (event.loaded / event.total!));
        }
        
    });
    }
  }
}
