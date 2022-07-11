// This example was coded more from what i learned and less based on examples
// I will be commenting everything as i go and what I'm thinking of

// First we need an interface for the products of our factory
// Since we will be making a travel company system our product is a Travel
interface ITravel {
	// Return method of travel and cost
	method: string;
	price: number;
	// Lets add some details for the travel product
	travelId: number;
}

// This will be our base class
abstract class Travel {
	public abstract factoryMethod(): ITravel;
	public makeReservation(): string {
		const travel = this.factoryMethod();
		return `You have reserved ${travel.method} number ${travel.travelId}, costing ${travel.price}€`;
	}
}

// Now we will implement a factory method for flights
class FlightTravel extends Travel {
	public factoryMethod(): ITravel {
		return new FlightTravelProduct();
	}
}

// And we will also need a product for the factory
class FlightTravelProduct implements ITravel {
	// We don't have any parameters for this example so lets just imagine we always book the earliest flight
	// We would do all kinds of fancy calculations on these numbers but now they are just static
	method = 'flight';
	price = 100;
	travelId = Math.floor(Math.random() * 1000);
}

// Now imagine 10 years has passed and we want to extend our business to support boat travel
// Because we used a factory method pattern we can extend our codebase easily by just copying some code
class BoatTravel extends Travel {
	public factoryMethod(): ITravel {
		return new BoatTravelProduct();
	}
}

class BoatTravelProduct implements ITravel {
	method = 'boat';
	price = 50;
	travelId = Math.floor(Math.random() * 1000);
}

// This is the context this function would be called from
const clientReservation = (travel: Travel) => {
	console.log(travel.makeReservation());
};

// Now we have a few customers trying to make reservations
// in a real application we would pass parameters based on choices made on our imaginary front-end
clientReservation(new FlightTravel());

clientReservation(new BoatTravel());
