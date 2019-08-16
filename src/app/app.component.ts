import { Component, OnInit } from '@angular/core';
import { SimpleGlobal } from 'ng2-simple-global';

@Component({
	selector: 'app-root',
	template: `
	<h1>{{title}}</h1>
	<p>Type in any of the following text box!</p>
	<p>Component app</p>
	<input type="text" [(ngModel)]="sg.gv" placeholder="{{sg.placeholder}}">
	<app-com1></app-com1>
	<app-com2></app-com2>`
})
export class AppComponent implements OnInit {
	title = 'Angular Simple Global Variable';

	constructor(private sg: SimpleGlobal) { }

	ngOnInit() {
		this.sg['placeholder'] = 'This is a global variable';
	}
}
