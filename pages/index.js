
import Nav from "../components/Nav"
import Footer from "../components/Footer"
import Link from "next/link"

export default function Home() {
  return (
    <>
      <Nav />
      <main className="bg-white text-gray-800">
        {/* Hero Section */}
        <section className="bg-red-600 text-white text-center py-20 px-6">
          <h1 className="text-5xl font-bold mb-6">
            Bringing Free Healthcare to Millions in Nigeria
          </h1>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Remo Medical Outreach is dedicated to providing free medical care to underserved
            communities across Nigeria — because health is a right, not a privilege.
          </p>
          <div className="space-x-4">
            <Link href="/donate">
              <span className="inline-block bg-white text-red-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 cursor-pointer">
                Donate Now
              </span>
            </Link>
            <Link href="/volunteer">
              <span className="inline-block bg-transparent border border-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-red-600 cursor-pointer">
                Become a Volunteer
              </span>
            </Link>
          </div>
        </section>

        {/* About Section */}
        <section className="py-16 px-6 max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-red-600 mb-6">Who We Are</h2>
          <p className="text-lg mb-6">
            We are a non-profit NGO committed to delivering quality healthcare services to
            those who need it the most. Through outreach programs, health campaigns, and
            surgical interventions, we bring hope and healing to thousands.
          </p>
          <Link href="/about">
            <span className="text-red-600 font-semibold hover:underline cursor-pointer">
              Learn more about us →
            </span>
          </Link>
        </section>

        {/* Programs Highlight */}
        <section className="bg-gray-50 py-16 px-6">
          <h2 className="text-3xl font-bold text-center text-red-600 mb-12">Our Programs</h2>
          <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-2">🩺 Free Medical Checkups</h3>
              <p>Offering consultations, diagnoses, and treatment at no cost.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-2">💉 Vaccination Campaigns</h3>
              <p>Delivering life-saving vaccines to children and adults.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-2">⚕️ Surgeries & Specialist Care</h3>
              <p>Providing access to critical surgeries for patients in need.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-2">📢 Health Education</h3>
              <p>Raising awareness on prevention, nutrition, and maternal health.</p>
            </div>
          </div>
          <div className="text-center mt-8">
            <Link href="/programs">
              <span className="text-red-600 font-semibold hover:underline cursor-pointer">
                View all programs →
              </span>
            </Link>
          </div>
        </section>

        {/* Call To Action */}
        <section className="text-center py-16 px-6 bg-red-600 text-white">
          <h2 className="text-3xl font-bold mb-6">Be Part of the Change</h2>
          <p className="mb-8 max-w-2xl mx-auto">
            Together, we can bring hope and healing to millions. Join us as a volunteer or
            support us with your generous donation today.
          </p>
          <div className="space-x-4">
            <Link href="/donate">
              <span className="inline-block bg-white text-red-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 cursor-pointer">
                Donate Now
              </span>
            </Link>
            <Link href="/volunteer">
              <span className="inline-block bg-transparent border border-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-red-600 cursor-pointer">
                Become a Volunteer
              </span>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
