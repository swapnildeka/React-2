export function filterdata(searchText , restaurants){
    
    const filterdata = restaurants.filter((xyz) =>
        xyz?.info?.name?.toLowerCase()?.includes(searchText.toLowerCase()));

    return filterdata;
    }