import ServiceContent from "./ServiceContent";
import './index.css';

function Service(){
    return (
        <div className="serviceSection">
            <div className="upperSection">
                <p className="smallSec">OUR SERVICES</p>
                <h1 className="headingSec">What We Do?</h1>
                <p className="paraSec">
                    Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classNameical Latin literature from 45 BC, making it over 2000 years old
                </p>
            </div>

            <div className="lowerSection">
            {/* <!-- the top Row section --> */}
            <div className="topRow row">
                <div className="details">
                    <img src="assets/craneSolid.svg" alt="Crane Solid" className="secImg" />
                    <ServiceContent serviceTitle="Digital Marketing" serviceDesc="Contrary to popular belief. Lorem Ipsum is not simply random text. It has roots in a piece of classNameical Latin literature from" />
                </div>

                <div className="details">
                    <img src="assets/toolSet.svg" alt="Tool Creative" className="secImg" />
                    <ServiceContent serviceTitle="Logo Designing" serviceDesc="Contrary to popular belief. Lorem Ipsum is not simply random text. It has roots in a piece of classNameical Latin literature from" />
                </div>

                <div className="details">
                    <img src="assets/lightBulb.svg" alt="Light Bulb" className="secImg" />
                    <ServiceContent serviceTitle="Buisiness Consulting" serviceDesc="Contrary to popular belief. Lorem Ipsum is not simply random text. It has roots in a piece of classNameical Latin literature from" />
                </div>
            </div>

            {/* <!-- the Second Row section --> */}
            <div className="bottomRow row">
                <div className="details">
                    <img src="assets/photoFilm.svg" alt="Film" className="secImg" />
                    <ServiceContent serviceTitle="Videography" serviceDesc="Contrary to popular belief. Lorem Ipsum is not simply random text. It has roots in a piece of classNameical Latin literature from" />
                </div>

                <div className="details">
                    <img src="assets/penNib.svg" alt="Fountain Pen" className="secImg" />
                    <ServiceContent serviceTitle="Brand Identity" serviceDesc="Contrary to popular belief. Lorem Ipsum is not simply random text. It has roots in a piece of classNameical Latin literature from" />
                </div>

                <div className="details">
                    <img src="assets/headSide.svg" alt="Head Gear" className="secImg" />
                    <ServiceContent serviceTitle="Ethical Hacking" serviceDesc="Contrary to popular belief. Lorem Ipsum is not simply random text. It has roots in a piece of classNameical Latin literature from" />
                </div>
            </div>
        </div>
    </div>
    );
}

export default Service;