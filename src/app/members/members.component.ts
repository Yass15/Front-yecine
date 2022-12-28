import { Member } from './../../Models/Member';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.scss']
})
export class MembersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  dataSource:Member[]=[
    {
      id:'123456',
      cin:'45879654',
      name:'imene',
      createDate:'15/12/2020',
      cv:'lien',
      type:'Teacher'
    },
    {
      id:'123456',
      cin:'45879654',
      name:'imene',
      createDate:'15/12/2020',
      cv:'lien',
      type:'Teacher'
    },
    {
      id:'123456',
      cin:'45879654',
      name:'imene',
      createDate:'15/12/2020',
      cv:'lien',
      type:'Teacher'
    }
    ];    
    
    displayedColumns: string[] = ["id", "cin", "name", "type", "cv", "createdDate"];
    //dataSource: Member[] = [];
}
