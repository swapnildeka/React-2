export function filterdata(searchText , restaurants){
    
    const filterdata = restaurants.filter((xyz) =>
        xyz?.data?.name?.toLowerCase()?.includes(searchText.toLowerCase()));

    return filterdata;
    }