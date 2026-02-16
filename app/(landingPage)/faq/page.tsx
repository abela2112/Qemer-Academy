import { Metadata } from "next";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "FAQ",
  description: "Find answers to frequently asked questions about enrollment, courses, and more.",
};

const faqs = [
  {
    question: "What is Qemer Academy and who is it for?",
    answer: "Qemer Academy is an online learning platform offering courses in various fields like UI/UX Design, Web Development, and more. It is designed for students, professionals, and anyone looking to upgrade their skills."
  },
  {
    question: "How do I enroll in a course?",
    answer: "To enroll, simply browse our course catalog, select the course you're interested in, and click the 'Enroll' or 'Buy' button. You'll be guided through the payment process."
  },
    {
    question: "Can I access the courses on mobile devices?",
    answer: "Yes! Our platform is fully responsive and optimized for mobile devices, so you can learn anytime, anywhere using your smartphone or tablet."
  },
  {
    question: "Is there a certificate provided upon completion?",
    answer: "Yes, once you successfully complete a course and all required assessments, you will be awarded a certificate of completion from Qemer Academy."
  },
   {
    question: "What payment methods do you accept?",
    answer: "We accept various payment methods including credit/debit cards and other local payment options depending on your region."
  },
  {
      question: "Can I get a refund if I'm not satisfied?",
      answer: "We have a refund policy in place. Please refer to our Terms of Service or contact our support team within the specified refund period if you wish to request a refund."
  }
];

const FAQPage = () => {
  return (
    <div className="min-h-screen bg-slate-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <Reveal width="100%">
          <h1 className="text-4xl font-bold text-center text-[#0077c0] mb-6">Frequently Asked Questions</h1>
          <p className="text-center text-muted-foreground mb-12 text-lg">
              Find answers to common questions about our platform and courses.
          </p>
        </Reveal>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <Reveal key={index} delay={index * 0.1}>
              <details className="group bg-white rounded-lg shadow-sm border border-slate-200 overflow-hidden">
                <summary className="flex justify-between items-center cursor-pointer p-6 list-none font-medium text-lg text-slate-800 hover:bg-slate-50 transition-colors">
                  {faq.question}
                  <span className="transition-transform group-open:rotate-180">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-down"><path d="m6 9 6 6 6-6"/></svg>
                  </span>
                </summary>
                <div className="px-6 pb-6 text-slate-600 leading-relaxed border-t border-slate-100 pt-4">
                  {faq.answer}
                </div>
              </details>
            </Reveal>
          ))}
        </div>
        
        <Reveal delay={0.5}>
          <div className="mt-12 text-center">
              <p className="text-muted-foreground">Still have questions?</p>
              <a href="/contact" className="text-[#0077c0] font-medium hover:underline mt-2 inline-block">
                  Contact Support
              </a>
          </div>
        </Reveal>
      </div>
    </div>
  );
};

export default FAQPage;
