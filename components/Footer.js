
import { FaTwitter, FaTiktok, FaFacebook, FaInstagram, FaYoutube, FaLinkedin, FaWhatsapp } from 'react-icons/fa'

export default function Footer(){
  return (
    <footer className="bg-red-700 text-white mt-12">
      <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-center md:text-left">
          <div className="font-bold text-lg">Remo Medical Outreach</div>
          <div className="text-sm">Providing free medical care across Nigeria</div>
        </div>
        <div className="flex gap-4 text-2xl">
          <a href="https://x.com/RemoMedical" target="_blank"><FaTwitter/></a>
          <a href="https://www.tiktok.com/@remomedicaloutreach" target="_blank"><FaTiktok/></a>
          <a href="https://web.facebook.com/remomedicaloutreach" target="_blank"><FaFacebook/></a>
          <a href="https://www.instagram.com/remomedicaloutreach/" target="_blank"><FaInstagram/></a>
          <a href="https://www.youtube.com/@remomedicaloutreach324" target="_blank"><FaYoutube/></a>
          <a href="https://www.linkedin.com/in/remo-medical-outreach-181163169/" target="_blank"><FaLinkedin/></a>
          <a href="https://wa.me/2348135165692" target="_blank"><FaWhatsapp/></a>
        </div>
      </div>
      <div className="text-center text-sm py-3 bg-red-800">© {new Date().getFullYear()} Remo Medical Outreach</div>
    </footer>
  )
}
