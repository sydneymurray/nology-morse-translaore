import {readMorse, writeMorse} from "./app"

describe("Test to translate English into Morse Code", () => {
    it("Should translate an English letter into Morse code letter", () => {
        const result = readMorse("B")
        expect(result).toMatch("-...")
    })
    it("Should translate an English word into Morse code", () => {
        const result = readMorse("Guarva")
        expect(result).toMatch("--. ..- .- .-. ...- .-")
    })
})

describe("Test to translate Morse Code into English", () => {
    it("Should translate a Morse code letter into an English letter", () => {
        const result = writeMorse(".---")
        expect(result).toMatch("j")
    })
    it("Should translate a Morse code word into an English word", () => {
        const result = writeMorse("-.-. .- -.- .")
        expect(result).toMatch("Cake")
    })
})