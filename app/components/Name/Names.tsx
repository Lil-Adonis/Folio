'use client'
import {motion} from "framer-motion";
import styled from "styled-components";
import {Animations} from "../../animation";

//styles
const NamesStyles = styled(motion.div)`
    text-align: right;
    .name-wrapper{
        overflow: hidden;
        li{
            font-family: Monument;
            font-weight: 600;
            display: inline-block;
            font-size:13vw;
            line-height: 11vw;
            height: 11vw;
            text-transform: uppercase;
            -webkit-text-fill-color: var(--burlywood);
            -webkit-text-stroke: calc(var(--VW)*0.14) var(--black);
            @media (hover: none) and (pointer: coarse){
                font-size:17vw;
                line-height: 16vw;
                height: 16vw;
            }
        }
    }
`

//animations 

const titleParent = {
    hidden: {
        opacity: 1,
    },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 3.5
        }
    }
}

const titleParent2 = {
    hidden: {
        opacity: 1,
    },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 4
        }
    }
}

const titleTextReveal = {
    hidden: {
        y: "120%",
    },
    show: {
        y: "0%",
    }
}

//component
const Names = ()=>{
    const ronnie = ["R", "o", "n", "n", "i", "e"]
    const feng = ["F", "e", "n", "g"];
    const {transition} = Animations();
    return(
        <NamesStyles>
                <motion.ol className="name-wrapper" variants={titleParent} initial="hidden" animate="show">
                {
                    ronnie.map((letter, index)=>{
                        return(
                            <motion.li key={index} variants={titleTextReveal} transition={{...transition, duration: 1}}>{letter}</motion.li>
                        )
                    })
                }
                </motion.ol>
                <motion.ol className="name-wrapper" variants={titleParent2} initial="hidden" animate="show">
                {
                    feng.map((letter, index)=>{
                        return(
                            <motion.li key={index} variants={titleTextReveal} transition={{...transition, duration: 1}}>{letter}</motion.li>
                        )
                    })
                }
                </motion.ol>
        </NamesStyles>
    )
}

export default Names