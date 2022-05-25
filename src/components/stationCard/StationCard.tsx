import React, { useState } from 'react';
import classes from './StationCard.module.css';
import Player from '../player/Player';
// images
import arrowLeftIcon from "../../Assets/Images/back-arrow.png";
import switchIcon from "../../Assets/Images/switch.png";

type Radio = {
    name: string;
    frequency: string;
}

const StationCard = () => {
    const [playRadio, setPlayRadio] = useState<Radio>({ name: "", frequency: "" })


    const radioArray: Radio[] = [
        {
            name: "Putin FM",
            frequency: "66,6"
        },
        {
            name: "Dribbble FM",
            frequency: "101,2"
        },
        {
            name: "Doge FM",
            frequency: "99,4"
        },
        {
            name: "Ballads FM",
            frequency: "87,1"
        },
        {
            name: "Maximum FM",
            frequency: "142,2"
        }
    ]


    return (
        <div className={classes.card}>
            <div className={classes["card-header"]}>
                <button>
                    <img src={arrowLeftIcon} alt="" />
                </button>
                <h2>Stations</h2>
                <button>
                    <img src={switchIcon} alt="" />
                </button>
            </div>
            <div className={classes["card-body"]}>
                {
                    radioArray.map((radio, idx) => (
                        <React.Fragment key={idx}>
                            {radio.name === playRadio.name && <Player />}
                            <button
                                className={classes["card-body-row"]}
                                onClick={() => setPlayRadio(radio)}
                            >
                                <span>{radio.name}</span>
                                <span>{radio.frequency}</span>
                            </button>
                        </React.Fragment>
                    ))
                }
            </div>
            <div className={classes["card-footer"]}>
                {(playRadio.name.length > 1) &&
                    <div>
                        <span>currently playing</span>
                        <span>{playRadio.name}</span>
                    </div>}
            </div>
        </div>
    );
};

export default StationCard;