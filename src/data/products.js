import productsBK from './productsBK.json';
import productsBU from './productsBU.json';
import productsGN from './productsGN.json';
import productsRD from './productsRD.json';
import productsWH from './productsWH.json';
import productsYE from './productsYE.json';

const { data: dataBK } = productsBK;
const { data: dataBU } = productsBU;
const { data: dataGN } = productsGN;
const { data: dataRD } = productsRD;
const { data: dataWH } = productsWH;
const { data: dataYE } = productsYE;

const data = [].concat(dataBK, dataBU, dataGN, dataRD, dataWH, dataYE);

export default data;
