export const site = {
  name: "Turjo Tex Limited",
  tagline: "Garments Accessories Manufacturer & Supplier",
  address: "Borta Para, Pirujali Alim Para, Monipur, Gazipur",
  emailPrimary: "turjoxtex14@gmail.com",
  emailSecondary: "info@turjotex.net",
  phone: "+8801713453556",
  phoneAbout: "+8801713-453556",
  whatsapp:
    "https://wa.me/8801713453556?text=Hello!%20I'm%20interested%20to%20discuss%20regarding%20your%20products.",
  profilePage: "company-profile.html",
  copyright: "Copyright 2026 © Turjo Tex Limited",
};

export const nav = [
  { label: "Home", href: "index.html", key: "home" },
  { label: "About Us", href: "about-us.html", key: "about" },
  { label: "Company Profile", href: "company-profile.html", key: "profile" },
  { label: "Products", key: "products", children: true },
  { label: "Factory Overview", href: "factory-overview.html", key: "factory" },
  { label: "Message from Director", href: "message-from-director.html", key: "director" },
  { label: "Contact Us", href: "contact-us.html", key: "contact" },
];

export const departments = [
  {
    index: "01",
    title: "Marketing Department",
    icon: "assets/img/dept-marketing.png",
    text: "Turjotex has organized its marketing department to constantly track and monitor every process from production to shipment using ERP software to fulfill buyer’s requirements.",
  },
  {
    index: "02",
    title: "Design Department",
    icon: "assets/img/dept-design.png",
    text: "Our design department has skilled and capable of producing any sorts of critical and artistic design with the latest computer-aided design software, even in non-executive hours if required.",
  },
  {
    index: "03",
    title: "QC Department",
    icon: "assets/img/dept-qc.png",
    text: "Quality is the precedence of our product. Turjotex has an independent QC department that ensures our proficiency. Methodology and quality to the highest possible level.",
  },
];

export const stats = [
  { value: 15, display: "15", label: "Countries" },
  { value: 50, display: "50", label: "Clients" },
  { value: 100000, display: "100,000", label: "YDS Elastic & Twill Tape", wide: true },
  { value: 10, display: "10", label: "Business Awards" },
];

