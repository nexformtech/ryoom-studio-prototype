/**
 * RYOOM STUDIO - verified business details.
 * Sources: magicpin verified listing (address, hours, rating), studio storefront signage
 * (services, principals, phone numbers) and client-provided brief.
 */

export const site = {
  name: "RYOOM STUDIO",
  tagline: "Architecture & Interior Design",
  city: "Jaipur",
  address: {
    line1: "498, Govind Marg, Katewa Nagar",
    line2: "Devi Nagar, Shyam Nagar, Jaipur",
    line3: "Rajasthan 302019",
  },
  phones: [
    { label: "Nagendra Saxena", display: "+91 99290 13679", tel: "+919929013679" },
    { label: "Anjali Saxena", display: "+91 92571 40319", tel: "+919257140319" },
  ],
  whatsapp: {
    number: "919929013679",
    display: "+91 99290 13679",
  },
  hours: {
    days: "Monday - Saturday",
    time: "10:00 AM - 7:00 PM",
    sunday: "Sunday: Closed",
  },
  mapUrl: "https://www.google.com/maps?q=26.8836619,75.7604943",
  mapEmbed:
    "https://maps.google.com/maps?q=26.8836619,75.7604943&z=16&hl=en&output=embed",
  rating: {
    value: "5.0",
    count: 32,
    source: "Magicpin",
    sourceUrl:
      "https://magicpin.in/Devi-Nagar/Devi-Nagar/Other/Ryoom-Studio/store/33b05a1",
  },
} as const;

export const whatsappLink = (message: string) =>
  `https://wa.me/${site.whatsapp.number}?text=${encodeURIComponent(message)}`;

export const defaultEnquiryMessage =
  "Hello RYOOM STUDIO, I visited your website and would like to discuss a project. Please share the details.";

/** Free-use Pexels footage (Pexels licence, no attribution required). */
export const media = {
  heroVideo: "https://videos.pexels.com/video-files/29466011/12684178_1920_1080_60fps.mp4",
  serviceVideo: "https://videos.pexels.com/video-files/29466021/12684208_1920_1080_60fps.mp4",
};
