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
            Providing free medical care to underserved communities across Nigeria. 
            Our mission is to bring hope, healing, and compassion to millions.
          </p>
        </section>

        {/* Programs Section */}
        <section className="my-16">
          <h2 className="text-2xl font-bold mb-6 text-red-600 text-center">
            Our Programs
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
              href="/volunteer"// pages/index.tsx
import Link from 'next/link';

export default function Home() {
  return (
    <div className="font-sans text-gray-800">
      {/* Hero Section with background image */}
      <section
        className="relative bg-red-600 min-h-screen flex flex-col justify-center items-center text-center px-4"
        style={{
          backgroundImage: 'url("/images/hero-bg.jpg")', // replace with your image path
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-red-600 bg-opacity-75"></div>

        {/* Hero content */}
        <div className="relative z-10 animate-fadeIn">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 animate-slideDown">
            Welcome to Remo Medical Outreach
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-2xl animate-slideUp">
            Providing free medical care to underserved communities across Nigeria. Our mission is to bring hope, healing, and compassion to millions.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center animate-fadeIn delay-200">
            <Link href="/donate">
              <a className="bg-white text-red-600 font-semibold px-6 py-3 rounded hover:bg-gray-100 transition transform hover:scale-105">
                Donate Now
              </a>
            </Link>
            <Link href="/volunteer">
              <a className="bg-transparent border border-white text-white font-semibold px-6 py-3 rounded hover:bg-white hover:text-red-600 transition transform hover:scale-105">
                Volunteer
              </a>
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4 bg-gray-50 text-center">
        <h2 className="text-4xl font-bold mb-6">Who We Are</h2>
        <p className="max-w-3xl mx-auto text-lg">
          Remo Medical Outreach is committed to providing free healthcare services to underserved communities across Nigeria. Through medical outreach, health education, and volunteer programs, we aim to save lives and build healthier communities.
        </p>
      </section>

      {/* Programs Section */}
      <section className="py-20 px-4 text-center">
        <h2 className="text-4xl font-bold mb-12">Our Programs</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="p-6 border rounded shadow hover:shadow-lg transition transform hover:scale-105">
            <h3 className="text-2xl font-semibold mb-3">Medical Outreach</h3>
            <p>Free consultations, treatments, and essential medications for rural and urban communities.</p>
          </div>
          <div className="p-6 border rounded shadow hover:shadow-lg transition transform hover:scale-105">
            <h3 className="text-2xl font-semibold mb-3">Health Education</h3>
            <p>Community workshops and campaigns promoting preventive healthcare and awareness.</p>
          </div>
          <div className="p-6 border rounded shadow hover:shadow-lg transition transform hover:scale-105">
            <h3 className="text-2xl font-semibold mb-3">Volunteer Programs</h3>
            <p>Opportunities for medical professionals and volunteers to join our mission of service.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-red-600 text-white py-8 text-center">
        <p>© {new Date().getFullYear()} Remo Medical Outreach. All rights reserved.</p>
        <div className="flex justify-center mt-4 gap-4">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
        </div>
      </footer>

      {/* Animations */}
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideDown {
          from { transform: translateY(-20px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        @keyframes slideUp {
          from { transform: translateY(20px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        .animate-fadeIn { animation: fadeIn 1s ease forwards; }
        .animate-slideDown { animation: slideDown 1s ease forwards; }
        .animate-slideUp { animation: slideUp 1s ease forwards; }
        .delay-200 { animation-delay: 0.2s; }
      `}</style>
    </div>
  );
}

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