export const units = [
  {
    slug: "elastic-unit",
    num: "01",
    title: "Elastic Unit",
    short: "Elastic",
    titleLines: ["Elastic", "Unit"],
    image: "assets/img/elastic-unit.jpg",
    imageFit: "cover",
    homeImage: "assets/img/elastic-unit.jpg",
    homeFit: "cover",
    homeCopy:
      "Turjotex ltd produces the highest quality elastic products in Bangladesh. Our cutting edge machine is equipped to produce any & all kinds of elastics that you can think of.",
    intro:
      "Turjo Tex Ltd produces the highest quality elastic products in Bangladesh. Our cutting edge machine is equipped to produce any & all kinds of elastics that you can think of.",
    fact: "60,000 Yds",
    sections: [
      {
        id: "types-of-elastic",
        title: "Some of the types of Elastic we produce are as follows:",
        nav: "Types of Elastic",
        type: "tags",
        items: [
          "knit Elastic",
          "WovenElastic",
          "Picot Elastic",
          "Elastic Lace",
          "Button Hole Elastic",
          "Gripper Elastic",
          "Printed Elastic",
        ],
      },
    ],
    specs: [
      { label: "Elastic machine name", sep: " : ", value: "DAHU 750L (10Pcs)" },
      { label: "Per day production capacity", sep: " = ", value: "60,000 Yds", highlight: true },
    ],
    gallery: [
      { src: "assets/img/elastic-unit.jpg", alt: "Elastic Unit machinery" },
      { src: "assets/img/factory-4.jpg", alt: "Elastic Unit production line" },
      { src: "assets/img/factory-2.jpg", alt: "Elastic Unit factory floor" },
    ],
  },
  {
    slug: "twill-tape-unit",
    num: "02",
    title: "Twill Tape Unit",
    short: "Twill Tape",
    titleLines: ["Twill Tape", "Unit"],
    image: "assets/img/twill-unit-2.jpg",
    imageFit: "cover",
    homeImage: "assets/img/twill-unit-2.jpg",
    homeFit: "cover",
    homeCopy:
      "Small & Narrow Fabric is an important aspect in the current era of fashion trends. Thus, to serve the needs of the fashion market, we at Turjotex ltd produce the best various types of tapes while ensuring the best of the best quality.",
    intro:
      "Small & Narrow Fabric is an important aspect in the current era of fashion trends. Thus, to serve the needs of the fashion market, we at Turjo Tex Ltd produce the best various types of tapes while ensuring the best of the best quality.",
    fact: "50000 Yds",
    sections: [
      {
        id: "types-of-tape",
        title: "Some of the types of tape we produce are as follows:",
        nav: "Types of Tape",
        type: "tags",
        items: [
          "All types of grosgrain tapes",
          "All types of herringbone tapes",
          "Woven Elastic tapes",
        ],
      },
    ],
    specs: [
      { label: "Twill machine name", sep: " : ", value: "PT & KY (10 PCS)" },
      { label: "Per day production capacity", sep: " = ", value: "50000 Yds", highlight: true },
    ],
    gallery: [
      { src: "assets/img/twill-unit-2.jpg", alt: "Twill tapes" },
      { src: "assets/img/twill-unit.jpg", alt: "Twill Tape Unit machinery" },
      { src: "assets/img/factory-4.jpg", alt: "Narrow fabric production line" },
    ],
  },
  {
    slug: "drawstring-draw-cord-unit",
    num: "03",
    title: "Drawstring & Draw Cord Unit",
    h1Title: "Drawstring Draw Cord Unit",
    short: "Drawstring & Draw Cord",
    titleLines: ["Drawstring", "Draw Cord Unit"],
    image: "assets/img/drawstring-unit.jpg",
    imageFit: "contain",
    homeImage: "assets/img/drawstring-unit.jpg",
    homeFit: "contain",
    homeCopy:
      "A drawstring or draw cord is a flexible cord or string typically made from materials like cotton, polyester, nylon, or elastic, used to tighten or loosen the opening of garments, bags, or other items.",
    intro:
      "A drawstring or draw cord is a flexible cord or string typically made from materials like cotton, polyester, nylon, or elastic, used to tighten or loosen the opening of garments, bags, or other items.",
    fact: "150,000 Yds",
    sections: [
      {
        id: "materials-used",
        title: "Materials Used:",
        nav: "Materials Used",
        type: "numbered",
        items: [
          { term: "Cotton", text: "Soft, breathable, but less durable when wet." },
          { term: "Polyester/Nylon", text: "Strong, water-resistant, and long-lasting." },
          { term: "Elastic", text: "Stretchy, used for adjustable fits." },
          { term: "Silk/Satin", text: "Decorative, used in lingerie or luxury items." },
          { term: "Rubber-Coated or Braided", text: "Adds durability and grip." },
        ],
      },
      {
        id: "common-uses",
        title: "Common Uses of Drawstrings/Draw Cords:",
        nav: "Common Uses",
        type: "numbered",
        items: [
          {
            term: "Clothing",
            text: "Hoodies, sweatpants, pajamas, swimwear, and waistbands.",
          },
          {
            term: "Bags & Backpacks",
            text: "Used to cinch the opening of drawstring bags, backpacks, and pouches.",
          },
          {
            term: "Footwear",
            text: "Shoelaces or adjustable cords in sneakers and boots.",
          },
          {
            term: "Home & Outdoor Gear",
            text: "Tents, curtains, duvet covers, and sports equipment.",
          },
          {
            term: "Medical & Safety Applications",
            text: "Hospital gowns, masks, and safety cords.",
          },
        ],
      },
      {
        id: "types-of-drawstrings",
        title: "Types of Drawstrings:",
        nav: "Types of Drawstrings",
        type: "numbered",
        items: [
          { term: "Flat Drawstrings", text: "Often used in hoodies and sweatpants." },
          { term: "Round/Rope Drawstrings", text: "Common in bags and backpacks." },
          { term: "Elastic Drawstrings", text: "Provides stretch for comfort." },
          {
            term: "Toggle-End Drawstrings",
            text: "Have plastic or metal toggles for easy adjustment.",
          },
          {
            term: "Reflective Drawstrings",
            text: "Used for visibility in sportswear or safety gear.",
          },
        ],
      },
    ],
    specs: [
      { label: "Drawstring Draw Cord machine name", sep: " : ", value: "PT & GARTEX (30 PCS)" },
      { label: "Per day production capacity", sep: " = ", value: "150,000 Yds", highlight: true },
    ],
    gallery: [
      { src: "assets/img/drawstring-unit.jpg", alt: "Drawstring garment detail" },
      { src: "assets/img/drawstring-2.jpg", alt: "Draw cords" },
      { src: "assets/img/drawstring-3.jpg", alt: "Drawstring production detail" },
      { src: "assets/img/drawstring-4.jpg", alt: "Drawstring sample" },
      { src: "assets/img/drawstring-5.jpg", alt: "Draw cord finish" },
      { src: "assets/img/drawstring-1.jpg", alt: "Drawstring trouser sample" },
    ],
  },
  {
    slug: "jacquard-elastic-unit",
    num: "04",
    title: "Jacquard Elastic Unit",
    short: "Jacquard Elastic",
    titleLines: ["Jacquard", "Elastic Unit"],
    image: "assets/img/jacquard-unit.jpg",
    imageFit: "portrait",
    homeImage: "assets/img/jacquard-unit.jpg",
    homeFit: "contain",
    homeCopy:
      "Jacquard Elastic is a specialized type of elastic band that combines functionality with decorative woven patterns, often used in apparel and accessories for both stretch and aesthetic appeal.",
    intro:
      "Jacquard Elastic is a specialized type of elastic band that combines functionality with decorative woven patterns, often used in apparel and accessories for both stretch and aesthetic appeal.",
    fact: "30,000 Yds",
    sections: [
      {
        id: "key-features",
        title: "Key Features of Jacquard Elastic:",
        nav: "Key Features",
        type: "numbered",
        items: [
          {
            term: "Decorative Design",
            text: "Features intricate woven patterns (stripes, logos, floral motifs, etc.) using the Jacquard weaving technique, which allows for complex, multi-colored designs.",
          },
          {
            term: "Elasticity",
            text: "Made with a mix of elastic fibers (like spandex or rubber) and non-elastic yarns (polyester, cotton, or nylon) to provide stretch and recovery.",
          },
          {
            term: "Durability",
            text: "High-quality Jacquard elastic retains its stretch and design even after repeated washing.",
          },
          {
            term: "Soft & Comfortable",
            text: "Often used in garments that touch the skin (underwear, lingerie, waistbands).",
          },
        ],
      },
      {
        id: "common-uses",
        title: "Common Uses:",
        nav: "Common Uses",
        type: "numbered",
        items: [
          {
            term: "Clothing",
            text: "Waistbands (pants, skirts), lingerie, swimwear, socks, and sportswear.",
          },
          {
            term: "Accessories",
            text: "Headbands, hair ties, and decorative straps.",
          },
          {
            term: "Medical & Orthopedic",
            text: "Compression garments, braces (due to its comfort and adjustability).",
          },
          {
            term: "Home Textiles",
            text: "Elasticated fitted sheets, cushion covers.",
          },
        ],
      },
      {
        id: "materials-used",
        title: "Materials Used:",
        nav: "Materials Used",
        type: "bullets",
        items: [
          {
            term: "Elastic Core",
            text: "Spandex (Lycra®), rubber, or latex for stretch.",
          },
          {
            term: "Outer Weave",
            text: "Polyester, cotton, nylon, or a blend for durability and print retention.",
          },
        ],
      },
      {
        id: "types-of-jacquard-elastic",
        title: "Types of Jacquard Elastic:",
        nav: "Types of Jacquard Elastic",
        type: "numbered",
        items: [
          {
            term: "Fold-Over Elastic (FOE)",
            text: "Thin, soft, and often used for lingerie edges.",
          },
          {
            term: "Picot Edge Elastic",
            text: "Has a decorative scalloped edge, common in bras and underwear.",
          },
          {
            term: "Non-Roll Elastic",
            text: "Prevents twisting, ideal for waistbands.",
          },
          {
            term: "High-Stretch Jacquard Elastic",
            text: "Used in activewear for maximum flexibility.",
          },
        ],
      },
      {
        id: "advantages",
        title: "Advantages Over Regular Elastic:",
        nav: "Advantages",
        type: "checks",
        items: [
          {
            term: "Aesthetic Appeal",
            text: "Adds a premium, branded, or fashionable look.",
          },
          {
            term: "Customizable",
            text: "Logos or unique patterns can be woven in.",
          },
          {
            term: "Comfort",
            text: "Softer than plain elastic, reducing skin irritation.",
          },
        ],
      },
    ],
    specs: [
      {
        label: "Jacquard Elastic machine name",
        sep: " : ",
        value: "KY & GARTEX (08 PCS)",
      },
      { label: "Per day production capacity", sep: " = ", value: "30,000 Yds", highlight: true },
    ],
    gallery: [
      { src: "assets/img/jacquard-unit.jpg", alt: "Jacquard elastic production" },
      { src: "assets/img/jacquard-1.jpg", alt: "Jacquard elastic — REDHEAD" },
      { src: "assets/img/jacquard-2.jpg", alt: "Jacquard elastic — AG-GEAR" },
      { src: "assets/img/jacquard-3.jpg", alt: "Jacquard elastic detail" },
      { src: "assets/img/jacquard-4.jpg", alt: "Jacquard elastic roll" },
      { src: "assets/img/jacquard-5.jpg", alt: "Jacquard elastic pattern" },
      { src: "assets/img/jacquard-6.jpg", alt: "Jacquard elastic weave" },
      { src: "assets/img/jacquard-7.jpg", alt: "Jacquard elastic bands" },
    ],
  },
  {
    slug: "label-printing-unit",
    num: "05",
    title: "Label Printing Unit",
    short: "Label Printing",
    titleLines: ["Label Printing", "Unit"],
    image: "assets/img/label-unit.jpg",
    imageFit: "cover",
    homeImage: "assets/img/label-unit.jpg",
    homeFit: "cover",
    homeCopy:
      "Our Flexo printing machines are efficient and are extremely popular for their robust construction and reliable performance. Our printing machines are vastly appreciated for their speedy operation, quality grade printing and ease of operation.",
    intro:
      "Our Flexo printing machines are efficient and are extremely popular for their robust construction and reliable performance. Our printing machines are vastly appreciated for their speedy operation, quality grade printing and ease of operation.",
    fact: "300,000 Pcs",
    sections: [
      {
        id: "ultrasonic-cutting",
        title: "",
        nav: "",
        type: "paragraphs",
        items: [
          "Also, our Ultrasonic technology makes the cutting incision soft and flat, non-burning, non-scattering, suitable for a variety of materials and has become an important and high demand in the garment industry.",
        ],
      },
    ],
    specs: [
      {
        label: "Label printing machine name",
        sep: " : ",
        value: "HY Flexo Machine",
        group: "Printing",
      },
      { label: "Color Variety", sep: ": ", value: "06 color ( 02 pcs)", group: "Printing" },
      {
        label: "Per day production capability",
        sep: " = ",
        value: "300,000 Pcs",
        highlight: true,
        group: "Printing",
      },
      {
        label: "Label Cutting Machine Name",
        sep: ": ",
        value: "HY Ultrasonic 2.0 Cutting machine (02pcs)",
        group: "Cutting",
      },
      {
        label: "Per day production capacity",
        sep: ": ",
        value: "500000 pcs",
        highlight: true,
        group: "Cutting",
      },
    ],
    gallery: [
      { src: "assets/img/label-unit.jpg", alt: "Label Printing Unit machinery" },
      { src: "assets/img/factory-1.jpg", alt: "Label finishing and inspection" },
      { src: "assets/img/factory-3.jpg", alt: "Label production area" },
    ],
  },
  {
    slug: "shell-button-unit",
    num: "06",
    title: "Shell Button Unit",
    h1Title: "Shell Buttons Unit",
    short: "Shell Buttons",
    titleLines: ["Shell Buttons", "Unit"],
    image: "assets/img/shell-unit.jpg",
    imageFit: "contain",
    homeImage: "assets/img/shell-unit.jpg",
    homeFit: "cover",
    homeCopy:
      "Shell buttons are high-quality, natural buttons made from the shells of certain mollusks, prized for their unique luster, durability, and eco-friendly appeal.",
    intro:
      "Shell buttons are high-quality, natural buttons made from the shells of certain mollusks, prized for their unique luster, durability, and eco-friendly appeal.",
    fact: "300,000Pcs",
    sections: [
      {
        id: "materials-and-types",
        title: "Materials & Types of Shell Buttons",
        nav: "Materials & Types",
        type: "defs",
        intro: "Shell buttons are crafted from:",
        items: [
          {
            term: "Mother-of-Pearl (MOP)",
            text: "Made from the iridescent inner layer of oyster, abalone, or pearl mussel shells. Common in luxury fashion.",
          },
          {
            term: "Trocas Shell",
            text: "A type of sea snail shell, often dyed (e.g., black, gold) for decorative effects.",
          },
          {
            term: "Abalone Shell",
            text: "Vibrant, multicolored (blues/greens/pinks), popular in bohemian or artisan designs.",
          },
          {
            term: "Corozo (Tagua Nut)",
            text: "Sometimes confused with shell—actually a plant-based alternative with similar appearance.",
          },
        ],
      },
      {
        id: "key-features",
        title: "Key Features",
        nav: "Key Features",
        type: "checks",
        items: [
          {
            term: "Natural & Sustainable",
            text: "Biodegradable and eco-friendly compared to plastic.",
          },
          {
            term: "Unique Aesthetics",
            text: "Each button has slight variations in color, grain, and sheen.",
          },
          {
            term: "Durable",
            text: "Resistant to heat and solvents (but can crack if drilled improperly).",
          },
          {
            term: "Luxury Appeal",
            text: "Used in high-end fashion (e.g., dress shirts, blazers, couture).",
          },
        ],
      },
      {
        id: "common-uses",
        title: "Common Uses",
        nav: "Common Uses",
        type: "bullets",
        items: [
          { term: "Men’s Shirts", text: "Classic white MOP buttons for formal wear." },
          {
            term: "Women’s Blouses/Dresses",
            text: "Abalone or dyed trocas for decorative accents.",
          },
          {
            term: "Jeans & Jackets",
            text: "Thicker shell buttons for durability.",
          },
          {
            term: "Craft & Jewelry",
            text: "Hand-painted or carved designs.",
          },
        ],
      },
    ],
    specs: [
      {
        label: "Per day production capacity",
        sep: " = ",
        value: "300,000Pcs",
        highlight: true,
      },
    ],
    gallery: [
      { src: "assets/img/shell-unit.jpg", alt: "Shell buttons" },
      { src: "assets/img/shell-2.jpg", alt: "Shell button inspection" },
      { src: "assets/img/shell-1.jpg", alt: "Shell button selection" },
      { src: "assets/img/shell-3.jpg", alt: "Natural shell button detail" },
    ],
  },
  {
    slug: "thermal-sticker-printing-unit",
    num: "07",
    title: "Thermal Sticker Printing Unit",
    short: "Thermal Sticker Printing",
    titleLines: ["Thermal Sticker", "Printing Unit"],
    image: "assets/img/thermal-unit.jpg",
    imageFit: "cover",
    homeImage: "assets/img/thermal-unit.jpg",
    homeFit: "contain",
    homeCopy:
      "Thermal printing also known as heat transfer printing is a strategy for printing that permits you to print a print onto a garment or an item. Thermal printing utilizes the course of intensity to move a picture made in wax to an article or piece of clothing. This printing technique is viable with pre-painted pictures on a wax sheet or can be utilized to make a picture by layering wax color onto an item.",
    intro:
      "Thermal printing also known as heat transfer printing is a strategy for printing that permits you to print a print onto a garment or an item. Thermal printing utilizes the course of intensity to move a picture made in wax to an article or piece of clothing. This printing technique is viable with pre-painted pictures on a wax sheet or can be utilized to make a picture by layering wax color onto an item.",
    fact: "500,000Pcs",
    sections: [
      {
        id: "thermal-printing",
        title: "",
        nav: "",
        type: "paragraphs",
        items: [
          "Turjo Tex Ltd provides you with the top class quality of thermal printing currently available in the apparel market.",
        ],
      },
    ],
    specs: [
      {
        label: "Thermal Sticker Printing Machine Name",
        sep: ": ",
        value: "Industrial SATO CLNX 4 & ZEBRA ZT421 (05Pcs)",
      },
      {
        label: "Per day capacity",
        sep: ": ",
        value: "500,000Pcs",
        highlight: true,
      },
    ],
    gallery: [
      { src: "assets/img/thermal-unit.jpg", alt: "Thermal sticker printing" },
      { src: "assets/img/factory-3.jpg", alt: "Thermal sticker production" },
      { src: "assets/img/factory-1.jpg", alt: "Finishing and inspection" },
    ],
  },
];

