import { Component } from "@angular/core";

@Component({
selector:'app-employees',
templateUrl:'./employees.component.html',
styleUrls:['./employees.component.css']
})

export class EmployeesComponent{
    veiw:boolean=true;
    show:boolean=true;
    constructor(){}
}