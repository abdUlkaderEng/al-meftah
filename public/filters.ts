interface FilterTypesComponent  {
    filterType:string,
    filterItems: string[]

}


export interface FilterTypes{
    
    filterBy: string,
    filterItem:string
}

export const filters:FilterTypesComponent[] = [
    { "filterType": "سعر المتر المربع", "filterItems": ["الكل","20000","30000","40000","أكثر من 500"]},
    { "filterType": "حالة العقار", "filterItems": ["الكل","مكسي","عالعضم"]},
    { "filterType": "مكان العقار", "filterItems": ["الكل","وسط المدينة","أطراف المدينة","في السوق"]},
    { "filterType": "مساحة العقار", "filterItems": ["الكل","150","100","أقل من 100"]},
    
]