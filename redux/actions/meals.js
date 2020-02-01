export const TOGGLE_FAVORTITE = 'TOGGLE_FAVORITE';
export const SET_FILTER = "SET_FILTER";


export const toggleFavorite = (id) => {
    return {
        type: TOGGLE_FAVORTITE,
        mealId: id
    }
};

export const setFilters = filterSettings => {
    return {
        type: SET_FILTER,
        filters: filterSettings
    }
};