import { Button } from "@/components/button"
import { Phone, Mail, Clock, Facebook, Twitter, Instagram, Linkedin } from "lucide-react"

export default function Footer() {
  const quickLinks = [
    "Make Appointments",
    "Before & After",
    "Customer Treatments",
    "Our Doctors Team",
    "Departments Services",
    "About our Clinic",
    "Contact Us"
  ]

  const services = [
    "Surgery",
    "Psychological",
    "Cardiology",
    "Orthopedics",
    "Pediatric",
    "Oncology",
    "Anesthesiology",
    "Dermatology"
  ]

  const latestNews = [
    {
      date: "April 1, 2019",
      title: "How much aspirin to take for stroke",
      image: "https://ext.same-assets.com/1892571673/827226273.jpeg"
    },
    {
      date: "April 1, 2019",
      title: "Implant Surgical equipment technology",
      image: "https://ext.same-assets.com/1892571673/1589135943.jpeg"
    },
    {
      date: "April 05, 2019",
      title: "The Benefits of Middle-Age Fitness",
      image: "https://ext.same-assets.com/1892571673/1769193753.jpeg"
    }
  ]

  return (
    <>
      {/* Contact info bar */}
      <div className="bg-[#08d3a4] py-6">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-6 text-white">
            <div className="flex items-center space-x-3">
              <Phone className="w-6 h-6" />
              <div>
                <div className="font-bold">+123 456 78910 / 11</div>
                <div className="text-sm opacity-90">Have a question? call us now</div>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <Mail className="w-6 h-6" />
              <div>
                <div className="font-bold">info@domainname.com</div>
                <div className="text-sm opacity-90">Need support? Drop us an email</div>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <Clock className="w-6 h-6" />
              <div>
                <div className="font-bold">Mon – Sat 07:00 – 21:00</div>
                <div className="text-sm opacity-90">We are open on</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <footer className="bg-[#103e4c] text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* About Delmont */}
            <div>
              <h3 className="text-xl font-bold mb-6">About Delmont</h3>
              <p className="text-white/80 mb-6 leading-relaxed">
                Our Clinic has grown to provide a world class facility for the clinic advanced restorative dentistry.
                We are among the most qualified implant providers in the AUS with over 30 years of quality training and experience.
              </p>
              <div className="flex space-x-3">
                <button className="w-10 h-10 bg-white/10 hover:bg-[#08d3a4] rounded-full flex items-center justify-center transition-colors">
                  <Facebook className="w-5 h-5" />
                </button>
                <button className="w-10 h-10 bg-white/10 hover:bg-[#08d3a4] rounded-full flex items-center justify-center transition-colors">
                  <Twitter className="w-5 h-5" />
                </button>
                <button className="w-10 h-10 bg-white/10 hover:bg-[#08d3a4] rounded-full flex items-center justify-center transition-colors">
                  <Instagram className="w-5 h-5" />
                </button>
                <button className="w-10 h-10 bg-white/10 hover:bg-[#08d3a4] rounded-full flex items-center justify-center transition-colors">
                  <Linkedin className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-xl font-bold mb-6">Quick Links</h3>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <button className="text-white/80 hover:text-[#08d3a4] transition-colors">
                      {link}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Latest News */}
            <div>
              <h3 className="text-xl font-bold mb-6">Latest News</h3>
              <div className="space-y-4">
                {latestNews.map((news, index) => (
                  <div key={index} className="flex space-x-3">
                    <img
                      src={news.image}
                      alt={news.title}
                      className="w-16 h-16 object-cover rounded"
                    />
                    <div className="flex-1">
                      <div className="text-[#08d3a4] text-sm mb-1">{news.date}</div>
                      <button className="text-white/80 hover:text-white text-sm leading-tight transition-colors">
                        {news.title}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Our Services & Newsletter */}
            <div>
              <h3 className="text-xl font-bold mb-6">Our Services</h3>
              <ul className="space-y-2 mb-8">
                {services.slice(0, 4).map((service, index) => (
                  <li key={index}>
                    <button className="text-white/80 hover:text-[#08d3a4] text-sm transition-colors">
                      {service}
                    </button>
                  </li>
                ))}
              </ul>

              <h4 className="text-lg font-bold mb-4">Newsletter</h4>
              <div className="flex">
               
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="border-t border-white/20 mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="text-white/60 text-sm">
                Copyright © 2019 Delmont Theme by{" "}
                <button className="text-[#08d3a4] hover:text-white transition-colors">
                  ThemetechMount
                </button>
              </div>
              <div className="flex space-x-6 text-sm">
                <button className="text-white/60 hover:text-white transition-colors">About Us</button>
                <button className="text-white/60 hover:text-white transition-colors">Services</button>
                <button className="text-white/60 hover:text-white transition-colors">Privacy</button>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
