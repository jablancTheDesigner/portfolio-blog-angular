import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NetlifyFormsService } from 'src/app/netlify-forms/netlify-forms.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  contactForm = this.fb.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    email: ['', [Validators.email, Validators.required]],
    message: ['', Validators.required],
  });

  errorMsg = '';

  constructor(private fb: FormBuilder,
    private router: Router,
    private netlifyForms: NetlifyFormsService) { }

  ngOnInit(): void {
  }

  closeError() {
    this.errorMsg = '';
  }

  onSubmit = () => {
    this.netlifyForms.submitContact(this.contactForm.value).subscribe(
      () => {
        this.contactForm.reset();
        this.router.navigateByUrl('/success');
      },
      err => {
        this.errorMsg = err;
      }
    );
  }

}
