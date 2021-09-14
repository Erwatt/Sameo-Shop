import React from 'react';
import Cart from './Cart';
import ShoppingList from './SoppingList';
import Services from '../services';
import {useState, useEffect} from 'react';
import '../CSS/Room.scss';
import warning from '../Images/warning.png';
// import alarm from '../Audio/alarme.wav';

function Room({room, cart, updateCart, selectValue, setSelectValue}){
    const [isLocked, setIsLocked] = useState(false);
    // const audio = new Audio(alarm);
    // const playSound = () => {
    //     audio.play();
    // };
    

    useEffect(() => {
        Services.isLocked(room)
            .then((res) => setIsLocked(res.data.isLocked));

        const interval = setInterval(() => {
            Services.isLocked(room)
                .then((res) => setIsLocked(res.data.isLocked));
        }, 10000);

        return () => clearInterval(interval);

    }, [room]);

    // useEffect(() => {
    //     if (isLocked){
    //         playSound();
    //     };

    // },[audio, isLocked]);

    // console.log(isLocked)

    return !isLocked ? (
        <div className="shop">
            <Cart cart={cart} updateCart={updateCart}/>
            <div className="list">
              <ShoppingList cart={cart} updateCart={updateCart} selectValue={selectValue} setSelectValue={setSelectValue}/>
            </div>
          </div> 
    ):(
        <div className="room-locked">
            <img src={warning} alt="warning" className="room-locked-img rotation1"/>
            <div className="room-locked-info">
                <p className="room-locked-txt">Votre séance se termine bientôt, nous n'acceptons plus les commandes.</p>
                <p className="room-locked-txt">Merci de vous diriger vers les vestiaires</p>
                <p className="room-locked-txt">A bientôt !!!</p>
                <div className="room-locked-hand">👋</div>
            </div>
            <img src={warning} alt="warning" className="room-locked-img rotation2"/>
        </div>
    ); 
};

export default Room;