import { ISession } from './../shared/event.model';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { JsonPipe } from '@angular/common';
import { invalid } from '@angular/compiler/src/render3/view/util';

@Component({
  selector: 'app-create-session',
  templateUrl: './create-session.component.html',
  styleUrls: ['./create-session.component.css'],
})
export class CreateSessionComponent implements OnInit {
  constructor() {}

  newSessionForm: FormGroup;
  name: FormControl;
  presenter: FormControl;
  duration: FormControl;
  level: FormControl;
  abstract: FormControl;

  ngOnInit(): void {
    this.name = new FormControl('', Validators.required);
    this.presenter = new FormControl('', Validators.required);
    this.duration = new FormControl('', Validators.required);
    this.level = new FormControl('', Validators.required);
    this.abstract = new FormControl('', [
      Validators.required,
      Validators.maxLength(400),
      this.restrictedWords,
      this.restrictedWordsReturningFunction(['foo', 'bar']),
    ]);

    this.newSessionForm = new FormGroup({
      name: this.name,
      presenter: this.presenter,
      duration: this.duration,
      level: this.level,
      abstract: this.abstract,
    });
  }

  saveSession(formValues): void {
    const session: ISession = {
      id: undefined,
      name: formValues.value.name,
      duration: +formValues.value.duration,
      level: formValues.value.level,
      presenter: formValues.value.presenter,
      abstract: formValues.value.abstract,
      voters: [],
    };
    console.log('formValues', formValues);
    console.log('value', formValues.value);
    console.log('controls', formValues.controls);
    console.log('session', session);
  }
  // Asagidaki { [key: string]: any } nin anlami===> bu method bi object donecek ve objenin seklinin ne oldugunun bi onemi yok demek oluyor.
  private restrictedWords(control: FormControl): { [key: string]: any } {
    return control.value.includes('foo') ? { restrictedWords: 'foo' } : null;
  }

  private restrictedWordsReturningFunction(words): any {
    return (control: FormControl): {} => {
      if (!words) {
        return null;
      }
      const invalidWords = words
        .map((w) => (control.value.includes(w) ? w : null))
        .filter((w) => w != null);

      return invalidWords && invalidWords.length > 0
        ? { restrictedWords: invalidWords.join(', ') }
        : null;
    };
  }
}
