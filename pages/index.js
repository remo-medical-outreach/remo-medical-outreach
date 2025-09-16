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
          <p className="text-lg text-gray-700">
            Providing free medical care and hope to underserved communities in
            Nigeria.
          </p>
        </section>

        {/* Latest YouTube Video */}
        <section className="my-12 text-center">
          <h2 className="text-2xl font-bold mb-4 text-red-600">
            Latest Video from Our YouTube
          </h2>
          <div className="aspect-w-16 aspect-h-9 flex justify-center">
            <iframe
              src="https://www.youtube.com/embed/PO04vGDqtns"
              title="Remo Medical Outreach YouTube Video"
              allowFullScreen
              className="w-full max-w-3xl h-64 md:h-96 rounded-lg shadow-lg"
            />
          </div>
          <p className="mt-2">
            <a
              href="https://www.youtube.com/@remomedicaloutreach324"
              target="_blank"
              rel="noopener noreferrer"
              className="text-red-600 font-semibold underline"
            >
              Visit our YouTube Channel →
            </a>
          </p>
        </section>

        {/* Instagram Post */}
        <section className="my-12 text-center">
          <h2 className="text-2xl font-bold mb-4 text-red-600">
            From Our Instagram
          </h2>
          <blockquote
            className="instagram-media mx-auto"
            data-instgrm-permalink="https://www.instagram.com/p/BndcPEenj6_/?img_index=1"
            data-instgrm-version="14"
            style={{
              background: "#fff",
              border: 0,
              margin: "0 auto",
              maxWidth: "540px",
              width: "100%",
            }}
          ></blockquote>
          <script async src="//www.instagram.com/embed.js"></script>
          <p className="mt-2">
            <a
              href="https://www.instagram.com/remomedicaloutreach/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-red-600 font-semibold underline"
            >
              Follow us on Instagram →
            </a>
          </p>
        </section>
      </main>
      <Footer />
    </>
  );
}
