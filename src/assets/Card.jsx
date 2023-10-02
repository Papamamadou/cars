import './Card.css';
function Card(props){
    return (
    
        <div className='Card'>
            <div className='containerCard'>
            <img src={props.img}></img>
            <h2>{props.name}</h2>
            <h3>Type : {props.type}</h3>
            <h3>Nbre de place : {props.people}</h3>
            <h3>Nbre de kilometre-heure : {props.gasolineLiter} KM/H</h3>
            <h3>Transmission : {props.kindOfTransition}</h3>
            <h3>Prix par jour : {props.pricePerDay} Drmh</h3>
            <h3></h3>
            <button>Rent it now</button>
           {
           /*  <h4>Description</h4>
            <p>Lorem ipsum dolor sit amet,adipisicing elit,do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. </p>
                <div className='items'>

                <img src='./img/bat.png' className='bat'></img> Etat 98%
                <img src='./img/Diesel.png'className='dies'></img> Essence
                <img src='./img/dis.png' className='dis'></img> moins de 4 000 km

                </div>
            
        */}

            </div>
        </div>
   )
}


export default Card;