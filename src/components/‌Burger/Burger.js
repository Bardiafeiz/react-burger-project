import React from 'react'
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";
import './Burger.css'

const burger = props => {
    let selectedIngredients = Object.keys(props.ingredients)
        .map(igKey => {
            return [...Array(props.ingredients[igKey])].map((_, i) => {
                return <BurgerIngredient key={igKey + i} type={igKey} />
            })
        }).reduce((prev, curr) => {
            return prev.concat(curr)
        }, [])

    if (selectedIngredients.length === 0) {
        selectedIngredients = <p>Nothing to be shown</p>
    }

    return (
        <div className="Burger">
            <BurgerIngredient type="bread-top" />
            {selectedIngredients}
            <BurgerIngredient type="bread-bottom" />
        </div>
    )
}

export default burger