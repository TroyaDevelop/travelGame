'use strict';

const rooms = [
    {
        id: 1,
        name: "Спальное место",
        description: "На полу накидан стог сена, который уже успел просмердется за долгое время, ведь вряд ли его когда-нибудь меняли, а рядом стоит уже переполненный горшок, заменяющий вам туалет.",
        west: null,
        locked: false,
    },

    {
        id: 2,
        name: "Тюремная камера",
        description: "Сырые стены местами покрыты слоями плесени, освещаемые единственным лучем лунного света который пробивается сквозь дыру в высоком потолке.",
        west: null,
        east: null,
        locked: false,
    },

    {
        id: 3,
        name: "У решетки",
        description: "Ни коменданта, ни охраны нет на своих постах, а во всех соседних камерах царит тишина.",
        east: null,
        locked: false,
    },

    {
        id: 4,
        name: "У входа в камеру",
        description: "Факела на стенах едва горят, а коридор выглядит неестественно пустым, без единого патрулирующего стражника. Напротив вас еще одна камера.",
        east: null,
        west: null,
        locked: false,
    },
    
    {
        id: 5,
        name: "У решетки",
        description: "Ни коменданта, ни охраны нет на своих постах, а во всех соседних камерах царит тишина.",
        east: null,
        west: null,
        locked: false,
    },

    {
        id: 6,
        name: "Тюремная камера",
        description: "С потолка назойливо падают капли воды, образовав грязную лужу на полу.",
        east: null,
        west: null,
        locked: false,
    },
    
    {
        id: 7,
        name: "Спальное место",
        description: "Пустой горшок стоит в углу, вместе с нетронутым стогом сена, который все еще ожидает того, кому он заменит постель на долгие годы.",
        east: null,
        locked: false,
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

    methodsInit() {
        const directions = ["north", "east", "south", "west"];
        directions.forEach(direction => {
            const button = document.querySelector(`.${direction}`);
            button.addEventListener("click", () => {
                if (this.currentRoom.hasOwnProperty(direction)) {
                    const nextRoom = this.currentRoom[direction];
                    if (!nextRoom.locked) {
                        this.moveToRoom(nextRoom);
                    } else {
                        alert("Заперто!");
                    }
                } else {
                    alert("Тупик!");
                }
            });
        });
    },

    moveToRoom(nextRoom) {
        this.currentRoom = nextRoom;
        this.renderRoom();
    },

    roomsInit(){
        //Тюремная камера
        this.rooms[0].west = this.rooms[1];
        this.rooms[1].east = this.rooms[0];
        this.rooms[1].west = this.rooms[2];
        this.rooms[2].east = this.rooms[1];
        //Тюремный коридор
        this.rooms[2].west = this.rooms[3];
        this.rooms[3].east = this.rooms[2];
        this.rooms[3].west = this.rooms[4];
        this.rooms[4].east = this.rooms[3];
        //Камера 2
        this.rooms[4].west = this.rooms[5];
        this.rooms[5].east = this.rooms[4];
        this.rooms[5].west = this.rooms[6];
        this.rooms[6].east = this.rooms[5];
        //Камера 3
        //Камера 4
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