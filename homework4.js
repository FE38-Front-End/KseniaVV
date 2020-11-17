let entrances = prompt('введите количество подъездов:',"");
let floors = prompt('введите количество этажей:',"");
let flat = prompt('введите количество квартир на этаже:',"");

let apartment = prompt('введите номер квартиры:',"");

function showFloor (entrance, floor, flats, apart)  {
    //кол-во квартир в подъезде
    if((entrance>=1 && entrance <= 10) && (floor>=1 && floor<=25) && (flats>=1 &&flats<=20)) {
        let apartmentInEntrance = Math.ceil(apart/flats);
        let allApartmentsInHouse = entrance * apartmentInEntrance;
        console.log(allApartmentsInHouse);
        //узнаём в каком подъезде квартира
        let entranceInHome = Math.ceil(apartmentInEntrance/floor);
        //узнаём на каком этаже
        let flatOnFloorInEntrance = apartmentInEntrance - ((entranceInHome-1) * floor);
        return "Floor with number:" + apart + " in entrance "+ entranceInHome + " on " + flatOnFloorInEntrance + " floor";
    } else {
        alert("Wrong data");
    }
}
alert(showFloor(entrances,floors,flat,apartment));