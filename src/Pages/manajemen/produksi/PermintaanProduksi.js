import React, { useState } from 'react';
import { Col, Container, FloatingLabel, Form, Image, Row, Table, Button } from 'react-bootstrap';
import "../styles/produksi.css";

const BuatPermintaan = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="marginBody">
      <h1>Produksi</h1>

      <div class="shadow-sm p-3 mt-3 bg-body rounded">
          <Container style={{paddingTop:'20px', paddingBottom:'20px'}}>
            <h3>Permintaan Produksi Baru</h3>
            <Row style={{marginTop:'5%'}}>
              <Col sm={5}>
              <div className="d-flex justify-content-center">
                  <div >
                  <div>
                    {selectedImage && (
                      <div  class="shadow-sm bg-body rounded">
                        <img alt="" width={"100px"} height={"100px"} src={URL.createObjectURL(selectedImage)} />
                      </div>
                    )}
                    </div>
                  </div>
                </div>
                  <div className="d-flex justify-content-center">
                    <div class="shadow-sm bg-body rounded">
                      <Image style={{height:'150px', width:'150px'}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRUhB044J0H_pcVbEe0qxV9aHSqcTqmjtggQ&usqp=CAU" rounded />
                    </div>
                  </div>
                <div>
                  <Row style={{marginTop:'20px'}}>
                  <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                    <Form.Label column sm="4">
                      Pilih Produk
                    </Form.Label> 
                    <Col sm="7">
                      <Form.Select defaultValue="Pilih Produk...">
                        <option>Pilih Produk...</option>
                        <option>Tas</option>
                        <option>Sepatu</option>
                        <option>Baju</option>
                      </Form.Select>
                    </Col>
                  </Form.Group>
                  </Row>
                </div>
                <Row style={{marginTop:'10px'}}>
                  <Form.Group as={Row} className="mb-3" controlId="formJumlah">
                    <Form.Label column sm="4">
                      Jumlah
                    </Form.Label>
                    <Col sm="7">
                      <Form.Control type="number" placeholder="..." />
                    </Col>
                  </Form.Group>
                </Row>
              </Col>
              <Col sm={7}>
              <Row style={{marginTop:'30px'}}>
                  <Form.Group as={Row} className="mb-3" controlId="formJumlah">
                    <Form.Label column sm="3">
                      Deskripsi
                    </Form.Label>
                    <Col>
                      <FloatingLabel controlId="CommentDeskripsi">
                        <Form.Control
                          as="textarea"
                          placeholder="Leave a comment here"
                          style={{ height: '200px' }}
                        />
                      </FloatingLabel>
                    </Col>
                  </Form.Group>
                  <Form.Label column sm="3">
                    Total Biaya
                  </Form.Label>
                  <Col sm="4" style={{marginTop:'7px'}}>
                    <h5>Rp. <text>200.000.000</text></h5>
                  </Col>
                  <Col>
                    <div className="d-flex justify-content-center">
                      <Button as="input" type="submit" value="Buat Permintaan" className="button-submit-prosuksi"/>
                      <Button as="input" type="submit" value="Batal" className="button-cencel-prosuksi" onClick={()=>setSelectedImage(null)}/>
                    </div>
                  </Col>
                </Row>
              </Col>
            </Row>
            <div style={{textAlign:'center'}}>
              <h3>Material</h3>
              <p>Data Material yang digunakan untuk produksi</p>
            </div>
            <Table striped bordered hover>
              <thead>
                <tr style={{textAlign:'center'}}>
                  <th width='50'>#</th>
                  <th width='350'>Material</th>
                  <th width='250'>Tipe</th>
                  <th width='150'>Stok</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={{textAlign:'center'}}>1</td>
                  <td>Resleting</td>
                  <td>Pernik</td>
                  <td style={{textAlign:'center'}}>2000</td>
                </tr>
                <tr>
                  <td style={{textAlign:'center'}}>2</td>
                  <td>Denim</td>
                  <td>Kain</td>
                  <td style={{textAlign:'center'}}>1000</td>
                </tr>
                <tr>
                  <td style={{textAlign:'center'}}>3</td>
                  <td>Lem</td>
                  <td>Alat & Bahan</td>
                  <td style={{textAlign:'center'}}>30</td>
                </tr>
                <tr>
                  <td style={{textAlign:'center'}}>4</td>
                  <td>Pengait</td>
                  <td>Pernik</td>
                  <td style={{textAlign:'center'}}>200</td>
                </tr>
              </tbody>
            </Table>
          </Container>  
        </div>
    </div>
  );
};

export default BuatPermintaan;
