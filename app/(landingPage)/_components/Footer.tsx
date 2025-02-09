import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Facebook, Github } from "lucide-react";
import React from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

type Props = {};

const Footer = (props: Props) => {
  return (
    <footer className="md:px-20 px-10 flex flex-col bg-[#1d242b]">
      <div className="flex items-start py-8 md:justify-around gap-8 flex-col md:flex-row">
        <div className="w-full flex flex-col space-y-4 text-muted md:max-w-48">
          <h2 className="text-xl font-semibold">Qemer</h2>
          <p className="text-sm text-muted/60">
            At Qemer Acadamy, we believe in making education accessible and
            personalized for everyone. Join us in empowering learners and
            educators worldwide.
          </p>
        </div>

        <div className="w-full flex flex-col text-muted/60">
          <h3 className="text-xl font-semibold text-muted mb-4">Quick Links</h3>
          <a href="#">Courses</a>
          <a href="#">Become an Instructor</a>
          <a href="#">Blog</a>
          <a href="#">Help Center</a>
        </div>

        <div className="w-full flex flex-col text-muted/60">
          <h3 className="text-xl font-semibold text-muted mb-4">Community</h3>
          <a href="#">Join Our Community</a>
          <a href="#">Partnerships</a>
          <a href="#">Careers</a>
        </div>
        <div className="w-full flex flex-col space-y-4">
          <h3 className="text-xl font-semibold text-muted">Stay Updated</h3>
          <div className="flex flex-col md:flex-row gap-2">
            <Input placeholder="Enter your email..." />
            <Button className="bg-[#0077c0]">Subscribe</Button>
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center flex-col-reverse md:flex-row">
        <p className="text-muted-foreground">
          &copy; 2023 Qemer. All rights reserved.
        </p>
        <div className="flex gap-x-2 items-center">
          <div className="flex items-center justify-center text-muted-foreground h-8 w-8 rounded-full hover:scale-150 transition hover:text-muted">
            <FaFacebook size={20} />
          </div>
          <div className="flex items-center justify-center text-muted-foreground h-8 w-8 rounded-full hover:scale-150 transition hover:text-muted">
            <FaYoutube size={20} />
          </div>
          <div className="flex items-center justify-center text-muted-foreground h-8 w-8 rounded-full hover:scale-150 transition hover:text-muted">
            <FaInstagram size={20} />
          </div>
          <div className="flex items-center justify-center text-muted-foreground h-8 w-8 rounded-full hover:scale-150 transition hover:text-muted">
            <FaTwitter size={20} />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
