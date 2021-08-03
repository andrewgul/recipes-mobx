import styles from './loader.module.css'

const loader: React.FC = () => (
    <div className={styles['wrapper']}>
        <div className={styles['loader']}/>
    </div>
)

export default loader
