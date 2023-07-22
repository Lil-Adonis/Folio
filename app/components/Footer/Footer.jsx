import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="fixed bottom-0 left-0 right-0">
      <div className="relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-1 bg-black" />
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-black" />
        <div className="flex justify-center">
          <motion.div
            className="flex space-x-4 relative"
            initial={{ x: "-100%" }}
            animate={{ x: "100%" }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          >
            <span className="text-3xl font-bold uppercase whitespace-nowrap">
              please enjoy your stay   2023 © ALL RIGHTS RESERVED
            </span>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
