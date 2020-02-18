import React from 'react';
import './Cars.css';

// {
//     "mark": "Alfa Romeo",
//     "url": "http://klaksona.net/avtorynok-pmr/auto1006497.html",
//     "model": "156",
//     "title": "Alfa Romeo 1562000г.     \n                        1 000 $",
//     "price": 1000,
//     "year": 2000,
//     "class": "Легковой",
//     "condition": "Хорошее",
//     "fuel": "дизель",
//     "transmission": "5-ти ступ. мех.",
//     "doorsCount": "4/5",
//     "body": "универсал",
//     "color": "",
//     "engine": "Турбодизель",
//     "conditioner": "климат контроль",
//     "audiosystem": "автомагнитола с CD",
//     "mileage": 300000,
//     "engineVolume": 1900,
//     "contactPerson": "55735461",
//     "phoneNumber": "55735461",
//     "description": "+380932920790",
//     "images": [
//       "http://klaksona.net/uploads/auto_foto/0/_1560887529.jpg",
//       "http://klaksona.net/uploads/auto_foto/0/_1560887466.jpg",
//       "http://klaksona.net/uploads/auto_foto/0/_1560887498.jpg"
//     ]
//   }

let cars = [
    {
        "mark": "Alfa Romeo",
        "url": "http://klaksona.net/avtorynok-pmr/auto1006497.html",
        "model": "156",
        "title": "Alfa Romeo 1562000г.     \n                        1 000 $",
        "price": 1000,
        "year": 2000,
        "class": "Легковой",
        "condition": "Хорошее",
        "fuel": "дизель",
        "transmission": "5-ти ступ. мех.",
        "doorsCount": "4/5",
        "body": "универсал",
        "color": "",
        "engine": "Турбодизель",
        "conditioner": "климат контроль",
        "audiosystem": "автомагнитола с CD",
        "mileage": 300000,
        "engineVolume": 1900,
        "contactPerson": "55735461",
        "phoneNumber": "55735461",
        "description": "+380932920790",
        "images": [
          "http://klaksona.net/uploads/auto_foto/0/_1560887529.jpg",
          "http://klaksona.net/uploads/auto_foto/0/_1560887466.jpg",
          "http://klaksona.net/uploads/auto_foto/0/_1560887498.jpg"
        ]
      },
      {
        "mark": "Alfa Romeo",
        "url": "http://klaksona.net/avtorynok-pmr/auto1006497.html",
        "model": "156",
        "title": "Alfa Romeo 1562000г.     \n                        1 000 $",
        "price": 1000,
        "year": 2000,
        "class": "Легковой",
        "condition": "Хорошее",
        "fuel": "дизель",
        "transmission": "5-ти ступ. мех.",
        "doorsCount": "4/5",
        "body": "универсал",
        "color": "",
        "engine": "Турбодизель",
        "conditioner": "климат контроль",
        "audiosystem": "автомагнитола с CD",
        "mileage": 300000,
        "engineVolume": 1900,
        "contactPerson": "55735461",
        "phoneNumber": "55735461",
        "description": "+380932920790",
        "images": [
          "http://klaksona.net/uploads/auto_foto/0/_1560887529.jpg",
          "http://klaksona.net/uploads/auto_foto/0/_1560887466.jpg",
          "http://klaksona.net/uploads/auto_foto/0/_1560887498.jpg"
        ]
      },
      {
        "mark": "Alfa Romeo",
        "url": "http://klaksona.net/avtorynok-pmr/auto987768.html",
        "model": "146",
        "title": "Alfa Romeo 1462000г.     \n                        1 200 $",
        "price": 1200,
        "year": 2000,
        "class": "Легковой",
        "condition": "Хорошее",
        "fuel": "бензин",
        "transmission": "5-ти ступ. мех.",
        "doorsCount": "4/5",
        "body": "хетчбек",
        "color": "",
        "engine": "Бензин",
        "conditioner": "",
        "audiosystem": "",
        "mileage": 100,
        "engineVolume": 1400,
        "contactPerson": "Дмитрий",
        "phoneNumber": "77778271",
        "description": "Продажа, машина находится в Тирасполе. Бензин 1.4 газ не стоял, торг у капота, машина на ходу, лучше звонить, тут смс не читаю.Вайбер, телеграм +37377778271",
        "images": [
          "http://klaksona.net/uploads/auto_foto/0/_1556282465.jpg",
          "http://klaksona.net/uploads/auto_foto/0/_1556282462.jpg"
        ]
      },
      {
        "mark": "Alfa Romeo",
        "url": "http://klaksona.net/avtorynok-pmr/auto978678.html",
        "model": "164",
        "title": "Alfa Romeo 1641987г.     \n                        300 $",
        "price": 300,
        "year": 1987,
        "class": "Легковой",
        "condition": "",
        "fuel": "бензин",
        "transmission": "5-ти ступ. мех.",
        "doorsCount": "4/5",
        "body": "седан",
        "color": "",
        "engine": "Бензин",
        "conditioner": "",
        "audiosystem": "",
        "mileage": 380,
        "engineVolume": 2000,
        "contactPerson": "077813944",
        "phoneNumber": "077813944",
        "description": "Продам как донора. Есть Вайбер .",
        "images": [
          "http://klaksona.net/uploads/auto_foto/0/_1554286339.jpg"
        ]
      },
      {
        "mark": "Alfa Romeo",
        "url": "http://klaksona.net/avtorynok-pmr/auto975749.html",
        "model": "155",
        "title": "Alfa Romeo 1551995г.     \n                        1 000 $ (торг уместен)   \n\n                        (возможен обмен)",
        "price": 1000,
        "year": 1995,
        "class": "Легковой",
        "condition": "Хорошее",
        "fuel": "бензин",
        "transmission": "5-ти ступ. мех.",
        "doorsCount": "4/5",
        "body": "седан",
        "color": "",
        "engine": "Бензин",
        "conditioner": "без кондиционера",
        "audiosystem": "автомагнитола с CD",
        "mileage": 300,
        "engineVolume": 1770,
        "contactPerson": "Виктор",
        "phoneNumber": "77727913",
        "description": "(Twin spark) 16 клап. 2 свечи на цилиндр.   продаю или обмен на nissan serena или минивен.",
        "images": [
          "http://klaksona.net/uploads/auto_foto/0/_1553684501.jpg"
        ]
      },
      {
        "mark": "Alfa Romeo",
        "url": "http://klaksona.net/avtorynok-pmr/auto965646.html",
        "model": "164",
        "title": "Alfa Romeo 1642002г.     \n                        80 $",
        "price": 80,
        "year": 2002,
        "class": "Легковой",
        "condition": "Отличное",
        "fuel": "",
        "transmission": "",
        "doorsCount": "",
        "body": "лимузин",
        "color": "",
        "engine": "Турбодизель",
        "conditioner": "",
        "audiosystem": "",
        "mileage": 2282,
        "engineVolume": 1900,
        "contactPerson": "KOLIA",
        "phoneNumber": "77727666",
        "description": "продам комплект форсунок в отличном состоянийколичестве 4-ех штномер форсунки 0-445-110-002на каждую форсунку имеется тест план,777-27-666 Николай\"так-же имеется насос высокого давления\"",
        "images": [
          "http://klaksona.net/uploads/auto_foto/0/_1551375124.jpg",
          "http://klaksona.net/uploads/auto_foto/0/_1551375104.jpg",
          "http://klaksona.net/uploads/auto_foto/0/_1551375097.jpg",
          "http://klaksona.net/uploads/auto_foto/0/_1551375093.jpg",
          "http://klaksona.net/uploads/auto_foto/0/_1551375086.jpg",
          "http://klaksona.net/uploads/auto_foto/0/_1551375113.jpg"
        ]
      },
      {
        "mark": "Audi",
        "url": "http://klaksona.net/avtorynok-pmr/auto1048467.html",
        "model": "A6",
        "title": "Audi A62003г.     \n                        1 200 $",
        "price": 1200,
        "year": 2003,
        "class": "",
        "condition": "",
        "fuel": "",
        "transmission": "",
        "doorsCount": "",
        "body": "",
        "color": "",
        "engine": "",
        "conditioner": "",
        "audiosystem": "",
        "mileage": 250000,
        "engineVolume": 2500,
        "contactPerson": "q",
        "phoneNumber": "077933303",
        "description": "ауди а6 с5 2.5 tdi вариатор по запчастям 077933303",
        "images": [
          "http://klaksona.net/uploads/auto_foto/0/_1571999737.jpg"
        ]
      },
      {
        "mark": "Audi",
        "url": "http://klaksona.net/avtorynok-pmr/auto1048467.html",
        "model": "A6",
        "title": "Audi A62003г.     \n                        1 200 $",
        "price": 1200,
        "year": 2003,
        "class": "",
        "condition": "",
        "fuel": "",
        "transmission": "",
        "doorsCount": "",
        "body": "",
        "color": "",
        "engine": "",
        "conditioner": "",
        "audiosystem": "",
        "mileage": 250000,
        "engineVolume": 2500,
        "contactPerson": "q",
        "phoneNumber": "077933303",
        "description": "ауди а6 с5 2.5 tdi вариатор по запчастям 077933303",
        "images": [
          "http://klaksona.net/uploads/auto_foto/0/_1571999737.jpg"
        ]
      },
      {
        "mark": "Audi",
        "url": "http://klaksona.net/avtorynok-pmr/auto1048455.html",
        "model": "A6",
        "title": "Audi A61996г.     \n                        1 200 $",
        "price": 1200,
        "year": 1996,
        "class": "",
        "condition": "",
        "fuel": "",
        "transmission": "",
        "doorsCount": "",
        "body": "",
        "color": "",
        "engine": "",
        "conditioner": "",
        "audiosystem": "",
        "mileage": 250000,
        "engineVolume": 2500,
        "contactPerson": "q",
        "phoneNumber": "077933303",
        "description": "ауди а6 с4 2.5 тди седан механика по запчастям 077933303",
        "images": [
          "http://klaksona.net/uploads/auto_foto/0/_1571997550.jpg"
        ]
      },
      {
        "mark": "Audi",
        "url": "http://klaksona.net/avtorynok-pmr/auto1048448.html",
        "model": "A6",
        "title": "Audi A61998г.     \n                        2 500 $ (торг уместен)",
        "price": 2500,
        "year": 1998,
        "class": "",
        "condition": "Хорошее",
        "fuel": "",
        "transmission": "",
        "doorsCount": "",
        "body": "",
        "color": "",
        "engine": "Бензин",
        "conditioner": "",
        "audiosystem": "",
        "mileage": -1,
        "engineVolume": 1800,
        "contactPerson": "ауди",
        "phoneNumber": "077838858",
        "description": "Ауди а6 1998 года. Вложений не требует.",
        "images": [
          "http://klaksona.net/uploads/auto_foto/0/_1571996431.jpeg"
        ]
      },
      {
        "mark": "Audi",
        "url": "http://klaksona.net/avtorynok-pmr/auto1048408.html",
        "model": "A4",
        "title": "Audi A42005г.     \n                        договорная    \n\n                        (возможен обмен)",
        "price": -1,
        "year": 2005,
        "class": "Легковой",
        "condition": "Отличное",
        "fuel": "дизель",
        "transmission": "6-ти ступ. мех.",
        "doorsCount": "4/5",
        "body": "универсал",
        "color": "",
        "engine": "Турбодизель",
        "conditioner": "климат контроль",
        "audiosystem": "автомагнитола с CD",
        "mileage": 1,
        "engineVolume": 2000,
        "contactPerson": "Александр",
        "phoneNumber": "077989113",
        "description": "Автомобиль в отличном состоянии. Вложений не требует. Оригинальный пробег,все сервисные книги,3 оригинальных ключа. Вайбер на номере 069504397",
        "images": [
          "http://klaksona.net/uploads/auto_foto/0/_1571989107.jpg",
          "http://klaksona.net/uploads/auto_foto/0/_1571989234.jpg",
          "http://klaksona.net/uploads/auto_foto/0/_1571988986.jpg",
          "http://klaksona.net/uploads/auto_foto/0/_1571989341.jpg"
        ]
      }
];

function  Cars(props){
 return (
    <ul>
      {props.cars.map((car,index)=>{
         return (
           <ul>
           <li car = {car} />  
           </ul>
         )
      })}
    </ul>
 )
}


export default Cars;