import { useState } from "react";
import Footer from "../components/footer";
import { sendContactEmail } from "../services/emailService"; // ✅ Importing from your separate file

const Contact = () => {
  // 1. Capture data from input columns using State
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  // 2. Method to get data from inputs as user types
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // 3. Method to pass values to the separate SMTP file
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    const result = await sendContactEmail(formData);

    if (result.success) {
      setStatus("Message sent successfully! ✅");
      setFormData({ name: "", email: "", message: "" }); // Clear form
    } else {
      setStatus("Failed to send message. ❌");
    }
  };

  return (
    <div className="min-h-screen pt-24">
      <main className="container mx-auto px-4 py-16 max-w-2xl">
        <h1 className="text-4xl font-bold mb-6 text-blue-900">Contact Us</h1>
        <p className="text-gray-700 mb-6">Have a question or want to collaborate? Send us a message.</p>

        <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 shadow-md rounded-xl">
          <div>
            <label className="block text-sm font-medium text-gray-700">Name</label>
            <input 
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="mt-1 block w-full border rounded-md p-2 focus:ring-2 focus:ring-blue-500 outline-none" 
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input 
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="mt-1 block w-full border rounded-md p-2 focus:ring-2 focus:ring-blue-500 outline-none" 
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Message</label>
            <textarea 
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              className="mt-1 block w-full border rounded-md p-2 focus:ring-2 focus:ring-blue-500 outline-none" 
              rows={6} 
            />
          </div>
          
          <div className="flex items-center gap-4">
            <button 
              type="submit" 
              className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-md transition-colors"
            >
              Send Message
            </button>
            {status && <p className="text-sm font-medium text-gray-600">{status}</p>}
          </div>
        </form>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;