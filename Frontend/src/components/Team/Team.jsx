import React from "react";
import shoaib from "../../assets/shoaib.jpeg";
import usama from "../../assets/usama.png";
import MemberCard from "./MemberCard/MemberCard";
const Team = () => {
  const [isFlipped, setIsFlipped] = React.useState(false);
  const members = [
    {
      id: "1",
      name: "Shoaib Akbar",
      role: "React and Python Developer",
      university: "University Of Agriculture, Pakistan",
      img: shoaib,
      description:
        "As a Software Developer, I have a strong foundation in React js, Flask, Web Automation and web scrapping. My expertise in Software Development allows me to build advance web UI, develop APIs in Flask, extract data from various sources, including , social media, and other online platforms, and transform that data into valuable insights.",
      linkedin: "https://www.linkedin.com/in/mask02/",
      github: "https://github.com/Mask02",
      discord: "https://discordapp.com/users/729588030083563600/",
    },
    {
      id: "2",
      name: "Usama Shahbaz",
      role: "Web Developer",
      university: "University Of Agriculture, Pakistan",
      img: usama,
      description:
        "As a Python developer, I have a deep understanding of the Python programming language and its vast range of libraries and frameworks. I have experience creating robust and scalable back-end solutions, web applications, and data analysis tools using Python.",
      linkedin: "https://www.linkedin.com/",
      github: "https://github.com/",
      discord: "https://discordapp.com/",
    },
  ];
  return (
    <section className="flex flex-col h-[calc(100vh-7rem)] items-center">
      <h1 className="text-3xl mt-4">Our Team</h1>
      <p className="mb-4 font-thin">
        "Together, we're not just a team, we're a powerhouse of creativity,
        collaboration, and success."
      </p>
      <div className="mt-8 pb-8 flex flex-wrap gap-6 items-center justify-center">
        {members.map((member) => (
          <MemberCard member={member} key={member.id} />
        ))}
      </div>
    </section>
  );
};

export default Team;
