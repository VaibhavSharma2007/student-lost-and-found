
export default function ComplaintCard({ complaint }) {
  return (
    <div className="complaint-card">
      <div className="item-image">
        {complaint.image ? (
          <img
            src={complaint.image}
            alt={complaint.name}
          />
        ) : (
          "📦"
        )}
      </div>

      <div className="item-details">
        <h3>{complaint.name}</h3>

        <p>
          <strong>Location:</strong> {complaint.location}
        </p>

        <p>
          <strong>Date:</strong> {complaint.date}
        </p>

        <p>{complaint.description}</p>

        <a
          href={`mailto:${complaint.email}`}
          className="contact-btn"
        >
          Contact Student
        </a>
      </div>
    </div>
  );
}
