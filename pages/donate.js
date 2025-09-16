import Nav from "../components/Nav"
import Footer from "../components/Footer"
import Script from "next/script"
import { useState } from "react"

export default function Donate() {
  const [amount, setAmount] = useState("")

  const handlePaystack = () => {
    if (!amount) {
      alert("Please enter a donation amount")
      return
    }
    var handler = window.PaystackPop.setup({
      key: "pk_live_2439131aafff6486b98caed13c41ee9f639590c2", // Paystack public key
      email: "donor@example.com", // can add donor email field later
      amount: parseFloat(amount) * 100, // Paystack requires amount in kobo
      currency: "NGN",
      callback: function (response) {
        alert("Thank you for your donation! Reference: " + response.reference)
      },
    })
    handler.openIframe()
  }

  const copyAccount = () => {
    navigator.clipboard.writeText("1213712863")
    alert("Account number copied: 1213712863")
  }

  return (
    <>
      <Nav />
      <main className="min-h-screen bg-white text-gray-800 px-6 py-12 text-center">
        <h1 className="text-4xl font-bold text-red-600 mb-6">Support Our Work</h1>
        <p className="mb-6 text-lg">
          Your donations make it possible for us to provide free medical care to underserved communities.
        </p>

        {/* Paystack Donation Form */}
        <div className="max-w-md mx-auto bg-gray-50 p-6 rounded-lg shadow-md mb-12">
          <input
            type="number"
            placeholder="Enter amount (₦)"
            className="w-full border p-3 rounded mb-4"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
          <button
            onClick={handlePaystack}
            className="w-full bg-red-600 text-white px-6 py-3 rounded hover:bg-red-700"
          >
            Donate via Paystack
          </button>
        </div>

        {/* Bank Transfer Details */}
        <div className="max-w-md mx-auto bg-gray-50 p-6 rounded-lg shadow-md mb-6">
          <h2 className="text-2xl font-semibold mb-4 text-red-500">Donate via Bank Transfer</h2>
          <p className="text-lg mb-4">
            <strong>Bank:</strong> Zenith Bank Plc <br />
            <strong>Account Name:</strong> Remo Medical Outreach <br />
            <strong>Account Number:</strong> 1213712863
          </p>
          <button
            onClick={copyAccount}
            className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-900"
          >
            Copy Account Number
          </button>
        </div>

        {/* WhatsApp Contact */}
        <div className="max-w-md mx-auto mt-6">
          <a
            href="https://wa.me/2348135165692"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700"
          >
            💬 Contact us on WhatsApp
          </a>
        </div>
      </main>
      <Footer />

      {/* Paystack script */}
      <Script src="https://js.paystack.co/v1/inline.js" strategy="afterInteractive" />
    </>
  )
}
