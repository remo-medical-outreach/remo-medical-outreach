import Nav from "../components/Nav";
import Footer from "../components/Footer";

export default function Contact() {
  return (
    <>
      <Nav />
      <main className="px-6 py-12 max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-red-600 mb-6">Contact Us</h1>
        <p className="mb-6 text-gray-700">
          Have questions or want to reach us? Fill out the form below, and our team will respond as soon as possible.
        </p>

        <form
          action="https://formspree.io/f/mldwkqzd"
          method="POST"
          className="space-y-4"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="w-full p-3 border rounded"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="w-full p-3 border rounded"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            required
            className="w-full p-3 border rounded"
          ></textarea>
          <button
            type="submit"
            className="bg-red-600 text-white px-6 py-2 rounded shadow"
          >
            Send Message
          </button>
        </form>
      </main>
      <Footer />
    </>
  );
}