export const team = [
  {
    name: "Nusrat Sharmin Mitu",
    role: "Chairman",
    image: "assets/img/team-nusrat.jpg",
  },
  {
    name: "Hafizur Rahman Babu",
    role: "MANAGING DIRECTOR",
    image: "assets/img/team-hafizur.jpg",
  },
  {
    name: "Sohel Loskar",
    role: "GM (Marketing)",
    image: "assets/img/team-sohel.jpg",
  },
];

export const vision =
  "Turjo Tex Ltd is committed to the consistent upliftment and improvement of both its products and its responsibilities towards it’s employees. Striving hard to achieve highest levels of customer satisfaction through timely deliveries along with enhanced quality and value of all our products.";

export const mission =
  "To attain customer satisfaction by delivering nothing but the best, by means of utilizing the highest quality of resources and world-class systems. Turjo Tex Ltd. with well-defined quality objectives in mind to attain customer satisfaction, is at the heart of our business policy and strategy. Turjo Tex is committed to manufacturing, source, supply, export and trade quality services. We will always endeavor to satisfy our customers’ needs and exceed expectations through win-win relationships and delight them. Our vision is to serve our customers with dedication and offer specialized services with TURJO TEX quality assurance, walking the ‘extra mile.’";

export const directorQuote =
  "Customers are our strength. Customer satisfaction is the hallmark by which we measure our performance. So, we strongly maintain all of our services to the highest standards of quality. This has been possible through our persistent quest for product improvement, keeping up with social compliance and adherence to business ethics.";

