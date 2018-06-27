import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

	constructor() { }

	answer: string = '?';
	leftOperand: number = 5;
	rightOperand: number = 7;

	ngOnInit() {
	}

	tbChangeLeftOp($event) {
		console.log($event);
		this.leftOperand = Number($event.target.value);
	}
	tbChangeRightOp($event) {
		this.rightOperand = Number($event.target.value);
	}
	private isValidOperands(): boolean {
		if( isNaN(this.leftOperand) || isNaN(this.rightOperand) ) {
			this.answer = 'Can only operate on numbers';
			return false;
		}
		return true;
	}
	add() {
		if( !this.isValidOperands() ) return;
		console.log('calculator.add');
		this.answer = String(this.leftOperand + this.rightOperand);
	}
	calculate(op) {
		console.log('calculate(op) -> ' + op);
		if( !this.isValidOperands() ) return;
		this.answer = String(op(this.leftOperand, this.rightOperand));
	}
	subtract = () => this.calculate( (x, y) => x - y );
	multiply = () => this.calculate( (x, y) => x * y );
	divide = () => this.calculate( (x, y) => x / y );

}
