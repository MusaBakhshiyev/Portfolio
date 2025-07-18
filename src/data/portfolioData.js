import MovieLogin from "../images/Movie/MovieLogin.png"
import MovieHeader from "../images/Movie/MovieHeader.png"
import MovieMain from "../images/Movie/MovieMain.png"
import MovieVideo from "../images/Movie/MovieVideo.png"
import MovieComment from "../images/Movie/MovieComment.png"
import MovieCreate from "../images/Movie/MovieCreate.png"

import GadGetHeader from "../images/Gadgetall/GadGetHeader.png"
import FirstMain from "../images/Gadgetall/FirstMain.png"
import SecondMain from "../images/Gadgetall/SecondMain.png"
import Chat from "../images/Gadgetall/Chat.png"
import Chart from "../images/Gadgetall/Chart.png"
import Map from "../images/Gadgetall/Map.png"
import About from "../images/Gadgetall/About.png"

import TraversalHeader from "../images/Traversal/TraversalHeader.png"
import TraversalMain from "../images/Traversal/TraversalMain.png"
import TraversalDetail from "../images/Traversal/TraversalDetail.png"
import TraversalComment from "../images/Traversal/TraversalComment.png"
import TraversalAdmin from "../images/Traversal/TraversalAdmin.png"
import TraversalProfile from "../images/Traversal/TraversalProfile.png"
import TraversalEdit from "../images/Traversal/TraversalEdit.png"

import Currency from "../images/Currency/Currency.png"

import ReatMovie from "../images/ReactMovie/ReactMovie.png"

const portfolioData = [
    {
        id: 1,
        name: "Movie Website",
        description: "Website about Azerbaijani movies",
        skills: "Backend and Frontend",
        info: "This is a website about Azerbaijani movies where users can sign up and log in using their email, verify their account through an email confirmation link, watch movies, leave comments, respond to comments, edit or delete their own comments, add movies to a watchlist, rate movies, and filter them by various criteria. Admins have full control to create, update, and delete movies, manage user roles, and moderate content.",
        technologies: ["ASP.NET", "Razor Pages", "MSSQL", "HTML", "CSS", "jQuery"],
        github: "https://github.com/MusaBakhshiyev/MoviesWebApp.git",
        deploy: "",
        images: [MovieLogin, MovieHeader, MovieMain, MovieVideo, MovieComment, MovieCreate]
    },
    {
        id: 2,
        name: "GadGetAll",
        skills: "Frontend only",
        description: "Electronics e-commerce website",
        info: "This is an electronics e-commerce website where users can search for products, sort them by price or date, and filter by categories such as rating or discount. Users can add items to their cart, favorites, or comparison list. The platform includes customer support chat with voice, text, and image capabilities. It also provides access to related news, digital magazines, and displays store locations on an interactive map. Some information is fetched from external APIs. Chat images and voice messages are stored in IndexedDB, while cart, favorites, and comparison items are stored in localStorage.",
        technologies: ["React", "Vite", "Swiper", "Redux Toolkit", "Local Storage", "IndexedDB"],
        github: "https://github.com/MusaBakhshiyev/E-Commerence.git",
        deploy: "https://musabakhshiyev.github.io/E-Commerence/",
        images: [GadGetHeader, FirstMain, SecondMain, Chat, Chart, Map, About]
    },
    {
        id: 3,
        name: "Traversal",
        skills: "Backend only",
        description: "Travel and tourism website.",
        info: "This is a travel and tourism website. Although it is not fully completed, users can browse destinations, view detailed information, register or log in, and leave comments. Admins can create, delete, and update destination entries. Users can also edit their profiles.",
        technologies: ["ASP.NET", "MVC", "MSSQL"],
        github: "https://github.com/MusaBakhshiyev/TraversalProject.git",
        deploy: "",
        images: [TraversalHeader, TraversalMain, TraversalDetail, TraversalComment, TraversalAdmin, TraversalProfile, TraversalEdit]
    },

    {
        id: 4,
        name: "Currency",
        skills: "Frontend only",
        description: "Currency Converter web application.",
        info: "This is a real-time currency converter web application that uses an external API to fetch up-to-date exchange rates. It includes a responsive user interface and implements debouncing to efficiently wait for the user to finish typing before making API calls, improving performance and reducing unnecessary requests.",
        technologies: ["HTML", "CSS", "JavScript"],
        github: "https://github.com/MusaBakhshiyev/CurrencyExchanger.git",
        deploy: "https://musabakhshiyev.github.io/CurrencyExchanger/",
        images: [Currency]
    },
    {
        id: 5,
        name: "React Movie Website",
        skills: "Frontend only",
        description: "React Movie Website using movie APIs.",
        info: "This is a movie website that uses an API to enable search functionality and allows users to add movies to a favorites list, which is stored in localStorage.",
        technologies: ["React", "Vite", "Local Storage"],
        github: "https://github.com/MusaBakhshiyev/React-Movie.git",
        deploy: "https://musabakhshiyev.github.io/React-Movie/",
        images: [ReatMovie]
    },
];

export default portfolioData;
