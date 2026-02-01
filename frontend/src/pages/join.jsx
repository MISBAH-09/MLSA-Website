import { useState } from "react";
import Footer from "../components/footer";

// Replace this with your actual Google Form URL (viewform link)
const GOOGLE_FORM_URL = "https://forms.gle/N9L96X8waAEFEcrx7";

const Join = () => {
  const [form, setForm] = useState({ name: "", email: "", university: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Open the Google Form in a new tab. If you prefer direct programmatic submission, replace
    // this logic with POST to the formResponse endpoint and set the correct entry.<id> names.
    window.open(GOOGLE_FORM_URL, "_blank");
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen pt-24">
      <main className="container mx-auto px-4 py-16 max-w-3xl">
        <h1 className="text-4xl font-bold mb-6">Join MLSA</h1>
        <p className="text-gray-700 mb-6">Become a member to get access to workshops, mentorship, and community projects.</p>

        <div className="bg-white shadow-sm rounded-lg p-6">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Name</label>
              <input name="name" value={form.name} onChange={handleChange} required className="mt-1 block w-full border rounded-md p-2" />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input name="email" type="email" value={form.email} onChange={handleChange} required className="mt-1 block w-full border rounded-md p-2" />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">University / Department</label>
              <input name="university" value={form.university} onChange={handleChange} className="mt-1 block w-full border rounded-md p-2" />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Message (optional)</label>
              <textarea name="message" value={form.message} onChange={handleChange} rows={4} className="mt-1 block w-full border rounded-md p-2" />
            </div>

            <div className="flex gap-3 items-center">
              <button type="submit" className="px-6 py-3 bg-blue-600 text-white rounded-md">Submit & Open Google Form</button>
              <a href={GOOGLE_FORM_URL} target="_blank" rel="noreferrer" className="px-4 py-2 border rounded-md text-blue-600">Open Google Form</a>
              {submitted && <span className="text-sm text-green-600">Thanks — the Google Form has been opened in a new tab.</span>}
            </div>

            <p className="text-xs text-gray-500">Note: Replace the placeholder Google Form URL at the top of this file with your form's link. To auto-fill fields in the Google Form on submit, we need the form's entry IDs (e.g. entry.123456). I can wire that up if you paste your form URL.</p>
          </form>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Join;
