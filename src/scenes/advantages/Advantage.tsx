import { SelectedPage } from '@/shared/types';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import {motion} from "framer-motion";

const childVariant = {
    hidden: { opacity: 0, scale: 0.9  },
    visible: { opacity:1 , scale: 1 }
}

type Props = {
    icon: JSX.Element;
    title: string;
    description: string;
    setSelectedPage: (value: SelectedPage) => void;
}

const Advantage = ({icon, title, description, setSelectedPage}: Props) => {
  return (
    <motion.div 
        variants={childVariant}
        className='mt-5 rounded-md border-2 border-primary-500 px-5 py-16 text-center'>
        <div className='mb-4 flex justify-center'>
            <div className='rounded-full border-2 border-primary-500 bg-primary-100 p-1'>
                {icon}
            </div>
        </div>
        <h4 className='font-bold'>{title}</h4>
        <p className='my-3'>{description}</p>
        <AnchorLink 
        className='text-sm font-bold text-secondary-500 underline'
        onClick={() => setSelectedPage(SelectedPage.ContactUs)}
        href={`#${SelectedPage.ContactUs}`}>
            <p>Learn More</p>
        </AnchorLink>
    </motion.div>
  )
}

export default Advantage