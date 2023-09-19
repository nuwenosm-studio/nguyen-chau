import Link from "next/link";
import styles from "@/styles/navBar.module.css";

const Navbar = () => {
   return (
      <nav className={styles.nav_bar}>
         <Link 
            href="#home"
            className={styles.nav_link}
         >
            nguyen.
         </Link>

         <div className={styles.hor_line}></div>

         <Link 
            href="#studio"
            className={styles.nav_link}
         >
            studio.
         </Link>
      </nav>
   )
}

export default Navbar
