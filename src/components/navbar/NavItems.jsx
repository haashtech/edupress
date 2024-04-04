export const Navitems = [
    {
      id: 1,
      name: "Home",
      path: "/"
    },
    {
      id: 2,
      name: "Courses",
      path: "/courses"
    },
    {
      id: 3,
      name: "Blog",
      path: "/blog"
    },
    {
      id: 4,
      name: "Page",
      childrens: [
        { id: 1, name: "About Us", path: "/about-us" },
        { id: 2, name: "Contact Us", path: "/contact-us" }
      ]
    },
    {
        id: 5,
        name: "LearnPress Add-On",
        path: "/learnPress"
      },
      {
        id: 6,
        name: "Premium Theme",
        path: "/premiumTheme"
      },
  ];