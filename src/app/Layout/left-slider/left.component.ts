import { Component } from "@angular/core";

@Component({
    selector:'app-left-slider',
  templateUrl:'./left.component.html',
    styleUrls:['./left.component.scss']
})

export class LeftComponent{
 


  subMenu:any=[
 /*Dashboard-->*/{name:'AdminDashboard',path:"",SideBarMenu:1},{name:'EmployeeDashboard',path:"",SideBarMenu:1},
  /*Apps-->*/{name:'Chats',path:"",SideBarMenu:2}, {name:'Call',path:"",SideBarMenu:2},{name:'Calendar',path:"",SideBarMenu:2},{name:'Contacts',path:"",SideBarMenu:2},{name:'Email',path:"",SideBarMenu:2},{name:'File Manager',path:"",SideBarMenu:2},
  /*Invoice-->*/{name:'Invoice',path:"/TFInvoice",SideBarMenu:3},
  /*Employees-->*/{name:'All Employees',path:"/Employees",SideBarMenu:4},{name:'Holidays',path:"/Holidays",SideBarMenu:4},{name:'Leaves(Admin)',path:"/Leaves(Admin)",SideBarMenu:4},{name:'Leaves(Employees)',path:"/Leaves(Employees)",SideBarMenu:4},{name:'Attendance(Admin)',path:"/Attendance(Admin)",SideBarMenu:4},{name:'Attendance(Employee)',path:"/Attendance(Employee)",SideBarMenu:4},
  /*Projects-->*/ {name:'Projects',path:"",SideBarMenu:5},{name:'Task',path:"",SideBarMenu:5},
  /*Sales-->*/{name:'Payments',path:"",SideBarMenu:6},
  /*TF coaching--->*/{name:'TFCoachingTrainee',path:"/TFCoachingclass",SideBarMenu:16},
  /*TF coaching--->*/{name:'TFEmployee',path:"./TFEmployee",SideBarMenu:17},
   /*TFM Client--->*/{name:'Client',path:"./client",SideBarMenu:5}
 
 
];
  
  HeaderMenu:any=[
      {name:"Main",HeaderId:1},
      {name:"Employees",HeaderId:2},
      {name:"HR",HeaderId:3},
      {name:"Performance",HeaderId:4},
      {name:"TFCoachingclass",HeaderId:5},
      {name:"DemoEmploy",HeaderId:6}
  ];
  

  SideBarMenu:any=[
    {name:"Dashboard",HeaderId:1,SideBarMenu:1,IsSubmenu:true},
    {name:"Apps",HeaderId:1,SideBarMenu:2,IsSubmenu:true},
    {name:"Invoice",HeaderId:1,SideBarMenu:3,IsSubmenu:true},
    {name:"Employees",HeaderId:2,SideBarMenu:4,IsSubmenu:true},
    {name:"Clients",HeaderId:2,SideBarMenu:5,IsSubmenu:true},
    {name:"Projects",HeaderId:2,SideBarMenu:6,IsSubmenu:true},
    {name:"Leads",HeaderId:2,SideBarMenu:7,IsSubmenu:false},
    {name:"Tickets",HeaderId:2,SideBarMenu:8,IsSubmenu:false},
    {name:"Sales",HeaderId:3,SideBarMenu:9,IsSubmenu:true},
    {name:"Accounting",HeaderId:3,SideBarMenu:10,IsSubmenu:true},
    {name:"Payroll",HeaderId:3,SideBarMenu:11,IsSubmenu:true},
    {name:"Policies",HeaderId:3,SideBarMenu:12,IsSubmenu:false},
    {name:"Reports",HeaderId:3,SideBarMenu:13,IsSubmenu:true},
    {name:"Performance",HeaderId:4,SideBarMenu:14,IsSubmenu:true},
    {name:"Goals",HeaderId:4,SideBarMenu:15,IsSubmenu:true},
    {name:"Training",HeaderId:4,SideBarMenu:16,IsSubmenu:true},
    {name:"TFCoachingclass",HeaderId:5,SideBarMenu:17,IsSubmenu:true},
    {name:"DemoEmployes",HeaderId:6,SideBarMenu:18,IsSubmenu:true},
  ]

   
  Main:any=[];
  constructor(){}

  ngOnInit(){
    
    for(var i=0;i<this.SideBarMenu.length;i++)
    {
     
      this.SideBarMenu[i].IsShow=true;
    }
 
  }
    }


