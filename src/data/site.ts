export const site = {
  brand: "Tanishq Jewellers",
  location: "Ghatanji",
  address: "Rakesh Chandarana Road, Ghatanji, Maharashtra 445301",
  phone: "+91 99708 63472",
  phoneTel: "+919970863472",
  whatsapp: "919970863472",
  instagram: "https://www.instagram.com/tanishq.varma_jewellers/",
  instagramHandle: "@tanishq.varma_jewellers",
  hours: {
    weekdays: "Monday – Saturday: 10:00 AM – 9:00 PM",
    sunday: "Sunday: 10:00 AM – 7:00 PM",
  },
  mapUrl:
    "https://maps.google.com/?q=Tanishq+Jewellers+Rakesh+Chandarana+Road+Ghatanji+Maharashtra+445301",
};

export const whatsappUrl = (product?: string) => {
  const msg = product
    ? `Hi, I'm interested in ${product}. Could you share details and confirm availability?`
    : `Hi, I'd like to enquire about your jewellery collection.`;
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(msg)}`;
};
