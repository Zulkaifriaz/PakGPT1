import React from "react";
import shoaib from "../../assets/zulkaif.jpeg";
import MemberCard from "./MemberCard/MemberCard";

const Team = () => {
  const [isFlipped, setIsFlipped] = React.useState(false);

  const members = [
    {
      id: "1",
      name: "Zulkaif Riaz",
      role: "CS Student",
      university: "Islamia University of Bahawalpur",
      img: zulkaif,
      description:
        "I am a Final Year Student and a beginner, trying to figure out everything. My expertise in Software Development allows me to build advance web UI, develop APIs in Flask, extract data from various sources, including, social media, and other online platforms, and transform that data into valuable insights.",
      linkedin: "https://www.linkedin.com/in/zulkaifriaz/",
      github: "https://github.com/zulkaifriaz",
      discord: "https://discordapp.com/users/",
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