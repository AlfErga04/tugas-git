import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getGenres } from "../../../_service/genres";
import { getAuthors } from "../../../_service/authors";
import { showBook, updateBook } from "../../../_service/books";

export default function BookEdit() {
    const {id} = useParams()
    const navigate = useNavigate()

    const [genres, setGenres] = useState([]);
    const [authors, setAuthors] = useState([]);
    const [formData, setFormData] = useState({
        judul:"",
        harga:0,
        stok:0,
        genre_id:0,
        author_id:0,
        cover_photo: null,
        deskripsi:"",
        _method: "PUT",
    });

    useEffect (() => {
        const fetchData = async () => {
            const [genresData, authorsData, bookData] = await Promise.all([
                getGenres(),
                getAuthors(),
                showBook(id)
            ]);

            setGenres(genresData);
            setAuthors(authorsData);
            setFormData({
                judul: bookData.judul,
                harga: bookData.harga,
                stok: bookData.stok,
                genre_id: bookData.genre_id,
                author_id: bookData.author_id,
                cover_photo: bookData.cover_photo,
                deskripsi: bookData.deskripsi,
                _method: "PUT",
            })
        };

        fetchData();
    }, [id])

    const handleChange = (e) => {
        const {name, value, files} = e.target;

        if (name === "cover_photo") {
            setFormData({
                ...formData,
                cover_photo: files[0],

            });
        } else {
            setFormData({
                ...formData,
                [name]: value,
            })
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const payload = new FormData();
            for (const key in formData) {
                if (key === "cover_photo"){
                    if (formData.cover_photo instanceof file){
                        payload.append("cover_photo", formData.cover_photo);
                    }
                } else {
                    payload.append(key,formData[key]);
                }
            }
            await updateBook(id, payload);
        } catch (error) {
            console.log(error);
            alert("Error update book");
        }
    };

    return (
    <>
      <section className="bg-white dark:bg-gray-900">
        <div className="max-w-2xl px-4 py-8 mx-auto lg:py-16">
          <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">
            Edit Book
          </h2>
          <form onSubmit={handleSubmit}>
            <div className="grid gap-4 mb-4 sm:grid-cols-2 sm:gap-6 sm:mb-5">
              <div className="sm:col-span-2">
                <label
                  for="judul"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Judul buku
                </label>
                <input
                  type="text"
                  name="judul"
                  id="judul"
                  value={formData.judul}
                  onChange={handleChange}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-indigo-600 focus:border-indigo-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-indigo-500 dark:focus:border-indigo-500"
                  placeholder="Judul Buku"
                  required=""
                />
              </div>
              <div className="w-full">
                <label
                  for="harga"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Harga
                </label>
                <input
                  type="text"
                  name="harga"
                  id="harga"
                  value={formData.harga}
                  onChange={handleChange}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-indigo-600 focus:border-indigo-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-indigo-500 dark:focus:border-indigo-500"
                  placeholder="Harga Buku"
                  required=""
                />
              </div>
              <div className="w-full">
                <label
                  for="stok"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Stok
                </label>
                <input
                  type="number"
                  name="stok"
                  id="stok"
                  value={formData.stok}
                  onChange={handleChange}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-indigo-600 focus:border-indigo-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-indigo-500 dark:focus:border-indigo-500"
                  placeholder="e.g. 15"
                  required=""
                />
              </div>
              <div>
                <label
                  for="genre_id"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Genre
                </label>
                <select
                  id="genre_id"
                  name="genre_id"
                  value={formData.genre_id}
                  onChange={handleChange}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-indigo-500 dark:focus:border-indigo-500"
                >
                  <option value="">--select genre--</option>
                  {genres.map((genre) => (
                  <option key={genre.id} value={genre.id}>{genre.name}</option>
                  ))}
                </select>
              </div>
              <div>
                <label
                  for="author_id"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Author
                </label>
                <select
                  id="author_id"
                  name="author_id"
                  value={formData.author_id}
                  onChange={handleChange}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-indigo-500 dark:focus:border-indigo-500"
                >
                  <option value="">--select authors--</option>
                  {authors.map((author) => (
                  <option key={author.id} value={author.id}>{author.nama}</option>
                  ))}
                </select>
              </div>
              <div className="w-full">
                <label
                  for="cover_photo"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Cover Photo
                </label>
                <input
                  type="file"
                  name="cover_photo"
                  id="cover_photo"
                  accept="image/*"
                  onChange={handleChange}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-indigo-600 focus:border-indigo-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-indigo-500 dark:focus:border-indigo-500"
                />
              </div>
              <div className="sm:col-span-2">
                <label
                  for="deskripsi"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Description
                </label>
                <textarea
                  id="deskripsi"
                  name="deskripsi"
                  value={formData.deskripsi}
                  onChange={handleChange}
                  rows="6"
                  className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-indigo-500 dark:focus:border-indigo-500"
                  placeholder="Write a book description here..."
                >
                </textarea>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <button
                type="submit"
                className="text-white bg-indigo-700 hover:bg-indigo-800 focus:ring-4 focus:outline-none focus:ring-indigo-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-indigo-800"
              >
                Save Edit
              </button>
              <button
                type="reset"
                className="text-red-600 inline-flex items-center hover:text-white border border-red-600 hover:bg-red-600 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900"
              >
                <svg
                  className="w-5 h-5 mr-1 -ml-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                Reset
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}