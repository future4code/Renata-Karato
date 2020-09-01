import { validateCharacter } from "../src/data/validateCharacter";

describe("Testing validateCharacter", () => {
    //2.A
    test("Should return false for empty name", () => {
        const result = validateCharacter({
          name: "",
          life: 1500,
          strength: 300,
          defense: 500,
        });
    
        expect(result).toBe(false);
    });
    
    //2.B
    test("Should return false for empty life", () => {
        const result = validateCharacter({
          name: "Scorpion",
          life: undefined,
          strength: 300,
          defense: 500,
        });
    
        expect(result).toBe(false);
    });

    //2.C
    test("Should return false for empty strenght", () => {
        const result = validateCharacter({
          name: "Scorpion",
          life: 1500,
          strength: undefined,
          defense: 500,
        });
    
        expect(result).toBe(false);
    });

    //2.D
    test("Should return false for empty defense", () => {
        const result = validateCharacter({
          name: "Scorpion",
          life: 1500,
          strength: 300,
          defense: undefined,
        });
    
        expect(result).toBe(false);
    });

    //2.E
    test("Should return false for negative life or negative strength or negative defense", () => {
        const result = validateCharacter({
          name: "Scorpion",
          life: -1500,
          strength: -300,
          defense: -500,
        });
    
        expect(result).toBe(false);
    });

    //2.F
    test("Should return true for life 0", () => {
        const result = validateCharacter({
          name: "Scorpion",
          life: 0,
          strength: 300,
          defense: 500,
        });
    
        expect(result).toBe(true);
    });

    //2.G
    test("Should return true for all valid inputs", () => {
        const result = validateCharacter({
          name: "Scorpion",
          life: 1500,
          strength: 300,
          defense: 500,
        });
    
        expect(result).toBe(true);
    });
})