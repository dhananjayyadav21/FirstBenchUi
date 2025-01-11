import React from 'react'

const Home = () => {
  return (
    <>
      <div className='container py-lg-4'>
        <div className="row"style={{minHeight:"100vh"}} >

          <div className="col-lg-4">
            <div className='bg-light p-lg-4 border rounded-3'>

              <section className='rounded-4 py-3'>
                <div className='d-flex justify-content-center'>
                  <img src="/assets/main.png" alt="main"  style={{height:"90px"}} />
                </div>
                <div className='text-center '>
                  <h4 className='m-0 py-2 text-primary'>Your Result!</h4>  
                  <p className='m-0 text-muted'>Lorem ipsum dolor sit amet consectetur</p>
                </div>
              </section>

              <section className='bg-white border rounded-3 p-3 my-3'>
                <div className='p-2 my-2 rounded-1 bg-light d-flex'>
                  <div className='bg-warning p-2 rounded-1 d-flex justify-content-center align-items-center'>
                    <img src="/assets/main.png" alt="task" height={"30px"} />
                  </div>
                  <div className='d-flex flex-column mx-3'>
                    <span class="badge bg-primary">YOU`VE PASSED</span>
                    <span className=''>
                      <span className='fs-4'>136</span>
                      <span>/240</span>
                    </span>
                  </div>
                </div>

                <div className='p-2 my-3 rounded-1 bg-light'>
                  <div className='d-flex'>
                    <div className='bg-warning p-2 rounded-1 d-flex justify-content-center align-items-center'>
                      <img src="/assets/main.png" alt="task" height={"30px"} />
                    </div>
                    <div className='d-flex flex-column mx-3'>
                      <span class="badge bg-primary"><small>YOU`VE PASSED</small></span>
                      <span className=''>
                        <span className='fs-4'>136</span>
                        <span>/240</span>
                      </span>
                    </div>
                  </div>
                  <div>
                    <hr/>
                  </div>
                  <div className='d-flex justify-content-between'>
                    <span>
                      <span className='m-0 p-0'>By</span>
                      <span className='fw-bold p-0 m-0'> Parth Akotkar</span>
                    </span>
                    <span class="badge bg-success">92% ACCURACY</span>
                  </div>
                </div>

                <div>
                  <h5 className='m-0 p-0'>Improve your Marks</h5>
                  <p className='m-0 p-0 text-muted'>Improve your score by practicing more</p>
                </div>
                <button className='btn btn-sm btn-primary mt-4 w-100'>Practice more</button>
              </section>

              <section className='bg-white border rounded-3 p-3 my-3'>
                <div>
                  <h4>Revisit Paper</h4>
                  <p className='text-muted p-0'>Challenge your friends by simply sharing a link to this test</p>
                </div>
                <div className='d-flex justify-content-center my-4'>
                  <button className='btn btn-sm btn-primary w-75'><i class="fa-solid fa-file-arrow-up mx-2"></i>Visit</button>
                </div> 
                <div className='d-flex align-items-start text-muted'>
                  <span><i class="fa-solid fa-circle-exclamation mx-2"></i></span><span>Instructor for how to upload your handwritten material in given</span>
                </div>
              </section>
            </div>
          </div>

          <div className='col-lg-8'>
            <div className='bg-light p-lg-4 border rounded-3 h-100'>
              <section className='' style={{minHeight:"30%"}}>
                <div className='row'>
                  <div className="col-lg-4">
                    <div className='bg-white rounded-2 border p-2'>
                      <div><span><i class="fa-solid fa-rotate-right mx-2"></i></span><span>Compare Accuracy</span></div>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className='bg-white rounded-2 border p-2'>
                      <div><span><i class="fa-solid fa-rotate-right mx-2"></i></span><span>Compare Accuracy</span></div>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className='bg-white rounded-2 border p-2'>
                      <div><span><i class="fa-solid fa-rotate-right mx-2"></i></span><span>Compare Accuracy</span></div>
                    </div>
                  </div>
                </div>
              </section>

              <section className='bg-warning' style={{minHeight:"25%"}}>
                <div className='row'>
                  <div className="col-lg-3">
                    <div className='bg-white rounded-2 border p-3'>
                      <h6 className='text-muted'>introduction</h6>
                      <p><small>Subject Understanding</small></p>
                      <div>
                      <span class="badge bg-primary">YOU`VE</span>
                      <span class="badge bg-danger">YOU`VE PASSED</span>
                      <span class="badge bg-primary">YOU`VE PASSED</span>
                      <span class="badge bg-warning">YOU`VE PASSED</span>
                      <span class="badge bg-success">YOU`VE PASSED</span>
                      <span class="badge bg-secondary">YOU`VE PASSED</span>
                      <span class="badge bg-info">YOU`VE PASSED</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3"></div>
                  <div className="col-lg-3"></div>
                  <div className="col-lg-3"></div>
                </div>
              </section>
              <section className='bg-white' style={{minHeight:"40%"}}></section>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
