import { getRealTime } from '../../helpers/servicesAPI';

export const realTime = async () => {
    const res = await getRealTime();
    const { peso } = res.data;
    if (Number.isInteger(peso)) {
        return peso;
    }
    const pesoAcutal = peso.toFixed(1);
    return pesoAcutal;
};
