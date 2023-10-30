import { ImageProps } from "react-native"

export type PersonalData = {
    personalImage: ImageProps,
    name: string,
    iconsUrls: string[],
    info: string,
    qrURL: string,
}
export const peopleData: PersonalData[] = [
    {   
        
        personalImage: require('../assets/SaulEn20Anos.jpg'),
        name: 'Saúl Arteaga Noda',
        iconsUrls: ["Github: @Dagaet", "Twitter: @TwitterDeSaúl"],
        info: 'Un pive de La Gomera que está estudiando en Tenerife',
        qrURL: 'https://github.com/Dagaet'
    },
    {
        personalImage: require('../assets/Profile.jpg'),
        name: 'Gabriel Díaz',
        iconsUrls: ["Github: @GabrielDiazZapata", "Twitter: @TwitterDeGabri"],
        info: 'Un pive de Tenerife yoquese',
        qrURL: 'https://github.com/GabrielDiazZapata'
    }
]
