import React, { Suspense, useState } from 'react'
import Sidebar from '../View/Sidebar/Sidebar'
import { Route, Routes } from 'react-router-dom'
import { Admin_Final } from '../Routes'

const Admin = () => {

    const [toggle, settoggle] = useState(true)

    return (
        <div className='container-fluid'>
            <div className="d-flex row">
                <div className={`${toggle ? ' col-md-1' : 'col-md-2'} d-none d-md-block`}  >
                    <Sidebar toggle={toggle} settoggle={settoggle} />
                </div>
                <div className={`${toggle ? 'col-12 col-md-11' : 'col-12 col-md-10'}`} >
                    <Suspense fallback={<div><h4>Loading</h4></div>}>
                        <Routes>
                            {
                                Admin_Final.map((element, index) =>
                                    <Route path={element.path} key={index} element={<element.component />} />
                                )
                            }
                        </Routes>
                    </Suspense>
                </div>
            </div>
        </div>
    )
}

export default Admin