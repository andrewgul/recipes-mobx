import { makeAutoObservable } from "mobx"
import { getRecipes } from "../api"
import Recipe from '../models/recipe'
import RequestStatus from '../models/request-status'

class Recipes {
    recipes: Recipe[]      = []
    error:   Error | null  = null
    status:  RequestStatus = RequestStatus.Initial

    constructor() {
        makeAutoObservable(this)
    }

    fetchRecipes(): void {
        this.status = RequestStatus.Request

        getRecipes()
            .then(response => {
                this.status = RequestStatus.Success
                this.recipes.push(...response.data.results)
            })
            .catch(error => {
                this.status = RequestStatus.Failure
                this.error = error
            })
    }

    get total() {
        return this.recipes.length
    }
}

export default new Recipes()