// Test d'une fonction asynchrone avec Jest.js (aucune correspondance avec l'application)
function appAsync(callback){
    setTimeout(()=>{
        callback("{API: ok}");
    }, 5000);
}

describe("test asynchronous function", ()=>{
    test("apiAsync function", (done)=>{
        function callback(data){
            try {
                expect(data).toEqual("{API: ok}");
                done();
            } catch (error){
                done(error);
            }
        }
        appAsync(callback);
    }, 10000);
});