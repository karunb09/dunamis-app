import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#FFF1E6] mt-24">
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-4 gap-12">
        
        {/* Brand */}
        <div>
          <h3 className="text-xl font-bold mb-4">DUNAMIS</h3>
          <p className="text-sm text-gray-600 mb-6">
            Empowering music learners worldwide with innovative online and
            offline education from complete beginners to professional musicians.
          </p>

          {/* Social Icons (text placeholders for now) */}
          <div className="flex gap-4 text-lg">
            <Link href="#" aria-label="Instagram">📸</Link>
            <Link href="#" aria-label="LinkedIn">💼</Link>
            <Link href="#" aria-label="X">✖️</Link>
          </div>
        </div>

        {/* Features */}
        <div>
          <h4 className="font-semibold mb-4">Features</h4>
          <ul className="space-y-2 text-sm text-gray-600">
            <li><Link href="/courses">Courses</Link></li>
            <li><Link href="/offline-centres">Offline Centres</Link></li>
            <li><Link href="/store">Store</Link></li>
          </ul>
        </div>

        {/* Learn More */}
        <div>
          <h4 className="font-semibold mb-4">Learn more</h4>
          <ul className="space-y-2 text-sm text-gray-600">
            <li><Link href="/about">About Us</Link></li>
            <li><Link href="/testimonials">Testimonials</Link></li>
            <li><Link href="/faqs">FAQs</Link></li>
            <li><Link href="/success-stories">Success Stories</Link></li>
            <li><Link href="/become-a-trainer">Become a Trainer</Link></li>
            <li><Link href="/contact">Contact Us</Link></li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h4 className="font-semibold mb-4">Support</h4>
          <ul className="space-y-2 text-sm text-gray-600">
            <li><Link href="/contact">Contact</Link></li>
            <li><Link href="/support">Support</Link></li>
            <li><Link href="/legal">Legal</Link></li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-200 py-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} DUNAMIS. All rights reserved.
      </div>
    </footer>
  );
}
