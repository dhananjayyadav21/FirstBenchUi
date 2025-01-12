import React from 'react'
import CompareAccuracy from '../components/CompareAccuracy'
import TimeTaken from '../components/TimeTaken'

const Home = () => {
  return (
    <>
      <div className='container-fluid py-4'>
        <div className="row g-3"style={{minHeight:"100vh"}} >

          <div className="col-lg-4">
            <div className='bg-light p-4 border rounded-3'>
              <section className='rounded-4 py-3'>
                <div className='d-flex justify-content-center'>
                  <img src="/assets/main.png" alt="main"  style={{height:"90px"}} />
                </div>
                <div className='text-center '>
                  <h4 className='m-0 py-2 text-main fw-big'>Your Result!</h4>  
                  <p className='m-0 text-muted fw-big'>All your insights & details in one place</p>
                </div>
              </section>

              <section className='bg-white border rounded-3 p-3 my-3'>
                <div className='p-2 my-2 rounded-1 bg-light d-flex justify-content-between'>
                  <div className="d-flex">
                    <div className='bg-main p-2 rounded-1 d-flex justify-content-center align-items-center'>
                      <i class="fa-solid fa-list-check fa-2x"></i>
                    </div>
                    <div className='d-flex flex-column mx-3'>
                      <span class="badge-main fw-big">YOU`VE PASSED</span>
                      <span className=''>
                        <span className='fs-4 fw-big'>136</span>
                        <span>/240</span>
                      </span>
                    </div>
                  </div> 
                  <div className='text-center'>
                    <button className="bg-green-box"> 76% </button>
                    <p className='fw-big text-secondaryy'>ACCURACY</p>
                  </div>
                </div>

                <div className='p-2 my-3 rounded-1 bg-light'>
                  <div className='d-flex'>
                    <div className='bg-main p-1 rounded-1 d-flex justify-content-center align-items-center'>
                      <img className='rounded-1' src="/assets/userimg.jpg" alt="task" height={"50px"} />
                    </div>
                    <div className='d-flex flex-column mx-3'>
                      <span class="text-main fw-big"><small>Top Score</small></span>
                      <span className=''>
                        <span className='fs-4 fw-big'>230</span>
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
                      <span className='fw-big p-0 m-0'> Parth Akotkar</span>
                    </span>
                    <button className="badge-green rounded-4"> 92% ACCURACY </button>
                  </div>
                </div>

                <div>
                  <h5 className='fw-big m-0 p-0'>Improve your Marks</h5>
                  <p className='m-0 p-0 text-muted'>Improve your score by practicing more</p>
                </div>
                <button className='btn-main mt-5 w-100'>Practice more</button>
              </section>

              <section className='bg-white border rounded-3 p-3 my-3'>
                <div>
                  <h4 className='fw-big'>Revisit Paper</h4>
                  <p className='text-muted p-0'>Challenge your friends by simply sharing a link to this test</p>
                </div>
                <div className='d-flex justify-content-center my-4'>
                  <button className='btn-main w-75'><i class="fa-solid fa-file-arrow-up mx-2"></i>Visit</button>
                </div> 
                <div className='d-flex align-items-start text-muted'>
                  <span><i class="fa-solid fa-circle-exclamation mx-2"></i></span><span>Instructor for how to upload your handwritten material in given</span>
                </div>
              </section>
            </div>
          </div>

          <div className='col-lg-8'>
            <div className='bg-light p-4 border rounded-3'>
              <section>
                <div className='row g-3 d-flex'>
                  <div className="col-lg-4">
                    <div className='bg-white rounded-2 border p-2' style={{minHeight:"270px"}}>
                      <div><span><i class="fa-solid fa-rotate-right mx-2"></i></span><span>Compare Accuracy</span></div>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className='bg-white rounded-2 border p-2' style={{minHeight:"270px"}}>
                      <div><span><i class="fa-solid fa-rotate-right mx-2"></i></span><span>Compare Accuracy</span></div>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className='bg-white rounded-2 border p-2' style={{minHeight:"270px"}}>
                      <div><span><i class="fa-solid fa-rotate-right mx-2"></i></span><span>Compare Accuracy</span></div>
                    </div>
                  </div>
                </div>
              </section>

              <section className='my-3'>
                <div className='row g-3'>
                  <div className="col-lg-3">
                    <div className='bg-white rounded-2 border p-3 h-100'>
                     <span  className='text-muted'><i class="fa-solid fa-wand-magic-sparkles"></i></span><span className='mx-2'>Improvements</span>
                      <p className='my-2 fw-big'><small>Subject Understanding</small></p>
                      <div>
                      <button class="badge-greenn rounded-4">Geography</button>
                      <button class="badge-yellow rounded-4">Politics</button>
                      <button class="badge-greenn rounded-4">Current Affairs</button>
                      <button class="badge-red rounded-4">General Studies</button>
                      <button class="badge-greenn rounded-4">Mathematics</button>
                      <button class="badge-secondaryy rounded-4">Social Studies</button>
                      <button class="badge-red rounded-4">English Literature</button>
                      <button class="badge-yellow rounded-4">indian History</button>
                      <button class="badge-greenn rounded-4">Economics</button>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-3">
                    <div className='bg-white rounded-2 border p-3 h-100'>
                    <span className='text-muted'><i class="fa-solid fa-wand-magic-sparkles"></i></span><span className='mx-2'>Response Time</span>
                      <div>
                      <button class="badge-blue mt-3 mb-2">Std Time - 2min</button>
                      <button class="btn-outline-main w-100"><span className='text-info fs-3 fw-big'>60</span> <span className='text-secondary'>%Ans took</span><span className='ms-2'><i class="fa-solid fa-arrow-up mx-1"></i></span><span className='text-main'>2min</span></button>
                      </div>
                      <div>
                        <hr />
                      </div>
                      <div className='text-center'>
                        <h5><span>You are</span> <span className='text-danger'>slow</span> !</h5>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-3">
                    <div className='bg-white rounded-2 border p-3 h-100'>
                      <span className='text-muted'><i class="fa-solid fa-wand-magic-sparkles"></i></span><span className='mx-2'>Approach Data</span>
                      <div className='my-1'>
                        <button class="btn-white w-100 py-1 my-1">
                          <button className='approch-btn'><span className='text-main fs-6 fw-big'>25</span><span className='text-secondary'>%</span></button>
                          <span className='ms-2 fw-big'>Based on</span><span className='text-main fw-big'> Facts</span>
                        </button>

                        <button class="btn-white w-100 py-1 my-1">
                          <button className='approch-btn'><span className='text-main fs-6 fw-big'>25</span><span className='text-secondary'>%</span></button>
                          <span className='ms-2 fw-big'>Based on</span><span className='text-main fw-big'> Facts</span>
                        </button>

                        <button class="btn-white w-100 py-1 my-1">
                          <button className='approch-btn'><span className='text-main fs-6 fw-big'>25</span><span className='text-secondary'>%</span></button>
                          <span className='ms-2 fw-big'>Based on</span><span className='text-main fw-big'> Facts</span>
                        </button>

                        <button class="btn-white w-100 py-1 my-1">
                          <button className='approch-btn'><span className='text-main fs-6 fw-big'>25</span><span className='text-secondary'>%</span></button>
                          <span className='ms-2 fw-big'>Based on</span><span className='text-main fw-big'> Facts</span>
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-3">
                    <div className='bg-white rounded-2 border p-3 h-100'>
                    <span className='text-muted'><i class="fa-solid fa-wand-magic-sparkles"></i></span><span className='mx-2'>Suggestions</span>
                      <div className='row g-3 my-1 text-center'>
                        <div className="col-4"><button class="badge-blue mt-3 mb-2">Q. 1-12</button></div>
                        <div className="col-4"><button class="badge-blue mt-3 mb-2">Q. 12-32</button></div>
                        <div className="col-4"><button class="badge-blue mt-3 mb-2">Q. 32-40</button></div>
                      </div>
                      <div className='row g-3 my-1'>
                        <div className="col-4">
                          <button className="Suggestions-btn w-100"><span>40</span><span className='fs-sm'>sec</span></button>
                        </div>
                        <div className="col-4">
                          <button className="Suggestions-btn w-100"><span>1.5</span><span className='fs-sm'>min</span></button>
                        </div>
                        <div className="col-4">
                          <button className="Suggestions-btn w-100"><span>3</span><span className='fs-sm'>min</span></button>
                        </div>
                      </div>
                      <div className='row g-3 my-1 text-center'>
                        <div className="col-4">
                          <span className='text-info fs-6'>Easy</span>
                        </div>
                        <div className="col-4">
                          <span className='text-warning fs-6'>Medium</span>
                        </div>
                        <div className="col-4">
                          <span className='text-danger fs-6'>Hard</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <section>
                <div className='row g-3'>
                   <div className='col-lg-6'>
                    <div className='bg-white rounded-2 border p-3 h-100'>
                      <span className='text-muted'><i class="fa-solid fa-wand-magic-sparkles"></i></span><span className='mx-2'>Compare Accuracy</span>
                        <CompareAccuracy/>
                    </div>
                   </div>
                   <div className='col-lg-6'>
                    <div className='bg-white rounded-2 border p-3 h-100'>
                      <span className='text-muted'><i class="fa-solid fa-wand-magic-sparkles"></i></span><span className='mx-2'>Time Taken</span>
                        <TimeTaken/>
                    </div>
                   </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
