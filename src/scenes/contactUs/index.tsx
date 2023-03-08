import {useForm} from "react-hook-form";
import { SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";
import Contact from "@/assets/ContactUs.png"
import Header from "@/shared/Header";

type Props = {
    setSelectedPage : (value: SelectedPage) => void;
}

const ContactUs = ({setSelectedPage}: Props) => {

    const inputDesign = `mb-5 w-full rounded-lg bg-secondary-100 px-5 py-3 placeholder-white text-white`;

    const {
        register,
        trigger,
        formState: {errors}
     } = useForm();

    const onSubmit = async (e: any ) => {
        const isValid = await trigger();
        if(!isValid){
            e.preventDefault();
        }
    }

  return (
    <section id="contactus" className="mx-auto w-5/6 pt-24 pb-32">
        <motion.div onViewportEnter={() => setSelectedPage(SelectedPage.ContactUs)}>
            {/* HEADER */}
            <motion.div
                className="md:w-3/5"
                initial= "hidden"
                viewport={{ once: true, amount: 0.5 }}
                whileInView= "visible"
                transition={{ duration: 0.5 }}
                variants={{
                    hidden: {opacity:0 , x:-50},
                    visible: {opacity:1 , x:0}
                }}
            >
                <Header>
                    <span className="text-primary-300">BE A MEMBER{" "}</span>TO ACHIEVE YOUR GOAL
                </Header>
                <p className="py-5">
                Congue adipiscing risus commodo placerat. Tellus et in feugiat nisl
                sapien vel rhoncus. Placerat at in enim pellentesque. Nulla
                adipiscing leo egestas nisi elit risus sit. Nunc cursus sagittis.
                </p>
            </motion.div>
            {/* CONTACT & IMAGE */}
            <div className="mt-10 justify-between gap-8 md:flex">
            <motion.div
                className="mt-10 basis-3/5 md:mt-0"
                initial= "hidden"
                viewport={{ once: true, amount: 0.5 }}
                whileInView= "visible"
                transition={{ duration: 0.5 }}
                variants={{
                    hidden: {opacity:0 , x:-50},
                    visible: {opacity:1 , x:0}
                }}
            >
                <form 
                target="_blank" 
                onSubmit={onSubmit}
                action="https://formsubmit.co/your@email.com"
                method="POST"
                >
                    <input 
                        className={inputDesign}
                        type="text"
                        placeholder="NAME"
                        {...register("name",{
                            required: true,
                            maxLength: 100
                        })}
                    />
                    {errors.name && (
                        <p className="mt-1 text-primary-300">
                            {errors.name.type === "required" && "Please fill out the form"}
                            {errors.name.type === "maxLength" && "Exceed the field char"}
                        </p>
                    )}
                    <input
                    className={inputDesign}
                    type="text"
                    placeholder="EMAIL"
                    {...register("email",{
                        required:true,
                        pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    })}
                    />
                    {errors.email && (
                        <p className="mt-1 text-primary-300">
                            {errors.email.type === "required" && "Please fill out the form"}
                            {errors.email.type === "pattern" && "Invalid email adress"}
                        </p>
                    )}
                    <textarea 
                    className={inputDesign} 
                    placeholder="MESSAGE" 
                    cols={50} 
                    rows={4}
                    {...register("message",{
                        required: true,
                        maxLength: 2000
                    })} />
                    {errors.message&&(
                        <p className="mt-1 text-primary-300">
                            {errors.message.type === "required" &&
                            "Please fill out the form"}
                            {errors.message.type === "maxLength" &&
                            "Exceed the field char"}
                        </p>
                    )}
                    <button
                        type="submit"
                        className="mt-5 rounded-lg bg-secondary-500 px-20 py-3 transition duration-500 hover:text-white font-bold"
                    >
                        SEND
                    </button>                   
                </form>                
            </motion.div>
            <motion.div
                className="relative mt-16 basis-2/5 md:mt-0"
                initial= "hidden"
                viewport={{ once: true, amount: 0.5 }}
                whileInView= "visible"
                transition={{ duration: 0.5 }}
                variants={{
                    hidden: {opacity:0 , y:50},
                    visible: {opacity:1 , y:0}
                }}
            >
                <div className="w-full before:absolute before:-bottom-20 before:-right-10 before:z-[-1] md:before:content-edutext">
                    <img className="w-full" src={Contact} alt="contact-image" />
                </div>
            </motion.div>
            </div>
        </motion.div>
    </section>
  )
}

export default ContactUs