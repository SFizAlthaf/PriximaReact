function Review(){
    return (
        <div className="reviewSection">
        <div className="review">
            <img src="assets/ceo1.jpg" alt="CEO" className="reviewCEO"/>
            <p className="name">Ralph Edwards</p>
            <p className="desig">Market Development Manager</p>
            <p className="dataCEO">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem excepturi assumenda pariatur officiis quo! Corrupti culpa alias, pariatur qui est sequi, iure voluptas ad dolorem doloribus eaque doloremque! Quo, vero?
            </p>
            <div className="starcase">
                <img src="assets/star.svg" alt="star"/>
                <img src="assets/star.svg" alt="star"/>
                <img src="assets/star.svg" alt="star"/>
                <img src="assets/star.svg" alt="star"/>
                <img src="assets/star.svg" alt="star"/>
            </div>
        </div>
    </div>
    );
}

export default Review;