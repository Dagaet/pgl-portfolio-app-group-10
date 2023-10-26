import { ImageProps } from "react-native"

export type PersonalData = {
    personalImage: ImageProps,
    name: string,
    iconsUrls: ImageProps[],
    info: string
}
export const peopleData: PersonalData[] = [
    {
        personalImage: require('../assets/SaulEn20Anos.jpg'),
        name: 'Saúl Arteaga Noda',
        iconsUrls: [require('../assets/SaulEn20Anos.jpg'), require('../assets/favicon.png')],
        info: 'Me gustan los gatos'
    },
    {
        personalImage: require('../assets/SaulEn20Anos.jpg'),
        name: 'Gabriel',
        iconsUrls: [require('../assets/SaulEn20Anos.jpg'), require('../assets/favicon.png')],
        info: 'Hola'
    }
]