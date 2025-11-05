// // /data/services.js
// import { Briefcase, Users2, LineChart } from "lucide-react"; // optional

// export const services = [
//   {
//     title: "Business Consulting",
//     slug: "business-consulting",
//     desc: "Short summary shown on card.",
//    image:
//         "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80",
//     icon: <Briefcase />,
//     details: `Long description for business consulting...
// - Point 1
// - Point 2
// `,
//   },
//   {
//     title: "Marketing Strategy",
//     slug: "marketing-strategy",
//     desc: "Short summary for marketing.",
//     image:
//         "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80",
//     icon: <LineChart />,
//     details: `Long description for marketing strategy...`,
//   },
//   // add more services...
// ];


// /data/services.js
import { Building2, Hotel, Landmark, HeartPulse, PlaneTakeoff } from "lucide-react";

export const services = [
  {
    title: "Multispeciality Hospital",
    slug: "multispeciality-hospital",
    type: "Healthcare Investment Opportunity",
    location: "SIDCUL, Haridwar, Uttarakhand",
    icon: <HeartPulse />,
    image:
      "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&w=1200&q=80",
    desc: "Exclusive healthcare investment opportunity in a fully equipped multispeciality and cardiac super-specialty hospital.",
    details: {
      opportunity: "Exclusive Healthcare Investment Opportunity",
      category:
        "Fully Equipped, Multispeciality & Cardiac Super-Specialty Hospital",
      ownership: "Clear Title, No Loan",
      asking_price: "₹250 Cr (negotiable)",
      total_beds: "575+",
      operational_beds: "175+",
      total_built_up_area: "85,000+ sq. ft.",
      land_type: "Medical (fully compliant)",
      facilities: {
        operation_theatres: "7 Modular Operation Theatres",
        cath_lab: "1 (Cardiac & CTVS Facility)",
        dialysis_ward: "12-Bedded",
        opds: "28",
        compliance: "Fire Safety & NABH-Ready Compliance",
      },
    },
  },
  {
    // title: "Hotel Mapple Abhay",
    // slug: "hotel-mapple-abhay",
    title: "Hotel Jodhpur",
    slug: "hotel-jodhpur",
    type: "Luxury Hospitality Investment Opportunity",
    location: "Jodhpur, Rajasthan (City Centre)",
    icon: <Hotel />,
    image:
"https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80"
,
    desc: "Exclusive luxury hospitality investment in Jodhpur's city center, a fully furnished 72-room premium hotel.",
    details: {
      opportunity: "Exclusive Luxury Hospitality Investment Opportunity",
      ownership: "Single Owner, Clear Title",
      asking_price: "₹135 Cr (negotiable)",
      plot_size: "3,000 sq. yards",
      constructed_area: "85,000 sq. ft.",
      rooms: "72 Fully Furnished, Centrally Air-Conditioned Rooms",
      structure: "Basement + Ground + 6 Floors",
      features: {
        banquet_halls: 4,
        restaurants_bars: "2 multi-cuisine restaurants & 2 bars",
        key_amenities: [
          "Swimming pool",
          "Health Club",
          "5 Passenger Lifts",
        ],
      },
    },
  },
  {
    // title: "Ramada by Wyndham",
    // slug: "ramada-by-wyndham",
    title: "Hotel Jaisalmer",
    slug: "hotel-jaisalmer",
    type: "Branded Heritage Investment Opportunity",
    location: "Barmer Road, Jaisalmer, Rajasthan",
    icon: <Landmark />,
    image:
      "https://images.unsplash.com/photo-1576678927484-cc907957088c?auto=format&fit=crop&w=1200&q=80",
    desc: "Branded heritage hospitality investment opportunity in Jaisalmer with Ramada by Wyndham.",
    details: {
      opportunity: "Exclusive Branded Heritage Investment Opportunity",
      ownership: "Single Owner, Freehold Property",
      asking_price: "₹82 Cr (negotiable)",
      plot_size: "1 Acre",
      constructed_area: "65,000 sq. ft.",
      total_rooms: 66,
      renovated_year: 2021,
      features: {
        key_selling_point:
          "Only the second international brand in Jaisalmer after Marriott.",
        banquet_hall: "3,450 sq. ft. with 150 pax capacity",
        restaurants_bars:
          "24x7 Coffee Shop (100-seater) and Bar (30-seater)",
      },
    },
  },
  {
    // title: "Hotel Image Point",
    // slug: "hotel-image-point",
    title: "Hotel Rajashthan",
    slug: "hotel-rajasthan",
    type: "Off-Market Hospitality Investment Opportunity",
    location: "Jodhpur, Rajasthan",
    icon: <Building2 />,
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    desc: "Off-market investment opportunity with dual income model and premium rooms in Jodhpur.",
    details: {
      opportunity: "Off-Market Hospitality Investment Opportunity",
      asking_price: "₹35 Cr (negotiable)",
      attractive_entry_price: "₹30 Cr",
      plot_size: "12,600 sq. m (1,50,000 sq. ft.)",
      rooms: "30 Fully Built Premium Rooms",
      features: {
        income_model:
          "Dual Income Model (Rental income from shops + future hotel operations)",
        commercial_space: "One shop and one restaurant",
        status: "Ready-to-operate, minimal refurbishment needed",
      },
    },
  },
  {
    // title: "Hotel Indriya Wayland",
    // slug: "hotel-indriya-wayland",
    title: "Hotel Kerala",
    slug: "hotel-kerala",
    type: "Exclusive Hospitality Investment Opportunity",
    location: "Kerala (Prime Commercial / Coastal Belt)",
    icon: <Hotel />,
    image:
   "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80",
    desc: "Premium hospitality investment opportunity in Kerala’s prime coastal belt.",
    details: {
      opportunity: "Exclusive Hospitality Investment Opportunity",
      asking_price: "₹65 Cr (negotiable)",
      constructed_area: "60,000 sq. ft.",
      rooms: "44 Premium Rooms & Suites, 3 Luxury Bars",
      features: {
        meeting_halls: "400+ capacity meeting halls",
        f_and_b_outlets:
          "Multiple F&B outlets including 3 bars and one of the largest restaurants in the state.",
        amenities: ["Swimming Pool", "Spa", "Banquets"],
      },
    },
  },
  {
    // title: "The Castle Mewar Hotel",
    // slug: "the-castle-mewar-hotel",
    title: "Hotel Udaipur",
    slug: "hotel-udaipur",
    type: "Royal Heritage Hospitality Investment Opportunity",
    location: "Udaipur, Rajasthan (serene Aravalli Hills valley)",
    icon: <Landmark />,
    image:
      "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1200&q=80",
    desc: "Royal heritage resort with 80 rooms, ideal for high-value weddings in Udaipur.",
    details: {
      opportunity: "Exclusive Royal Heritage Hospitality Investment Opportunity",
      asking_price: "₹150 Cr (negotiable)",
      plot_size: "12,600 sq. m (1,50,000 sq. ft.)",
      constructed_area: "84,000 sq. ft.",
      total_rooms: 80,
      room_types: "40 Deluxe, 38 Heritage, 2 Executive Suites",
      features: {
        asset_type: "Rare 80-room heritage resort.",
        events_potential:
          "Large banquet & gardens ideal for high-value weddings.",
        amenities: ["Swimming pool", "Spa", "Gym", "Library"],
      },
    },
  },
  {
    // title: "Hotel Airport View",
    // slug: "hotel-airport-view",
     title: "Hotel Jaipur",
    slug: "hotel-jaipur",
    type: "Off-Market Investment Opportunity - Airport Hotel",
    location: "Opposite Terminal 3, Jaipur International Airport",
    icon: <PlaneTakeoff />,
    image:
      "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=1200&q=80",
    desc: "Exclusive off-market hospitality investment directly facing Jaipur Airport.",
    details: {
      opportunity: "Exclusive Off-Market Investment Opportunity - Jaipur Airport Hotel",
      ownership: "Clear Title (No litigation)",
      asking_price: "₹30 Cr (negotiable)",
      monthly_revenue: "₹40-50 Lakhs",
      plot_size: "1,250 sq. yd (11,250 sq. ft)",
      rooms: 60,
      features: {
        unique_positioning: "Only hotel property directly facing the airport.",
        amenities: [
          "4 Banquet Halls",
          "Rooftop Restaurant (Panoramic view)",
          "Top-of-the-line Nightclub",
          "Huge Basement",
        ],
      },
    },
  },
  {
    // title: "Hotel Valley View",
    // slug: "hotel-valley-view",
    title: "Hotel Udaipur",
    slug: "hotel-udaipur",
    type: "Off-Market Hospitality Investment Opportunity",
    location: "Udaipur, Rajasthan (prime hospitality belt)",
    icon: <Building2 />,
    image:
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80",
    desc: "Off-market hospitality investment with strong revenue drivers in Udaipur’s prime hospitality belt.",
    details: {
      opportunity: "Exclusive Off-Market Hospitality Investment Opportunity",
      asking_price: "₹63 Cr (negotiable)",
      annual_revenue: "₹9.5 Cr - ₹10 Cr yearly",
      location_size: "34,072 sq. ft.",
      built_up_area: "80,000 sq. ft.",
      total_rooms: 73,
      features: {
        revenue_drivers: "Weddings, conferences, leisure tourism",
        events_facilities:
          "2 Banquet Halls and a Conference Hall",
        amenities: [
          "Swimming pool",
          "Gaming zone",
          "Spa & salon",
          "Disco",
          "Wine bar",
          "Garden restaurant",
          "Rooftop dining",
        ],
      },
    },
  },
];

// Contact Information
export const gnk_contact = {
  email: "contactgnk@gmail.com",
  phone_1: "+91 8130141878",
  phone_2: "+91 8448527737",
};
