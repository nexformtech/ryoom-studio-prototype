import heroImg from "../assets/images/hero.webp";
import logoMark from "../assets/images/logo-mark.webp";
import img01 from "../assets/images/img01.webp";
import img02 from "../assets/images/img02.webp";
import img04 from "../assets/images/img04.webp";
import img05 from "../assets/images/img05.webp";
import img06 from "../assets/images/img06.webp";
import img07 from "../assets/images/img07.webp";
import img08 from "../assets/images/img08.webp";
import img09 from "../assets/images/img09.webp";
import img10 from "../assets/images/img10.webp";
import img11 from "../assets/images/img11.webp";
import img12 from "../assets/images/img12.webp";
import img14 from "../assets/images/img14.webp";
import img15 from "../assets/images/img15.webp";
import img16 from "../assets/images/img16.webp";
import img17 from "../assets/images/img17.webp";
import img18 from "../assets/images/img18.webp";
import img19 from "../assets/images/img19.webp";
import img20 from "../assets/images/img20.webp";
import img21 from "../assets/images/img21.webp";
import img22 from "../assets/images/img22.webp";
import img25 from "../assets/images/img25.webp";
import img26 from "../assets/images/img26.webp";
import img28 from "../assets/images/img28.webp";
import img29 from "../assets/images/img29.webp";
import img30 from "../assets/images/img30.webp";
import img31 from "../assets/images/img31.webp";

export const heroImage = heroImg;
/** Cropped from the studio's own backlit logo, not redrawn. */
export const logo = logoMark;
export const logoWallImage = img02;
export const storefrontImage = img12;
export const studioDeskImage = img14;

export type ProjectCategory = "architecture" | "living" | "bedrooms" | "studio";

export interface Project {
  id: string;
  src: string;
  alt: string;
  category: ProjectCategory;
  title: string;
}

/** Every image below comes from RYOOM STUDIO's verified Magicpin gallery and was checked by eye. */
export const projects: Project[] = [
  { id: "p01", src: img01, category: "architecture", title: "Contemporary villa with stone façade", alt: "Contemporary single-storey villa by RYOOM STUDIO with stone-clad walls, timber pergola and a landscaped lawn" },
  { id: "p09", src: img09, category: "architecture", title: "Two-storey residence at dusk", alt: "Two-storey contemporary residence designed by RYOOM STUDIO, lit at dusk with balconies and warm façade lighting" },
  { id: "p05", src: img05, category: "architecture", title: "Multi-storey building elevation", alt: "Multi-storey building elevation by RYOOM STUDIO with brick-toned cladding and glazing, rendered at dusk" },
  { id: "p04", src: img04, category: "architecture", title: "Modern home, night elevation", alt: "Modern house exterior by RYOOM STUDIO at night with illuminated façade and car porch" },
  { id: "p11", src: img11, category: "architecture", title: "Residence with layered balconies", alt: "Two-storey residence by RYOOM STUDIO with layered balconies and warm exterior lighting" },
  { id: "p18", src: img18, category: "architecture", title: "Slim-plot urban residence", alt: "Narrow multi-storey urban residence elevation designed by RYOOM STUDIO" },
  { id: "p21", src: img21, category: "living", title: "Living room with arched feature wall", alt: "Living room by RYOOM STUDIO with an arched green feature wall, curved sofa and media unit" },
  { id: "p26", src: img26, category: "living", title: "Living room with chandelier", alt: "Living room by RYOOM STUDIO with a marble TV wall, chandelier and indoor planting" },
  { id: "p25", src: img25, category: "living", title: "Dining with lit crockery unit", alt: "Dining area by RYOOM STUDIO with a backlit crockery unit, dining table and ceiling fan" },
  { id: "p22", src: img22, category: "living", title: "Living & dining with timber doors", alt: "Living and dining space by RYOOM STUDIO with a TV wall, timber doors and cove lighting" },
  { id: "p08", src: img08, category: "living", title: "Lounge with display shelving", alt: "Lounge interior by RYOOM STUDIO with display shelving and a neutral sofa" },
  { id: "p16", src: img16, category: "living", title: "Family lounge in soft greys", alt: "Family lounge by RYOOM STUDIO with a grey sofa and framed artwork" },
  { id: "p17", src: img17, category: "living", title: "TV wall and lounge", alt: "Living room by RYOOM STUDIO with a panelled TV wall and grey sectional sofa" },
  { id: "p19", src: img19, category: "living", title: "Media wall with artwork", alt: "Living room by RYOOM STUDIO with a media wall, artwork and warm lighting" },
  { id: "p30", src: img30, category: "living", title: "Library lounge", alt: "Lounge by RYOOM STUDIO with floor-to-ceiling bookshelves" },
  { id: "p31", src: img31, category: "living", title: "Formal lounge in beige", alt: "Formal lounge by RYOOM STUDIO with beige sofas and layered lighting" },
  { id: "p06", src: img06, category: "living", title: "Panelled TV unit", alt: "Interior by RYOOM STUDIO featuring a panelled TV unit with integrated storage" },
  { id: "p10", src: img10, category: "bedrooms", title: "Bedroom with tufted headboard", alt: "Bedroom by RYOOM STUDIO with a tufted headboard wall and framed artwork" },
  { id: "p20", src: img20, category: "bedrooms", title: "Bedroom with fluted panelling", alt: "Bedroom by RYOOM STUDIO with fluted wall panelling and upholstered bed" },
  { id: "p28", src: img28, category: "bedrooms", title: "Bedroom with sunburst mirror", alt: "Bedroom by RYOOM STUDIO with a sunburst mirror and fluted feature wall" },
  { id: "p15", src: img15, category: "bedrooms", title: "Bedroom with cove ceiling", alt: "Bedroom by RYOOM STUDIO with a cove-lit false ceiling" },
  { id: "p29", src: img29, category: "bedrooms", title: "Grey bedroom with accents", alt: "Bedroom by RYOOM STUDIO in grey tones with yellow accent cushions" },
  { id: "p07", src: img07, category: "studio", title: "The studio, Devi Nagar", alt: "Inside the RYOOM STUDIO office in Devi Nagar, Jaipur, with the illuminated studio logo" },
  { id: "p12", src: img12, category: "studio", title: "Studio storefront", alt: "RYOOM STUDIO storefront signage on Govind Marg, Jaipur, listing its services and phone numbers" },
  { id: "p14", src: img14, category: "studio", title: "Design desk", alt: "Designer at work at the RYOOM STUDIO office in Jaipur" },
];

export const byId = (id: string) => projects.find((p) => p.id === id)!;

export const categoryLabels: Record<ProjectCategory | "all", string> = {
  all: "All works",
  architecture: "Architecture",
  living: "Living & Dining",
  bedrooms: "Bedrooms",
  studio: "The Studio",
};
