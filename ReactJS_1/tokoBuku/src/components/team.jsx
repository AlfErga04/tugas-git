import { PersonFill } from 'react-bootstrap-icons';

const Team = () => {
  const teamMembers = [
    {
      name: "Raka Aditya",
      desc: "Frontend developer yang membangun UI dan interaktivitas website.",
    },
    {
      name: "Salsa Nabila",
      desc: "UX designer yang fokus pada kenyamanan dan pengalaman pengguna.",
    },
    {
      name: "Dimas Prasetyo",
      desc: "Backend engineer yang mengatur alur data dan sistem toko buku.",
    }
  ];

  return (
    <div className="container px-4 py-5" id="icon-grid">
      <h2 className="pb-2 border-bottom">Tim Kami</h2>

      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4 py-5">
        {teamMembers.map((member, index) => (
          <div className="col d-flex align-items-start" key={index}>
            <PersonFill className="bi text-muted flex-shrink-0 me-3" size={40} />
            <div>
              <h4 className="fw-bold mb-0">{member.name}</h4>
              <p>{member.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
