import { motion } from "framer-motion";
import Deep from "../../assets/Icons/deep-learning.svg";
import Learn from "../../assets/Icons/learning-app.svg";

const roadmap = [
  {
    quarter: "Q1 2026",
    icon: Deep,
    title: "MVP Launch",
    points: [
      "Core platform",
      "Smart wallets",
      "Basic tipping",
      "User testing",
    ],
  },
  {
    quarter: "Q3 2026",
    icon: Learn,
    title: "Key Integrations",
    points: [
      "Payment partners",
      "API v2.0 launch",
      "Mobile apps",
      "Platform SDKs",
    ],
  },
  {
    quarter: "Q4 2026",
    icon: "📈",
    title: "Scale & Growth",
    points: [
      "Global launch",
      "Advanced features",
      "Enterprise tools",
      "Multi-chain support",
    ],
  },
];

const JourneyRoadmap = () => {
  return (
    <section className="relative py-24 bg-slate-950 text-white mt-10">
      <h2 className="text-center text-4xl font-bold mb-20">
        Our Journey Ahead
      </h2>

      
      <div className="hidden md:block absolute left-1/2 top-40 h-[75%] w-[2px] bg-slate-700 -translate-x-1/2" />

      <div className="space-y-24 max-w-6xl mx-auto px-6">
        {roadmap.map((item, index) => {
          const isLeft = index % 2 === 0;

          return (
            <div
              key={index}
              className={`flex flex-col md:flex-row ${
                isLeft ? "md:justify-start" : "md:justify-end"
              } relative`}
            >
              
              <div className="hidden md:block absolute left-1/2 top-8 h-4 w-4 bg-teal-100 rounded-full -translate-x-1/2 z-10" />

              <motion.div
                initial={{ opacity: 0, x: isLeft ? -80 : 80 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                viewport={{ once: true }}
                className="bg-slate-900 border border-slate-700 rounded-2xl p-6 w-full md:w-[420px] shadow-lg"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="h-12 w-12 flex items-center justify-center rounded-lg  bg-blue-500  text-xl">
                    <img src={item.icon} className="h-10 "  alt="" /> 
                  </div>
                  <span className="text-white font-semibold">
                    {item.quarter}
                  </span>
                </div>

                <h3 className="text-xl font-bold mb-3">
                  {item.title}
                </h3>

                <ul className="space-y-2 text-gray-300">
                  {item.points.map((point, i) => (
                    <li key={i} className="flex gap-2">
                      <span className="text-white">•</span>
                      {point}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default JourneyRoadmap;
