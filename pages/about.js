import Nav from "../components/Nav"
import Footer from "../components/Footer"

export default function About() {
  return (
    <>
      <Nav />
      <main className="min-h-screen bg-white text-gray-800 px-6 py-12">
        <h1 className="text-4xl font-bold text-red-600 mb-6">About Us</h1>
        <p className="mb-6 text-lg">
          Remo Medical Outreach is a non-profit NGO dedicated to providing free healthcare 
          services to underserved communities across Nigeria. We believe healthcare is a right, 
          not a privilege.
        </p>
        <p className="mb-6">
          Since our founding, we have reached thousands of people through free medical check-ups, 
          health awareness campaigns, and surgical interventions — saving lives and restoring hope.
        </p>
        <h2 className="text-2xl font-semibold text-red-500 mt-8 mb-4">Our Mission</h2>
        <p className="mb-6">
          To bring accessible and quality healthcare to millions of Nigerians who cannot afford it.
        </p>
        <h2 className="text-2xl font-semibold text-red-500 mt-8 mb-4">Our Vision</h2>
        <p className="mb-6">
          A Nigeria where no one dies from preventable diseases due to lack of access to medical care.
        </p>
      </main>
      <Footer />
    </>
  )
}
