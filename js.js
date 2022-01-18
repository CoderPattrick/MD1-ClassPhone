class Phone{
    constructor(name,battery,draft,inbox,sent) {
        this.name = name;
        this.battery = battery;
        this.draft = draft;
        this.inbox = inbox;
        this.sent = sent;
        this.status = "";
    }
    turnOn(){this.status = "On"}
    turnOff(){this.status = "Off"}
    checkOnOff(){
        if(this.status=="On"){
            return true
        }
        return false
    }
    charge(){
        if(this.battery<100&&this.checkOnOff()){
            this.battery++
        }
    }
    newMss(){
        if(this.checkOnOff()){let a = prompt("");
        this.draft = a;
        this.battery--;
    }}
    sendMss(to){
        if(this.checkOnOff()){to.inbox.push(this.draft);
        this.sent.push(this.draft);
        this.draft ="";
        this.battery--;
    }}
    showInbox(){
        if(this.checkOnOff()){for (let i = this.inbox.length-1; i >= 0; i--) {
            document.write(this.inbox[i]);
        }
        this.battery--;
    }}
    showSent(){
        if(this.checkOnOff()){for (let i = this.sent.length-1; i >= 0; i--) {
            document.write(this.sent[i])
        }
        this.battery--;
    }}
}
// Phone.prototype.checkOnOff = function (){};
let IPX = new Phone('IPhone10',100,[],[],[])