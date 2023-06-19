import { Component, OnInit } from '@angular/core';
import { first, last } from 'rxjs';
import { TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import Swal from 'sweetalert2'
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { tick } from '@angular/core/testing';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.scss']
})
export class CarComponent implements OnInit {

  ngOnInit(): void {

    let data = localStorage.getItem('Car');
    this.employeelist = JSON.parse(data || '');
  }

  carForm: FormGroup;

  employeelist: any = [];
  // firstname = "";
  // lastname = "";
  // email = "";
  // contact = "";
  iseditclicked = "no";
  indexselected = "";
  issubmitted = false;

  clear() {
    this.carForm.reset();
    // this.firstname = "";
    // this.lastname = "";
    // this.email = "";
    // this.contact = "";
  }

  submit() {
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Your data has been saved',
      showConfirmButton: false,
      timer: 1500
    })

    // let obj = {
    //   firstname: this.firstname,
    //   lastname: this.lastname,
    //   email: this.email,
    //   contact: this.contact,
    // }

    // console.log("employee is", obj);
    this.employeelist.push(this.carForm.value);
    localStorage.setItem('Car', JSON.stringify(this.employeelist));
    this.issubmitted = true;
    this.clear();
    this.modalRef?.hide();
  }

  edit(i: any) {
    this.iseditclicked = "yes";
    this.indexselected = i;
    this.carForm.patchValue(
      {
        firstname: this.employeelist[i].firstname,
        lastname: this.employeelist[i].lastname,
        email: this.employeelist[i].email
      }
    )
  }

  delete(i: any) {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.employeelist.splice(i, 1);
        localStorage.setItem('Car', JSON.stringify(this.employeelist));

        Swal.fire(
          'Deleted!',
          'Your data has been deleted.',
          'success'
        )
      } else if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel
      ) {
        Swal.fire(
          'Cancelled',
          'Your imaginary file is safe :)',
          'error'
        )
      }
    })
  }

  update() {
    this.iseditclicked = "no";
    this.employeelist[this.indexselected].firstname = this.carForm.value.firstname;
    this.employeelist[this.indexselected].lastname = this.carForm.value.lastname;
    this.employeelist[this.indexselected].email = this.carForm.value.email;
    // this.employeelist[this.indexselected].contact = this.carForm.value.contact;
    localStorage.setItem('Car', JSON.stringify(this.employeelist));

    this.clear();
    this.modalRef?.hide();

    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Your data has been updated',
      showConfirmButton: false,
      timer: 1500
    })
  }

  modalRef?: BsModalRef;
  constructor(private modalService: BsModalService, private FormBuilder: FormBuilder) {
    this.carForm = this.FormBuilder.group(
      {
        firstname: ['',Validators.compose([Validators.required, Validators.minLength(3)])],
        lastname: ['',Validators.compose([Validators.required, Validators.minLength(3)])],
        email: ['',Validators.compose([Validators.required, Validators.minLength(3)])]
      }
    )
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

}