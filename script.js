// Лампочка

let Bulb = function(){
    this.infoBulb = function(power, costElectricity){
        this.power = power ;
        this.costElectricity = costElectricity || 0,02321;
        this.consumption();
    }

    let status = false;

    this.onStatus = function(){
        status = true;
        // const start = new Data().getHours();
        // console.log(start);
    }

    this.ofStatus = function(){
        status = false;
        // const end = new Data().getTime();
        // console.log('end');
    }

    this.gerStatus = function(){
        return status;
    }

    this.consumption = function(){
        this.end = Number(prompt('Сколько была включена лампа? (в часах)'));
        this.electricityKV = this.end * this.power;
        // console.log(this.costElectricity);
        if(this.power != 0 && status === false){
            this.newConsumption = this.costElectricity * this.electricityKV;
        }
        this.gorenie();
    }
    this.gorenie = function(){
        console.log('Стоимость электроэнергии лампочки: ' + this.newConsumption + 'p');
    }
}

let bulb = new Bulb();
// // c.onStatus();

let BulbInRoom = function(){
    this.number = prompt('Введите кол-во лампочек в помещении');
    Bulb.apply(this);

    this.getGorenieGeneralFunction = function(){
        if(this.number > 1){
            this.gorenieGeneral();
        }else{
            this.gorenie();
        }
    }
    this.gorenieGeneral = function(){
        this.general = this.number * this.newConsumption;
        this.getGorenieGeneral();
    }
    this.getGorenieGeneral = function(){
        // return this.general;
        console.log('Стоимость электроэнергии ' +this.number+ ' лампочек: ' + this.general + 'p');
    }
}

let bulbInRoom = new BulbInRoom();

console.log(bulb);
console.log(bulbInRoom);

let NewInput = function(){
    this.creat = function(){
        this.div = document.createElement('div');
        document.body.appendChild(this.div);
        this.div.innerHTML = `<input type="text" name="text">`
    }

    this.newClassInput = function(){
        this.inputDiv = document.querySelector('input');
        this.inputDiv.classList.add('input');
    }
}

let newInput = new NewInput();

let NewButton = function(){
    this.creat = function(){
        this.button = document.createElement('button');
        document.body.appendChild(this.button);
        this.button.innerHTML = `Рассчитать`
    }
    this.newClassButton = function(){
        this.buttonDiv = document.querySelector('button');
        this.buttonDiv.classList.add('button');
    }

    // this.addEventListener = function(){
    //     this.inputValue = document.querySelector('input').value;
    //     this.number = this.inputValue;
    //     this.button = document.querySelector('button');
    //     this.button.addEventListener('click',bulbInRoom.getGorenieGeneralFunction())
    // }
}

let newButton = new NewButton();

console.log(newInput);
console.log(newButton);