import { IoMdMail } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt, FaGithub, FaLinkedin } from "react-icons/fa";
import { FaUniversity } from "react-icons/fa";
import { FaGraduationCap } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

export const homeData = {
  // To use your own photo, just place it in /public/assets and write the link as I did: eg: /assets/my_image.jpg
  // Of course it's best to convert your image file type to webp for better performance on the web!
  // The links are optional
  myImage: "/assets/DSC_0591.webp",
  contactInfo: [
    {
      Icon: IoMdMail,
      Label: "abdulhaseebsohail115@gmail.com",
      Link: "/contact", // This refers to the Contact page in the website, you can change it to whatever you like
    },
    {
      Icon: FaLocationDot,
      Label: "Karachi, Pakistan",
      Link: "https://maps.app.goo.gl/LqXWhFwBHJwWukyF8", // This is just a simple location of my city
    },
    {
      Icon: FaPhoneAlt,
      Label: "+92 322 860 6129",
      Link: "tel:+923228606129",
    },
  ],
  education: [
    {
      Icon: FaUniversity,
      Label: "Dar-ul-madinah",
      Link: "https://www.darulmadinah.net",
    },
    {
      Icon: FaGraduationCap,
      Label: "Matriculation in Computer Science",
      Link: "https://www.darulmadinah.net",
    },
  ],
  social: [
    {
      Icon: FaGithub,
      Label: "GitHub",
      Link: "https://github.com/abdul-haseeb5786",
    },
    {
      Icon: FaLinkedin,
      Label: "LinkedIn",
      Link: "https://www.linkedin.com/in/abdul-haseeb-0646a526a/",
    },
    {
      Icon: FaFacebook,
      Label: "Facebook",
      Link: "https://www.facebook.com/abdul.haseeb.159462/",
    },
    {
      Icon: FaInstagram,
      Label: "Instagram",
      Link: "https://www.instagram.com/haseeb_sohail98/",
    },
  ],
};
