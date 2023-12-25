export default function CreateShip(name, length) {
    let health = 0;

    const hit = () => {
        health += 1;
        
        return true;
    };

    return Object.freeze({
        get name() { return name },
        get length() { return length },
        hit,
    });
};