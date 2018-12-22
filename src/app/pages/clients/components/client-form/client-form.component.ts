import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { Client } from '../../../../core/store/client/models/client.model';
import { ErrorStateMatcher } from '@angular/material';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-client-form',
  templateUrl: './client-form.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ClientFormComponent {
  @Input() clientId: string | null = null;

  @Input()
  set client(client: Client | undefined) {
    if (client) {
      this.form.patchValue(client);
    }
  }

  @Input()
  set pending(isPending: boolean) {
    this.isPending = isPending;

    if (isPending) {
      this.form.disable();
    } else {
      this.form.enable();
    }
  }

  @Input() error: string | null;
  @Output() submitted = new EventEmitter<Client>();

  isPending: boolean;

  matcher = new MyErrorStateMatcher();

  form: FormGroup = new FormGroup({
    id: new FormControl(''),
    company: new FormControl('', Validators.compose([Validators.required, Validators.maxLength(100)])),
    description: new FormControl('', Validators.required),
    address: new FormControl('', Validators.required),
    name: new FormControl('', Validators.compose([Validators.required, Validators.maxLength(200)])),
    email: new FormControl('', Validators.compose([Validators.required, Validators.maxLength(200)])),
    phone: new FormControl('', Validators.required),
  });

  constructor() {
  }

  submit() {
    if (this.form.valid) {
      this.submitted.emit(this.form.value);
    }
  }
}
