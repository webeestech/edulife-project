import useMediaQuery from "@/hooks/useMediaQuery";
import ActionButton from "@/shared/ActionButton";
import { SelectedPage } from "@/shared/types";
import HomePage from "@/assets/HomePage.png";
import Harvard from "@/assets/harvard.png";
import Princeton from "@/assets/princeton.png";
import Standford from "@/assets/standford.png";
import Oxford from "@/assets/oxford.png";
import Edinburgh from "@/assets/edinburgh.png";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { motion } from "framer-motion";

type Props = {
    setSelectedPage:  (value: SelectedPage) => void;
}

const Home = ({ setSelectedPage }: Props) => {
    const isAboveMediumScreen = useMediaQuery("(min-width: 1060px)");
  return (
    <section id="home" className="gap-16 bg-primary-100 py-10 md:h-full md:pb-0">
        {/* IMAGE - MAIN */}
        <motion.div className="md:flex mx-auto w-5/6 items-center justify-center md:h-5/6"
            onViewportEnter={() => setSelectedPage(SelectedPage.Home)}
            >
            {/* MAIN */}
            <div className="z-10 mt-32 md:basis-3/5">
                {/* HEADING */}
                <motion.div className="md:-mt-20"
                    initial = "hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{duration: 0.5}}
                    variants={{
                        hidden: { opacity:0, x:-50},
                        visible: { opacity:1, x:0}
                    }}
                >
                    <div className="relative">
                        <div className="before:absolute before:-top-24 before:-left-20 before:z-[-1]
                        md:before:content-edutext">
                            <h1 className="md:text-8xl text-7xl text-secondary-100 font-semibold">EDULIFE</h1>
                            <p className="md:text-5xl text-4xl font-light ">new way to learn</p>
                        </div>
                    </div>
                    <p className="mt-8 text-sm">
                    Edulife helps students to achieve their goals with the easist and the cheapest way. 
                    If you want to be part of this family. You can contact with us.
                    </p>
                </motion.div>
                {/* BUTTONS */}
                <motion.div 
                className="mt-8 flex items-center gap-8"
                initial = "hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{delay:0.2 ,duration: 0.5}}
                variants={{
                    hidden: { opacity:0, x:-50},
                    visible: { opacity:1, x:0}
                }}>
                    <ActionButton setSelectedPage={setSelectedPage}>
                        Join Now
                    </ActionButton>
                    <AnchorLink
                        className="text-sm font-bold text-primary-500 underline hover:text-secondary-500
                        transition duration-300"
                        onClick={() => setSelectedPage(SelectedPage.ContactUs)}
                        href={`#${SelectedPage.ContactUs}`}
                    ><p>Learn More</p></AnchorLink>
                </motion.div>
            </div>
            {/* IMAGE */}
            <div className="flex basis-3/5 justify-center md:z-10 md:ml-40 md:mt-16 mt-10 md:justify-items-end 
            ">
                <img src={HomePage} alt="home-image" />
            </div>            
        </motion.div>
        {/* UNIVERSITIES */}
        {isAboveMediumScreen && (
                <div className="h-[150px] w-full bg-secondary-500">
                    <div className="mx-auto w-5/6">
                        <div className="flex items-center justify-between gap-8 py-16">
                            <img src={Harvard} alt="harvard" />
                            <img src={Princeton} alt="princeton" />
                            <img src={Standford} alt="standford" />
                            <img src={Oxford} alt="oxford" />
                            <img src={Edinburgh} alt="edinburgh" />
                        </div>
                    </div>
                </div>
            )}
    </section>
  )
}

export default Home