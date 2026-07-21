import {
    MapPin,
    Phone,
    Mail,
    Clock,
} from "lucide-react";

const contactInfo = [
    {
        icon: MapPin,
        title: "Our Location",
        value: "Vapi, Gujarat 396195, India",
    },
    {
        icon: Phone,
        title: "Call Us",
        value: "+91 98765 43210",
    },
    {
        icon: Mail,
        title: "Email Us",
        value: "info@steelnovaindustries.com",
    },
    {
        icon: Clock,
        title: "Working Hours",
        value: "Mon - Sat | 9:00 AM - 6:00 PM",
    },
];

const ContactInfo = () => {
    return (
        <section className="py-16 bg-white">

            <div className="max-w-7xl mx-auto px-6">

                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">

                    {contactInfo.map((item, index) => {
                        const Icon = item.icon;

                        return (
                            <div
                                key={index}
                                className="group rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-md transition-all duration-300 hover:-translate-y-2 hover:border-blue-600 hover:shadow-xl"
                            >

                                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 transition group-hover:bg-blue-600">

                                    <Icon
                                        size={30}
                                        className="text-blue-600 transition group-hover:text-white"
                                    />

                                </div>

                                <h3 className="mt-6 text-xl font-bold text-slate-900">
                                    {item.title}
                                </h3>

                                <p className="mt-3 text-slate-600 leading-7">
                                    {item.value}
                                </p>

                            </div>
                        );
                    })}

                </div>

            </div>

        </section>
    );
};

export default ContactInfo;