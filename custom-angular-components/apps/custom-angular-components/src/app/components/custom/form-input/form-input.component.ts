import { Component, Input, OnChanges, Output } from '@angular/core';

@Component({
  selector: 'custom-angular-components-form-input',
  templateUrl: './form-input.component.html',
  styleUrls: ['./form-input.component.scss']
})
export class FormInputComponent implements OnChanges {

  @Input()
  public description = '';

  @Input()
  public title = '';

  @Output()
  public _onChange = '';

  public error = '';
  private isInit = true;

  constructor() {
    this.isInit = false;
  }

  ngOnChanges(): void {
    this.reset();
  }

  public handleChange($event: any): void {
    console.log($event);
  }

  private reset(): void {
    if (this.isInit) { return }
    this.error = '';
  }

}
