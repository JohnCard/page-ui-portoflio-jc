import { Box } from "@mui/material"
import { Hero } from "../components/Hero"
import { Trajectory } from "../components/Trajectory"
import { ContactForm } from "../components/ContactForm"
import { StackContainer } from "./StackContainer"
import html from '../assets/html.webp'
import css from '../assets/css.webp'
import js from '../assets/js.webp'
import python from '../assets/python.webp'
import react from '../assets/react.svg'
import bootstrap from '../assets/bootstrap.svg'
import material_ui from '../assets/material_ui.svg'
import dj from '../assets/dj.svg'
import git from '../assets/git.webp'
import github from '../assets/github.svg'
import rf from '../assets/rf.png'
import { About } from "../components/About"
import { Projects } from "./Projects"
import { Testimonies } from "./Testimonies"
import { Footer } from "./Footer"
import blog from '../assets/blog_react_bootstrap.png'
import bootstrap_portfolio from '../assets/bootstrap_portfolio.png'
import bootstrap_blog from '../assets/bootstrap_blog.png'
import basic_portfolio from '../assets/portfolio_html_css.png'
import rick_and_morty from '../assets/rick_and_morty_ui_app.png'
import users_crud from '../assets/users_crud_bootstrap.png'
import jira from '../assets/task_crud_ui_rf.png'
import shopping_cart from '../assets/shopping_cart_simulator_js_bs.png'
import bs_shopping_cart from '../assets/shopping_cart_simulator_bs_django_js.png'
import ui_shopping_cart from '../assets/shopping_cart_simulator_ui_rf.png'
import users_crud_data_table_bs from '../assets/users_crud_data_table_bs.png'
import users_crud_data_table_ui from '../assets/users_crud_data_table_ui.png'
import ecommerce_crud from '../assets/ecommerce_crud.png'

const loremText = 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit illo, officia sit tempora ut eveniet rerum molestiae pariatur quas eius mollitia. Sequi, at? Itaque deleniti nisi consectetur, consequatur hic esse!'

const stack = [
  {
    name: 'html',
    src: html
  },
  {
    name: 'css',
    src: css
  },
  {
    name: 'javascript',
    src: js
  },
  {
    name: 'python',
    src: python
  },
  {
    name: 'bootstrap',
    src: bootstrap
  },
  {
    name: 'react',
    src: react
  },
  {
    name: 'material ui',
    src: material_ui
  },
  {
    name: 'django',
    src: dj
  },
  {
    name: 'rest framework',
    src: rf
  },
  {
    name: 'git',
    src: git
  },
  {
    name: 'github',
    src: github
  },
]

