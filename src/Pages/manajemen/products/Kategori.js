import React, { useState } from "react";
import { Col, Container, Form, Modal, Row, Table, Button } from "react-bootstrap";
import CategoryTable from "../../../Data/CategoryTable";

const Kategori = () => {
  const [LgShowAdd, setLgShowAdd] = useState(false);
  const [LgShowUpdate, setLgShowUpdate] = useState(false);
  const [LgShowDell, setLgShowDell] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [kategori, setKategori] = useState();
  return (
    <div className="marginBody">
      <Modal
        size=""
        show={LgShowAdd}
        onHide={() => setLgShowAdd(false)}
        aria-labelledby="example-modal-sizes-title-lg"
        centered
        dialogClassName="border-radius-10"
      >
        <Modal.Header closeButton>
          <Modal.Title id="modal-detail-produk">Kategori Baru</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row style={{ marginTop: "2%" }}>
            <Col sm={3}>
              <div className="d-flex justify-content-center">
                <div>
                  <div>
                    {selectedImage && (
                      <div>
                        <div class="shadow-sm bg-body rounded">
                          <img
                            alt=""
                            width={"100px"}
                            height={"100px"}
                            src={URL.createObjectURL(selectedImage)}
                          />
                        </div>
                        <div className="d-flex justify-content-center"></div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
              <div
                className="d-flex justify-content-end"
                style={{ marginTop: "20px" }}
              >
                <input
                  type="file"
                  onChange={(event) => {
                    setSelectedImage(event.target.files[0]);
                  }}
                />
              </div>
            </Col>
            <Col sm={9}>
              <Row>
                <Form.Group as={Row} className="mb-2" controlId="formJumlah">
                  <Form.Label column sm="3">
                    Nama
                  </Form.Label>
                  <Col>
                    <Form.Control type="text" placeholder="Nama..." />
                  </Col>
                </Form.Group>
              </Row>
              <Col>
                <div className="d-flex mt-2 justify-content-center">
                  <Button
                    as="input"
                    type="submit"
                    value="Tambah"
                    className="button-submit-prosuksi"
                    style={{
                      paddingLeft: "20px",
                      paddingRight: "20px",
                      marginTop: "10%",
                    }}
                    onClick={() => setLgShowAdd(false)}
                  />
                </div>
              </Col>
            </Col>
          </Row>
        </Modal.Body>
      </Modal>

      <Modal
        size=""
        show={LgShowUpdate}
        onHide={() => setLgShowUpdate(false)}
        aria-labelledby="example-modal-sizes-title-lg"
        centered
        dialogClassName="border-radius-10"
      >
        <Modal.Header closeButton>
          <Modal.Title id="modal-detail-produk">Edit Kategori</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row style={{ marginTop: "2%" }}>
            <Col sm={3}>
              <div className="d-flex justify-content-center">
                <div>
                  <div>
                    {selectedImage && (
                      <div>
                        <div class="shadow-sm bg-body rounded">
                          <img
                            alt=""
                            width={"100px"}
                            height={"100px"}
                            src={URL.createObjectURL(selectedImage)}
                          />
                        </div>
                        <div className="d-flex justify-content-center"></div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
              <div
                className="d-flex justify-content-end"
                style={{ marginTop: "20px" }}
              >
                <input
                  type="file"
                  onChange={(event) => {
                    setSelectedImage(event.target.files[0]);
                  }}
                />
              </div>
            </Col>
            <Col sm={9}>
              <Row>
                <Form.Group as={Row} className="mb-2" controlId="formJumlah">
                  <Form.Label column sm="3">
                    Nama
                  </Form.Label>
                  <Col>
                    <Form.Control type="text" placeholder="Nama..." />
                  </Col>
                </Form.Group>
              </Row>
              <Col>
                <div className="d-flex mt-2 justify-content-center">
                  <Button
                    as="input"
                    type="submit"
                    value="Selesai"
                    className="button-submit-prosuksi"
                    style={{
                      paddingLeft: "20px",
                      paddingRight: "20px",
                      marginTop: "10%",
                    }}
                    onClick={() => setLgShowAdd(false)}
                  />
                </div>
              </Col>
            </Col>
          </Row>
        </Modal.Body>
      </Modal>

      <Modal
        size="sm"
        show={LgShowDell}
        onHide={() => setLgShowDell(false)}
        aria-labelledby="example-modal-sizes-title-lg"
        centered
        dialogClassName="border-radius-10"
      >
        <Modal.Header closeButton>
          <Modal.Title id="modal-detail-produk">
            Hapus kategori ini ?
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="d-flex mt-2 justify-content-end">
            <Button
              as="input"
              type="submit"
              value="Hapus"
              className="button-cencel-prosuksi"
              style={{ paddingLeft: "20px", paddingRight: "20px" }}
              onClick={() => setLgShowAdd(false)}
            />
          </div>
        </Modal.Body>
      </Modal>

      <h1>Produk</h1>

      <div class="shadow-sm p-3 mt-3 bg-body rounded">
        <Container style={{ paddingTop: "20px", paddingBottom: "20px" }}>
          <Row>
            <Col>
              <h3>Data Kategori</h3>
            </Col>
            <Col>
              <div className="d-flex justify-content-end">
                <Button
                  as="input"
                  type="submit"
                  value="Tambah"
                  className="button-submit-prosuksi"
                  onClick={() => setLgShowAdd(true)}
                />
              </div>
            </Col>
          </Row>
          <div style={{ marginTop: "2%" }}>
            <CategoryTable
              update={() => setLgShowUpdate(true)}
              delete={() => setLgShowDell(true)}
            />
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Kategori;
