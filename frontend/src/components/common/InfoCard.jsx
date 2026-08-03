import { motion } from "framer-motion";

const InfoCard = ({ icon, title, children }) => {

    return (

        <motion.div
            whileHover={{ y: -8 }}
            className="rounded-3xl border bg-white p-8 shadow-sm transition hover:shadow-xl"
        >

            <div className="mb-5 text-blue-600">
                {icon}
            </div>

            <h3 className="mb-4 text-2xl font-bold text-slate-900">
                {title}
            </h3>

            <p className="leading-8 text-slate-600">
                {children}
            </p>

        </motion.div>

    );

};

export default InfoCard;