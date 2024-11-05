import internal from "stream"

interface estateCardElement{
    estateType: string
    location: string
    dierction: string
    floor: string
    services: string
    space: number
    price: number
    description:string

}
export const estateCardElement =
{
    "estateType": ":نوع العقار",
    "location": ":موقع العقار",
    "dierction": ":الإتجاهات",
    "floor": ":الطابق",
    "services": ":خدمات إضافية",
    "space": ":مساحة العقار",
    "price": ":سعر المتر التقريبي",
    "description":"شرح عن العقار"
}