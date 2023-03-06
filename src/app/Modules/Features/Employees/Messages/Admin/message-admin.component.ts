import { Component} from "@angular/core";
import { HttpTransportType, HubConnection, HubConnectionBuilder } from "@microsoft/signalr";

@Component({
selector:'app-message-admin',
templateUrl:'./message-admin.component.html',
styleUrls:['./message-admin.component.scss']
})

export class MessageAdminComponent{
    messages:any;
    msg:any[]=[];
    apiUrl="https://localhost:7004/api/";
ngOnInit()
{
    this.CreateHubConnection();
    this.RecieveNotificationFromHub();
}
CreateHubConnection()
{
    this.hubConnection = new HubConnectionBuilder().withUrl(this.apiUrl+"SendMessage",{
        skipNegotiation:true,
        transport:HttpTransportType.WebSockets
    }).withAutomaticReconnect().build();
    this.hubConnection.start()
    .then(()=>{
        console.log("HubConnection Started!");
    }).catch(err=>console.log('Error while starting Connection: '+err));
}
Send()
{
    debugger;
    this.msg.push({msg:this.messages})
    this.messages=""

}
private hubConnection!: HubConnection;

  RecieveNotificationFromHub(){
    debugger;
    
    this.hubConnection.on('SendMessage', (result: any) => {
      debugger;
      
        console.log("received message: "+result);
    });
  }
}