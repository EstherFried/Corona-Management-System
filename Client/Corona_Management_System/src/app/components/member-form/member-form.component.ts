import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MemberModel } from 'src/app/models/memberModel';
import { vaccinationModel } from 'src/app/models/vaccinationModel';

@Component({
  selector: 'app-member-form',
  templateUrl: './member-form.component.html',
  styleUrls: ['./member-form.component.scss']
})
export class MemberFormComponent {
  @Input() showForm!: boolean;
  @Input() member!: MemberModel | null;
  @Input() newMember!: boolean | null;
  @Output() memberToSave = new EventEmitter<MemberModel>();
  @Output() closeFormEvent = new EventEmitter();
  vaccinations!: vaccinationModel[];
  appService: any;
  length!: number;
  constructor(private fb: FormBuilder) { }

  memberForm!: FormGroup;

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    console.log(this.member);
    
    this.setVaccinationsArray();
    this.memberForm = this.fb.group({
      idNumber: [this.member?.id_number, [Validators.required, Validators.pattern(/^\d{9}$/)]],
      fullName: [this.member?.full_name, [Validators.required, Validators.pattern(/^([a-zA-Z]+\s?)+$/)]],
      city: [this.member?.address.city, [Validators.required, Validators.pattern(/^[a-zA-Z ]+$/)]],
      street: [this.member?.address.street, [Validators.required, Validators.pattern(/^[a-zA-Z ]+$/)]],
      number: [this.member?.address.number, [Validators.required]],
      birthDate: [this.member?.date_of_birth, [Validators.required]],
      phone: [this.member?.phone, [Validators.pattern(/^\d{9}$/)]],
      mobilePhone: [this.member?.mobile_phone, [Validators.required, Validators.pattern(/^\d{10}$/)]],
      illnessDate: [this.member?.positive_result_date],
      recoveryDate: [this.member?.recovery_date, [Validators.required, this.validateRecoveryDate]],
      vaccManufacturer0: [length > 0 ? this.member?.vaccinations[0].manufacturer : ''],
      vaccManufacturer1: [length > 1 ? this.member?.vaccinations[1].manufacturer : ''],
      vaccManufacturer2: [length > 2 ? this.member?.vaccinations[2].manufacturer : ''],
      vaccManufacturer3: [length > 3 ? this.member?.vaccinations[3].manufacturer : ''],
      vaccDate0: [length > 0 ? this.member?.vaccinations[0].date : ''],
      vaccDate1: [length > 1 ? this.member?.vaccinations[1].date : ''],
      vaccDate2: [length > 2 ? this.member?.vaccinations[2].date : ''],
      vaccDate3: [length > 3 ? this.member?.vaccinations[3].date : '']
    });
  }



  // isDateInPast(control: FormControl): { [key: string]: boolean } | null  {
  //   const currentDate = new Date();
  //   const someDate = new Date(control.value);
  //   if (someDate > currentDate) {
  //     return { 'invalidDate': true };
  //   }
  //   return null;
  // }

  validateRecoveryDate(control: FormControl): { [key: string]: boolean } | null {
    const illnessDate = new Date(control.parent?.get('illnessDate')?.value);
    const recoveryDate = new Date(control.value);
    if (recoveryDate > illnessDate) {
      return null;
    }
    return { 'invalidRecoveryDate': true };
  }

  setVaccinationsArray() {
    this.length = 4;
    if (this.member && this.member.vaccinations && this.member.vaccinations.length) {
      console.log(this.length);
      console.log(this.member.vaccinations.length);
      length = length - this.member.vaccinations.length;
    }
    this.length > 0 ? this.vaccinations = new Array<vaccinationModel>(this.length) : '';
  }

  saveMemberDetails() {
    // debugger
    console.log(this.memberForm);
    if (this.memberForm.valid) {
      if (this.newMember) this.setDefaultMember();
      this.getAllMemberValues();
      if (this.member) this.memberToSave.emit(this.member);
      console.log(this.member);
      this.closeForm();
    } else {
      this.highlightInvalidFields();
    }
  }

  getAllMemberValues() {
    if (this.member) {
      this.member.id_number = this.memberForm.get('idNumber')?.value;
      this.member.full_name = this.memberForm.get('fullName')?.value;
      this.member.date_of_birth = this.memberForm.get('birthDate')?.value;
      this.member.address.city = this.memberForm.get('city')?.value;
      this.member.address.street = this.memberForm.get('street')?.value;
      this.member.address.number = this.memberForm.get('number')?.value;
      this.member.phone = this.memberForm.get('phone')?.value;
      this.member.mobile_phone = this.memberForm.get('mobilePhone')?.value;
      this.member.positive_result_date = this.memberForm.get('illnessDate')?.value;
      this.member.recovery_date = this.memberForm.get('recoveryDate')?.value;
      this.getAccinationsValues();
    }
  }

  setDefaultMember() {
    this.member = {
      id_number: "",
      full_name: "",
      date_of_birth: new Date(),
      phone: "",
      mobile_phone: '',
      address: {
        city: '',
        street: '',
        number: ''
      },
      positive_result_date: new Date(),
      recovery_date: new Date(),
      vaccinations:new Array<vaccinationModel>(4)
      // vaccinations: [{ date: new Date(), manufacturer: "" }, { date: new Date(), manufacturer: "" }, { date: new Date(), manufacturer: "" }, { date: new Date(), manufacturer: "" }]
    };
  }

  getAccinationsValues() {
    let tempVacc = new Array<vaccinationModel>(4);
    for (let i = 0; i < 4; i++) {
      if (i < this.vaccinations.length) {
        tempVacc[i] = {
          date: this.memberForm.get('vaccDate' + i)?.value,
          manufacturer: this.memberForm.get('vaccManufacturer' + i)?.value
        };
      }
    }
    if (this.member && this.member.vaccinations) {
      this.member.vaccinations = tempVacc;
    }
  }

  highlightInvalidFields() {
    Object.keys(this.memberForm.controls).forEach(field => {
      const control = this.memberForm.get(field);
      if (control && control.invalid) {
        control.markAsTouched();
      }
    });
  }

  closeForm() {
    this.closeFormEvent.emit();
  }

}
