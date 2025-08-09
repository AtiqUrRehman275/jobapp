import {
  FaLinkedin,
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white pt-12 pb-6 px-6 md:px-20">
      <div className="grid md:grid-cols-4 gap-10 border-b border-gray-600 pb-10">
        {/* Company Info */}
        <div>
          <h3 className="text-xl font-bold mb-4 text-amber-400">Crown Group</h3>
          <p className="text-gray-300 text-sm">
            Empowering careers and connecting talent with opportunity. Let's
            grow and lead—together.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-semibold mb-3">Quick Links</h4>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li>
              <a href="#" className="hover:text-white">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Jobs
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Company Profiles
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h4 className="text-lg font-semibold mb-3">Resources</h4>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li>
              <a href="#" className="hover:text-white">
                Career Tips
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Blog
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Help Center
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>

        {/* Social Icons */}
        <div>
          <h4 className="text-lg font-semibold mb-3">Connect with Us</h4>
          <div className="flex space-x-4 text-white">
            <a href="#" className="hover:text-[#D4AF37]">
              <FaLinkedin size={20} />
            </a>
            <a href="#" className="hover:text-[#D4AF37]">
              <FaFacebookF size={20} />
            </a>
            <a href="#" className="hover:text-[#D4AF37]">
              <FaInstagram size={20} />
            </a>
            <a href="#" className="hover:text-[#D4AF37]">
              <FaWhatsapp size={20} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="text-center text-gray-400 text-sm pt-6">
        © {new Date().getFullYear()} Crown Group. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
