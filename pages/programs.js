import Nav from "../components/Nav"
import Footer from "../components/Footer"

export default function Programs() {
  return (
    <>
      <Nav />
      <main className="min-h-screen bg-white text-gray-800 px-6 py-12">
        <h1 className="text-4xl font-bold text-red-600 mb-6">Our Programs</h1>
        <ul className="space-y-6">
          <li>
            <h2 className="text-2xl font-semibold">🩺 Free Medical Checkups</h2>
            <p>Outreach programs offering diagnosis, consultations, and medications at no cost.</p>
          </li>
          <li>
            <h2 className="text-2xl font-semibold">💉 Vaccination Campaigns</h2>
            <p>Partnering with health agencies to provide life-saving immunizations to children and adults.</p>
          </li>
          <li>
            <h2 className="text-2xl font-semibold">⚕️ Surgeries & Specialist Care</h2>
            <p>Supporting critical surgical procedures for patients who otherwise cannot afford treatment.</p>
          </li>
          <li>
            <h2 className="text-2xl font-semibold">📢 Health Education</h2>
            <p>Workshops on hygiene, nutrition, maternal care, and disease prevention.</p>
          </li>
        </ul>
      </main>
      <Footer />
    </>
  )
}
