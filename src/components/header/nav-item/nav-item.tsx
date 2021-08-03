import styles from './nav-item.module.css'

interface HeaderItemProps {}

const NavItem: React.FC<HeaderItemProps> = ({ children }) => {
    return (
        <div className={styles['nav-item']}>
            {children}
        </div>
    )
}

export default NavItem
