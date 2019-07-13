import React from 'react';
import { MDBCard, MDBCardBody, MDBIcon, MDBRow, MDBCol,MDBCardImage } from 'mdbreact';
import blog1 from '../../../assets/blog-1.jpg';
import blog2 from '../../../assets/blog-2.jpg';
import blog3 from '../../../assets/blog-3.jpg';


const AdminCardSection2 = () => {
  return (
    <MDBRow className="mb-4">
        <MDBCol xl="4" md="8" className="mb-3">
          <MDBCard color="primary-color" className="classic-admin-card">
            <MDBCardBody>
              {/*<div className="float-right">
                            <MDBIcon far icon="money-bill-alt"/>
                            </div>*/}
              <p className="white-text">Template 1</p>
              {/*<h4><strong>$2000</strong></h4>*/}
              <MDBCardImage className="img-fluid" src={blog1} />
            </MDBCardBody>
            {/*<div className="progress">
                          <div aria-valuemax="100" aria-valuemin="0" aria-valuenow="25" className="progress-bar bg grey darken-3" role="progressbar" style={{width: "25%"}}></div>
                        </div>*/}
            <MDBCardBody>
              <p>This is the link to Template 1</p>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>

        <MDBCol xl="4" md="8" className="mb-3">
          <MDBCard color="primary-color" className="classic-admin-card">
            <MDBCardBody>
              {/*<div className="float-right">
                            <MDBIcon far icon="money-bill-alt"/>
                            </div>*/}
              <p className="white-text">Template 2</p>
              {/*<h4><strong>$2000</strong></h4>*/}
              <MDBCardImage className="img-fluid" src={blog2} />
            </MDBCardBody>
            {/*<div className="progress">
                          <div aria-valuemax="100" aria-valuemin="0" aria-valuenow="25" className="progress-bar bg grey darken-3" role="progressbar" style={{width: "25%"}}></div>
                        </div>*/}
            <MDBCardBody>
              <p>This is the link to Template 2</p>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>

        <MDBCol xl="4" md="8" className="mb-3">
          <MDBCard color="primary-color" className="classic-admin-card">
            <MDBCardBody>
              {/*<div className="float-right">
                            <MDBIcon far icon="money-bill-alt"/>
                            </div>*/}
              <p className="white-text">Template 3</p>
              {/*<h4><strong>$2000</strong></h4>*/}
              <MDBCardImage className="img-fluid" src={blog3} />
            </MDBCardBody>
            {/*<div className="progress">
                          <div aria-valuemax="100" aria-valuemin="0" aria-valuenow="25" className="progress-bar bg grey darken-3" role="progressbar" style={{width: "25%"}}></div>
                        </div>*/}
            <MDBCardBody>
              <p>This is the link to Template 3</p>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        {/*<MDBCol xl="3" md="6" className="mb-3">
                  <MDBCard color="red accent-2" className="classic-admin-card">
                    <MDBCardBody>
                      <div className="float-right">
                      <MDBIcon icon="chart-bar"/>
                      </div>
                      <p className="white-text">ORGANIC TRAFFIC</p>
                      <h4><strong>2000</strong></h4>
                    </MDBCardBody>
                    <div className="progress">
                      <div aria-valuemax="100" aria-valuemin="0" aria-valuenow="25" className="progress-bar bg grey darken-3" role="progressbar" style={{width: "25%"}}></div>
                    </div>
                    <MDBCardBody>
                      <p>Better than last week (75%)</p>
                    </MDBCardBody>
                  </MDBCard>
                </MDBCol>*/}
      </MDBRow>
  )
}

export default AdminCardSection2;