export const factoryImages = [
  { src: "assets/img/twill-unit.jpg", alt: "Turjo Tex factory floor" },
  { src: "assets/img/label-unit.jpg", alt: "Turjo Tex label printing machinery" },
  { src: "assets/img/factory-1.jpg", alt: "Turjo Tex finishing department" },
  { src: "assets/img/elastic-unit.jpg", alt: "Turjo Tex elastic machinery" },
  { src: "assets/img/factory-4.jpg", alt: "Turjo Tex narrowing machines" },
  { src: "assets/img/factory-2.jpg", alt: "Turjo Tex production area" },
  { src: "assets/img/factory-3.jpg", alt: "Turjo Tex accessories production" },
  { src: "assets/img/shell-2.jpg", alt: "Turjo Tex shell button inspection" },
  { src: "assets/img/team-group.jpg", alt: "The Turjo Tex team at the Gazipur factory" },
];

export const contactCards = [
  {
    title: "Talk to sales",
    text: "Interested in our hosting? Just pick up the phone and call us.",
    icon: "assets/img/contact-phone.png",
    links: [{ label: "+8801713453556", href: "tel:+8801713453556" }],
  },
  {
    title: "Contact support",
    text: "Sometimes you need a little help. Don’t worry, We’re here for you.",
    icon: "assets/img/contact-chat.png",
    links: [
      { label: "turjoxtex14@gmail.com", href: "mailto:turjoxtex14@gmail.com" },
      { label: "info@turjotex.net", href: "mailto:info@turjotex.net" },
    ],
  },
  {
    title: "Visit our Factory",
    text: "Borta Para, Pirujali Alim Para, Monipur, Gazipur",
    icon: "assets/img/contact-pin.png",
    links: [],
  },
];

