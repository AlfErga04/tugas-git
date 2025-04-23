import { Link } from 'react-router-dom';
import headerImage from '../assets/Header.jpg'; 

const Home = () => {
  const headerStyle = {
    background: `linear-gradient(rgba(40, 54, 24, 0.7), rgba(40, 54, 24, 0.7)), url(${headerImage}) center/cover no-repeat`
  };

  return (
    <>
      <section className="header-section text-center" style={headerStyle}>
        <div className="row py-lg-5">
          <div className="col-lg-6 col-md-8 mx-auto">
            <h1 className="fw-light">Toko Buku 2.0</h1>
            <p className="lead text-light-custom">
  Koleksi buku digital terbaik. Temukan inspirasi dan ilmu baru dari deretan buku pilihan kami.
</p>

            <p>
              <Link to="/koleksi" className="btn btn-primary custom-btn my-2 text-decoration-none">Lihat Koleksi</Link>
              <Link to="/contact" className="btn btn-secondary custom-btn-secondary my-2 ms-2 text-decoration-none">Hubungi Kami</Link>
            </p>
          </div>
        </div>
      </section>

      <div className="album py-5 bg-light">
        <div className="container">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4">
            {[...Array(6)].map((_, i) => (
              <div className="col" key={i}>
                <div className="card shadow-sm h-100">
                  <img
                    src={`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-SITxbgRd1UPATp35ChFY5yeNEqDyIMCaCQ&s?text=Buku+${i + 1}`}
                    className="card-img-top"
                    alt={`Buku ${i + 1}`}
                  />
                  <div className="card-body d-flex flex-column justify-content-between">
                    <p className="card-text">Deskripsi singkat buku {i + 1}. Menarik dan wajib dibaca!</p>
                    <div className="d-flex justify-content-between align-items-center mt-3">
                      <div className="btn-group">
                        <button type="button" className="btn btn-sm btn-outline-secondary">Lihat</button>
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
  );
}

export default Home;
