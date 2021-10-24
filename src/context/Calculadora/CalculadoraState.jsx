import React, { useReducer } from 'react';
import CalculadoraContext from './CalculadoraContext';
import CalculadoraReducer from './CalculadoraReducer';

const CalculadoraState = ({ children }) => {
  const initialState = {
    /** DATOS DE USUARIO*/
    nombre: '',
    rubro: '',
    /** DATOS DE CALCULADORA */
    
    nroTrabajadores: '',
    kwm: '',
    consumoPapel: '',
    consumoGasolina: '',
    consumoAgua: '',
    nroComputadoras: '',
  };
  /**
   * MANDAMOS A GUARDAR LOS DATOS DEL USUARIO */

  const guardarDatosUsuario = async (datos) => {
    dispatch({
      type: 'SAVE_USER',
      payload: datos,
    });
  };
  const guardarDatosCalculadora = async (datos) => {
    dispatch({
      type: 'SAVE_CALULATOR',
      payload: datos,
    });
  };
  /** INICIAR SESIÓN */
  // const login = async (query) => {
  //   dispatch({
  //     type: 'LOADING_LOGIN',
  //   });
  //   try {
  //     const { data } = await axiosClient.post('graphql', query);

  //     if (data.data.login) {
  //       tokenAuth(data.data.login.token);
  //       dispatch({
  //         type: 'LOGIN',
  //         payload: data.data.login,
  //       });
  //     } else {
  //       dispatch({
  //         type: 'LOGIN_ERROR',
  //         payload: data.errors[0],
  //       });
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  const [state, dispatch] = useReducer(CalculadoraReducer, initialState);
  return (
    <CalculadoraContext.Provider
      value={{
        nombre: state.nombre,
        rubro: state.rubro,
        guardarDatosUsuario,
        nroTrabajadores: state.nroTrabajadores,
        kwm: state.kwm,
        consumoPapel: state.consumoPapel,
        consumoGasolina: state.consumoGasolina,
        consumoAgua: state.consumoAgua,
        nroComputadoras: state.nroComputadoras,
        guardarDatosCalculadora,
      }}
    >
      {children}
    </CalculadoraContext.Provider>
  );
};

export default CalculadoraState;
