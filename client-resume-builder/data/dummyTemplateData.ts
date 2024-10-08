import { resumeFormProps } from "@/app/types/formTypes";
import photo from "../assets/images/photo.svg";

const dummyTemplateData: resumeFormProps = {
  personalDetails: {
    photo: photo.src,
    firstName: "David",
    lastName: "Ojay",
    desiredJob: "Software Engineer",
    code: "+234",
    phone: "",
    country: "Nigeria",
    city: "kubwa",
    state: "FCT",
    zipCode: "911091",
    email: "davidojima007@gmail.com",
    linkedin: "",
    website: "",
    twitter: "",
  },
  experience: {
    id: null,
    jobTitle: "",
    company: "",
    country: "",
    state: "",
    city: "",
    startDate: "",
    endDate: "",
    experience: "",
    present: false,
  },
  experiences: [
    {
      id: 1,
      jobTitle: "Frontend Developer",
      company: "biometrics",
      country: "Nigeria",
      state: "Abuja",
      city: "kubwa",
      startDate: "2023-02-28T23:00:00.000Z",
      endDate: "",
      experience:
        "<ul><li>Implemented UI interfaces for diverse data capturing devices, including print scanners and iris scanners, utilizing a micro frontend architecture with react.</li><li>Utilized formik alongside other techniques to manage larf-ge and complex forms within data intensive applications enhancing user experience and accesbilitu across all applications, fostering modularity and scability.</li><li>utilized vite to establish inter-application communication, enabling efficient exposure and acessibitity of application to one anothetr.</li><li>worked in a agile environment with daily stand up and tracked user stories and sprint planning and week retrospective.</li></ul>",
      present: true,
    },
    {
      id: 2,
      jobTitle: "Frontend Developer",
      company: "Helping Hands ",
      country: "Nigeria",
      state: "Abuja",
      city: "kubwa",
      startDate: "2023-12-31T23:00:00.000Z",
      endDate: "2024-04-30T23:00:00.000Z",
      experience:
        "<ul><li>isb hsvuos vhos vhus vhso vs hvu sohs hvush vu shu shu shu shu h shuh ushouhsvuvhuso hus hu vhsuo hvus hvuo shvuo shu ovhuos hvuos hvuos hus hu hvuo hso huos hu shuos hvuso hvuos hvuo shuo vhus vhus hvus huvo</li><li>s jiv ji vjs vjiosv osj vsj ivjso jvios j oij djiv svdij vji isdjvi sdvjsidjvisodj ojidv jsdiojd ijvis djvi sjivo sjdv osjvo sjiv jdio jvi</li><li>vs jks vj skvj skvsjlnvjslsnsj jvkjs jvk jsvk jvk j jdvk jvks jvks vk sdvjkl vjkljvkl jkl jkl vjkj kl jvks jkv ks jvk sjv ksjkvls jklv sjk vkjsl</li></ul>",
      present: false,
    },
    {
      id: 3,
      jobTitle: "Frontend Developer",
      company: "AOT logistics",
      country: "Bahamas",
      state: "Abuja",
      city: "kubwa",
      startDate: "2023-12-31T23:00:00.000Z",
      endDate: "2024-08-31T23:00:00.000Z",
      experience:
        "<ul><li>sb sv shus hui whu whv houw hwi h hovu hvouh uh s hvuo sh hos i hos ho sho sh hso hui u hsuhuhs vuh vos</li><li>su hvos hv hso vhsovh so hvos hvu sov bsvhsivbs hovsv hs hus hvsivybs guisv ygv gsvgi yv s gv sgvui sguv siuv svgig sivg sivgys vusvk givs ggsvuis dgivgu isguiv gv is gyis gvg gsvisv</li><li>iy gu sgbksv gus vsvb ksgisg isg viysg i gis gis gs gusi vsv svhuus huish ovs hus oh shu vhs vh shvsud svd</li><li>shnuvs hvus s ohvuh svus ouvhuovs huhvsd ousvhuosh uoshvuosh uvhs hvus hgv</li><li>s;h vs vhus hus vohs uvsohvo hv hus vuso hvus svh shv osh uovhsu huosvus vhu vshu sus uvhu hv ush vhus hvu hvu h vsh vhs hus vhus vhh</li></ul>",
      present: false,
    },
    {
      id: 4,
      jobTitle: "Frontend Developer",
      company: "biometrics",
      country: "Nigeria",
      state: "Abuja",
      city: "kubwa",
      startDate: "2024-01-31T23:00:00.000Z",
      endDate: "2024-01-31T23:00:00.000Z",
      experience:
        "<p>sfbusig uso vgu sv iovshvis vh vs hovh ovh vos hvo hsvu hsv oshv oushouvsh vhs ovhos gvs hvuo hvs vushvos hvs vohsv hsh vsv</p><p>osgvh shv lsov bsv ohsvhsv suhv hsv oishvs hvs hos hvi shvh oshv shvovs ovhov hhs vohsi hsihvuosvh shvosv</p><p>siu vhs  vsvinjvsih vvs hu hvisv husd vohs vso vhso vhso vh sohv hsv hs vhsu vusv uossv</p><p><br></p>",
      present: false,
    },
  ],
  education: {
    id: null,
    schoolName: "",
    location: "",
    degree: "",
    fieldOfStudy: "",
    startDate: "",
    endDate: "",
  },
  educationList: [
    {
      id: 1,
      schoolName: "federal University of Technology",
      location: "minna",
      degree: "b. eng",
      fieldOfStudy: "civil engineering",
      startDate: "2023-12-31T23:00:00.000Z",
      endDate: "2024-11-30T23:00:00.000Z",
    },
    {
      id: 2,
      schoolName: "Jewel Model School ",
      location: "Abuja",
      degree: "b. eng",
      fieldOfStudy: "civil engineering",
      startDate: "2023-12-31T23:00:00.000Z",
      endDate: "2024-11-30T23:00:00.000Z",
    },
  ],
  certificate: {
    id: null,
    name: "",
    link: "",
  },
  certificates: [
    {
      id: 1,
      name: "Blockchain",
      link: "https://www.linkedin.com/notifications/?filter=all",
    },
    { id: 2, name: "cloud computing", link: "https://ojay.vercel.app/" },
  ],
  skills: ["React Native", "React", "Python"],
  summary:
    "A seasoned and dedicated web developer with years of specialized experience in front-end development, skilled in crafting responsive, visually captivating websites, and optimizing user interfaces for enhanced user experiences. Known for embracing challenges and proactively seeking opportunities for growth and innovation.",
  templateId: 1,

};

export default dummyTemplateData;
