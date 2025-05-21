import Card from "./Components/Card";
import Filter from "./Components/Filter";
import { listData } from "../Data/DummyData";
import Map from "./Components/Map";

function ListPage() {
  const data = listData;
  return (
    <div className="flex flex-col md:flex-row h-full">
      {/* Map on top for mobile, on right for desktop */}

      {/* Left Section - List & Filter Container */}
      <div className="md:w-3/5 w-full h-full">
        <div className="h-full p-3 flex flex-col gap-12 overflow-y-scroll pb-12">
          <Filter />
          <div className="w-full md:w-2/5 sm:block md:hidden h-72 mt-3 mb-3 bg-[#cfbeba]">
            <Map items={data} />
          </div>
          {data.map((item) => (
            <Card key={item.id} item={item} />
          ))}
        </div>
      </div>

      {/* Right Section - Map Container for desktop */}
      <div className="w-full md:w-2/5 sm:hidden h-300 mt-5 mr-3 bg-[#cfbeba] hidden md:block">
        <Map items={data} />
      </div>
    </div>
  );
}

export default ListPage;
