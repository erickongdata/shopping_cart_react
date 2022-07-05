import productsBK from './productsBK.json';
import productsBU from './productsBU.json';
import productsGN from './productsGN.json';
import productsRD from './productsRD.json';
import productsWH from './productsWH.json';
import productsYE from './productsYE.json';

const { data: DATA_BK } = productsBK;
const { data: DATA_BU } = productsBU;
const { data: DATA_GN } = productsGN;
const { data: DATA_RD } = productsRD;
const { data: DATA_WH } = productsWH;
const { data: DATA_YE } = productsYE;

const DATA = [].concat(DATA_BK, DATA_BU, DATA_GN, DATA_RD, DATA_WH, DATA_YE);

export default DATA;
