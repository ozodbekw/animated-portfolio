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
  },
  {
    title: "Photograpy",
    emoji: "📷",
  },
  {
    title: "Gaming",
    emoji: "🎮",
  },
  {
    title: "Hiking",
    emoji: "🥾",
  },
  {
    title: "Music",
    emoji: "🎶",
  },
  {
    title: "Fitness",
    emoji: "🏋🏻‍♂️",
  },
  {
    title: "Reading",
    emoji: "📚",
  },
];

export const AboutSection = () => {
  return (
    <div className="pb-20">
      <div className="container">
        <SectionHeader
          describtion="Learn more about who I am, what I do and what inspares me."
          eyebrow="About me"
          title="A Glimpse Into My World"
        />
        <div className="mt-20 flex flex-col gap-8">
          <Card className="h-[320px]">
            <CardHeader
              title="My Reads"
              describtion=" Explore the books shaping my perspectivies."
            />
            <div className="w-40 mx-auto mt-8 -mb-">
              <Image src={BookImage} alt="Book cover" />
            </div>
          </Card>
          <Card className="h-[320px] p-0">
            <CardHeader
              className="px-6 py-6"
              title="My Toolbook"
              describtion="Explore the technologies and tools I use to create digital
                experience."
            />
            <ToolbosItems className="mt-6" items={toolboxItems} />
            <ToolbosItems
              className="mt-6"
              items={toolboxItems}
              itemsWrapperClassName="-translate-x-1/2"
            />
          </Card>
          <Card>
            <CardHeader
              title="Beyong the Code"
              describtion="Explore my interests and hobbies beyong the degital relm."
            />
            <div>
              {hobbies.map((hobby) => (
                <div key={hobby.title}>
                  <span>{hobby.title}</span>
                  <span>{hobby.emoji}</span>
                </div>
              ))}
            </div>
          </Card>
          <Card>
            <Image src={MapImage} alt="map image" />
            <Image src={SmileMemoji} alt="smiling memoji" />
          </Card>
        </div>
      </div>
    </div>
  );
};
