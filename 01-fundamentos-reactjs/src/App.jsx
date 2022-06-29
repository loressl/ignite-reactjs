import { Header } from './components/Header'
import {Post} from './Post'
import styles from './App.module.css'
import './global.css'
import { Sidebar } from './components/Sidebar'

function App() {

  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar/>
        <main>
          <Post 
            author="Barack Obama"
            content="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur similique dolorem quibusdam consequuntur harum quaerat obcaecati placeat dolore laborum iste, dolores ipsa, facere illo vitae! Quis aliquam sapiente ullam ipsam."
          />
        </main>
      </div>

    </>
  )
}

export default App