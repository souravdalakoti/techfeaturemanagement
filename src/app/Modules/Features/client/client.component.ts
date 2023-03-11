import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ClientService } from '../../shared/services/client.service';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss'],
})
export class ClientComponent {
  all_cities: any;
  all_countries: any;
  all_status: any;
  is_save:boolean=false;
  is_edit:boolean=false;
  client_name:any;
  country_id:number=0;
  state_id:number=0;
  city_id:number=0;
  address:any;
  mobile_no:any;
  altemate_mobile_no:any;
  e_mail:any;
  all_Gst: any;
  gst:number=0;
  pan_no:any;
  AllClient: any;
  ClientDetails: any;
  client_id: any;
  constructor(
    private router: ActivatedRoute,
    private clientService: ClientService
  ) {}

  ngOnInit() {
    debugger
    this.GetCities();
    this.GetCountries();
    this.GetStates();
    this.GetGstHsn();
    this.GetAllClientDetails();
  }

  GetCities() {
    debugger;
    this.clientService.GetCities().subscribe((result) => {
        debugger
      this.all_cities = result;
    });
  }
  GetCountries() {
    debugger
    this.clientService.GetCountries().subscribe((result) => {
        debugger
      this.all_countries = result;
    });
  }
  GetStates() {
    debugger
    this.clientService.GetStates().subscribe((result) => {
        debugger
      this.all_status = result;
    });
  }
  GetGstHsn(){
    this.clientService.GetGstHsn().subscribe((result) => {
        debugger
      this.all_Gst = result;
    });
  }
  GetAllClientDetails(){
    this.clientService.GetAllClientDetails().subscribe((result) => {
        debugger
      this.AllClient = result;
    });
  }
  

  GetClientDetails() {
    this.reset();
    this.is_save=true;
  }

  Saveclientdetails(){
    debugger
    if(this.client_name==''|| this.city_id==0|| this.country_id==0||this.state_id==0||this.address==''||
    this.mobile_no==''||this.altemate_mobile_no==''||this.e_mail==''||this.gst==0||this.pan_no=='')
    {
      alert('please fill all the required fields');
      return;
    }
    const model={
        client_name:this.client_name,
        city_id:this.city_id,
        country_id:this.country_id,
        state_id:this.state_id,
        address:this.address,
        mobile_no:this.mobile_no,
        alternate_mobile_no:this.altemate_mobile_no,
        email:this.e_mail,
        gstin:this.gst,
        pan_no:this.pan_no
    }
    this.clientService.Saveclientdetails(model).subscribe((result) => {
        debugger
      if(result>0)
      {
        this.is_save=false;
        alert('Add Successfully');
        this.GetAllClientDetails();
      }
      else{
        alert("Oops! Something went wrong")
        this.is_save=false;
      }
    });
  }

  EditClientDetails(client_id:any){
    this.client_id=client_id;
    this.clientService.GetClientDetailById(client_id).subscribe((result) => {
        debugger
      this.ClientDetails = result;
      this.client_name=this.ClientDetails.client_name;
      this.city_id=this.ClientDetails.city_id;
      this.state_id=this.ClientDetails.state_id;
      this.country_id=this.ClientDetails.country_id;
      this.address=this.ClientDetails.address;
      this.e_mail=this.ClientDetails.email;
      this.mobile_no=this.ClientDetails.mobile_no;
      this.is_edit=true;
  });
}

  Updateclientdetails()
  {
   const data={
    client_id:this.client_id,
    client_name:this.client_name,
    city_id:this.city_id,
    country_id:this.country_id,
    state_id:this.state_id,
    address:this.address,
    mobile_no:this.mobile_no,

   }
   this.clientService.Updateclientdetails(data).subscribe((result) => {
    debugger
  if(result>0)
  {
    this.is_edit=false;
    alert('Update Successfully');
    this.GetAllClientDetails();
  }
  else{
    alert("Oops! Something went wrong")
    this.is_edit=false;
  }
});
  }

  deleteclientById(client_id:any){
    debugger;
    this.clientService.deleteclientById(client_id).subscribe((result) => {
        debugger
      if(result>0)
      {
        alert('Delete Successfully');
        this.GetAllClientDetails();
      }
      else{
        alert("Oops! Something went wrong")
      }
    });
  }
  reset()
  {
    this.client_name='';
    this.city_id=0;
    this.country_id=0;
    this.state_id=0;
    this.address='';
    this.gst=0;
    this.mobile_no='';
    this.altemate_mobile_no='';
    this.e_mail='';
    this.pan_no='';
  }
}
