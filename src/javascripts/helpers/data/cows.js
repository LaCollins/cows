import axios from 'axios';

const getCows = () => axios.get('https://teamtreehouse.com/lauraecollins.json');

export default { getCows };
