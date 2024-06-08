import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MemberModel } from 'src/app/models/memberModel';
import { vaccinationModel } from "../../models/vaccinationModel";

@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.scss']
})

export class MemberComponent {
  @Input() member!: MemberModel;
  @Output() memberIdToDelete = new EventEmitter<string>();
  @Output() newMemberToSave = new EventEmitter<MemberModel>();
  @Output() updatedMemberToSave = new EventEmitter<MemberModel>();
  showDetails: boolean = false;
  showUpdateForm: boolean = false;
  
  openCloseDetails() {
    this.showDetails = !this.showDetails;
  }

  deleteMember(memberId: string) {
    this.memberIdToDelete.emit(memberId);
  }

  saveMemberDetails(member:any) {
    this.updatedMemberToSave.emit(member);
  }
  
  updateMember() {
    this.showUpdateForm = true;
  }
  closeUpdateForm(){
    this.showUpdateForm=false;
  }
}