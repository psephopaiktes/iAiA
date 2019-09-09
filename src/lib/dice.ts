export function throwDice(nDice: number, maxNumber: number): number {
    if (maxNumber === 100) {
        return nDice * getRandomInt(1, 99);
    }
    return nDice * getRandomInt(1, maxNumber);
}

function getRandomInt(min: number, max: number) {       
    const byteArray = new Uint8Array(1);
    window.crypto.getRandomValues(byteArray);
    const randomNum = '0.' + byteArray[0].toString();
    return Math.floor(Number(randomNum) * (max - min + 1)) + min;
}