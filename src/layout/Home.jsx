import { Box } from "@mui/material"
import { Hero } from "../components/Hero"
import { Trajectory } from "../components/Trajectory"
import { ContactForm } from "../components/ContactForm"
import { StackContainer } from "../components/StackContainer"
import react_img from '../assets/react.svg'
import { About } from "../components/About"
import { Projects } from "./Projects"
import { Testimonies } from "./Testimonies"
import { Footer } from "./Footer"

const loremText = 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit illo, officia sit tempora ut eveniet rerum molestiae pariatur quas eius mollitia. Sequi, at? Itaque deleniti nisi consectetur, consequatur hic esse!'

export const item = {
  name: 'Project main title',
  text: loremText,
  src: react_img,
  stack: ['html', 'css', 'js', 'react', 'python', 'django', 'rest framework', 'tailwind', 'bootstrap', 'c++', 'docker'],
  link_demo: '',
  github_repo: '',
  stars: 5,
  company: 'Datagram',
  occupation: 'Wev develop'
}

const stack = Array.from({length: 12}).map(_ => item)
const projects = Array.from({length: 10}).map(_ => item)

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
      <Testimonies testimonies={projects} />
      <ContactForm/>
      <Footer/>
    </Box>
  )
}
