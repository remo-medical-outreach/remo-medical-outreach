import Nav from "../components/Nav";
import Footer from "../components/Footer";

export default function Volunteer() {
  return (
    <>
      <Nav />
      <main className="px-6 py-12 max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-red-600 mb-6">Volunteer with Us</h1>
        <p className="mb-6 text-gray-700">
          Join our mission to provide free healthcare across Nigeria. Fill out the form to volunteer.
        </p>

        <form
          action="https://formspree.io/f/myzdarbk"
          method="POST"
          className="space-y-4"
        >
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            required
            className="w-full p-3 border rounded"
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            required
            className="w-full p-3 border rounded"
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            className="w-full p-3 border rounded"
          />
          <textarea
            name="skills"
            placeholder="Tell us how you’d like to help"
            required
            className="w-full p-3 border rounded"
          ></textarea>
          <button
            type="submit"
            className="bg-red-600 text-white px-6 py-2 rounded shadow"
          >
            Submit Volunteer Form
          </button>
        </form>
      </main>
      <Footer />
    </>
  );
}
