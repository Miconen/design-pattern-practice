// Products are objects created by a factory
interface Product {
	makeFood(): string;
}

// For more clarity this could be called "Restaurant"
abstract class FoodCreator {
	public abstract factoryMethod(): Product;
	public orderFood(): string {
		const product = this.factoryMethod();
		return `FoodCreator: The Chef just finished an order. "${product.makeFood()}"`;
	}
}

// This could be called "Breakfast restaurant"
class BreakfastCreator extends FoodCreator {
	public factoryMethod(): Product {
		return new BreakfastProduct();
	}
}

// This could be called "Dinner restaurant"
class DinnerCreator extends FoodCreator {
	public factoryMethod(): Product {
		return new DinnerProduct();
	}
}

/*
	These are the products unique to each restaurant
	but the customer does not need to know about these abstractions
	as the only thing the customer knows is that he/she wants to orderFood() from a restaurant of their choice
	...maybe products could also be factories for customizable orders?
	... no.. that's feature creep, going to stop here.
*/
class BreakfastProduct implements Product {
	public makeFood(): string {
		return 'Made breakfast';
	}
}

class DinnerProduct implements Product {
	public makeFood(): string {
		return 'Made dinner';
	}
}

function customer(creator: FoodCreator) {
	console.log(creator.orderFood());
}

// New customer who wants breakfast
customer(new BreakfastCreator());

// New customer who wants dinner
customer(new DinnerCreator());
