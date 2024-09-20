import { useParams } from "react-router-dom"
import { useGetProductDetailsQuery } from "../../redux/api/productsApi";
import { Container } from "../../utils";
import { Carousel, Typography } from 'antd';

const { Title, Text } = Typography;

const Details = () => {
    const {id} = useParams();
    const {data} = useGetProductDetailsQuery(id);
    
  return (
    <div className='my-10 ml-14'>
        <Container>
           {
            data && data.payload &&
            <div className="flex mt-10 gap-10">
            <div className="w-1/2 bg-yellow-400">
            <Carousel arrows >
                {
                    data && data?.payload.product_images.map(image => 
                        <img alt="example" key={image} src={image} />
                    )
                }
            </Carousel> 
            </div>
            <div>
                <Title level={1}>{data.payload.product_name}</Title>
                <Text>{data.payload.description}</Text>
            </div>
            </div>
           }
        </Container>
    </div>
  )
}

export default Details