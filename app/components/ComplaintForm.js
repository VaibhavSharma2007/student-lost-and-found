
"use client";

import { useState } from "react";
import { useAppContext } from "../context/AppContext";

export default function ComplaintForm() {
  const { complaints, setComplaints } = useAppContext();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (isSubmitting) return;

    setIsSubmitting(true);
    const form = event.target;

    let imageData = "";
    const imageFile = form.image.files[0];

    if (imageFile) {
      if (!imageFile.type.startsWith("image/")) {
        alert("Please select a valid image.");
        setIsSubmitting(false);
        return;
      }

      if (imageFile.size > 1024 * 1024) {
        alert("Image must be smaller than 1 MB.");
        setIsSubmitting(false);
        return;
      }

      try {
        imageData = await new Promise((resolve, reject) => {
          const reader = new FileReader();
          reader.onload = () => resolve(reader.result);
          reader.onerror = () => reject(reader.error);
          reader.readAsDataURL(imageFile);
        });
      } catch {
        alert("Image upload failed.");
        setIsSubmitting(false);
        return;
      }
    }

    const newComplaint = {
      id: Date.now(),
      name: form.itemName.value,
      location: form.location.value,
      date: new Date().toLocaleDateString("en-IN"),
      description: form.description.value,
      email: form.email.value,
      image: imageData,
    };

    const updatedComplaints = [newComplaint, ...complaints];

    try {
      localStorage.setItem("complaints", JSON.stringify(updatedComplaints));
      setComplaints(updatedComplaints);
      form.reset();
      alert("Complaint submitted successfully!");
    } catch {
      alert("Could not save the complaint. Try a smaller image.");
    }

    setIsSubmitting(false);
  };

  return (
    <section className="file-complaint" id="file-complaint">
      <div className="section-heading">
        <h2>Report Your Lost Item</h2>
        <p>Fill in the details below to report your missing belongings.</p>
      </div>

      <form className="complaint-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Full Name</label>
          <input name="fullName" type="text" placeholder="Enter your full name" required />
        </div>

        <div className="form-group">
          <label>Phone Number</label>
          <input name="phone" type="tel" placeholder="Enter your phone number" required />
        </div>

        <div className="form-group">
          <label>Email Address</label>
          <input name="email" type="email" placeholder="Enter your email address" required />
        </div>

        <div className="form-group">
          <label>Item Name</label>
          <input name="itemName" type="text" placeholder="Example: Black Backpack" required />
        </div>

        <div className="form-group">
          <label>Location Where You Lost It</label>
          <input name="location" type="text" placeholder="Example: College Library" required />
        </div>

        <div className="form-group">
          <label>Description</label>
          <textarea name="description" placeholder="Describe your lost item..." rows="4" required />
        </div>

        <div className="form-group">
          <label>Upload Item Photograph</label>
          <input name="image" type="file" accept="image/*" />
          <small>Maximum image size: 1 MB</small>
        </div>

        <button type="submit" className="submit-btn" disabled={isSubmitting}>
          {isSubmitting ? "Submitting..." : "Submit Complaint"}
        </button>
      </form>
    </section>
  );
}
