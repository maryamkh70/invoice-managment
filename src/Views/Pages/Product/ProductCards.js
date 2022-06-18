import { useEffect } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import ProductViewService from "../../../ViewService/ProductViewService";



const ProductCards = () => {
    const productListModel = useSelector(state => state.product.productListModel)
    const pictureProductListModel=useSelector(state=>state.product.pictureProductListModel) 
    const { SearchAllProductWithPicture } = ProductViewService();


    useEffect(() => {
        SearchAllProductWithPicture();
    },[])

    return (<Container fluid className="fade alert alert-light show page">
        {
            productListModel && productListModel.map((value) => {
          
            

                
                return (
                    <Row>
                        <Col sm={3}>

                            <Card style={{ width: '18rem', direction: "rtl", border: 2 }}>
                                <Card.Img variant="top" src={value.url} style={{ width: 240, height: 240 }} />
                                <Card.Body>
                                    <Card.Title ><span> نام محصول:</span><p>{value.productName}</p></Card.Title>
                                    <Card.Text>
                                        <span>قیمت محصول:</span><p>{value.price}</p>
                                    </Card.Text>

                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                )

            })

        }

    </Container>

    )

    // return (<div>
    //     {
    //           productListModel && productListModel.map((value) => {


    //             return   <div class="card">
    //                    <img src="img.jpg" alt="John" style={{ width: 100 }} />
    //                    <h1>{value.productName}</h1>{}
    //                    <p class="title">قیمت محصول:</p>
    //                    <p>{value.price}</p>
    //                    <a href="#"><i class="fa fa-dribbble"></i></a>
    //                    <a href="#"><i class="fa fa-twitter"></i></a>
    //                    <a href="#"><i class="fa fa-linkedin"></i></a>
    //                    <a href="#"><i class="fa fa-facebook"></i></a>
    //                    <p><button>Contact</button></p>
    //                </div>
    //           })
    //     }
    //      </div>)

}
export default ProductCards;