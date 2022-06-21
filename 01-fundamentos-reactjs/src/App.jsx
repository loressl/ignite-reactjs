import { Header } from './components/Header'
import {Post} from './Post'
import './global.css'

function App() {

  return (
    <>
      <Header />

      <Post 
        author="Barack Obama"
        content="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur similique dolorem quibusdam consequuntur harum quaerat obcaecati placeat dolore laborum iste, dolores ipsa, facere illo vitae! Quis aliquam sapiente ullam ipsam."
      />
    </>
  )
}

export default App