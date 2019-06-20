import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  navState = 1;

  // Back button
  goToBack() {
    if (this.navState > 1) {
      this.navState -= 1;
    }
  }

  // Skip button
  skipCurrent() {
    this.navState += 1;
  }

  // Next Buton
  goToNext() {
    this.navState += 1;
  }

  // Submit button (Upload to Firebase)
  uploadToFB() {
    this.navState += 2;
    if (this.navState === 6) {
      alert('upload all results to firebase at this point and navigate to review all responses');
    }
  }

  // Save button (requires login/auth for saving responses for that particular user)
  saveFunc() {
    alert('Save functionality and Login not implemented (under progress)');
  }
}
