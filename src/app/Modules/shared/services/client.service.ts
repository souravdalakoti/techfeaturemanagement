import { Injectable } from '@angular/core';
import { HttpService } from './http.service';

@Injectable()
export class ClientService {
  private readonly apiController: string = 'Client';

  constructor(private api: HttpService) {}

  GetCities() {
    return this.api.get(this.apiController + '/GetCities');
  }
  GetCountries() {
    return this.api.get(this.apiController + '/GetCountries');
  }
  GetStates() {
    return this.api.get(this.apiController + '/GetStates');
  }
  GetGstHsn() {
    debugger;
    return this.api.get(this.apiController + '/GetGstHsn');
  }
  Saveclientdetails(model:any){
    debugger
    return this.api.post(this.apiController + '/AddClient',model);
  }
  GetAllClientDetails(){
    return this.api.get(this.apiController + '/GetClientDetails');
}
GetClientDetailById(client_id:any){
    debugger
    return this.api.get(this.apiController + '/GetClientDetailById?client_id='+client_id);
}
Updateclientdetails(data:any){
    return this.api.post(this.apiController + '/Updateclientdetails',data);
}
deleteclientById(client_id:any){
  debugger;
    return this.api.delete(this.apiController + '/deleteclientById?client_id='+client_id);
}

}
