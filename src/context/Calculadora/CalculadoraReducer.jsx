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
      const localDataCalculator = state.datosCalculadora;
      const objectForm = action.payload;
      const newArray = localDataCalculator.map((item) => {
        return {
          ...item,
          value: objectForm[item.id],
        };
      });
      return {
        ...state,
        datosCalculadora: newArray.sort((a, b) =>
          a.value < b.value ? 1 : b.value < a.value ? -1 : 0
        ),
      };

    default:
      return state;
  }
};

export default reducer;
