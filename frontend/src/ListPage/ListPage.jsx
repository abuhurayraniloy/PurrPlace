import Card from "./Components/Card";
import Filter from "./Components/Filter";
import {listData} from '../Data/DummyData'

function ListPage() {
  const data = listData;
  return (
    <div className="flex h-full">
      {/* Left Section - List Container */}
      <div className="flex-[3] h-full">
        <div className="h-full pr-12 flex flex-col gap-12 overflow-y-scroll pb-12">
          <Filter />
          {data.map((item) => (
            <Card key={item.id} item={item} />
          ))}
        </div>
      </div>

      {/* Right Section - Map Container */}
      <div className="flex-[2] h-full bg-[#fcf5f3] hidden md:block">
        {/* <Map items={data} /> */}
      </div>
    </div>
  );
}

export default ListPage;
