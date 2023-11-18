import MenusTans from "../MenusTans/MenusTans";

const useMenusData = () => {
    const [menu] = MenusTans() || []


    const offered = menu?.filter(item => item.category === 'offered')
    const pizza = menu?.filter(item => item.category === 'pizza')
    const dessert = menu?.filter(item => item.category === 'dessert')
    const soup = menu?.filter(item => item.category === 'soup')
    const salad = menu?.filter(item => item.category === 'salad')
    const drinks = menu?.filter(item => item.category === 'drinks')
    return [offered, pizza, salad, dessert, soup, drinks, menu]
}

export default useMenusData;