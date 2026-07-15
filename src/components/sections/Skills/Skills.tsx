import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";

import Shape from "../../../assets/images/Logo.svg";
import SectionTitle from "../../common/SectionTitle";
import SkillCard from "../../ui/SkillCard";
import { skills } from "../../../constants/skills";
import Dot from "../../common/Dot";


function Skills() {


    const sectionRef = useRef(null);


    // Scroll progress của riêng section Skills
    const { scrollYProgress } = useScroll({

        target: sectionRef,

        offset: [
            "start end",
            "end start"
        ]

    });



    // LEFT PARALLAX
    const leftY = useTransform(
        scrollYProgress,
        [0, 1],
        [-80, 80]
    );


    // RIGHT PARALLAX
    const rightY = useTransform(
        scrollYProgress,
        [0, 1],
        [120, -120]
    );



    return (

        <section
            ref={sectionRef}
            id="skills"
            className="skillsTheme py-24 overflow-hidden"
        >


            <SectionTitle title="skills" />



            <div
                className="
                    mt-12 
                    flex 
                    flex-col 
                    items-center 
                    gap-16 

                    lg:flex-row 
                    lg:items-start 
                    lg:justify-between
                "
            >



                {/* LEFT PARALLAX */}


                <motion.div

                    style={{
                        y: leftY
                    }}

                    className="
                        relative 
                        h-[320px] 
                        w-full 
                        max-w-[420px]
                    "

                    initial={{
                        opacity: 0,
                        x: -80
                    }}

                    whileInView={{
                        opacity: 1,
                        x: 0
                    }}

                    viewport={{
                        once: true,
                        amount: 0.3
                    }}

                    transition={{
                        duration: 0.8
                    }}

                >



                    <Dot
                        className="
                            absolute 
                            left-0 
                            top-6
                        "
                    />



                    <motion.div

                        className="
                            absolute
                            left-[150px]
                            top-0

                            h-24
                            w-24

                            border
                            border-[#ABB2BF]
                        "

                        animate={{
                            rotate: [0, 45, 0]
                        }}

                        transition={{
                            duration: 8,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}

                    />



                    <Dot

                        className="
                            absolute 
                            left-[170px] 
                            top-[125px]
                        "

                    />



                    <motion.img

                        src={Shape}

                        alt=""

                        className="
                            absolute 
                            bottom-0 
                            left-4 
                            w-[95px]
                        "

                        animate={{
                            rotate: 360
                        }}

                        transition={{
                            duration: 20,
                            repeat: Infinity,
                            ease: "linear"
                        }}

                    />



                    <motion.div

                        className="
                            absolute 
                            bottom-6 
                            right-6

                            h-14 
                            w-14

                            border 
                            border-[#ABB2BF]
                        "

                        animate={{
                            scale: [
                                1,
                                1.15,
                                1
                            ]
                        }}

                        transition={{
                            duration: 3,
                            repeat: Infinity
                        }}

                    />


                </motion.div>







                {/* RIGHT SKILLS PARALLAX */}



                <motion.div


                    style={{
                        y: rightY
                    }}


                    className="
                        grid 
                        w-full 

                        grid-cols-1 
                        gap-4 

                        sm:grid-cols-2 

                        xl:grid-cols-3
                    "

                >



                    {
                        skills.map((skill, index) => (


                            <motion.div


                                key={skill.title}



                                initial={{
                                    opacity: 0,
                                    y: 60
                                }}



                                whileInView={{
                                    opacity: 1,
                                    y: 0
                                }}



                                viewport={{
                                    once: true,
                                    amount: 0.2
                                }}



                                transition={{

                                    duration: 0.6,

                                    delay: index * 0.12

                                }}



                                whileHover={{

                                    y: -12,

                                    scale: 1.03

                                }}


                            >


                                <SkillCard

                                    title={skill.title}

                                    items={skill.items}

                                />


                            </motion.div>


                        ))
                    }



                </motion.div>



            </div>


        </section>

    );

}


export default Skills;