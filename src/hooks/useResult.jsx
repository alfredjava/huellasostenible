import React, { useEffect, useState } from 'react';

import EmojiPeopleIcon from '@mui/icons-material/EmojiPeople';
import ReceiptIcon from '@mui/icons-material/Receipt';
import LocalGasStationIcon from '@mui/icons-material/LocalGasStation';
import OpacityIcon from '@mui/icons-material/Opacity';
import ImportantDevicesIcon from '@mui/icons-material/ImportantDevices';
import ElectricalServicesIcon from '@mui/icons-material/ElectricalServices';

const localIcons = [
  {
    nroTrabajadores: <EmojiPeopleIcon />,
  },
  {
    consumoPapel: <ReceiptIcon />,
  },
  {
    consumoGasolina: <LocalGasStationIcon />,
  },
  {
    consumoAgua: <OpacityIcon />,
  },
  {
    nroComputadoras: <ImportantDevicesIcon />,
  },
  {
    kwm: <ElectricalServicesIcon />,
  },
];

const useResult = (data) => {
  const [info, setInfo] = useState(data);

  useEffect(() => {
    let newArray = info.map((item, key) => {
      return {
        ...item,
        icon: localIcons[item.id],
        percentage: key === 0 ? 100 : (item.value * 100) / info[0].value,
      };
    });
    
    setInfo(newArray);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return [info];
};

export default useResult;
