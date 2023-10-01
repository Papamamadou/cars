import './Card.css';
function Card({props}){
    return (
    
        <div className='Card'>
            <div className='containerCard'>
            <img src={props.img}></img>
            <h2>{props.name}</h2>
           {
            
          /* <h3>Type: Sportive</h3>
            <h4>Description</h4>
            <p>Lorem ipsum dolor sit amet,adipisicing elit,do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. </p>
                <div className='items'>

                <img src='./img/bat.png' className='bat'></img> Etat 98%
                <img src='./img/Diesel.png'className='dies'></img> Essence
                <img src='./img/dis.png' className='dis'></img> moins de 4 000 km

                </div>
            <button>Rent it now</button>
        */}

            </div>
        </div>
   )
}


export default Card;