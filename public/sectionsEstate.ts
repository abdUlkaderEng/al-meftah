interface sectionEstate  {
    endPoint :string
    title :string ,
    description: string,
    image: string
}

export const sectionsEstate:sectionEstate[] = [
    { "endPoint" :"newEstate", "title":"شقق بناء جديد" , "description": "شقق متنوعة بأبنية حديثة الإعمار"  , "image":'/assests/Images/house.jpg'},
    {"endPoint" :"oldEstate","title":"شقق بناء مجدد" , "description": "شقق متنوعة بأبنية قديمة مجددة"  , "image":"/assests/Images/house.jpg"},
    {"endPoint" :"commercialEstate","title":"محلات تجارية" , "description": "تشكيلة واسعة من المحلات التجارية"  , "image":"/assests/Images/house.jpg"},
    {"endPoint" :"agriculturalEstate","title":"أراضي زراعية" , "description": "شقق متنوعة بأبنية حديثة الإعمار"  , "image":"/assests/Images/house.jpg"},
    {"endPoint" :"touristEstate","title":"مزارع وفلل" , "description": "مزارع وفلل سياحية"  , "image":"/assests/Images/house.jpg"},
    {"endPoint" :"pledge","title":"تعهدات و إكساء" , "description": "ترميم وإكساء المنازل والمحلات القديمة أو الجديدة غير المكسية"  , "image":"/assests/Images/house.jpg"}
]


