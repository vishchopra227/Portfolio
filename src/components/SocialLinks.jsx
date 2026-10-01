import { FaGithub, FaLinkedinIn } from "react-icons/fa";

import {
  SiCodechef,
  SiLeetcode,
  SiCodeforces,
} from "react-icons/si";

import personalInfo from "../data/personalInfo";
import "./SocialLinks.css";

function SocialLinks({ compact = false }) {
  const socialProfiles = [
    {
      name: "GitHub",
      url: personalInfo.socialLinks.github,
      icon: FaGithub,
    },
    {
      name: "LinkedIn",
      url: personalInfo.socialLinks.linkedin,
      icon: FaLinkedinIn,
    },
    {
      name: "CodeChef",
      url: personalInfo.socialLinks.codechef,
      icon: SiCodechef,
    },
    {
      name: "LeetCode",
      url: personalInfo.socialLinks.leetcode,
      icon: SiLeetcode,
    },
    {
      name: "Codeforces",
      url: personalInfo.socialLinks.codeforces,
      icon: SiCodeforces,
    },
  ];

  return (
    <div
      className={`social-links ${
        compact ? "social-links-compact" : ""
      }`}
    >
      {socialProfiles.map((profile) => {
        const Icon = profile.icon;

        return (
          <a
            key={profile.name}
            href={profile.url}
            target="_blank"
            rel="noreferrer"
            className="social-link"
            aria-label={`Visit Vishal's ${profile.name} profile`}
            title={profile.name}
          >
            <Icon size={compact ? 17 : 19} />

            {!compact && (
              <span className="social-link-name">
                {profile.name}
              </span>
            )}
          </a>
        );
      })}
    </div>
  );
}

export default SocialLinks;