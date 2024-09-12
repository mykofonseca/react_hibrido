import { View } from 'react-native'
import { Feather } from '@expo/vector-icons'
import { theme } from '@/themes'
import { Input } from '@/app/components/input'
import { styles } from './styles'
import { useState, useEffect } from 'react'
import { Contact } from '@/app/components/contact'
import * as Contacts from 'expo-contacts'

export function Home() {
    const [name, setName] = useState("")

    async function fetchContacts() {
        try {
            const { status } = await Contacts.requestPermissionsAsync()
            if(status === Contacts.PermissionStatus.GRANTED){
                const { data } = await Contacts.getContactsAsync()
                console.log(data)
            }
        } catch(error) {
            console.log(error)
                Alert.alert("Contatos", "Não foi possível carregar os contatos...")
        }
    }

    useEffect(() => {
        fetchContacts()
    },[])
    
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Input style={styles.input}>
                    <Feather name="search" size={16} color={theme.colors.gray_300}></Feather>
                    <Input.Field placeholder='"Pesqusiar pelo nome...' onChangeText={setName} />
                    <Feather name="x" size={16} color={theme.colors.gray_300} onPress={() => setName("")}></Feather>
                </Input>
            </View>
            <Contact contact={{
                name: "Maykola",
                image: require("@/assets/avatar.jpeg")
            }}/>
        </View>
    )
}