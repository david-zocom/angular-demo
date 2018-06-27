import { Component, EventEmitter, Output, Input, OnInit } from '@angular/core';
import { Animal } from '../animal.ts';

@Component({
  selector: 'app-view-animal',
  templateUrl: './view-animal.component.html',
  styleUrls: ['./view-animal.component.css']
})
export class ViewAnimalComponent implements OnInit {

	constructor() { }

	@Input() animal: Animal;
	@Output() delete = new EventEmitter<Animal>();

	deleteClick() {
		this.delete.emit(this.animal);
	}

	ngOnInit() {
	}

}
