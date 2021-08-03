import { observer } from 'mobx-react-lite'
import { useEffect, Fragment } from 'react'
import Loader from '../loader'
import recipes from '../../store/recipes'
import styles from './recipes.module.css'
import RequestStatus from '../../models/request-status'

interface RecipesProps {}

const Recipes: React.FC = ({}) => {
    useEffect(() => {
        recipes.fetchRecipes()
    }, [])

    return (
        <Fragment>
            <div className={styles['title']}>
                here are your recipes!
            </div>
            <div className={styles['container']}>
                
                {(recipes.status === RequestStatus.Request) && (
                    <Loader />
                )}
                {(recipes.status === RequestStatus.Failure) && (
                    <p className={styles['error']}>
                        {recipes.error || 'unknown error'}
                    </p>
                )}
                {recipes.recipes.map((recipe) => (
                    <p key={recipe.id}>#{recipe.id} "{recipe.name}"</p> 
                ))}
            </div>
        </Fragment>
    )
}

export default observer(Recipes)
