class Animal{
	#name;

	constructor(name){
		this.#name = name;
	}
	
	toString(){
		return "Named "+this.#name
	}
}

class Cat extends Animal {
	constructor(name){
		super(name);
	}
	
	toString(){
		return "This is a cat"+super.toString();
	}
}

