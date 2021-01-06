export class Observable {
    constructor(initialValue) {
        this._value = initialValue;
        this._listeners = [];
    }

    get value() {
        return this._value;
    }

    set value(value) {
        this.set(value);
    }

    get() {
        return this._value;
    }

    set(value) {
        this._value = value;
        for (let fn of this._listeners)
            fn(this._value);
    }

    addListener(fn) {
        this._listeners.push(fn);
        fn(this._value);
    }

    removeListener(fn) {
        let i = this._listeners.indexOf(fn);
        if (i != -1) this._listeners.splice(i, 1);
    }
}