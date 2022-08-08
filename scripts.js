/*
let lamp = {
    power: '1000w',
    v: 220,
    c: 'E27',
    on: false,
    resurs: 10,
    switchOn: function(){
        if (!this.resurs) return 'Лампа перегорела';
        if (!this.on) this.resurs--
        this.on = !this.on;
    },
    setResurs: function(r){
        if (isNaN(r)) return;
        if (r<=0) return;
        this.resurs = r;
    }
};

/*console.log(lamp.power);
console.log(lamp['c']);*/

/*let calc = {
    history:[],
    add:function(a, b) {
        let c = a+b;
        this.history.push('${this.prov(a)} + ${this.prov(b)} = ${this.prov(a)+this.prov(b)}');
        return this.prov(a)+this.prov(b);
    },
    prov: function(a){
        if(!isNaN(a)) return +a;
    }
}*/

/*
console.log (user.name);
dobavit user.email = 'name@gmail.com';
udalit  delete user.age;
user.name = 'Bob'; obnovit
if ('name' in user) {
    console.log ('св-во существует');
} else {
    console.log('Св-во не существует');
}
proverit est li vyrazhenie

if (user.blablabla === undefined){
    console.log('Св-во не существует')
}


sozdaem klon

userClone = {};
for (Let keyName in user) {
    userClone [keyName] = user[keyName];
}


let user = {
    name: 'Ivan',
    email: 'name@gmail.com',
    age:28,
    hello: function (){
        alert('Привет');
    }
}
console.log (user);



Let Calc = function () {
    this.get = function() {
    this.a = +promt('Введите число а');
    this.b = +promt('Введите число b');
    this.oper = promt('Введите операцию: +, -, *, %');
   
    this.operation ();
};
    this.operation= function () {
        switch (this.oper) {
            case '+':
                this.show = this.a + this.b;
                break;
        case '-':
                this.show = this.a - this.b;
                break;
    case '*':
                this.show = this.a * this.b;
                break;
                case '%':
                this.show = this.a % this.b;
                break;
                default: this.result = 0;
        }
    this.result= function () {
        alert (this.a + ' ' + this.oper + ' ' + this.b + '=' + this.show);
    };
};

Let calc = new Calc ();
calc.get();

*/

/*Калькулятор. Возможные методы: вкл/выкл калькулятора, получение выражения для
расчета или, а и б числа с операцией, вычисление выражения, показ результата расчета.*/

/*let Calc = function () {
    this.get = function () {
        this.a = +promt ('Введите число а');
        this.b = +promt ('Введите число b');
        this.oper = promt ('Введите операцию: +, -, *, /');
    }
        this.operation();
    };
    this.operation = function () {
        switch (this.oper) {
            case '+':
                this.show = this.a + this.b;
                break;
            case '-':
                this.show = this.a - this.b;
                break;
            case '*':
                this.show = this.a * this.b;
                break;
            case '%':
                this.show = this.a / this.b;
                break;
        };
            deafult: this.result = 0;
        };
        this.result = function () {
            alert(this.a + ' ' + this.oper + ' ' + this.b + '=' + this.show);
        };
    if (result = '') { 
        console.log ('Калькулятор включен');
    } else {
        console.log ('Калькулятор выключен');
    }

let calc = new Calc ('Новый калькулятор');
calc.get(); */


/*Лампочка. Возможные методы: ввод информации о лампочке (мощность, стоимость
электроэнергии), вкл./выкл. лампочки, получение расхода за горение лампочки,
счетчик горения лампочки.*/

/*let Lightbulb = function (name) {
 
    this.get = function () {
        this.name = name;
        this.power = +prompt('Введите мощность лампочки, Вт');
        this.costEnergy = 0.934; 
        if (confirm('Включить лампочку?')) {
            this.workTime = +prompt('Сколько времени работает лампочка? , ч');
        } else {
            this.workTime = 0;
        };
 
        this.operation();
    };
 
    this.operation = function () {
        this.result = (this.power / 1000) * this.costEnergy * this.workTime;
 
        this.show();
    };
 
    this.show = function () {
 
        if (this.workTime == 0 || this.workTime == undefined) {
            console.log('Лампочка "' + this.name + '" не включена');
        } else {
            console.log('Лампочка "' + this.name + '" проработала - ' + this.workTime + 'ч, и стоимость потраченой электроэнергии составляет = ' + this.result + 'р.');
        }
    };
};
 
let lightBulb = new Lightbulb('Спальня');
lightBulb.get();
 
let lightBulb2 = new Lightbulb('Коридор');
lightBulb2.get();
 
let lightBulb3 = new Lightbulb('Зал');
lightBulb3.get();
 
let totalCost = lightBulb.result + lightBulb2.result + lightBulb3.result;
 
console.log('Всего стоимость потраченной электроэнергии составляет - ' + totalCost + 'р');*/

/*Чайник. Возможные методы: ввод инф. о чайнике (мощность, объем, кол-во воды),
вкл./выкл., расчет времени закипания воды.*/


/*let Lightbulb = function (name) {
 
    this.get = function () {
        this.name = name;
        this.power = +prompt('Введите мощность чайника, КВт');
        this.tn = +prompt('Введите начальную температуру воды, Градусы');
        this.v = 5; 
        this.tk = 100; 
        if (confirm('Включить Чайник?')) {
            this.k = +prompt('Введите количество воды в чайнике, но не более 5 Л');;
        } else {
            this.workTime = 0;
        };
 
        this.operation();
    };
 
    this.operation = function () {
        this.result = 0.00117*(this.v-this.k)*(this.tk-this.tn)%this.power;
    };
};
 
let lightBulb = new Lightbulb('всего');
lightBulb.get();
 
let totalCost = lightBulb.result;
 
console.log('Время закипания воды составляет с. =' + totalCost + ' с.');*/


/*Автомобиль. Возможные методы: ввод информации об авто (марка, номер), вкл./выкл.
двигателя, вкл./выкл. передачи (вперед, назад, нейтральная), движение вперед и назад
(ввод информации о скорости движения), расчет пройденных километров.*/

/*let car = function (name) {
    
    this.get = function () {
        this.name = name;
    this.marka = prompt('Введите марку автомобиля');
    this.nomer = prompt('Введите его регистрационный знак');
    this.peredacha = prompt('Введите передачу: нейтральная, вперед или назад');
    if (confirm('Машины завелась')) {
        this.d = +prompt('Введите куда поедем: вперед или назад, именно указать скорость движения в км/ч');
        this.t = +prompt('Введите время нашей поездет в ч');
} else {
    alert ('Машины незавелась');
};
this.operation ();
};

this.operation = function () {
this.result = this.t * this.d;
};
}


let Car = new car('всего');
Car.get();

let totalCost = Car.result;

console.log('Едем мы на автомобиле марки '+ Car.marka + ', регистрационный знак ' + Car.nomer + ', к тому же включена передача: ' + Car.peredacha + ', в итоге с учетом нашей скорости и времени поездки расстояние составило: ' + totalCost + ' км.');*/

/*Контакты. Возм. методы: добавление нового контакта (ввод ФИО, возраст, телефон, эл.
почта), проверка введенной информации, например: проверить возраст – должен быть
целым неотрицательным числом больше 18, вывод информации о конкретном
контакте, вывод всех контактов.*/

let Contacts = function(name) {
    this.get = function() {s
        this.fio = prompt('введите ФИО, андреев адрей андреевич');
        this.age = +prompt('введите возраст');
        this.number = +prompt('введите телефон, 6599878');
        this.email = prompt('введите почту')
        this.contactsprov[this.prov] = this.arr;
    } 

}
