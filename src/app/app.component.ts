import { Component, OnInit } from '@angular/core';
import {
  Auth,
  isSignInWithEmailLink,
  signInWithEmailLink,
} from '@angular/fire/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'bitesize';

  constructor(private auth: Auth, private router: Router) {}

  async ngOnInit() {
    try {
      const isLoginLink = isSignInWithEmailLink(
        this.auth,
        window.location.href
      );

      if (isLoginLink) {
        let email = window.localStorage.getItem('emailForSignIn');

        // If missing email, prompt user for it
        if (!email) {
          email = window.prompt('Please provide your email for confirmation');
        }

        if (email) {
          // Signin user and remove the email localStorage
          const result = await signInWithEmailLink(
            this.auth,
            email!,
            window.location.href
          );
          window.localStorage.removeItem('emailForSignIn');
          console.error('RESULT', result);
        }

        this.router.navigate([]);
      }
    } catch (err) {
      console.error('FAIL', err);
    }
  }
}
