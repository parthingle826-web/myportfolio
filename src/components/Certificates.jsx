import certificates from "../data/certificates";

const Certificates = () => {
  return (
    <section id="certificates">
      <div className="container">
        <h2 className="section-title">Certificates</h2>

        <div className="projects-grid">
          {certificates.map((cert, index) => (
            <div key={index} className="glass certificate-card">
              <div className="project-content">
                <h3>{cert.title}</h3>
                <p>{cert.issuer}</p>

                <a
                  href={cert.pdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cert-btn"
                >
                  View Certificate
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;