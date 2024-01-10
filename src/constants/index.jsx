import { SocialMediaProfiles } from "@/components/SocialMediaIcon";

export const navigation = [
  {
    title: "Work",
    links: [
      { title: "Crafted Visions", href: "/work" },
      { title: "Stayscape", href: "/work" },
      { title: "AmiSocial", href: "/work" },
      {
        title: (
          <>
            See all <span aria-hidden="true">&rarr;</span>
          </>
        ),
        href: "/work",
      },
    ],
  },
  {
    title: "Company",
    links: [
      { title: "Brickow", href: "/experience" },
      { title: "Celebal Technologies", href: "/experience" },
      { title: "TestBook", href: "/experience" },
    ],
  },
  {
    title: "Connect",
    links: SocialMediaProfiles,
  },
];
