import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../profile.service';

@Component({
  selector: 'profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  currentUser: object;

  constructor(private profileService: ProfileService) { }

  ngOnInit() {
    this.currentUser = this.profileService.getUserProfile();
  }

  goToEdit(): void {
    this.profileService.goToEdit();
  }

}
