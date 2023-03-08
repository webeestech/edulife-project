import { AdvantageType, SelectedPage } from '@/shared/types'
import { HomeModernIcon, UserGroupIcon, AcademicCapIcon } from '@heroicons/react/24/solid'
import {motion} from "framer-motion"
import Header from "@/shared/Header"
import Advantage from './Advantage'
import ActionButton from '@/shared/ActionButton'
import BenefitPage from '@/assets/BenefitPage.png'

const advantages: Array<AdvantageType>= [
  {
    icon: <HomeModernIcon className='h-6 w-6' />,
    title: "This is the Title 1",
    description: "Eu ipsum id egestas risus tempus enim semper felis quis. Nec consectetur ac venenatis facilisi est. Eget ac turpis id."
  },
  {
    icon: <UserGroupIcon className='h-6 w-6' />,
    title: "This is the Title 2",
    description: "Eu ipsum id egestas risus tempus enim semper felis quis. Nec consectetur ac venenatis facilisi est. Eget ac turpis id."
  },
  {
    icon: <AcademicCapIcon className='h-6 w-6' />,
    title: "This is the Title 3",
    description: "Eu ipsum id egestas risus tempus enim semper felis quis. Nec consectetur ac venenatis facilisi est. Eget ac turpis id."
  },
]

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 }
  }
}

type Props = {
  setSelectedPage : (value: SelectedPage) => void;
}

const Advantages = ({setSelectedPage}: Props) => {
  return (
    <section id='advantages' className='mx-auto min-h-full w-5/6 py-20'>
      <motion.div onViewportEnter={() => setSelectedPage(SelectedPage.Advantages)}>
        {/* HEADER */}
        <motion.div className='md:my-5 md:w-3/5'
          initial = "hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{duration: 0.5}}
          variants={{
              hidden: { opacity:0, x:-50},
              visible: { opacity:1, x:0}
          }}>
            <Header>THE BEST WAY TO LEARN</Header>
            <p className='my-5 text-sm'>
              We help our students with equipments, teachers and classes to
              get you to your ultimate college goals with ease. We provide true
              care into each and every member.
            </p>
        </motion.div>
        {/* ADVANTAGES */}
        <motion.div className='mt-5 items-center justify-between gap-8 md:flex'
            initial="hidden"
            whileInView="visible"
            viewport={{ once:true, amount: 0.5 }}
            variants={ container}
            >
            {advantages.map((advantage: AdvantageType) => (
              <Advantage
                key={advantage.title}
                icon={advantage.icon}
                title={advantage.title}
                description={advantage.description}
                setSelectedPage={setSelectedPage}
              />
            ))}
        </motion.div>
        {/* IMAGE AND DESCRIPTION */}
        <div className='mt-16 items-center justify-between gap-20 md:mt-28 md:flex'>
          {/* IMAGE */}
          <img className='mx-auto' src={BenefitPage} alt="benefit-page" />
          {/* DESCRIPTION */}
          <div>
            {/* TITLE */}
            <div className='relative'>
              <div className='before:absolute before:-top-20 before:-left-20 
              before:z-[1] before:content-arrow'>
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once:true, amount:0.5 }}
                  transition={{duration: 0.5}}
                  variants={{
                    hidden: { opacity:0 , x:50 },
                    visible: { opacity: 1, x:0 }
                  }}
                >
                  <Header>
                      THOUSANDS OF STUDENTS ARE{" "} <span className='text-primary-300'>HAPPY</span>
                  </Header>
                </motion.div>
              </div>
            </div>
            {/* TEXT */}
            <motion.div
               initial="hidden"
                  whileInView="visible"
                  viewport={{ once:true, amount:0.5 }}
                  transition={{delay:0.2 ,duration: 0.5}}
                  variants={{
                    hidden: { opacity:0 , x:50 },
                    visible: { opacity: 1, x:0 }
                  }}
            >
              <p className='my-5'> 
                Nascetur aenean massa auctor tincidunt. Iaculis potenti amet
                egestas ultrices consectetur adipiscing ultricies enim. Pulvinar
                fames vitae vitae quis. Quis amet vulputate tincidunt at in
                nulla nec. Consequat sed facilisis dui sit egestas ultrices
                tellus. Ullamcorper arcu id pretium sapien proin integer nisl.
                Felis orci diam odio.
              </p>
              <p className='mb-5'>
                Fringilla a sed at suspendisse ut enim volutpat. Rhoncus vel est
                tellus quam porttitor. Mauris velit euismod elementum arcu neque
                facilisi. Amet semper tortor facilisis metus nibh. Rhoncus sit
                enim mattis odio in risus nunc.
              </p>
            </motion.div>
            {/* BUTTON */}
            <div className='relative mt-16'>
              <div className='before:absolute before:-bottom-10 before:left-40 before:z-[1]
              before:content-geo'>
                <ActionButton setSelectedPage={setSelectedPage}>
                    Join Now
                </ActionButton>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default Advantages