
"use client";

import { useAppContext } from "./context/AppContext";
import Navbar from "./components/Navbar";
import Profile from "./components/Profile";
import ComplaintCard from "./components/ComplaintCard";
import ComplaintForm from "./components/ComplaintForm";

export default function Home() {
  const { complaints } = useAppContext();

  return (
    <div>
      <Navbar />

      <main>
        <Profile />

        <section className="hero">
          <div className="hero-content">
            <h1>
              Lost Something?
              <br />
              Let's Find It Together.
            </h1>

            <p>
              FindIt helps students report lost belongings and reconnect
              with the items they thought were gone forever.
            </p>

            <div className="hero-buttons">
              <a href="#file-complaint" className="btn-primary">
                Report Lost Item
              </a>

              <a href="#complaints" className="btn-secondary">
                Browse Items
              </a>
            </div>
          </div>
        </section>

        <section className="complaints" id="complaints">
          <div className="section-heading">
            <h2>Recently Reported Items</h2>
            <p>Help your fellow students find their missing belongings.</p>
          </div>

          <div className="complaint-list">
            {complaints.map((complaint) => (
              <ComplaintCard
                key={complaint.id}
                complaint={complaint}
              />
            ))}
          </div>
        </section>

        <ComplaintForm />
      </main>

      <footer className="footer">
        <p>© 2026 FindIt - Student Lost and Found Platform</p>
      </footer>
    </div>
  );
}
