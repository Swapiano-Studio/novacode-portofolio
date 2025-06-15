import React, { useState, useRef } from "react";
import emailjs from "emailjs-com";
import {
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
  SendHorizonal,
} from "lucide-react";
import { cn } from "../lib/utils";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { publicKey, serviceID, templateID } from "../lib/api";

const ContactSection = () => {
  const formRef = useRef(null);
  const [loading, setLoading] = useState(false);

  function getTodayDateString() {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, "0"); // Months are 0-based
    const day = String(today.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  }

  function saveSendDateForToday() {
    const today = getTodayDateString();
    localStorage.setItem("lastContactDate", today);
    return today;
  }

  function hasSentToday() {
    const lastSent = localStorage.getItem("lastContactDate");
    const today = getTodayDateString();
    return lastSent === today;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formRef.current) return;
    if (hasSentToday()) {
      setLoading(false);
      toast.error("You've already sent a message today!");
      return;
    }

    setLoading(true);

    emailjs.sendForm(serviceID, templateID, formRef.current, publicKey).then(
      (result) => {
        setLoading(false);
        saveSendDateForToday();
        toast.success(
          "Message sent! Thank you for your message. I'll get back to you soon."
        );
        if (formRef.current) {
          formRef.current.reset();
        }
      },
      (error) => {
        setLoading(false);
        toast.error("Failed to send message. Please try again later.");
      }
    );
  };

  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <ToastContainer />
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center">
          Get In <span className="text-primary">Touch</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Have a project in mind or want to collaborate? Feel free to reach out.
          I'm always open to discussing new opportunities.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold mb-6 text-center md:text-left">
              Contact Information
            </h3>
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Email</h4>
                  <a
                    href="mailto:sanandanova@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    sanandanova@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Phone</h4>
                  <a
                    href="tel:+6287724835806"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    (+62) 877-2483-6806
                  </a>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Location</h4>
                  <p className="text-muted-foreground">Bali, Indonesia</p>
                </div>
              </div>
            </div>
            <div className="pt-8">
              <h3 className="text-2xl font-semibold mb-6 text-center md:text-left">
                Contact With Me
              </h3>
              <div className="flex space-x-6 justify-center md:justify-start text-primary text-2xl">
                <a
                  href="https://linkedin.com/in/i-kadek-sananda-nova-herawan-a49a7b302"
                  target="_blank"
                  aria-label="LinkedIn"
                  className="hover:text-primary/80 transition-colors"
                >
                  <Linkedin className="h-6 w-6" />
                </a>
                <a
                  href="https://www.instagram.com/sanandanova_20"
                  target="_blank"
                  aria-label="Instagram"
                  className="hover:text-primary/80 transition-colors"
                >
                  <Instagram className="h-6 w-6" />
                </a>
                <a
                  target="_blank"
                  href="https://t.me/+6287724836806"
                  aria-label="Message"
                  className="hover:text-primary/80 transition-colors"
                >
                  <Send className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>
          <div className="bg-card p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>
            <form ref={formRef} onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Nova Herawan..."
                  disabled={loading}
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="kadeksananda@gmail.com"
                  disabled={loading}
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                  placeholder="Hello, I'd like to talk about..."
                  disabled={loading}
                />
              </div>
              <button
                type="submit"
                className={cn(
                  "cosmic-button w-full flex items-center justify-center gap-2",
                  loading ? "opacity-50 cursor-not-allowed" : ""
                )}
                disabled={loading}
              >
                {loading ? "Sending..." : "Send Message"}
                <SendHorizonal size={16} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
