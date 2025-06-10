import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function AuthorCreate() {
  const [formData, setFormData] = useState({
    nama: "",
    deskripsi: "",
    umur: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Jika umur, pastikan input angka (optional)
    if (name === "umur") {
      // Optional: validasi angka positif
      if (value === "" || /^\d*$/.test(value)) {
        setFormData((prev) => ({ ...prev, [name]: value }));
      }
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:8000/api/authors", {
        ...formData,
        umur: Number(formData.umur),
      });
      navigate("/admin/authors");
    } catch (error) {
      console.error(error);
      alert("Error creating author");
    }
  };

  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="max-w-xl px-4 py-8 mx-auto lg:py-16">
        <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">
          Create New Author
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="nama"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Author Name
            </label>
            <input
              type="text"
              name="nama"
              id="nama"
              value={formData.nama}
              onChange={handleChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-indigo-600 focus:border-indigo-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="deskripsi"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Description
            </label>
            <textarea
              name="deskripsi"
              id="deskripsi"
              value={formData.deskripsi}
              onChange={handleChange}
              rows="4"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-indigo-600 focus:border-indigo-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
              required
            ></textarea>
          </div>
          <div className="mb-4">
            <label
              htmlFor="umur"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Age
            </label>
            <input
              type="number"
              name="umur"
              id="umur"
              value={formData.umur}
              onChange={handleChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-indigo-600 focus:border-indigo-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
              required
              min="0"
            />
          </div>
          <div className="flex items-center space-x-4">
            <button
              type="submit"
              className="text-white bg-indigo-700 hover:bg-indigo-800 font-medium rounded-lg text-sm px-5 py-2.5"
            >
              Create Author
            </button>
            <button
              type="reset"
              onClick={() => setFormData({ nama: "", deskripsi: "", umur: "" })}
              className="text-red-600 border border-red-600 hover:bg-red-600 hover:text-white font-medium rounded-lg text-sm px-5 py-2.5"
            >
              Reset
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
