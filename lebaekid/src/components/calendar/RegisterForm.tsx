import { useState } from "react";
import axios from "axios";

const RegisterForm = () => {
const [formData, setFormData] = useState({
    name: "",
    location: "",
    bike_type: "Road Bike", 
    date: "",
    link: "",
    distance: "",
  });

  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      await axios.post("https://lebaek.id/backend/register.php", formData);
      alert("Event registered successfully!");
      setFormData({
        name: "",
        location: "",
        bike_type: "",
        date: "",
        link: "",
        distance: "",
      });
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <section>
      <h1 className="text-xl font-bold">Add an event</h1>
      <form onSubmit={handleSubmit} className="grid p-2 justify-center">
        <input
          className="bg-white p-2 md:w-auto sm:w-md w-auto"
          type="text"
          name="name"
          placeholder="Name of event"
          value={formData.name}
          onChange={handleChange}
        />
        <input
          className="bg-white p-2"
          type="text"
          name="location"
          placeholder="Location"
          value={formData.location}
          onChange={handleChange}
        />
        <label className="bg-white p-2">
          Bike Type for Event: 
          <select
            name="bike_type" 
            value={formData.bike_type} 
            onChange={handleChange}
          >
            <option value="Road Bike">Road Bike</option>
            <option value="MtB">MtB</option>
            <option value="Gravel">Gravel</option> {/* <-- Fixed this value */}
            <option value="Folding">Folding</option>
            <option value="Any">Any</option>
          </select>
        </label>

        <input
          className="bg-white p-2"
          type="date"
          name="date"
          placeholder="Start Date"
          value={formData.date}
          onChange={handleChange}
        />
        <input
          className="bg-white p-2"
          type="text"
          name="link"
          placeholder="External Link"
          value={formData.link}
          onChange={handleChange}
        />
        <input
          className="bg-white p-2"
          type="number"
          name="distance"
          placeholder="Total Distance"
          value={formData.distance}
          onChange={handleChange}
        />
        <button
          type="submit"
          className="text-white bg-blue-400 hover:bg-blue-500 font-medium rounded-lg text-base w-auto py-2.5 m-4 cursor-pointer"
        >
          Register
        </button>
      </form>
    </section>
  );
};

export default RegisterForm;
