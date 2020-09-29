import { JQ_TOKEN } from './jQuery.service';
import { Directive, ElementRef, Inject, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appModalTrigger]',
})
export class ModalTriggerDirective implements OnInit {
  private el: HTMLElement;
  // tslint:disable-next-line: no-input-rename
  @Input('modal-trigger') modalId: string;
  constructor(ref: ElementRef, @Inject(JQ_TOKEN) private $: any) {
    this.el = ref.nativeElement;
  }

  ngOnInit(): void {
    this.el.addEventListener('click', (e) => {
      this.$(`#${this.modalId}`).modal({});
    });
  }
}
