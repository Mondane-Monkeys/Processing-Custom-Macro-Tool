class Dog{
	#weight;
	constructor(weight) {
		this.#weight = weight;
	}
	do(){
		console.log("Dog do");
	}
	get weight() {
		return this.#weight;
	}
	compare(other) {
		if("weight" in other) {
			return this.weight - other.weight;
		} else {
			return this.weight - other;
		}
	}
}

class Pet{
	#name;
	constructor(name) {
		this.#name = name;
	}
	do(command){
		console.log(`Pet do ${command}`);
	}
	get name() {
		return this.#name;
	}
	compare(other) {
		if("name" in other) {
			return this.name.localeCompare(other.name);
		} else {
			return name.localeCompare(other);
		}
	}
}


class PetDog{
	#pet;
	#dog;
	constructor(pet, dog) {
		this.#pet = pet;
		this.#dog = dog;
	}
	
	get name(){return this.#pet.name}
	get weight(){return this.#dog.weight}
		
	do(command) {
		if(command && command==="sit" || command==="stay") {
			this.#pet.do(command);
		} else {
			this.#dog.do();
		}
	}
	compare(other){
		if("name" in other && "weight" in other){
			let weightComp = this.#dog.compare({"weight":other.weight});
			return weightComp==0 ? this.#pet.compare({"name":other.name}) : weightComp;
		}
		return 0; //not comparable
	}
}

let pet1 = new Pet("AA");
let pet2 = new Pet("BB");
let dog1 = new Dog(10);
let dog2 = new Dog(11);

let pd1 = new PetDog(pet1, dog1);
let pd2 = new PetDog(pet2, dog2);
let pd12 = new PetDog(pet1, dog2);
let pd21 = new PetDog(pet2, dog1);

pd1.do();
pd1.do("stay");

console.log(pd1.compare(pd2));
console.log(pd1.compare(pd1));
console.log(pd21.compare(pd1));
console.log(pd1.compare(pd21));
