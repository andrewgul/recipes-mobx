import { useEffect } from 'react'
import { getRecipes } from '../../api'
import Loader from '../loader'

interface Props {
    
}

const Recipes: React.FC = ({}) => {
    useEffect(() => {
        getRecipes()
            .then((response) => console.log(response))
            .catch((error) => console.log(error))
    }, [])

    return (
        <div>
            <Loader />
        </div>
    )
}

export default Recipes
