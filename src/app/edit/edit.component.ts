import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../profile.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  currentUser: object;
  message: string;
  
  constructor(private profileService: ProfileService) { }

  ngOnInit() {
    this.currentUser = this.profileService.getUserProfile();
  }

  updateProfile(form): any {
    this.profileService.setUserProfile(form.value.name, form.value.contact, form.value.bio);
    this.message = "Changes have been saved successfully!"
  }

}
