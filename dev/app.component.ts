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
        
        </h2>
        <div *ngIf = "showDetail === true" >
        Phone Number:{{contact.pnum}}<br/>
        Email : {{contact.email}}
        </div>
    `,
    styleUrls:[".//src/css/app.css"];
})
export class AppComponent {
public  contact = { firstname:"nikhil", lastname:"sonavane", pnum:"12345678" , email:"paytm@gmail.com"};

public showDetail = false;
public showSelect(){
this.showDetail=true;
}

public showLog(){
console.debug(this.contact.firstname);
}

}
