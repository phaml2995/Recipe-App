export const TOGGLE_FAVORTITE = 'TOGGLE_FAVORITE';

export const toggleFavorite = (id) => {
    return {
        type: TOGGLE_FAVORTITE,
        mealId: id
    }
};