'use client';

import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import { Metadata } from 'next';

// Note: Since this is a client component, metadata should be moved to layout or a separate file
// For now, keeping it simple

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    
    // Reset success message after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Contact Us</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We would love to hear from you. Get in touch with us for any inquiries about our jewelry collection.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-8">Get In Touch</h2>
            
            <div className="space-y-6">
              {/* Address */}
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <MapPin className="w-6 h-6 text-amber-600 mt-1" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-1">Visit Our Showroom</h3>
                  <p className="text-gray-600">
                    123 Jewelry Street<br />
                    Karol Bagh, New Delhi - 110005<br />
                    India
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <Phone className="w-6 h-6 text-amber-600 mt-1" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-1">Call Us</h3>
                  <p className="text-gray-600">
                    +91 11 2345-6789<br />
                    +91 98765-43210
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <Mail className="w-6 h-6 text-amber-600 mt-1" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-1">Email Us</h3>
                  <p className="text-gray-600">
                    info@nakshjewels.com<br />
                    sales@nakshjewels.com
                  </p>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <Clock className="w-6 h-6 text-amber-600 mt-1" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-1">Business Hours</h3>
                  <div className="text-gray-600">
                    <p>Monday - Saturday: 10:00 AM - 8:00 PM</p>
                    <p>Sunday: 11:00 AM - 7:00 PM</p>
                    <p className="text-sm text-amber-600 mt-1">*Extended hours during festival seasons</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="mt-8">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Find Us</h3>
              <div className="w-full h-64 bg-gradient-to-br from-gray-200 to-gray-300 rounded-lg flex items-center justify-center">
                <div className="text-center text-gray-500">
                  <MapPin className="w-12 h-12 mx-auto mb-2" />
                  <p>Interactive Map</p>
                  <p className="text-sm">Karol Bagh, New Delhi</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <div className="bg-white rounded-lg shadow-md p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Send Us a Message</h2>
              
              {isSubmitted && (
                <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">
                  <p className="font-medium">Thank you for your message!</p>
                  <p className="text-sm">We will get back to you within 24 hours.</p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                      placeholder="Your full name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                      placeholder="+91 98765-43210"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                      Subject *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                    >
                      <option value="">Select a subject</option>
                      <option value="general">General Inquiry</option>
                      <option value="product">Product Information</option>
                      <option value="custom">Custom Design</option>
                      <option value="repair">Repair Services</option>
                      <option value="appointment">Schedule Appointment</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                    placeholder="Tell us how we can help you..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-amber-600 hover:bg-amber-700 disabled:bg-amber-400 text-white font-semibold py-3 px-6 rounded-lg transition duration-300 flex items-center justify-center space-x-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* Additional Services */}
            <div className="mt-8 bg-amber-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Our Services</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div>
                  <h4 className="font-medium text-amber-700 mb-2">Jewelry Services</h4>
                  <ul className="space-y-1 text-gray-600">
                    <li>• Custom jewelry design</li>
                    <li>• Jewelry repair & restoration</li>
                    <li>• Stone setting & replacement</li>
                    <li>• Ring resizing</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-amber-700 mb-2">Customer Care</h4>
                  <ul className="space-y-1 text-gray-600">
                    <li>• Free jewelry consultation</li>
                    <li>• Lifetime warranty</li>
                    <li>• Certificate of authenticity</li>
                    <li>• Home delivery available</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
