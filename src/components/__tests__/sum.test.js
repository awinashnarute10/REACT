// import the function to be tested
import { sum } from "../sum";

// testblock:- takes 2 arguments first one is description of test block and second is the call back function
test("Sum fucntion should calculate the sum of 2 numbers", () => {

    const result = sum(3, 4);

    expect(result).toBe(7); // selfexplanatory 
});