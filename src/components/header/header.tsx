import styles from './header.module.css'
import NavItem from './nav-item'

const Header: React.FC = () => {
    return (
        <div className={styles['container']}>
            <div className={styles['nav-bar']}>
                <NavItem>main</NavItem>
                <NavItem>recipes</NavItem>
                <NavItem>about</NavItem>
            </div>
        </div>
    )
}

export default Header
