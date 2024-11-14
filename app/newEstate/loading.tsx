import { Card, Skeleton } from '@radix-ui/themes'
import React from 'react'

const NewEstateLoading = () => {
  const items = [1,2,3,4,5,6,7,8,9]
    return (
        
    <Skeleton>
        {items.map(i => <Card size="3" key={i} />)}
        </Skeleton>
            )
}

export default NewEstateLoading