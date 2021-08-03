import axiosClient from './axiosClient'

const getRecipes = () =>
    axiosClient.get('recipes/list', {
        params: {
            from: '0',
            size: '20'
        }
    })
    
export {
    getRecipes
}