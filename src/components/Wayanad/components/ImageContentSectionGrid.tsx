import React from "react";
import { ImageContentSection } from "./ImageContentSection";

export const ImageContentSectionGrid: React.FC = () => {
  // Hardcoded Wayanad attractions
  const attractions = [
    {
      image: "/WayanadHero.jpg",
      imageAlt: "Wayanad Tholpetty Wildlife Sanctuary",
      title: "Wayanad Tholpetty Wildlife Sanctuary",
      paragraph:
        "Tholpetty Wildlife Sanctuary is a popular wildlife sanctuary in Wayanad, which is a habitat for rare species of wild animals. One of the memorable experiences is night camping. The watchtower of this sanctuary is situated above the lake and serves as the main water source for animals. Situated at Tholpetty.",
    },
    {
      image: "/Muthanga.jpg",
      imageAlt: "Wayanad Muthanga Wildlife Sanctuary",
      title: "Wayanad Muthanga Wildlife Sanctuary",
      paragraph:
        "Muthanga Wildlife Sanctuary is a vast forest area covering 345 sq. km in Wayanad. It is the largest abode of wild animals in Malabar and a reserved area for rare Indian tigers. The Forest Department also offers elephant rides to tourists.",
    },
    {
      image: "/Karapuzha.avif",
      imageAlt: "Wayanad Karapuzha Dam",
      title: "Wayanad Karapuzha Dam",
      paragraph:
        "Karapuzha Dam, one of the largest earth dams in India, is built on the Karapuzha River for irrigation purposes. Surrounded by wooded hills, it is a major freshwater reservoir and a top tourist attraction in Wayanad. Located at Karapuzha, Kakkavayal.",
    },
    {
      image: "/Kuruva.webp",
      imageAlt: "Wayanad Kuruva Island",
      title: "Wayanad Kuruva Island",
      paragraph:
        "Kuruva Island is a 950-acre uninhabited forest on the Kabini River tributaries. It is a peaceful picnic spot rich in rare birds, orchids, and herbs, making it an untouched natural haven away from city life.",
    },
    {
      image: "/Pookode.webp",
      imageAlt: "Wayanad Pookkode Lake",
      title: "Wayanad Pookkode Lake",
      paragraph:
        "Pookkode Lake is a natural freshwater lake surrounded by evergreen mountains and forests. Located at Vythiri, it spans 13 acres and reaches a depth of 40 meters. The climate is cool, and the scenery is mesmerizing.",
    },
    {
      image: "/Soochipara.jpeg",
      imageAlt: "Wayanad Soochipara Waterfalls",
      title: "Wayanad Soochipara Waterfalls",
      paragraph:
        "Soochipara Waterfalls, also known as Sentinel Rock Waterfalls, is a three-tiered waterfall located in Vellarimala near Meppadi. The cascading falls range from 100 to 300 feet and offer a spectacular natural display.",
    },
    {
      image: "/Banasurasagar.jpg",
      imageAlt: "Wayanad Banasurasagar Dam",
      title: "Wayanad Banasurasagar Dam",
      paragraph:
        "Banasurasagar Dam, the largest earth dam in India, impounds the Karamanathodu tributary of the Kabini River. The upstream region forms islands when the dam is full, creating a scenic view with Banasura hills in the backdrop.",
    },
    {
      image: "/Edakkal.jpg",
      imageAlt: "Wayanad Edakkal Caves",
      title: "Wayanad Edakkal Caves",
      paragraph:
        "Edakkal Caves, located 1,200 meters above sea level on Ambukutty Hill, are the only known Indian site with Stone Age carvings. These petroglyphs are believed to date back to 6,000 B.C. The caves are 3 km from Ambalavayal and 25 km from Kalpetta.",
    },
    {
      image: "/Thirunelli.webp",
      imageAlt: "Wayanad Thirunelli Temple",
      title: "Wayanad Thirunelli Temple",
      paragraph:
        "Thirunelli Temple, dedicated to Lord Maha Vishnu, is situated at 900 meters altitude in North Wayanad. A stream called Papanasini flows beneath the temple. The temple lies 32 km from Mananthavady, surrounded by lush forests and hills.",
    },
    {
      image: "/Chembra.jpg",
      imageAlt: "Wayanad Chembra Peak",
      title: "Wayanad Chembra Peak",
      paragraph:
        "Chembra Peak is the highest peak in Wayanad at 2,100 meters (6,890 ft) above sea level. It is a popular trekking destination, offering a breathtaking panoramic view of the entire district from the summit.",
    },
    {
      image: "/ChainTree.webp",
      imageAlt: "Wayanad Chain Tree",
      title: "Wayanad Chain Tree",
      paragraph:
        "The Chain Tree is a large Ficus tree located about 15 km from Kalpetta. Local legend says a tribal spirit was chained here by a priest. A small temple now stands to honor the spirit of Kariyanthandan.",
    },
    {
      image: "/Neelimala.webp",
      imageAlt: "Wayanad Neelimala View Point",
      title: "Wayanad Neelimala View Point",
      paragraph:
        "Neelimala View Point, 27 km from Kalpetta and 12 km from Sulthan Bathery, offers stunning views of Meenmutty Waterfalls breaking through thick forest canopies. It's a well-known spot for trekking and photography.",
    },
  ];

  return (
    <div className="flex flex-col space-y-24 py-24">
      {attractions.map((attraction, index) => (
        <ImageContentSection
          key={index}
          image={attraction.image}
          imageAlt={attraction.imageAlt}
          title={attraction.title}
          paragraph={attraction.paragraph}
          reverse={index % 2 === 1} // zig-zag layout
        />
      ))}
    </div>
  );
};
