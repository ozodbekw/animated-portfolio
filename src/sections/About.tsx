import Image from "next/image";

// components
import Card from "@/components/Card";
import SectionHeader from "@/components/SectionHeader";
import TagIcon from "@/components/TagIcon";

// images
import BookImage from "@/assets/images/book-cover.png";
import StarIcon from "@/assets/icons/star.svg";
import JavascriptIcon from "@/assets/icons/square-js.svg";
import HtmlIcon from "@/assets/icons/html5.svg";
import CssIcon from "@/assets/icons/css3.svg";
import ReactIcon from "@/assets/icons/react.svg";
import ChromeIcon from "@/assets/icons/chrome.svg";
import GitHubIcon from "@/assets/icons/github.svg";
import MapImage from "@/assets/images/map.png";
import SmileMemoji from "@/assets/images/memoji-smile.png";
import CardHeader from "@/components/CardHeader";
import ToolbosItems from "@/components/ToolbosItems";

const toolboxItems = [
  {
    title: "Javascript",
    iconType: JavascriptIcon,
  },
  {
    title: "HTML",
    iconType: HtmlIcon,
  },
  {
    title: "CSS",
    iconType: CssIcon,
  },
  {
    title: "React",
    iconType: ReactIcon,
  },
  {
    title: "Chrome",
    iconType: ChromeIcon,
  },
  {
    title: "GitHub",
    iconType: GitHubIcon,
  },
];

const hobbies = [
  {
    title: "Painting",
    emoji: "🎨",
    top: "5%",
    left: "5%",
  },
  {
    title: "Photograpy",
    emoji: "📷",
    top: "5%",
    left: "50%",
  },
  {
    title: "Hiking",
    emoji: "🥾",
    top: "40%",
    left: "35%",
  },
  {
    title: "Gaming",
    emoji: "🎮",
    top: "35%",
    left: "10%",
  },
  {
    title: "Music",
    emoji: "🎶",
    left: "70%",
    top: "45%",
  },
  {
    title: "Fitness",
    emoji: "🏋🏻‍♂️",
    left: "5%",
    top: "65%",
  },
  {
    title: "Reading",
    emoji: "📚",
    left: "45%",
    top: "70%",
  },
];

export const AboutSection = () => {
  return (
    <section id="about" className="pb-20 lg:py-28">
      <div className="container">
        <SectionHeader
          describtion="Learn more about who I am, what I do and what inspares me."
          eyebrow="About me"
          title="A Glimpse Into My World"
        />
        <div className="mt-20 flex flex-col gap-8">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 lg:grid-cols-3">
            <Card className="h-[320px] md:col-span-2 lg:col-span-1">
              <CardHeader
                title="My Reads"
                describtion="Explore the books shaping my perspectivies."
              />
              <div className="w-40 mx-auto mt-2 md:mt-0">
                <Image src={BookImage} alt="Book cover" />
              </div>
            </Card>
            <Card className="h-[320px] md:col-span-3 lg:col-span-2">
              <CardHeader
                title="My Toolbook"
                describtion="Explore the technologies and tools I use to create digital
                experience."
              />
              <ToolbosItems className="" items={toolboxItems} />
              <ToolbosItems
                className="mt-6"
                items={toolboxItems}
                itemsWrapperClassName="-translate-x-1/2"
              />
            </Card>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 lg:grid-cols-3">
            <Card className="h-[320px] p-0 flex flex-col md:col-span-3 lg:col-span-2">
              <CardHeader
                title="Beyong the Code"
                describtion="Explore my interests and hobbies beyong the degital relm."
                className="px-6 py-6"
              />
              <div className="relative flex-1">
                {hobbies.map((hobby) => (
                  <div
                    key={hobby.title}
                    className="inline-flex absolute items-center gap-2 px-6 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full py-1.5"
                    style={{
                      left: hobby.left,
                      top: hobby.top,
                    }}
                  >
                    <span className="font-medium text-gray-950">
                      {hobby.title}
                    </span>
                    <span>{hobby.emoji}</span>
                  </div>
                ))}
              </div>
            </Card>
            <Card className="p-0 h-[320px] relative md:col-span-2 lg:col-span-1">
              <Image
                src={MapImage}
                alt="map image"
                className="h-full w-full object-cover object-left-top"
              />
              <div className="absolute rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 after:content-[''] after:absolute after:inset-0 after:outline after:outline-2 after:-outline-offset-2 after:rounded-full after:outline-gray-950/30">
                <Image
                  className="size-20"
                  src={SmileMemoji}
                  alt="smiling memoji"
                />
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
