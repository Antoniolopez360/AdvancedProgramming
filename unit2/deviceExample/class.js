const { Console } = require("console");
// import {chalk} from "chalk"
constchalk = require ("chalk");


class Device {
    constructor(Name,model,noLeds, location){
              this.name = Name;
              this.model = model;
              this.noLeds = noLeds;
              this.location = location;
    };
    turnOnLed(){
        console.log(chalk.blue('Led turned On...'));
    }
};

class DeviceWithCamera extends Device{
    constructor(Name, noLeds, noLeds,location, camaraModel){
              super(Name,model,noLeds,location);
              this.camaraModel=camaraModel;
            };
            takeApicture(){
                console.log(chalk.green(`taking a picture...`));
            };
             get getInfo(){
                 return `name: $(this.name),mode $(this.model)`;
             }    
            }


//instanciar un objeto
const fistDevice = new Device("My FirstDevices", "RasberryPi3", 2, 1000);
firstDevice.turnOnLed();

const aecondDevice = new DeviceWithCamera("SecondDevices", "RasberryPi4", 4, 1000);
secondDevice.turnOnled();
secondDevice.takeApicture();
Console.log(secondDevice.getInfo);

