
export default function appAsync(callback: Function){
    setTimeout(()=>{
        callback("{API: ok}");
    }, 5000);
}