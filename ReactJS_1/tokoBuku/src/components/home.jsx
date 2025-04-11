import { Link } from 'react-router-dom';


const Home = () => {
  return (
    <>
      <section className="py-5 text-center container">
        <div className="row py-lg-5">
          <div className="col-lg-6 col-md-8 mx-auto">
            <h1 className="fw-light">Toko Buku 2.0</h1>
            <p className="lead text-muted">
              Koleksi buku digital terbaik. Temukan inspirasi dan ilmu baru dari deretan buku pilihan kami.
            </p>
            <p>
              <a href="#" className="btn btn-primary my-2">Lihat Koleksi</a>
              <Link to="/contact" className="btn btn-secondary my-2 ms-2">Hubungi Kami</Link>
            </p>
          </div>
        </div>
      </section>

      <div className="album py-5 bg-light">
        <div className="container">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            {[...Array(6)].map((_, i) => (
              <div className="col" key={i}>
                <div className="card shadow-sm">
                  <img src={`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-SITxbgRd1UPATp35ChFY5yeNEqDyIMCaCQ&s?text=Buku+${i + 1}`} alt={`Buku ${i + 1}`} />
                  <div className="card-body">
                    <p className="card-text">Deskripsi singkat buku {i + 1}. Menarik dan wajib dibaca!</p>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="btn-group">
                        <button type="button" className="btn btn-sm btn-outline-secondary">Lihat</button>
                        <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
                      </div>
                      <small className="text-muted">9 menit lalu</small>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
