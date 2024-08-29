import { Col, Row, Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const naviagteUrl = useNavigate()
  return (
    <>
    <Row className="mt-5 align-items-center justify-content-between w-100">
      <Col></Col>
      <Col lg={4}>
        <h1>
          Welcome to <span className="text-warning">Media Player</span>
        </h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo, alias
          est. Obcaecati iste non nisi ratione porro adipisci maxime debitis!
          Porro voluptatibus tempore nulla ipsam non. Voluptate odio ipsum
          magni!
        </p>
        <Button className="btn btn-info p-2 rounded rounded-3 text-dark" onClick={()=> naviagteUrl('/home')}>Get Started</Button>
      </Col>
      <Col lg={4} className="">
        <img
          src="https://c4.wallpaperflare.com/wallpaper/388/330/367/minimalism-hi-tech-aimp-artem-izmaylov-media-player-wallpaper-preview.jpg"
          alt="banner"
          className="mb-3 rounded-4 shadow-lg"
        />
      </Col>
      <Col></Col>
    </Row>

    <div className="container mb-5 mt-5 d-flex flex-column align-items-center justify-content-center w-100">
      <h5 className="fs-2">Features</h5>
      <div className="cards mb-5 mt-5 d-flex align-items-center justify-content-between w-100">

      <Card style={{ width: '20rem' }}>
      <Card.Img variant="top" src="https://i.pinimg.com/736x/be/02/00/be02004d4b11d40706b08f6f60950ef7.jpg" />
      <Card.Body>
        <Card.Title>Add videos</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the cards content.
        </Card.Text>
        
      </Card.Body>
    </Card>
      <Card style={{ width: '20rem' }} className="shadow-lg">
      <Card.Img variant="top" src="https://c4.wallpaperflare.com/wallpaper/624/21/247/microsoft-windows-windows-10-technology-hi-tech-wallpaper-preview.jpg" height={"300px"} width={"380px"}/>
      <Card.Body>
        <Card.Title>Managing videos</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the cards content.
        </Card.Text>
      </Card.Body>
    </Card>
      <Card style={{ width: '20rem' }}>
      <Card.Img variant="top" src="https://wallpapercave.com/wp/wp2551252.jpg" height={"270px"} />
      <Card.Body>
        <Card.Title>Categorize videos</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the cards content.
        </Card.Text>
        
      </Card.Body>
    </Card>
      </div>
    </div>

    <div className="container border rounded-4 p-4 border-light mt-5 mb-3 d-flex justify-content-center align-items-center shadow-lg">

      <div className="col-lg-5">
        <h4 className="mb-5 mt-4">Simple,Powerful & fast</h4>
        <h6 className="mb-5 mt-4"><span className="text-warning">Plan everything:</span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, facere Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet aliquam tempora doloribus ipsa, ullam rem exercitationem autem repudiandae officia nobis debitis reprehenderit nostrum.</h6>
        <h6 className="mb-5 mt-4"><span className="text-warning">Categorize Videos:</span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, hic ad omnis similique maiores debitis, molestiae quidem sit provident laboriosam amet ea ullam, dolores dolore corrupti suscipit .</h6>
        <h6 className="mb-5 mt-4"><span className="text-warning">Managing videos:</span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus quasi labore voluptates laboriosam nostrum, nulla aperiam animi aut, quibusdam non repudiandae totam rerum accusamus amet.</h6>
      </div>

      <div className="col-lg-5 ms-5">
      <iframe width="560" height="315" src="https://www.youtube.com/embed/ajnCMSC4VPo?si=rtM_mI-FuVMy5G5I" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
      </div>
    </div>
    </>
  );
};

export default LandingPage;