export const mapEmbed =
  "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3641.0153632019983!2d90.3692184!3d24.1360986!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755dfe4e27f4a91%3A0xe647ebf4edf642b7!2sTurjo%20Tex%20Ltd!5e0!3m2!1sen!2smy!4v1757404611562!5m2!1sen!2smy";

export const companyProfile = {
  chapters: [
    { id: "introduction", label: "Introduction" },
    { id: "our-product", label: "Our Product" },
    { id: "buyer-list", label: "Our Buyer List" },
    { id: "departments", label: "Our Departments" },
    { id: "management", label: "Our Management" },
    { id: "production", label: "Production Capacity" },
    { id: "facilities", label: "Factory Facilities" },
    { id: "contact", label: "Contact" },
  ],
  story: [
    "Turjo Tex Ltd is a complete garments accessories solution provider. We started our operation back in 2015 with Turjo Tex Ltd elastic, twill tape, draw string & label printing.",
    "We are offering topnotch elastic, printing and clothing accessories manufacturing services to our clients in Bangladesh and abroad. Today Turjo Tex Ltd elastic and print machine has become one of the main elastic, label printing houses and pieces of clothing frill providers in Bangladesh. We at Turjo Tex Ltd have confidence in making flawlessness and accuracy to give you state of the art printing administrations going from pre-press, printing to wrapping up.",
    "Alongside Turjo Tex Ltd elastic and label printing, Turjo Tex Ltd has numerous other business associations among which Turjo Tex Ltd was established to provide garment accessories solutions for its neighborhood accomplices.",
    "Over 10 years of involvement with assembling various elastic and printed materials and piece of clothing adornments helps us giving the best quality items to our clients. We put stock in involving the most ideal that anyone could hope to find printing assets to convey the absolute best quality at an economical cost.",
  ],
  products: [
    { num: "01", title: "Elastic Unit", href: "elastic-unit.html", image: "assets/img/elastic-unit.jpg" },
    {
      num: "02",
      title: "Offset Printing Unit",
      href: "label-printing-unit.html",
      image: "assets/img/profile-facility-2.jpg",
    },
    {
      num: "03",
      title: "Jacquard Elastic Unit",
      href: "jacquard-elastic-unit.html",
      image: "assets/img/jacquard-unit.jpg",
    },
    {
      num: "04",
      title: "Thermal Printing Unit",
      href: "thermal-sticker-printing-unit.html",
      image: "assets/img/thermal-unit.jpg",
    },
    { num: "05", title: "Twill Tape Unit", href: "twill-tape-unit.html", image: "assets/img/twill-unit-2.jpg" },
    { num: "06", title: "Printed Label Unit", href: "label-printing-unit.html", image: "assets/img/label-unit.jpg" },
    {
      num: "07",
      title: "Drawstring Unit",
      href: "drawstring-draw-cord-unit.html",
      image: "assets/img/drawstring-unit.jpg",
    },
    { num: "08", title: "Button Unit", href: "shell-button-unit.html", image: "assets/img/shell-unit.jpg" },
  ],
  buyers: [
    { name: "Marks & Spencer", logo: "assets/img/buyers/01-marks-and-spencer.png" },
    { name: "Bass Pro Shops", logo: "assets/img/buyers/02-bass-pro-shops.png" },
    { name: "Pegador", logo: "assets/img/buyers/03-pegador.png" },
    { name: "Levi’s", logo: "assets/img/buyers/04-levis.png" },
    { name: "American Eagle Outfitters", logo: "assets/img/buyers/05-american-eagle.png" },
    { name: "Zara", logo: "assets/img/buyers/06-zara.png" },
    { name: "J.Jill", logo: "assets/img/buyers/07-jjill.png" },
    { name: "Mango", logo: "assets/img/buyers/08-mango.png" },
    { name: "GAP", logo: "assets/img/buyers/09-gap.png" },
    { name: "J.Crew", logo: "assets/img/buyers/10-jcrew.png" },
    { name: "Ann Taylor", logo: "assets/img/buyers/11-ann-taylor.png" },
    { name: "AG-Gear", logo: "assets/img/buyers/12-ag-gear.png" },
    { name: "Next", logo: "assets/img/buyers/13-next.png" },
    { name: "Banana Republic", logo: "assets/img/buyers/14-banana-republic.png" },
    { name: "Old Navy", logo: "assets/img/buyers/15-old-navy.png" },
  ],
  certifications: [
    {
      number: "11-75854",
      title: "Narrow fabrics & elastic",
      scope:
        "Narrow fabric (twill tape, drawstring, draw-cord) made of 100% polyester and 100% cotton yarn in white & dyed. Elastics (including jacquard elastic) made of 100% polyester (in white and yarn dyed) and rubber thread (in white and black). Exclusively produced using components pre-certified according to OEKO-TEX® STANDARD 100.",
      productClass: "I (baby articles) – Annex 6",
      validUntil: "18.02.2026",
      testReport: "75854",
      issued: "2025-02-17",
      image: "assets/img/cert-oeko-tex-11-75854.png",
    },
    {
      number: "11-75233",
      title: "Printed labels",
      scope:
        "Printed labels made of 100% Polyester satin fabric, printed with white and black inks. Produced using components partly pre-certified according to OEKO-TEX® STANDARD 100 and ECO PASSPORT.",
      productClass: "I (baby articles) – Annex 6",
      validUntil: "06.03.2026",
      testReport: "75233",
      issued: "2025-03-05",
      image: "assets/img/cert-oeko-tex-11-75233.png",
    },
  ],
  certificationIssuer:
    "Issued by Shirley Technologies Limited, Manchester, United Kingdom · OEKO-TEX® Service GmbH, Zurich.",
  profileDepartments: [
    {
      index: "01",
      title: "Marketing Department",
      icon: "assets/img/dept-marketing.png",
      paragraphs: [
        "Turjo Tex Ltd has organized its marketing department to constantly track and monitor every process from production to shipment using ERP software to fulfill buyer’s requirements.",
        "The marketing department comprises of expertise from several areas including market research, advertising, pricing, new product development, closely co-operate with the clients to ensure the needs and expectations.",
      ],
    },
    {
      index: "02",
      title: "QC Department",
      icon: "assets/img/dept-qc.png",
      paragraphs: [
        "Quality is the precedence of our product. Turjo Tex Ltd has an independent QC department and laboratory that ensures our proficiency. Methodology and quality to the highest possible level.",
        "The QC Department directly maintained by the CEO. This department consists of a dedicated and highly skilled workforce to provide world class product to our valued clients. They are strongly committed to monitor and maintain high standard in each of the production stages.",
      ],
    },
    {
      index: "03",
      title: "Design Department",
      icon: "assets/img/dept-design.png",
      paragraphs: [
        "Our design department has skilled and capable of producing any sorts of critical and artistic design with the latest computer-aided design software, even in non-executive hours if required.",
        "Our design team are committed to assign perfection in every stitch and capable of developing any sample on very urgent basis. Every artwork is kept in secured computer and removable disks so that we can start any production quickly from previous orders.",
      ],
    },
  ],
  management: [
    { name: "Nusrat Sharmin Mitu", role: "Chairman", image: "assets/img/team-nusrat.jpg" },
    { name: "T.M Hafizur Rahman Babu", role: "Managing Director", image: "assets/img/team-hafizur.jpg" },
  ],
  production:
    "Production process is supported with about 100,000 state of the art machineries, modern layouts, top class material handling systems and optimum care at needle point to meet quality and quantity requirements.",
  facilities: [
    { src: "assets/img/profile-facility-1.jpg", alt: "Elastic production machinery" },
    { src: "assets/img/profile-facility-2.jpg", alt: "Label printing and finishing" },
    { src: "assets/img/factory-2.jpg", alt: "Stitching and sampling at Turjo Tex" },
    { src: "assets/img/profile-facility-4.jpg", alt: "Shell button inspection" },
    { src: "assets/img/profile-facility-5.jpg", alt: "Narrow fabric production" },
    { src: "assets/img/profile-facility-6.jpg", alt: "Factory production floor" },
  ],
  life: [
    { src: "assets/img/profile-picnic-2024.jpg", alt: "Annual Picnic 2024", caption: "Annual Picnic 2024", year: "2024" },
    { src: "assets/img/profile-picnic-2021.jpg", alt: "Annual Picnic 2021", caption: "Annual Picnic 2021", year: "2021" },
    { src: "assets/img/profile-office-party.jpg", alt: "Office Party 2023", caption: "Office Party 2023", year: "2023" },
    { src: "assets/img/profile-picnic-2022.jpg", alt: "Annual Picnic 2022", caption: "Annual Picnic 2022", year: "2022" },
    { src: "assets/img/profile-prize-2023.jpg", alt: "Annual Prize Distribution Ceremony", caption: "Annual Prize Distribution Ceremony", year: "2023" },
    { src: "assets/img/profile-picnic-2023.jpg", alt: "Annual Picnic 2023", caption: "Annual Picnic 2023", year: "2023" },
  ],
  corporateOffice: "House # 268, Faidabad, Dokkhin Khan, Abdullahpur, Dhaka - 1230",
  website: "https://www.turjotex.net/",
  websiteLabel: "www.turjotex.net",
};
