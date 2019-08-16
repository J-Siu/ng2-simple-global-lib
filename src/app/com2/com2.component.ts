import { Component, OnInit } from '@angular/core';
import { SimpleGlobal } from 'ng2-simple-global';

@Component({
	selector: 'app-com2',
	template: `<p>Component com2</p><input type="text" [(ngModel)]="sg.gv" placeholder="{{sg.placeholder}}">`
})
export class Com2Component implements OnInit {

	constructor(private sg: SimpleGlobal) { }
	ngOnInit() {
	}

}
