import { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, MapPin, Phone, Clock, Send } from "lucide-react";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with the Qemer Academy team for support or inquiries.",
};

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-slate-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <Reveal>
          <div className="text-center mb-8 lg:mb-16">
            <h1 className="text-3xl sm:text-4xl font-extrabold text-[#0077c0] mb-4">
              Get in Touch
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
              Have questions about our courses or need assistance? We&apos;re here to help.
              Reach out to us and we&apos;ll respond as soon as possible.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact Information */}
          <Reveal delay={0.2} direction="right">
            <div className="space-y-8 h-full">
              <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-slate-200 h-full">
                <h2 className="text-xl sm:text-2xl font-bold text-slate-800 mb-6">
                  Contact Information
                </h2>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-blue-50 p-3 rounded-full shrink-0">
                      <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-[#0077c0]" />
                    </div>
                    <div className="min-w-0">
                      <h3 className="font-semibold text-slate-900 text-lg">Email Us</h3>
                      <p className="text-slate-600 mt-1 text-sm sm:text-base break-words">support@qemeracademy.com</p>
                      <p className="text-slate-600 text-sm sm:text-base break-words">info@qemeracademy.com</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-blue-50 p-3 rounded-full shrink-0">
                      <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-[#0077c0]" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900 text-lg">Call Us</h3>
                      <p className="text-slate-600 mt-1 text-sm sm:text-base">+251 912 34 56 78</p>
                      <p className="text-slate-600 text-sm sm:text-base">+251 987 65 43 21</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-blue-50 p-3 rounded-full shrink-0">
                      <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-[#0077c0]" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900 text-lg">Visit Us</h3>
                      <p className="text-slate-600 mt-1 text-sm sm:text-base">
                        Bole, Addis Ababa,<br />
                        Ethiopia
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-blue-50 p-3 rounded-full shrink-0">
                      <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-[#0077c0]" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900 text-lg">Business Hours</h3>
                      <p className="text-slate-600 mt-1 text-sm sm:text-base">Mon - Fri: 9:00 AM - 6:00 PM</p>
                      <p className="text-slate-600 text-sm sm:text-base">Sat: 9:00 AM - 1:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Contact Form */}
          <Reveal delay={0.4} direction="left">
            <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-slate-200">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-800 mb-6">
                Send us a Message
              </h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First name</Label>
                    <Input id="firstName" placeholder="Enter your first name" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last name</Label>
                    <Input id="lastName" placeholder="Enter your last name" />
                  </div>
                </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="Enter your email address" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="subject">Subject</Label>
                <Input id="subject" placeholder="What is this regarding?" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea 
                  id="message" 
                  placeholder="Type your message here..." 
                  className="min-h-[150px] resize-y"
                />
              </div>

              <Button type="submit" className="w-full bg-[#0077c0] hover:bg-[#005a9e] text-white py-6 text-lg rounded-xl transition-all duration-200 shadow-md hover:shadow-lg">
                <Send className="w-5 h-5 mr-2" />
                Send Message
              </Button>
            </form>
          </div>
          </Reveal>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
