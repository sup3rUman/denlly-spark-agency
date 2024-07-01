import { useState } from "react"
import { SpacesInfo } from "../data";


const Spaces = () => {

    const [activeSpace, setActiveSpace] = useState(SpacesInfo[0].id);
    const handleSpaceClick = (spaceId: number) => {
        setActiveSpace(spaceId)
    }

    const activeSpaceContent = SpacesInfo.find(spaces => spaces.id === activeSpace);

    return (
      <div className="p-4 my-12 rounded-xl bg-blue-50">
        <div className="flex p-2 justify-around flex-wrap max-w-4xl mx-auto">
          {SpacesInfo.map((spaces) => (
            <button
              key={spaces.id}
              onClick={() => handleSpaceClick(spaces.id)}
              className={`p-2 my-2 lg:p-4 border border-foreground rounded-full bg-background ${
                activeSpace === spaces.id
                  ? "bg-violet-500/20"
                  : "text-gray-700 hover:bg-accent"
              }`}
            >
              <h1 className="font-OceanlyOceanly tracking-wider">
                {spaces.space}
              </h1>
            </button>
          ))}
        </div>
            {activeSpaceContent && (
                <div className="flex flex-col md:flex-row mt-8 gap-6 md:gap-12">
                <div className="overflow-hidden max-h-72 w-full md:max-w-72 rounded-2xl">
                    <img
                    src={activeSpaceContent.img}
                    alt={activeSpaceContent.space}
                    className="h-full w-full object-cover"
                    />
                </div>
                <div className="flex-1 p-2">
                    <h1 className="font-OceanlyOceanly text-ld md:text-2xl tracking-wide">
                    Here's what our services includes:
                    </h1>
                    <ServicesList services={activeSpaceContent.services} />
                </div>
                </div>
                
            )}
      </div>
    );
}

interface I_ListProps {
    services: {
        list: string
    }[]
}

const ServicesList = ({ services }: I_ListProps) => {
  const columns = [];
  for (let i = 0; i < services.length; i += 4) {
    columns.push(services.slice(i, i + 4));
  }

  return (
    <div className="flex flex-wrap -mx-2">
      {columns.map((column, index) => (
        <div
          key={index}
          className="px-2 w-full sm:w-1/2 mb-4"
        >
          <ul className="space-y-6 mt-4">
            {column.map((service, index) => (
              <li
                key={index}
                className="star-bullet text-sm md:text-md font-[500] text-gray-500"
              >
                {service.list}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};
export default Spaces
