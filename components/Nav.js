
import Link from 'next/link'
import { FaTwitter, FaTiktok, FaFacebook, FaInstagram, FaYoutube, FaLinkedin, FaWhatsapp } from 'react-icons/fa'

export default function Nav(){
  return (
    <header className="bg-white sticky top-0 z-50 shadow">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/"><a className="font-bold text-xl text-red-600">Remo Medical</a></Link>
        <nav className="hidden md:flex gap-6">
          <Link href="/"><a>Home</a></Link>
          <Link href="/about"><a>About</a></Link>
          <Link href="/programs"><a>Programs</a></Link>
          <Link href="/donate"><a>Donate</a></Link>
          <Link href="/volunteer"><a>Volunteer</a></Link>
          <Link href="/contact"><a>Contact</a></Link>
        </nav>
        <div className="hidden md:flex gap-3 text-red-600 text-xl">
          <a href="https://x.com/RemoMedical" target="_blank"><FaTwitter/></a>
          <a href="https://www.tiktok.com/@remomedicaloutreach" target="_blank"><FaTiktok/></a>
          <a href="https://web.facebook.com/remomedicaloutreach" target="_blank"><FaFacebook/></a>
          <a href="https://www.instagram.com/remomedicaloutreach/" target="_blank"><FaInstagram/></a>
          <a href="https://www.youtube.com/@remomedicaloutreach324" target="_blank"><FaYoutube/></a>
          <a href="https://www.linkedin.com/in/remo-medical-outreach-181163169/" target="_blank"><FaLinkedin/></a>
          <a href="https://wa.me/2348135165692" target="_blank"><FaWhatsapp/></a>
        </div>
      </div>
    </header>
  )
}
