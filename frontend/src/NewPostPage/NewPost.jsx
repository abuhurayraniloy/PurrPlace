import { useState } from "react";

function NewPostPage() {
  const [formData, setFormData] = useState({});
  // Handle input changes for all fields
  const handleChange = (e) => {
    const { name, value, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "number" ? (value === "" ? "" : Number(value)) : value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    // For now, just log the formData
    console.log(formData);
  };

  return (
    <div className="h-full flex justify-between gap-5 bg-[#fcf5f3]">
      {/* Form Container */}
      <div className="overflow-scroll">
        <div className="mt-[30px] ml-[23px] mb-[100px]">
          <h1 className="text-2xl font-bold mb-6">Add New Post</h1>
          <form className="flex justify-center flex-wrap gap-5" onSubmit={handleSubmit}>
            {/* Field Items */}
            {[
              ["Title", "title", "text", { placeholder: "Ex: PurCar Hotel" }],
              ["Price", "price", "number", { placeholder: "Ex:100.50" }],
              [
                "Address",
                "address",
                "text",
                { placeholder: "Ex: 123 Main St" },
              ],
              ["City", "city", "text", { placeholder: "Ex: New York" }],
              ["Total Number", "total", "number", { min: 1 }],
              ["Latitude", "latitude", "text", { placeholder: "Ex: 40.7128" }],
              [
                "Longitude",
                "longitude",
                "text",
                { placeholder: "Ex: -74.0060" },
              ],
              [
                "Income Policy",
                "income",
                "text",
                { placeholder: "Ex: Car Insurance" },
              ],
              [
                "Total Size (sqft)",
                "size",
                "number",
                { min: 0 },
                { placeholder: "Ex: 1000" },
              ],
              [
                "Total Seat",
                "total_seat",
                "number",
                { min: 0 },
                { placeholder: "Ex: 4" },
              ],
              [
                "School",
                "school",
                "number",
                { min: 0 },
                { placeholder: "Ex: 1" },
              ],
              ["Bus", "bus", "number", { min: 0 }, { placeholder: "Ex: 1" }],
              [
                "Restaurant",
                "restaurant",
                "number",
                { min: 0 },
                { placeholder: "Ex: 1" },
              ],
            ].map(([labelText, id, type, ...extraPropsArr]) => {
              // Merge extraProps if multiple objects are present
              const extraProps = Object.assign({}, ...extraPropsArr);
              return (
                <div key={id} className="w-[30%] flex flex-col gap-1">
                  <label htmlFor={id}>{labelText}</label>
                  <input
                    id={id}
                    name={id}
                    type={type}
                    className="p-5 rounded-md border border-gray-400"
                    {...extraProps}
                    value={formData[id] ?? ""}
                    onChange={handleChange}
                  />
                </div>
              );
            })}

            {/* Description */}
            <div className="w-full h-[320px] m-14 flex flex-col gap-1">
              <label htmlFor="desc">Description</label>
              <textarea
                id="desc"
                name="desc"
                className="h-[200px] text-base border border-gray-400 rounded-md p-4 resize-none"
                value={formData.desc ?? ""}
                onChange={handleChange}
              />
            </div>

            {/* Select fields */}
            <div className="w-[30%] flex flex-col gap-1">
              <label htmlFor="type">Type</label>
              <select
                name="type"
                id="type"
                className="p-[19px] border border-gray-400 rounded-md"
                value={formData.type ?? "nac"}
                onChange={handleChange}
              >
                <option value="ac">Ac</option>
                <option value="nac">Non-AC</option>
              </select>
            </div>

            <div className="w-[30%] flex flex-col gap-1">
              <label htmlFor="utilities">Utilities Policy</label>
              <select
                name="utilities"
                id="utilities"
                className="p-[19px] border border-gray-400 rounded-md"
                value={formData.utilities ?? "owner"}
                onChange={handleChange}
              >
                <option value="">Select</option>
                <option value="owner">Hotel Owner is responsible</option>
                <option value="tenant">Pet owner is responsible</option>
                <option value="shared">Shared</option>
              </select>
            </div>

            <div className="w-[30%] flex flex-col gap-1">
              <label htmlFor="pet">Pet Policy</label>
              <select
                name="pet"
                id="pet"
                className="p-[19px] border border-gray-400 rounded-md"
                value={formData.pet ?? "cat"}
                onChange={handleChange}
              >
                <option value="">Select</option>
                <option value="cat">Only Cat's Allowed</option>
                <option value="dog">Only Dog's Allowed</option>
                <option value="others">Others Allowed</option>
              </select>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-[30%] rounded-md border-none bg-teal-600 text-white font-bold cursor-pointer py-3 mt-3"
            >
              Add
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default NewPostPage;
