interface FiltersTypes  {
 filterType:string
    items:String[]
}
export const filters:FiltersTypes[] = [
    { "filterType": "سعر المتر المربع", "items": ["100","200","300","أكثر من 500"]},
    { "filterType": "حالة العقار", "items": ["مكسي","عالعضم"]},
    { "filterType": "مكان العقار", "items": ["وسط المدينة","أطراف المدينة","في السوق"]},
    
]