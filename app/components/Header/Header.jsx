import { motion } from "framer-motion";
import {Animations} from "../../animation";

const Header = () => {
  return (
    <div className="relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-1 bg-black" />
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-black" />
      <div className="flex justify-center">
        <motion.div
          className="flex space-x-4 relative"
          initial={{ x: "100%" }}
          animate={{ x: "-100%" }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        >
          <span className="text-3xl font-bold uppercase whitespace-nowrap">
            You're welcome, please enjoy your stay
          </span>
        </motion.div>
      </div>
    </div>
  );
};

export default Header;
