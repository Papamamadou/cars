import './App.css'
import Card from './assets/Card'
const data = [
  {
  "name": "Toyota Camry",
  "type": "Sedan",
  "gasolineLiter": 60,
  "kindOfTransition": "Automatic",
  "people": 5,
  "pricePerDay": 50,
  "id": "toyota-camry",
  "img": "https://dm-assignment-commonshare.koyeb.app/img/35.png"
  },
  {
  "name": "BMW 3 Series",
  "type": "Sedan",
  "gasolineLiter": 75,
  "kindOfTransition": "Manual",
  "people": 5,
  "pricePerDay": 80,
  "id": "bmw-3-series",
  "img": "https://dm-assignment-commonshare.koyeb.app/img/5.png"
  },
  {
  "name": "Mercedes-Benz C-Class",
  "type": "Sedan",
  "gasolineLiter": 80,
  "kindOfTransition": "Automatic",
  "people": 5,
  "pricePerDay": 90,
  "id": "mercedes-benz-c-class",
  "img": "https://dm-assignment-commonshare.koyeb.app/img/6.png"
  },
  {
  "name": "Tesla Model 3",
  "type": "Sedan",
  "gasolineLiter": 0,
  "kindOfTransition": "Electric",
  "people": 5,
  "pricePerDay": 100,
  "id": "tesla-model-3",
  "img": "https://dm-assignment-commonshare.koyeb.app/img/7.png"
  },
  {
  "name": "Ford Mustang",
  "type": "Sports car",
  "gasolineLiter": 65,
  "kindOfTransition": "Manual",
  "people": 4,
  "pricePerDay": 120,
  "id": "ford-mustang",
  "img": "https://dm-assignment-commonshare.koyeb.app/img/8.png"
  },
  {
  "name": "Porsche 911",
  "type": "Sports car",
  "gasolineLiter": 75,
  "kindOfTransition": "Automatic",
  "people": 4,
  "pricePerDay": 150,
  "id": "porsche-911",
  "img": "https://dm-assignment-commonshare.koyeb.app/img/9.png"
  },
  {
  "name": "Subaru Outback",
  "type": "SUV",
  "gasolineLiter": 70,
  "kindOfTransition": "Automatic",
  "people": 5,
  "pricePerDay": 85,
  "id": "subaru-outback",
  "img": "https://dm-assignment-commonshare.koyeb.app/img/10.png"
  },
  {
  "name": "Toyota Land Cruiser",
  "type": "SUV",
  "gasolineLiter": 85,
  "kindOfTransition": "Automatic",
  "people": 7,
  "pricePerDay": 120,
  "id": "toyota-land-cruiser",
  "img": "https://dm-assignment-commonshare.koyeb.app/img/11.png"
  }]
function App() {

  return (
    <>
        <Card name={data[0].name} img={data[0].img} type={data[0].type} gasolineLiter={data[0].gasolineLiter} people={data[0].people} 
          kindOfTransition={data[0].kindOfTransition} pricePerDay={data[0].pricePerDay}
        />
        <Card name={data[1].name} img={data[1].img} type={data[1].type} gasolineLiter={data[1].gasolineLiter} people={data[1].people} 
          kindOfTransition={data[1].kindOfTransition} pricePerDay={data[1].pricePerDay}
        />
        <Card name={data[2].name} img={data[2].img} type={data[2].type} gasolineLiter={data[2].gasolineLiter} people={data[2].people} 
          kindOfTransition={data[2].kindOfTransition} pricePerDay={data[2].pricePerDay}
        />

    </>
  )
}

export default App









