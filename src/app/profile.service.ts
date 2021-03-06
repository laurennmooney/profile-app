import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  profile: object = {
    name: "Lauren Mooney",
    contactInfo: "laurennmooney@gmail.com",
    bio: "I'm a student at Grand Circus. I'm alright at Angular. I have two cats, Mickey and Dexter. I enjoy working out and attending concerts and other live music events.",
  }

  message: string = "Changes have been saved successfully!";

  constructor(private router: Router) { }

  // this copies the profile object and makes a whole new object to be modified and altered.
  getUserProfile(): object {
    return {...this.profile};
  }

  goToEdit() {
    this.router.navigate(['/edit-profile']);
  }

  setUserProfile(name: string, contact: string, bio: string) {
    this.profile = {
      name: name,
      contactInfo: contact,
      bio: bio,
    }
  }

  displayMessage(): string {
    return this.message;
  }

}
