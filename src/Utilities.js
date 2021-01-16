import { 
    ToastAndroid
} from "react-native";

const trancateText = (text, limit) => {
    text = text.trim();

    if(text.length > limit) {
        return text.substring(0, limit - 3) + "...";

    }
        return text;
}


const toastMessage = (message) => {
    ToastAndroid.showWithGravityAndOffset(
        message,
        ToastAndroid.SHORT,
        ToastAndroid.BOTTOM,
        0, 100
    );
}

export {
    trancateText,
    toastMessage,
};