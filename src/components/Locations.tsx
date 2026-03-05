import { useState } from "react";
import { motion } from "motion/react";
import { MapPin, ExternalLink } from "lucide-react";

const locations = [
  {
    id: "hk",
    name: "香港總部",
    address: "香港中環德輔道中123號",
    mapLink: "https://maps.google.com",
    coordinates: { x: 71, y: 67 }, // Percentage for map positioning
  },
  {
    id: "gz",
    name: "廣州分部",
    address: "廣州市天河區天河路456號",
    mapLink: "https://maps.google.com",
    coordinates: { x: 35, y: 45 },
  },
  {
    id: "sz",
    name: "深圳分部",
    address: "深圳市南山區深南大道789號",
    mapLink: "https://maps.google.com",
    coordinates: { x: 70, y: 55 },
  },
];

export default function Locations() {
  const [activeLocation, setActiveLocation] = useState(locations[0].id);

  return (
    <section id="locations" className="py-20 md:py-24 bg-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
            服務據點
          </h2>
          <p className="text-lg text-text-secondary">
            我們的服務網絡覆蓋大灣區，為您提供快捷可靠的支援。
          </p>
        </div>

        <div className="grid grid-cols-[repeat(auto-fit,_minmax(200px,_1fr))] lg:grid-cols-2 gap-12 items-center">
          {/* Map Area */}
          <div className="relative aspect-square md:aspect-video lg:aspect-square bg-white rounded-2xl shadow-sm border border-border overflow-hidden">
            {/* Real Map Background */}
            <img
              src="/img/map.png"
              alt="Greater Bay Area Map"
              className="absolute inset-0 w-full h-full object-fit "
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-primary/5"></div>

            {/* Markers */}
            {locations.map((loc) => (
              <button
                key={loc.id}
                onClick={() => setActiveLocation(loc.id)}
                className="absolute transform -translate-x-1/2 -translate-y-1/2 focus:outline-none group"
                style={{
                  left: `${loc.coordinates.x}%`,
                  top: `${loc.coordinates.y}%`,
                }}
              >
                {/* Pulsing effect for active marker */}
                {activeLocation === loc.id && (
                  <span className="absolute inset-0 flex h-full w-full items-center justify-center">
                    <span className="animate-ping absolute inline-flex h-12 w-12 rounded-full bg-primary opacity-30"></span>
                  </span>
                )}
                <div
                  className={`relative flex items-center justify-center w-8 h-8 rounded-full transition-all duration-300 ${activeLocation === loc.id ? "bg-primary text-white scale-125 shadow-lg" : "bg-white text-primary border-2 border-primary hover:scale-110"}`}
                >
                  <MapPin size={16} />
                </div>
                <div
                  className={`absolute top-full left-1/2 -translate-x-1/2 mt-2 px-2 py-1 rounded text-xs font-medium whitespace-nowrap transition-opacity ${activeLocation === loc.id ? "opacity-100 bg-text-primary text-white" : "opacity-0 group-hover:opacity-100 bg-white text-text-primary shadow-sm"}`}
                >
                  {loc.name}
                </div>
              </button>
            ))}
          </div>

          {/* Location Cards */}
          <div className="space-y-4">
            {locations.map((loc) => (
              <motion.div
                key={loc.id}
                onClick={() => setActiveLocation(loc.id)}
                className={`p-6 rounded-2xl cursor-pointer transition-all duration-300 border ${activeLocation === loc.id ? "bg-white border-primary shadow-md transform -translate-y-1" : "bg-transparent border-transparent hover:bg-white/50"}`}
              >
                <div className="flex justify-between items-start">
                  <div>
                    <h3
                      className={`text-xl font-bold mb-2 ${activeLocation === loc.id ? "text-primary" : "text-text-primary"}`}
                    >
                      {loc.name}
                    </h3>
                    <p className="text-text-secondary flex items-start">
                      <MapPin className="w-5 h-5 mr-2 shrink-0 mt-0.5" />
                      {loc.address}
                    </p>
                  </div>
                  {activeLocation === loc.id && (
                    <a
                      href={loc.mapLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-bg rounded-full text-primary hover:bg-primary hover:text-white transition-colors"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <ExternalLink size={20} />
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