const projects = [
  {
    name: 'Blog',
    src: blog,
    text: 'Personal portfolio blog showcasing my full-stack web development skills. Django, Django REST Framework, JavaScript, React, Bootstrap, and Material UI, it demonstrates REST API integration, dynamic templates, and features my projects, technical expertise, and contact information.',
    stack: ['react', 'bootstrap'],
    link_demo: 'https://react-blog-psi-jade.vercel.app/',
    github_repo: 'https://github.com/JohnCard/react-blog'
  },
  {
    name: 'Rick & Morty app',
    src: rick_and_morty,
    text: 'Aplicación frontend en JavaScript, HTML y Bootstrap que consume Rick and Morty API y PokéAPI para explorar, buscar y filtrar personajes, episodios, localizaciones y Pokémon, con tablas dinámicas y paginación.',
    stack: ['react', 'bootstrap', 'javascript'],
    link_demo: 'https://rick-and-morty-practica1.surge.sh/',
    github_repo: 'https://github.com/JohnCard/rick-and-morty'
  },
  {
    name: 'Pokemon & users crud',
    src: users_crud,
    text: 'Aplicación frontend en JavaScript, HTML y Bootstrap que consume PokéAPI y JSONPlaceholder para consultar Pokémon y gestionar entrenadores y usuarios mediante operaciones CRUD, mostrando información personal y empresarial.',
    stack: ['javascript', 'bootstrap'],
    link_demo: 'https://johncard.github.io/pokemon-crud/',
    github_repo: 'https://github.com/JohnCard/pokemon-crud'
  },
  {
    name: 'Crud table',
    src: users_crud_data_table_bs,
    text: 'Implementación de React Data Table Component combinado con Bootstrap para gestionar y visualizar datos mediante tablas dinámicas, incorporando búsqueda y operaciones CRUD en una interfaz organizada e interactiva con "react-data-table-component"',
    stack: ['bootstrap', 'react-data-table-component'],
    link_demo: 'https://datatableexample.surge.sh/',
    github_repo: 'https://github.com/JohnCard/project-users-crud-data-table-table-jc'
  },
  {
    name: 'React UI data table',
    src: users_crud_data_table_ui,
    text: 'Implementación de React Data Table Component con Material UI para gestionar usuarios mediante operaciones CRUD, filtrado individual por ID y visualización de detalles en modales. Incluye Notistack para notificaciones de éxito y error en las peticiones.',
    stack: ['react-data-table-component', 'material ui'],
    link_demo: 'https://data-table-ui.surge.sh/users-table',
    github_repo: 'https://github.com/JohnCard/react-ui-table-users'
  },
  {
    name: 'Jira simulator',
    src: jira,
    text: 'Aplicación frontend en React y Material UI que consume una API REST para gestionar tareas mediante operaciones CRUD, con tablas dinámicas, modales para crear y actualizar registros, y consultas individuales para visualizar los detalles de cada tarea.',
    stack: ['material ui', 'rest framework', 'javascript'],
    link_demo: 'https://youtu.be/MkYkn0NjlJ8',
    github_repo: 'https://github.com/JohnCard/project-vite-jc'
  },
  {
    name: 'Ecommerce CRUD',
    src: ecommerce_crud,
    text: 'Online store to simulate the CRUD (create, retrieve, update, delete) operations from a gallery of varied products',
    stack: ['js', 'bootstrap', 'rest framework'],
    link_demo: 'https://youtu.be/sA1ci8obzws',
    github_repo: 'https://github.com/JohnCard/Online-ecommerce'
  },
  {
    name: 'Basic shopping cart simulator',
    src: shopping_cart,
    text: 'A full-featured client-side e-commerce simulator built with JavaScript, Bootstrap, and Sass. Features user authentication, a dynamic product gallery with a custom carousel, a shopping cart with real-time stock management, and full session persistence using localStorage as the data layer.',
    stack: ['js', 'bootstrap'],
    link_demo: 'https://primer-entrega-javascript.vercel.app/',
    github_repo: 'https://github.com/JohnCard/ProyectoFinal-Sanchez-Martinez'
  },
  {
    name: 'Shopping cart (js + api)',
    src: bs_shopping_cart,
    text: 'Backend application developed with Django REST Framework, designed to interact with the external REST Countries API and to be consumed by an external frontend client developed with JavaScript and Bootstrap.',
    stack: ['js', 'bootstrap', 'django'],
    link_demo: 'https://www.youtube.com/watch?v=sA1ci8obzws',
    github_repo: 'https://github.com/JohnCard/Backend---codeandote'
  },
  {
    name: 'Shopping cart (ui + django)',
    src: ui_shopping_cart,
    text: 'Online portfolio showcasing my skills as a Junior Full-Stack Web Developer. Built with React, Material UI, JavaScript and Django REST Framework. One year of professional experience developing REST APIs, plus hands-on experience building responsive interfaces and reusable React components.',
    stack: ['ui', 'rest framework', 'javascript'],
    link_demo: 'https://www.youtube.com/watch?v=_mh8EzlQFT8',
    github_repo: 'https://github.com/JohnCard/vite-portfolio'
  },
  {
    name: 'Basic portfolio',
    src: basic_portfolio,
    text: 'A basic personal web portfolio developed applying html & css technologies only, featuring a user-friendly and responsive design. It showcases my technical skills in front-end web development, highlighting my ability to create clean, functional, and adaptable user interfaces optimized for seamless viewing across multiple devices independent of any specific design framework',
    stack: ['html', 'css'],
    link_demo: 'http://jc-portfolio-v2.surge.sh/',
    github_repo: 'https://github.com/JohnCard/project-portfolio-jc'
  },
  {
    name: 'Bootstrap blog',
    src: bootstrap_blog,
    text: 'A personal web portfolio developed using Bootstrap, featuring a user-friendly and responsive design. It showcases my technical skills in front-end web development, highlighting my ability to create clean, functional, and adaptable user interfaces optimized for seamless viewing across multiple devices.',
    stack: ['bootstrap', 'css'],
    link_demo: 'http://css-technical-interview.surge.sh/',
    github_repo: 'https://github.com/thealexdev/088-01-css-test/tree/commit-completed-portfolio'
  },
  {
    name: 'Bootstrap profile',
    src: bootstrap_portfolio,
    text: 'A personal web portfolio developed using Bootstrap, featuring a user-friendly and responsive design. It showcases my technical skills in front-end web development, highlighting my ability to create clean, functional, and adaptable user interfaces optimized for seamless viewing across multiple devices.',
    stack: ['bootstrap'],
    link_demo: 'https://profile-orpin-kappa.vercel.app/',
    github_repo: 'https://github.com/JohnCard/profile'
  }
]

const testimonies = [
  {
    name: 'John Doe',
    text: loremText,
    company: 'Datagram',
    occupation: 'Wev develop',
    stars: 5
  }
]

export const Home = () => {
  return (
    <Box
      component="main"
      sx={{
        width: '100%',
        minHeight: '100dvh',
        display: 'flex',
        flexDirection: 'column'
      }}
    >
      <Hero/>
      <About/>
      <StackContainer stack={stack}/>
      <Projects projects={projects}/>
      <Trajectory/>
      <Testimonies testimonies={testimonies} />
      <ContactForm/>
      <Footer/>
    </Box>
  )
}
