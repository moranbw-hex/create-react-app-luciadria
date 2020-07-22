import {WebGLMap} from '@luciad/ria/view/WebGLMap';
import {getReference} from '@luciad/ria/reference/ReferenceProvider';

let map;
const REF_GLOBE = getReference('EPSG:4978');

const createMap = () => {
    map = new WebGLMap('map', {reference: REF_GLOBE});
};

export default {
    createMap,
};
