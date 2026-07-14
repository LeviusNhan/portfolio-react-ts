import SectionTitle from "../../common/SectionTitle";
import ContactCard from "../../ui/ContactCard";
import { contacts } from "../../../constants/contacts";

function Contacts() {
  return (
    <section
      id="contacts"
      className="contactsTheme py-24"
    >
      <SectionTitle title="contacts" />

      <div className="mt-12 flex flex-col justify-between gap-12 lg:flex-row">

        {/* LEFT */}

        <div className="max-w-[520px]">
          <p className="leading-8 text-[#ABB2BF]">
            I'm interested in freelance opportunities.
            However, if you have other requests or
            questions, don't hesitate to contact me.
          </p>
        </div>

        {/* RIGHT */}

        <div
          className="
            border
            border-[#ABB2BF]
            px-5
            py-4
          "
        >
          <h3 className="mb-5 font-semibold text-white">
            Message me here
          </h3>

          <div className="space-y-4">
            {contacts.map((item) => (
              <ContactCard
                key={item.value}
                icon={item.icon}
                value={item.value}
                href={item.href}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

export default Contacts;