import Content from "./Content";
import './index.css';

function Market() {
    return (
        <div className="businessSection">
            <div className="leftBusinessSection">
                <div className="topSec sec">
                    {/* <div className="secImg"> */}
                        <img src="assets/headSide.svg" alt="headGear" className="secImg"/>
                    {/* </div> */}
                    <div className="secData">
                        <Content title="Digital Marketing" desc="It is a long established fact that a reader will be distracted by the readable content of the page" />
                    </div>
                </div>
                <div className="midSec sec">
                    {/* <div className="secImg"> */}
                        <img src="assets/photoFilm.svg" alt="emailWriting" className="secImg" />
                    {/* </div> */}
                    <div className="secData">
                        <Content title="Email Marketing" desc="It is a long established fact that a reader will be distracted by the readable content of the page" />
                    </div>
                </div>
                
                <div className="lastSec sec">
                    {/* <div className="secImg"> */}
                        <img src="assets/penNib.svg" alt="fountain pen" className="secImg" />
                    {/* </div> */}
                    <div className="secData">
                        <Content title="Business Marketing" desc="It is a long established fact that a reader will be distracted by the readable content of the page" />
                    </div>
                </div>
            </div>
            
            <div className="rightBusinessSection">
                <img src="assets/businessMan.jpg" alt="Business Man" />
            </div>
        </div>
    );
}

export default Market;