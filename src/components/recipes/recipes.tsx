import { useEffect } from 'react'
import { getRecipes } from '../../api'

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
            
        </div>
    )
}

export default Recipes
