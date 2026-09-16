function Card(props) {
    console.log(props.Experience,props)
    return (
        <div className="dev-card">

            <div className="glow-border"></div>

            <div className="img-container">
                <img src={props.img} alt="profile" className="profile-img" />
            </div>

            <h3 className="name">{props.name}</h3>

            <div className="info-box">
                <p><span>ROLE :</span> {props.Roles}</p>
                <p><span>SKILLS :</span> {props.Skills}</p>
                <p><span>EXPERIENCE :</span> {props.Experience}</p>

                <p>
                    <span>STATUS :</span>

                    <span
                        className={
                            props.isOnline
                                ? "status-dot online"
                                : "status-dot offline"
                        }
                    ></span>

                    {props.isOnline ? " Online" : " Offline"}

                </p>
            </div>

        </div>
    )
}

export default Card;

