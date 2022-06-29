import styles from './Sidebar.module.css'

export function Sidebar(){
    return(
        <aside className={styles.sidebar}>
            <img 
                className={styles.cover} 
                src="https://images.unsplash.com/photo-1572959256450-672194225a5a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50" 
                alt="" 
            />

            <div className={styles.profile}>
                <strong>Lorena Lima</strong>
                <span>Web Developer</span>
            </div>
            <footer>
                <a href='#'>
                    Editar seu perfil
                </a>
            </footer>
        </aside>
    )
}