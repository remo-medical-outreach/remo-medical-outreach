import Nav from "../components/Nav"
import Footer from "../components/Footer"

export default function Volunteer() {
  return (
    <>
      <Nav />
      <main className="min-h-screen bg-white text-gray-800 px-6 py-12">
        <h1 className="text-4xl font-bold text-red-600 mb-6">Volunteer With Us</h1>
        <p className="mb-6 text-lg">
          Join our team of dedicated volunteers making healthcare accessible to millions in Nigeria. 
          Fill out the form below and we’ll get in touch with you.
        </p>

        {/* Volunteer Signup Form */}
        <form className="max-w-xl mx-auto bg-gray-50 p-6 rounded-lg shadow-md space-y-4">
          <input
            type="text"
            placeholder="Full Name"
            className="w-full border p-3 rounded"
            required
          />
          <input
            type="email"
            placeholder="Email Address"
            className="w-full border p-3 rounded"
            required
          />
          <input
            type="tel"
            placeholder="Phone Number"
            className="w-full border p-3 rounded"
            required
          />
          <textarea
            placeholder="Tell us why you want to volunteer"
            className="w-full border p-3 rounded h-32"
            required
          ></textarea>
          <button
            type="submit"
            className="bg-red-600 text-white px-6 py-3 rounded hover:bg-red-700 w-full"
          >
            Submit Application
          </button>
        </form>
      </main>
      <Footer />
    </>
  )
}
