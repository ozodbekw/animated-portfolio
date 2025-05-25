import Card from "@/components/Card";
import SectionHeader from "@/components/SectionHeader";
import StarIcon from "@/assets/icons/star.svg";
import BookImage from "@/assets/images/book-cover.png";
import Image from "next/image";

import JavascriptIcon from "@/assets/icons/square-js.svg";
import HtmlIcon from "@/assets/icons/html5.svg";
import CssIcon from "@/assets/icons/css3.svg";
import ReactIcon from "@/assets/icons/react.svg";
import ChromeIcon from "@/assets/icons/chrome.svg";
import GitHubIcon from "@/assets/icons/github.svg";
import TagIcon from "@/components/TagIcon";

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

export const AboutSection = () => {
  return (
    <div className="pb-96">
      <SectionHeader
        describtion="Learn more about who I am, what I do and what inspares me."
        eyebrow="About me"
        title="A Glimpse Into My World"
      />
      <div>
        <Card>
          <div>
            <StarIcon />
            <h3>My Reads</h3>
            <p>Explore the books shaping my perspectivies.</p>
          </div>
          <Image src={BookImage} alt="Book cover" />
        </Card>
        <Card>
          <div>
            <StarIcon />
            <h3>My Toolbook</h3>
            <p>
              Explore the technologies and tools I use to create digital
              experience.
            </p>
          </div>
          <div>
            {toolboxItems.map((item) => (
              <div key={item.title}>
                <TagIcon component={item.iconType} />
                <span>{item.title}</span>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
};
