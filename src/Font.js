import {Dimensions} from 'react-native';

const { width } = Dimensions.get('window');

const BASE = width / 300;
const SMALL = BASE * 14;
const MEDIUM = BASE * 16;
const LARGE = BASE * 18;

export {
    BASE,
    SMALL,
    MEDIUM,
    LARGE,
}

