import './Header.css'
import Marquee from "react-fast-marquee";

const Header = () => {
  return (
   <div className="announce">
    <Marquee speed={60} gradient={false} pauseOnHover>
    <div className="announce-text text1">
      <span>spend 110 or more for free us shipping</span>
      <span>spend 110 or more for free us shipping</span>
    </div>

    <div className="announce-text text2">
    <span> Dont spend more 110 or more for free us shipping</span>
    <span>whatever you do spend 110 or more for free us shipping</span>
    </div>
    </Marquee>
   
   </div>
  );
};

export default Header;
