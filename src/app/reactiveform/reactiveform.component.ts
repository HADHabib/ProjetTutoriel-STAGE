import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DataStorageService } from '../data-storage.service';
@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.css'],
})
export class ReactiveformComponent implements OnInit {
  profileForm = new FormGroup({
    Name: new FormControl('', [Validators.required]),
    Temp: new FormControl('', [
      Validators.required,
      Validators.pattern(/^-?(0|[1-9]\d*)?$/),
    ]),
    FeelsLike: new FormControl('', [
      Validators.required,
      Validators.pattern(/^-?(0|[1-9]\d*)?$/),
    ]),
    Humidity: new FormControl('', [
      Validators.required,
      Validators.pattern(/^-?(0|[1-9]\d*)?$/),
      Validators.min(0),
      Validators.max(100),
    ]),
  });
  constructor(private ServiceData: DataStorageService) {}

  ngOnInit(): void {}
  onSubmit() {
    if (!this.ServiceData.getUserSettings().length) {
      this.ServiceData.setSettings([this.profileForm.value]);
    } else {
      let data = this.ServiceData.getUserSettings();
      data.push(this.profileForm.value);
      this.ServiceData.setSettings(data);
    }

    this.profileForm.reset();
  }
}
