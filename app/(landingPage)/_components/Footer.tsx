import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Facebook, Github } from "lucide-react";
import React from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

type Props = {};

const Footer = (props: Props) => {
  return (
    <footer className="px-20 py-8 flex items-start justify-around gap-8 flex-col md:flex-row bg-[#1d242b]">
      <div className="flex flex-col space-y-4 text-muted max-w-48">
        <h2 className="text-xl font-semibold">Qemer</h2>
        <p className="text-sm text-muted/60">
          At Qemer Acadamy, we believe in making education accessible and
          personalized for everyone. Join us in empowering learners and
          educators worldwide.
        </p>
      </div>

      <div className="flex flex-col text-muted/60">
        <h3 className="text-xl font-semibold text-muted mb-4">Quick Links</h3>
        <a href="#">Courses</a>
        <a href="#">Become an Instructor</a>
        <a href="#">Blog</a>
        <a href="#">Help Center</a>
      </div>

      <div className="flex flex-col text-muted/60">
        <h3 className="text-xl font-semibold text-muted mb-4">Community</h3>
        <a href="#">Join Our Community</a>
        <a href="#">Partnerships</a>
        <a href="#">Careers</a>
      </div>
      <div className="flex flex-col space-y-4">
        <h3 className="text-xl font-semibold text-muted">Stay Updated</h3>
        <div className="flex gap-x-2">
          <Input placeholder="Enter your email..." />
          <Button className="bg-[#0077c0]">Subscribe</Button>
        </div>
        <div className="flex gap-x-2 items-center">
          <div className="text-muted-foreground h-8 w-8 rounded-full hover:scale-150 transition hover:text-muted">
            <FaFacebook size={20} />
          </div>
          <div className="text-muted-foreground h-8 w-8 rounded-full hover:scale-150 transition hover:text-muted">
            <FaYoutube size={20} />
          </div>
          <div className="text-muted-foreground h-8 w-8 rounded-full hover:scale-150 transition hover:text-muted">
            <FaInstagram size={20} />
          </div>
          <div className="text-muted-foreground h-8 w-8 rounded-full hover:scale-150 transition hover:text-muted">
            <FaTwitter size={20} />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
