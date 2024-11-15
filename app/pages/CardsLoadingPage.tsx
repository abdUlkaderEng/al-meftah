import { Card, Table } from "@radix-ui/themes";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css';
const CardsLoadingPage = () => {
  const skeletons = [1, 2, 3]
  const tableRows = [1,2,3,4,5]
  return (
    skeletons.map(s =>
      <SkeletonTheme key={s} direction="rtl" baseColor="#eef0be" highlightColor="#ede9a9">
        
      <Card>
          <Skeleton height={200}/>
        <Table.Root layout="fixed" size="3" className=" pt-3">
            <Table.Body>
              {tableRows.map(r => <Table.Row key={r} align="center" className="text-lg">
              <Table.Cell justify="center">
                <Skeleton />
              </Table.Cell>
              <Table.Cell justify="center" className=" font-medium">
                <Skeleton />
              </Table.Cell>
            </Table.Row> )}
            
           
          </Table.Body>
        </Table.Root>
      </Card> 
    </SkeletonTheme>)
    
  );
};

export default CardsLoadingPage;
