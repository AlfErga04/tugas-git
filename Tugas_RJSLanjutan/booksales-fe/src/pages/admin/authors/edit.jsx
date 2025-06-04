import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { showAuthor, updateAuthor } from "../../../_service/authors";

export default function AuthorEdit() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    nama: "",
    deskripsi: "",
    umur: "",
    _method: "PUT",
  });

  useEffect(() => {
    const fetchData = async () => {
      const author = await showAuthor(id);
      setFormData({
        nama: author.nama,
        deskripsi: author.deskripsi,
        umur: author.umur,
        _method: "PUT",
      });
    };
    fetchData();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const payload = new FormData();
      for (const key in formData) {
        payload.append(key, formData[key]);
      }
      await updateAuthor(id, payload);
      navigate("/admin/authors");
    } catch (error) {
      console.error(error);
      alert("Gagal update author.");
    }
  };

  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="max-w-2xl px-4 py-8 mx-auto lg:py-16">
        <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">
          Edit Author
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="nama" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Nama
            </label>
            <input
              type="text"
              name="nama"
              id="nama"
              value={formData.nama}
              onChange={handleChange}
              className="w-full p-2.5 rounded-lg border border-gray-300 dark:bg-gray-700 dark:text-white"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="deskripsi" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Deskripsi
            </label>
            <textarea
              name="deskripsi"
              id="deskripsi"
              rows="5"
              value={formData.deskripsi}
              onChange={handleChange}
              className="w-full p-2.5 rounded-lg border border-gray-300 dark:bg-gray-700 dark:text-white"
              required
            ></textarea>
          </div>
          <div className="mb-4">
            <label htmlFor="umur" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Umur
            </label>
            <input
              type="number"
              name="umur"
              id="umur"
              value={formData.umur}
              onChange={handleChange}
              className="w-full p-2.5 rounded-lg border border-gray-300 dark:bg-gray-700 dark:text-white"
              required
            />
          </div>
          <button type="submit" className="px-5 py-2.5 bg-indigo-700 text-white rounded-lg hover:bg-indigo-800">
            Update Author
          </button>
        </form>
      </div>
    </section>
  );
}
