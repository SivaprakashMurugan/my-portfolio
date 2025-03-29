// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const recommendationCard = [
  {
    id: 0,
    name: 'Cheran Rajangam',
    image: "images/cheran.jpg",
    designation: 'Lead Frontend Developer | React JS | Microfrontend | Azure',
    view: "Hey everyone! I highly recommend Sivaprakash for any React.js opportunities. Having worked with him on multiple projects, I’ve seen his strong understanding of React.js and Javascript concepts firsthand. He consistently delivers high-quality code, is eager to learn, and embraces new challenges with enthusiasm. Sivaprakash is a reliable and dedicated team member who would be a valuable asset to any React.js team.",
    linkednURL: "https://www.linkedin.com/in/cheran-rajangam/"
  },
  {
    id: 1,
    name: 'Prasanna Kumar JS',
    image: "images/prasanna.jpeg",
    designation: 'Tead Lead Engineering | Dotnet Core | ReactJs | Azure',
    view: "I collaborated with Sivaprakash on a project from the ground up, and his talent and work ethic truly stood out. He handled the architecture setup for a microfrontend project, worked extensively with third-party libraries, and overcame significant customization challenges. I wholeheartedly endorse Sivaprakash for any opportunity that calls for a highly skilled and dedicated individual.",
    // linkednURL: "https://www.linkedin.com/in/"
  },
  {
    id: 2,
    name: 'Rathish Nagarajan',
    image: "images/rathish.jpg",
    designation: 'Software Engineer | Angular | JavaScript | Bootstrap',
    view: "I wholeheartedly recommend Sivaprakash as a talented React and Angular frontend developer. His expertise in .NET Core further strengthens his ability to build robust and scalable applications. Siva’s attention to detail, problem-solving skills, and commitment to delivering high-quality results make him a valuable asset to any development team.",
    linkednURL: "https://www.linkedin.com/in/rathish-nagarajan/"
  },
  {
    id: 3,
    name: 'Vignesh Murugesan',
    image: "images/vignesh.jpeg",
    designation: 'Senior Software Engineer | Flutter | Angular | .Net Core',
    view: "I strongly endorse Sivaprakash for full-stack development positions. His expertise in ReactJS and .NET Core, combined with his professionalism and dedication, make him an invaluable asset to any team. Sivaprakash also excels at collaborating with cross-functional teams to deliver efficient and scalable solutions. Highly recommended! 👍! 🌟",
    linkednURL: "https://www.linkedin.com/in/muhammadullahafridi/"
  },
]
export default function handler(req, res) {
  res.status(200).json(recommendationCard)
}
