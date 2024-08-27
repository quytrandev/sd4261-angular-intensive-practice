import { AfterViewInit, Component, EventEmitter,Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { ChildComponent } from './child/child.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [ChildComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent implements OnChanges, AfterViewInit, OnInit{
 public title = "home page component";
 private count = 0;

@Input() somedata: any;
 ngOnChanges(changes: SimpleChanges): void {
   console.log('onchange');
 }
 ngOnInit(): void {
   console.log('oninit');
 }
 ngAfterViewInit(): void {
   console.log('afterviewinit');
 }
  onBtnClick(){
    console.log('onbtnclick');
    this.count++;
    this.title = `${this.title} edited ${this.count}`;
  }

  onSomething()
  {
    console.log('onsomething');
  }
}
