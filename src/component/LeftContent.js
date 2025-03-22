
import ListComponent from "./ListComponent";

const LeftContent =()=>{
    return (
        <div className="leftcontent">
           <img src='./Logo.svg' className="logo"/>
           <div className="innercontent">
                <h2>The eWatch with the newest microchip technology</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>
                <button className="btn1">Order now</button>
                <button className="btn2">Explore more</button>
           </div>
           <ListComponent/>
        </div>
    )
}

export default LeftContent;