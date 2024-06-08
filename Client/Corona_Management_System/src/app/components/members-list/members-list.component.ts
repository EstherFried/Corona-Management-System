import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MemberModel } from 'src/app/models/memberModel';
import { AppService } from '../../app.service';

@Component({
  selector: 'app-members-list',
  templateUrl: './members-list.component.html',
  styleUrls: ['./members-list.component.scss']
})
export class MembersListComponent {
  allMembers!: MemberModel[] | null;
  showAddForm: boolean = false;
  member!: MemberModel;

  constructor(private appService: AppService) { }

  ngOnInit(): void {
    this.getAllMembers();
  }

  getAllMembers() {
    this.appService.getAllMembers().subscribe((result) => {
      this.allMembers = result;
    });
  }

  deleteMember(memberId: any) {
    this.appService.deleteItem(memberId).subscribe((res) => {
      if (res) {
        console.log('delete member successfully');
        const filterMembers = this.allMembers?.filter(member => member.id_number !== memberId);
        this.allMembers = filterMembers ? filterMembers : null;
      }
    });
  }
  newMemberForm() {
    this.showAddForm = true;
  }
  closeMemberForm() {
    this.showAddForm = false;
  }

  updateMember(member: MemberModel) {
    if (this.allMembers)
      this.appService.updateItem(member.id_number, member).subscribe((res) => {
        if (res) {
          this.getAllMembers();
          console.log('update');
        }
      })
  }
  addNewMember(member: MemberModel) {
    this.appService.addItem(member).subscribe((res)=>{
      if(res){
        this.getAllMembers();
        console.log('add');
      }
    })
  }
}