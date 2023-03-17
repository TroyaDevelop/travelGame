'use strict';

const rooms = [
    {
        name: "Спальное место",
        description: "На полу накидан стог сена, который уже успел просмердется за долгое время, ведь вряд ли его когда-нибудь меняли, а рядом стоит уже переполненный горшок, заменяющий вам туалет.",
        west: null,
        locked: false,
    },

    {
        name: "Тюремная камера",
        description: "Сырые стены местами покрыты слоями плесени, освещаемые единственным лучем лунного света который пробивается сквозь дыру в высоком потолке.",
        west: null,
        east: null,
        locked: false,
    },

    {
        name: "У решетки",
        description: "Стойкий запах мерзкой баланды доносится с кухни, аж до вашей камеры. Ни коменданта, ни охраны нет на своих постах, а во всех соседних камерах царит тишина.",
        east: null,
        locked: false,
    },

    {
        name: "У входа в камеру",
        description: "Факела на стенах едва горят, а коридор выглядит неестественно пустым, без единого патрулирующего стражника.",
        east: null,
        locked: true,
    },
    
];

const map = {
    rooms,
    locName: null,
    locDescription: null,
    currentRoom: null,

    //Инициализация элементов текста названия и описания локации
    init(){
        this.locName = document.querySelector(".room__name");
        this.locDescription = document.querySelector(".room__description");
        this.currentRoom = this.rooms[1];
    },

    methodsInit(){
        document.querySelector(".north").addEventListener("click", event => {
            if(this.currentRoom.hasOwnProperty('north')){
                let nextRoom = this.currentRoom.north;
                if(nextRoom.locked == false){
                    this.currentRoom = this.currentRoom.north;
                this.renderRoom();
                } else {
                    alert("Заперто!");
                };
            } else {
                alert("Тупик!");
            };
        });
        document.querySelector(".east").addEventListener("click", event => {
            if(this.currentRoom.hasOwnProperty('east')){
                let nextRoom = this.currentRoom.east;
                if(nextRoom.locked == false){
                    this.currentRoom = this.currentRoom.east;
                this.renderRoom();
                } else {
                    alert("Заперто!");
                };
            } else {
                alert("Тупик!");
            };
        });
        document.querySelector(".south").addEventListener("click", event => {
            if(this.currentRoom.hasOwnProperty('south')){
                let nextRoom = this.currentRoom.south;
                if(nextRoom.locked == false){
                    this.currentRoom = this.currentRoom.south;
                this.renderRoom();
                } else {
                    alert("Заперто!");
                };
            } else {
                alert("Тупик!");
            };
        });
        document.querySelector(".west").addEventListener("click", event => {
            if(this.currentRoom.hasOwnProperty('west')){
                let nextRoom = this.currentRoom.west;
                if(nextRoom.locked == false){
                    this.currentRoom = this.currentRoom.west;
                this.renderRoom();
                } else {
                    alert("Заперто!");
                };
            } else {
                alert("Тупик!");
            };
        });
    },

    roomsInit(){
        //Тюремная камера
        this.rooms[0].west = this.rooms[1];
        this.rooms[1].east = this.rooms[0];
        this.rooms[1].west = this.rooms[2];
        this.rooms[2].east = this.rooms[1];
        this.rooms[2].west = this.rooms[3];
    },
    

    //Отображение 
    renderRoom(){
        this.locName.textContent = this.currentRoom.name;
        this.locDescription.textContent = this.currentRoom.description;
    },

    //Запуск
    run(){
        this.init();
        this.methodsInit();
        this.roomsInit();
        this.renderRoom();
    },
};

map.run();