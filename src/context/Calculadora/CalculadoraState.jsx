import React, { useReducer } from 'react';
import CalculadoraContext from './CalculadoraContext';
import CalculadoraReducer from './CalculadoraReducer';

const CalculadoraState = ({ children }) => {
  const initialState = {
    /** DATOS DE USUARIO*/
    nombre: '',
    rubro: '',
    /** DATOS DE CALCULADORA */
    datosCalculadora: [
      {
        title: 'Nro de trabajadores',
        id: 'nroTrabajadores',
        value: 0,
      },
      {
        title: 'Kilo Whatss al mes',
        id: 'kwm',
        value: 0,
      },
      {
        title: 'Consumo de papel',
        id: 'consumoPapel',
        value: 0,
      },
      {
        title: 'Consumo promedio de gasoina',
        id: 'consumoGasolina',
        value: 0,
      },
      {
        title: 'Consumo de Agua potable',
        id: 'consumoAgua',
        value: 0,
      },
      {
        title: 'Cantidad de computadoras',
        id: 'nroComputadoras',
        value: 0,
      },
    ],
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
        datosCalculadora: state.datosCalculadora,
        guardarDatosCalculadora,
      }}
    >
      {children}
    </CalculadoraContext.Provider>
  );
};

export default CalculadoraState;
