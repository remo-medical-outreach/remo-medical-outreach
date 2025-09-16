import Nav from "../components/Nav";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="px-6 py-12 max-w-5xl mx-auto">
        {/* Hero Section */}
        <section className="text-center my-12">
          <h1 className="text-4xl font-bold text-red-600 mb-4">
            Welcome to Remo Medical Outreach
          </h1>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            We provide free medical care and health education to underserved
            communities across Nigeria. Together, we bring hope, healing, and
            compassion to millions.
          </p>
        </section>

        {/* Programs Section */}
        <section className="my-16">
          <h2 className="text-2xl font-bold mb-6 text-red-600 text-center">
            Our Key Programs
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-6 border rounded-lg shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-2">Medical Outreach</h3>
              <p className="text-gray-600">
                Free consultations, treatments, and essential medications for
                rural and urban communities.
              </p>
            </div>
            <div className="p-6 border rounded-lg shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-2">Health Education</h3>
              <p className="text-gray-600">
                Community workshops and campaigns to promote preventive
                healthcare and awareness.
              </p>
            </div>
            <div className="p-6 border rounded-lg shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-2">Volunteer Programs</h3>
              <p className="text-gray-600">
                Opportunities for doctors, nurses, and volunteers to join our
                mission of service.
              </p>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center my-16">
          <h2 className="text-2xl font-bold mb-4 text-red-600">
            Get Involved
          </h2>
          <p className="text-gray-700 mb-6">
            Your support helps us reach more communities and save lives. Join us
            today.
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-4">
            <a
              href="/donate"
              className="bg-red-600 text-white px-6 py-3 rounded shadow hover:bg-red-700 transition"
            >
              Donate Now
            </a>
            <a
              href="/volunteer"
              className="bg-white border border-red-600 text-red-600 px-6 py-3 rounded shadow hover:bg-red-50 transition"
            >
              Become a Volunteer
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
