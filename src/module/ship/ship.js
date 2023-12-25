export default function CreateShip(name, length) {
    

    return Object.freeze({
        get name() { return name },
        get length() { return length },
    });
};