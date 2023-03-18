import { Component } from "@angular/core";
import { DomSanitizer } from "@angular/platform-browser";

import { EmployeeService } from "src/app/Modules/shared/services/employee.service";

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})

export class

  EmployeesComponent {
  search: string = '';
  isviewshow: boolean = false;
  designation_id: number = 0;
  show: boolean = true;
  emp: any;
  designation: any | undefined;
  image: any | undefined;
  selectedEmpId: any = 0;


  constructor(private emp_service: EmployeeService, private sanitizer: DomSanitizer) { }


  ngOnInit() {
    this.GetDesignation();
    this.GetAllEmployeeDetails();
    
  }

  GetDesignation() {

    this.emp_service.GetDesignation().subscribe((data) => {
      debugger
      this.designation = data;
      this.designation.id = data;

    })
  }
  GetAllEmployeeDetails() {
    if (this.designation_id == 0 && this.search == "") {
      this.emp_service.GetEmployeeDetails().subscribe((result) => {

        if (result != null) {

          this.emp = result;

        }
        else {
          alert("Oops! Something went wrong")
        }
      })
    }
    else {
      this.emp_service.GetEmployeeByDesignation(this.designation_id).subscribe((data) => {
        debugger
        if (data != null && data != 0) {
          var i = data[0].emp_image;
          console.log(i);
          this.emp = '';
          this.emp = data;

        }
        else {
          this.emp = [];
        }
      })

    }

  }

  onChange(searchname: any) {
    debugger
    searchname = this.search;
    if (searchname == "") {
      this.GetAllEmployeeDetails();
    }
    else {

      this.emp_service.searchEmp_Empname_empid(searchname, this.designation_id).subscribe((result) => {
        debugger

        this.emp = '';
        this.emp = result;
      })

    }


  }

  Searching(searchname: any) {

    if (searchname == '' || searchname == undefined) {
      this.GetAllEmployeeDetails();
    }
    else {
      debugger
      this.emp_service.searchEmp_Empname_empid(searchname, this.designation_id).subscribe((result) => {
        debugger

        if (result != null) {
          this.emp = '';
          this.emp = result;
        }
      })
    }
  }

  HideShow(id: number) {
    if (this.isviewshow == false) {
      this.selectedEmpId = id;
      this.isviewshow = true;
    }
    else {
      this.selectedEmpId = 0;
      this.isviewshow = false;
    }
  }
}


