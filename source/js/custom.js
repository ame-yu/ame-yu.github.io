let time = cookie.get("lastLogin")
if(!time){
    cookie.set("lastLogin",new Date().toISOString())
}
console.log(time)