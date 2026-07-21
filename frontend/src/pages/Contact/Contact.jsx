import ContactHero from "../../components/contact/ContactHero";
import ContactInfo from "../../components/contact/ContactInfo";
import ContactForm from "../../components/contact/ContactForm";
import GoogleMap from "../../components/contact/GoogleMap";
import FAQ from "../../components/contact/FAQ";
import ContactCTA from "../../components/contact/ContactCTA";


const Contact = () => {
    return (
        <>
            <ContactHero />
            <ContactInfo />
            <ContactForm />
            <GoogleMap />
            <FAQ />
            <ContactCTA />
        </>
    );
};

export default Contact;