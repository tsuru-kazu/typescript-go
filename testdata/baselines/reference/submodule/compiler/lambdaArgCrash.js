//// [tests/cases/compiler/lambdaArgCrash.ts] ////

//// [lambdaArgCrash.ts]
class Event {

	 private _listeners: any[] = [];

	 constructor () {

		 // TODO: remove

		 this._listeners = [];

	}

	 add(listener: () => any): void {

		 /// <summary>Registers a new listener for the event.</summary>

		 /// <param name="listener">The callback function to register.</param>

		 this._listeners.push(listener);

	}

}
 
class ItemSetEvent extends Event {

	 add(listener: (items: ItemSet) => void ) {

	 	super.add(listener);

	}

}


//// [lambdaArgCrash.js]
class Event {
    _listeners = [];
    constructor() {
        // TODO: remove
        this._listeners = [];
    }
    add(listener) {
        /// <summary>Registers a new listener for the event.</summary>
        /// <param name="listener">The callback function to register.</param>
        this._listeners.push(listener);
    }
}
class ItemSetEvent extends Event {
    add(listener) {
        super.add(listener);
    }
}
