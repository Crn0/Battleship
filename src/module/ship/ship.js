export default function Ship(name, length) {
    let health = 0;

    const hit = () => {
        health += 1;
        
        return true;
    };

    const resetHealth = () => {
        health = 0;
        return health
    };

    const isSunk = () => {
        if(health === length) return true;
        
        return false;
    };

    return Object.freeze({
        get name() { return name },
        get length() { return length },
        hit,
        resetHealth,
        isSunk,
    });
};