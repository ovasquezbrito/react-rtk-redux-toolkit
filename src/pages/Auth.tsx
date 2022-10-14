import { MDBInput } from 'mdb-react-ui-kit';
import React, { useState } from 'react'

const initialSate = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  confirmPassword: ''
}

const Auth = () => {
  const [formValue, setFormValue] = useState(initialSate);
  const [showRegister, setShowRegister] = useState(false);
  const {firstName, lastName, email, password, confirmPassword} = formValue;
  const handleChange = () => {

  }

  return (
    <section className='vh-100 gradient-custom'>
      <div className="container py-4 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-12 col-md-8 col-lg-6 col-xl-5">
            <div 
                 className="card bg-dark text white" 
                 style={{borderRadius: '1rem'}}
            >
              <div className="card-body p-4 text-center">
                <div className="mb-md-5 mt-md-4 pb-5">
                  <h2 className="fw-bold mb-2 text-uppercase">
                    {!showRegister ? 'Login' : 'Registrate'}
                  </h2>
                  <p className="text-white-50 mb-4">
                    {!showRegister 
                      ? 'Por Favor Ingrese Su Email y Contaseña' 
                      : 'Registrate para tener una cuenta'
                    }
                  </p>
                  <div className="form-outline form-white mb-4">
                    <MDBInput
                      type='email'
                      name='email'
                      value={email}
                      onChange={handleChange}
                      label='Email'
                      className='form-control form-control-lg'
                    />
                  </div>
                  <div className="form-outline form-white mb-4">
                    <MDBInput
                      type='password'
                      name='password'
                      value={password}
                      onChange={handleChange}
                      label='Contraseña'
                      className='form-control form-control-lg'
                    />
                  </div>
                  {!showRegister ? (
                    <button className="btn btn-outline-light btn-lg px-5">
                      Iniciar sesión
                    </button>
                  ):(
                    <button className="btn btn-outline-light btn-lg px-5" type='button'>
                      Registrate
                    </button>
                  )}
                  <div>
                    <h5 className="mb-0">
                      {!showRegister ? (
                        <>
                        No tines cuenta?
                        <p className='text-white-50 fw-bold'
                          style={{cursor: 'pointer'}}
                          onClick={() => setShowRegister(true)}
                          >
                          Registrate
                        </p>
                        </>
                      ):(
                        <>
                          Already have an account ?
                          <p className='text-white-50 fw-bold'
                          style={{cursor: 'pointer'}}
                          onClick={() => setShowRegister(false)}
                          >
                          Iniciar sesión
                        </p>
                        </>
                      )

                      }
                    </h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Auth