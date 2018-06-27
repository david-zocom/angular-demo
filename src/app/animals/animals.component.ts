import { Component, OnInit } from '@angular/core';
import { Animal } from '../Animal.js';

@Component({
  selector: 'app-animals',
  templateUrl: './animals.component.html',
  styleUrls: ['./animals.component.css']
})
export class AnimalsComponent implements OnInit {

	constructor() { }

	animals: [Animal] = [];
	newAnimalName: string = '';
	newAnimalColor: string = '';

	addAnimal() {
		let a = new Animal(this.newAnimalName, this.newAnimalColor);
		this.animals.push(a);
	}
	eraseAnimal($event: Animal) {
		console.log('animals.eraseAnimal')
		this.animals = this.animals.filter( a => a.name != $event.name );
	}

	ngOnInit() {
	}

}
