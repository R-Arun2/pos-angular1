import { Employee } from './../../model/employee';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from './../../service/api.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-employee-edit',
  templateUrl: './employee-edit.component.html',
  styleUrls: ['./employee-edit.component.scss'],
})

export class EmployeeEditComponent implements OnInit {
  submitted = false;
  editForm: FormGroup;
  employeeData: Employee[];
  EmployeeProfile: any = ['Finance', 'BDM', 'HR', 'Sales', 'Admin'];

  constructor(
    public fb: FormBuilder,
    private actRoute: ActivatedRoute,
    private apiService: ApiService,
    private router: Router
  ) {}

  ngOnInit() {
    this.updateEmployee();
    let id = this.actRoute.snapshot.paramMap.get('id');
    this.getEmployee(id);
    this.editForm = this.fb.group({
      location: ['', [Validators.required]],
      counterNo: ['', [Validators.required]],
      customer: ['', [Validators.required]],
      invoiceDate: ['', [Validators.required]],
      invoiceNo: ['', [Validators.required]],
      currency: ['', [Validators.required]],
      salesExRate: ['', [Validators.required]],
      localExRate: ['', [Validators.required]],
      placeOfDelivery: ['', [Validators.required]],
      customerRemarks: ['', [Validators.required]],
      marketingPerson: ['', [Validators.required]],
      localCurrency: ['', [Validators.required]],


 
    });
  }

  // Choose options with select-dropdown
  updateProfile(e) {
    this.editForm.get('designation').setValue(e, {
      onlySelf: true,
    });
  }

  // Getter to access form control
  get myForm() {
    return this.editForm.controls;
  }

  getEmployee(id) {
    this.apiService.getEmployee(id).subscribe((data) => {
      this.editForm.setValue({
        location: data.data['location'],
        counterNo: data.data['counterNo'],
        customer: data.data['customer'],
        invoiceDate:data.data['invoiceDate'],
        invoiceNo:data.data['invoiceNo'],
        currency:data.data['currency'],
        salesExRate:data.data['salesExRate'],
        localExRate:data.data['localExRate'],
        placeOfDelivery:data.data['placeOfDelivery'],
        customerRemarks:data.data['customerRemarks'],
        marketingPerson:data.data['marketingPerson'],
        localCurrency:data.data['localCurrency'],
        
 
      });
    });
  }

  updateEmployee() {
    this.editForm = this.fb.group({
      location: ['', [Validators.required]],
      counterNo: ['', [Validators.required]],
      customer: ['', [Validators.required]],
      invoiceDate: ['', [Validators.required]],
      invoiceNo: ['', [Validators.required]],
      currency: ['', [Validators.required]],
      salesExRate: ['', [Validators.required]],
      localExRate: ['', [Validators.required]],
      placeOfDelivery: ['', [Validators.required]],
      customerRemarks: ['', [Validators.required]],
      marketingPerson: ['', [Validators.required]],
      localCurrency: ['', [Validators.required]],

       
 
    });
  }

  onSubmit() {
    this.submitted = true;
    if (!this.editForm.valid) {
      return false;
    } else {
       if (window.confirm('Are you sure?')) {
        let id = this.actRoute.snapshot.paramMap.get('id');
         this.apiService.updateEmployee(id, this.editForm.value).subscribe({
          complete: () => {
            this.router.navigateByUrl('/employees-list');
            console.log('Content updated successfully!');
          },
          error: (e) => {
            console.log(e);
          },
        });
      }
    }
  }
}
