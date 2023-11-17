import { SocialMediaProfiles } from "@/components/SocialMediaIcon";

export const navigation = [
  {
    title: "Work",
    links: [
      { title: "Crafted Visions", href: "/work/amazonclone" },
      { title: "AmiSocial", href: "/work/bazar" },
      { title: "hai kuch", href: "/work/blog101" },
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
      { title: "Brickow", href: "/about" },
      { title: "Celebal Technologies", href: "/process" },
      { title: "TestBook", href: "/blog" },
    ],
  },
  {
    title: "Connect",
    links: SocialMediaProfiles,
  },
];
