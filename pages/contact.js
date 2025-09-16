import Nav from "../components/Nav"
import Footer from "../components/Footer"

export default function Contact() {
  return (
    <>
      <Nav />
      <main className="min-h-screen bg-white text-gray-800 px-6 py-12">
        <h1 className="text-4xl font-bold text-red-600 mb-6">Contact Us</h1>
        <p className="mb-6 text-lg">
          Have questions or want to volunteer? Fill out the form below or reach us on WhatsApp.
        </p>
        <form className="max-w-xl space-y-4">
          <input type="text" placeholder="Your Name" className="w-full border p-3 rounded" />
          <input type="email" placeholder="Your Email" className="w-full border p-3 rounded" />
          <textarea placeholder="Your Message" className="w-full border p-3 rounded h-32"></textarea>
          <button className="bg-red-600 text-white px-6 py-3 rounded hover:bg-red-700">
            Send Message
          </button>
        </form>
      </main>
      <Footer />
    </>
  )
}
