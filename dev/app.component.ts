import {Component} from 'angular2/core';

@Component({
    selector: 'my-app',
    template: `
        <h1>Angular 2 demo</h1>
        <h2
        (click)="showSelect()"
        [class.clicked]=  "showDetail === true"
        >
        {{contact.firstname}}   {{contact.lastname}}<br>
        <button (click)="privRecord()" > &lt; </button>
        <button (click)="nextRecord()" > &gt; </button><br>
        <input type="text" [(ngModel)]="contact.firstname" (click)="showLog()"   ><br>
        </h2>
        <div *ngIf = "showDetail === true" >
        Phone Number:{{contact.pnum}}<br/>
        Email : {{contact.email}}
        </div>
    `,
    styleUrls:[".//src/css/app.css"];
})
export class AppComponent {

public  contactList=[];
 public contact={};
 public curtrentRec  ;

constructor() {
  this.contactList= [
          { firstname:"nikhil", lastname:"sonavane", pnum:"12345678" , email:"paytm@gmail.com"},
          { firstname:"nikhil2", lastname:"sonavane2", pnum:"123456782" , email:"paytm@gmail.com2"},
          { firstname:"nikhil3", lastname:"sonavane3", pnum:"123456783" , email:"paytm@gmail.com3"}
    ];
    this.curtrentRec = 1;
    console.log(this.curtrentRec);
    this.contact= this.contactList[0];

}

publi privRecord(){

this.curtrentRec =  this.curtrentRec  -1
console.error(this.curtrentRec );
this.curtrentRec =  1;
console.error(this.curtrentRec );
this.contact= this.contactList[ 1 ];
}

public nextRecord(){
this.curtrentRec=this.curtrentRec + 1;
this.contact= this.contactList[ 2 ];
}


public showDetail = false;
public showSelect(){
this.showDetail=true;
}

public showLog(){
console.debug(this.contact.firstname);
}

}
