import Navbar from "../../components/layout/Navbar/Navbar";
import Footer from "../../components/layout/Footer/Footer";
import SidebarSocial from "../../components/layout/SidebarSocial/SidebarSocial";

import ContactHero from "../../components/sections/Contacts/ContactHero";
import ContactForm from "../../components/sections/Contacts/ContactForm";
import ContactInfo from "../../components/sections/Contacts/ContactInfo";
import SocialLinks from "../../components/sections/Contacts/SocialLinks";

function Contact() {
  return (
    <main className="min-h-screen text-white mx-auto w-full max-w-[1140px] px-4 lg:px-6">
      <Navbar />
      <SidebarSocial />
        <div className="mx-auto max-w-7xl lg:px-8 pt-40 pb-28">
          <ContactHero />
          <div className="mt-20 grid gap-12 lg:grid-cols-[1fr_360px]">
            <ContactForm />
            <div className="space-y-8">

              <ContactInfo />
              <SocialLinks />

            </div>
          </div>
        </div>
      <Footer />
    </main>
  );
}

export default Contact;