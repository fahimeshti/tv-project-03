import classes from './Player.module.css';
// images
import radioCoverImg from "../../Assets/Images/cover.jpg";
import minusImg from "../../Assets/Images/minus.png";
import plusImg from "../../Assets/Images/plus.png";

const Player = () => {
    return (
        <div className={classes["card-body-img-box"]}>
            <button className={classes["btn-no-style"]}>
                <img src={minusImg} alt="" />
            </button>
            <span className={classes["radio-image"]}>
                <img src={radioCoverImg} alt="" />
            </span>
            <button className={classes["btn-no-style"]}>
                <img src={plusImg} alt="" />
            </button>
        </div>
    );
};

export default Player;