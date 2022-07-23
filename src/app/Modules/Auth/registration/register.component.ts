
import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { NgbDateStruct, NgbCalendar } from '@ng-bootstrap/ng-bootstrap';
import { FeatureModule } from "../../Features/feature.module";
import { AuthService } from "../../shared/services/auth.service";
import { NgbDateParserFormatter } from '@ng-bootstrap/ng-bootstrap';
import { EmployeeService } from "../../shared/services/employee.service";

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss']
})

export class RegisterComponent {



  
    constructor(private parseformat: NgbDateParserFormatter, private service: EmployeeService, private authservice: AuthService, private route: Router) { }
    emp_name: string = '';
    department: any = [];
    designation: any = [];
    position: any = [];
    firstname: string | undefined;
    middlename: string | undefined;
    lastname: string | undefined;
    age: number | undefined;
    gender: string = '';
    password: string | undefined;
    confirm_password: string | undefined;
    email: string | undefined;
    phone_no: string | undefined;
    doj: any = {};
    department_id: number = 0;
    designation_id: number = 0;
    position_id: number = 0;
    ngOnInit() {
        
        this.service.GetDepartment().subscribe((result) => {

            this.department = result;
            this.service.GetDesignation().subscribe((result) => {

                this.designation = result;
            });
            this.service.GetPosition().subscribe((result) => {

                this.position = result;
            });
        });

    }
    Registration() {
        
        let name1 = this.emp_name.trim();
        if (name1 == '' || name1 == undefined) {
            return alert("Empty Employee Name");
        }
        else {
            let name = name1.split(/\s+/);

            if (name.length == 2) {
                this.firstname = name[0];
                this.middlename = ' ';
                this.lastname = name[1];
            }
            else {
                this.firstname = name[0];
                this.middlename = name[1];
                this.lastname = name[2];
            }

            if (this.confirm_password == this.password) {
                var model = {
                    firstname: this.firstname,
                    middlename: this.middlename,
                    lastname: this.lastname,
                    age: this.age,
                    gender: this.gender,
                    emailid: this.email,
                    password: this.password,
                    doj: new Date(this.doj.month + '/' + this.doj.day + '/' + this.doj.year),
                    phone_no: this.phone_no,
                    designation_id: this.designation_id,
                    department_id: this.department_id,
                    position_id: this.position_id,


                }

                this.authservice.Registration(model).subscribe((data) => {
                    

                    if (data == 1) {
                        alert('Registration Succesfull!');
                        this.route.navigate(['/']);
                    }
                    else {
                        alert("Something went wrong");
                    }
                })
            }
            else {
                alert("Password Didn't Match");
            }



        }
    }
    


}