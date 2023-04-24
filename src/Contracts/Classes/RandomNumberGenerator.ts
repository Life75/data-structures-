export default class RandomNumberGenerator {

    getRandomNumber(): number {
        return Math.floor(Math.random() * 500)
    }
}