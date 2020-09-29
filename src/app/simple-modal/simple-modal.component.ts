import { JQ_TOKEN } from './../common/jQuery.service';
import {
  Component,
  Input,
  OnInit,
  ViewChild,
  ElementRef,
  Inject,
} from '@angular/core';

@Component({
  selector: 'app-simple-modal',
  templateUrl: './simple-modal.component.html',
  styleUrls: ['./simple-modal.component.css'],
})
export class SimpleModalComponent implements OnInit {
  @Input() title;
  @Input() elementId;
  @ViewChild('modalContainer') containerEl: ElementRef;
  constructor(@Inject(JQ_TOKEN) private $: any) {}

  ngOnInit(): void {}

  closeModal(): void {
    this.$(this.containerEl.nativeElement).modal('hide');
  }
}
