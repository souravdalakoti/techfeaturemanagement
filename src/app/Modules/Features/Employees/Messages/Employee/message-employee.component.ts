import { Component} from "@angular/core";
import { HubConnection, HubConnectionBuilder } from "@microsoft/signalr";
import { HttpTransportType } from "@microsoft/signalr/dist/esm/ITransport";
import { EmployeeService } from "src/app/Modules/shared/services/employee.service";

@Component({
selector:'app-message-admin',
templateUrl:'./message-employee.component.html',
styleUrls:['./message-employee.component.scss']
})

export class MessageEmployeeComponent{
   
    messages:any;
    msg:any[]=[];
    apiUrl="https://localhost:7004/api/";

    constructor(private employee_service:EmployeeService){}

ngOnInit()
{
    this.CreateAndStartHubConnection();
}
Send()
{
    debugger;
    if(this.messages?.trim()==="" && this.messages==null) return;
    this.employee_service.SendMessage(this.messages).subscribe((result)=>
    {
        debugger;
        if(result)
        {
            this.msg.push({msg:this.messages})
            this.messages=""
        }
        else{
            alert("Check your Internet Connection!")
        }

    })

}
private hubConnection!: HubConnection;
CreateAndStartHubConnection(){
    //let token = this.AuthService.userValue.jwtToken??"";
    this.hubConnection = new HubConnectionBuilder().withUrl(this.apiUrl+"SendMessage",{
        skipNegotiation:true,
        transport:HttpTransportType.WebSockets
    }).withAutomaticReconnect().build();
    this.hubConnection.start()
    .then(()=>{
        console.log("HubConnection Started!");
    }).catch(err=>console.log('Error while starting Connection: '+err));
  }

//   RecieveNotificationFromHub(){
//     this.hubConnectionBuilder.on('SendNotificationToEmployee', (result: any) => {
//       debugger;
//       this._ngZone.run(()=>{
//         this.notificationCount++;
//       });

//     });
//   }
}