import appAsync from "./functions/appAsymc";

describe("test asynchronous function", ()=>{
    test("apiAsync function", (done)=>{
        function callback(data){
            try {
                expect(data).toEqual("{API: ok}")
                done()
            } catch (error){
                done(error)
            }
        }
        appAsync(callback)
    }, 10000)
})