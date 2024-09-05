import { View } from 'react-native'
import { Feather } from '@expo/vector-icons'
import { theme } from '@/themes'

import { Input } from '@/app/components/input'
import { styles } from './styles'

export function Home() {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Input style={styles.input}>
                    <Feather name="search" size={16}
                    color={theme.colors.gray_300}></Feather>
                    <Input.Field
                    placeholder='"Pesqusiar pelo nome...' />
                    <Feather name="x" size={16}
                    color={theme.colors.gray_300}></Feather>
                </Input>
            </View>
        </View>
    )
}