const reducer = (state, action) => {
  switch (action.type) {
    case 'SAVE_USER':
      sessionStorage.setItem('user', JSON.stringify(action.payload));
      return {
        ...state,
        nombre: action.payload.nombre,
        rubro: action.payload.rubro,
      };
    case 'SAVE_CALULATOR':
      sessionStorage.setItem('calculator', JSON.stringify(action.payload));
      return {
        ...state,
        nroTrabajadores: action.payload.nroTrabajadores,
        kwm: action.payload.kwm,
        consumoPapel: action.payload.consumoPapel,
        consumoGasolina: action.payload.consumoGasolina,
        consumoAgua: action.payload.consumoAgua,
        nroComputadoras: action.payload.nroComputadoras,
      };

    default:
      return state;
  }
};

export default reducer;
