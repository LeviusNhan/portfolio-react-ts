import { motion } from "motion/react";

import SectionTitle from "../../common/SectionTitle";
import ContactCard from "../../ui/ContactCard";
import { contacts } from "../../../constants/contacts";


function Contacts() {

  return (

    <section
      id="contacts"
      className="contactsTheme py-24 overflow-hidden"
    >

      <SectionTitle title="contacts" />


      <div
        className="
          mt-12 
          flex 
          flex-col 
          justify-between 
          gap-12 

          lg:flex-row
        "
      >



        {/* LEFT */}


        <motion.div

          className="
            max-w-[520px]
          "


          initial={{
            opacity:0,
            x:-80
          }}


          whileInView={{
            opacity:1,
            x:0
          }}


          viewport={{
            once:true,
            amount:0.3
          }}


          transition={{
            duration:0.8,
            ease:"easeOut"
          }}

        >


          <p className="leading-8 text-[#ABB2BF]">

            I'm interested in freelance opportunities.
            However, if you have other requests or
            questions, don't hesitate to contact me.

          </p>


        </motion.div>






        {/* RIGHT */}


        <motion.div


          initial={{
            opacity:0,
            x:80,
            scale:0.9
          }}


          whileInView={{
            opacity:1,
            x:0,
            scale:1
          }}


          viewport={{
            once:true,
            amount:0.3
          }}


          transition={{
            duration:0.8,
            ease:"easeOut"
          }}



          whileHover={{

            y:-8

          }}



          className="
            border
            border-[#ABB2BF]

            px-5
            py-4

            transition
            duration-300

            hover:border-[#C778DD]
            hover:shadow-[0_0_25px_#C778DD40]
          "


        >


          <h3
            className="
              mb-5 
              font-semibold 
              text-white
            "
          >

            Message me here

          </h3>





          <div
            className="
              space-y-4
            "
          >


            {
              contacts.map((item,index)=>(


                <motion.div


                  key={item.value}


                  initial={{
                    opacity:0,
                    x:50
                  }}


                  whileInView={{
                    opacity:1,
                    x:0
                  }}


                  viewport={{
                    once:true
                  }}


                  transition={{

                    duration:0.5,

                    delay:index * 0.15

                  }}


                  whileHover={{

                    x:8

                  }}


                >


                  <ContactCard

                    icon={item.icon}

                    value={item.value}

                    href={item.href}

                  />


                </motion.div>


              ))
            }


          </div>



        </motion.div>



      </div>



    </section>

  );

}


export default Contacts;