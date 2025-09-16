import Nav from "../components/Nav"
import Footer from "../components/Footer"

export default function Donate() {
  return (
    <>
      <Nav />
      <main className="min-h-screen bg-white text-gray-800 px-6 py-12 text-center">
        <h1 className="text-4xl font-bold text-red-600 mb-6">Support Our Work</h1>
        <p className="mb-6 text-lg">
          Your donations make it possible for us to provide free medical care to underserved communities.
        </p>
        <button
          className="bg-red-600 text-white px-8 py-4 rounded-lg text-lg hover:bg-red-700"
          onClick={() => {
            window.location.href = "https://paystack.com/pay/your-donation-link"
          }}
        >
          Donate via Paystack
        </button>
      </main>
      <Footer />
    </>
  )
}
