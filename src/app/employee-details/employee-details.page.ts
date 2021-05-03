import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.page.html',
  styleUrls: ['./employee-details.page.scss'],
})
export class EmployeeDetailsPage implements OnInit {

  id: number;
  fullName = '';
  avatarExpanded = false;
  employee: any ;
  employeeSubscription: Subscription;

  constructor(
    private route: ActivatedRoute,
  ) {}

  ngOnInit() {
    this.id = parseInt(this.route.snapshot.params['id'], 10);
   
      this.employee =  {
        id: 10,
        firstName: "Karthik",
        lastName: "Raju",
        contact: {
          email: "Kraju@google.com",
          phone: "9965086619",
          cell: "",
        },
        office: "TCS",
        birthDate: "20/03/1990",
        title: "Developer",
        department:"Stores" ,
        images: {
          large: "https://img.favpng.com/22/3/10/management-business-corporation-company-employee-surveys-png-favpng-ZYfnrzHzBQA9gpPXGKavKS6CN.jpg",
          medium: "https://img.favpng.com/22/3/10/management-business-corporation-company-employee-surveys-png-favpng-ZYfnrzHzBQA9gpPXGKavKS6CN.jpg",
          thumbnail: "https://img.favpng.com/22/3/10/management-business-corporation-company-employee-surveys-png-favpng-ZYfnrzHzBQA9gpPXGKavKS6CN.jpg",
        }
      };
      this.fullName ="Karthik Raju" ;
  }

  ngOnDestroy() {
  }

  expandAvatar(event) {
    event.stopPropagation();
    this.avatarExpanded = !this.avatarExpanded;
  }
}
