import { Alert, View, SectionList, Text } from 'react-native'
import { Feather } from '@expo/vector-icons'
import { theme } from '@/themes'
import { Input } from '@/app/components/input'
import { styles } from './styles'
import { useState, useEffect } from 'react'
import { Contact, ContactProps } from '@/app/components/contact'
import * as Contacts from 'expo-contacts'

type SectionListDataProps = {
    title: string
    data: ContactProps
}
export function Home() {
    const [ name, setName] = useState("")
    const [contacts, setContacts] = useState<SectionListDataProps[]>([])

    async function fetchContacts() {
        try {
            const { status } = await Contacts.requestPermissionsAsync()
            if(status === Contacts.PermissionStatus.GRANTED){
                const { data } = await Contacts.getContactsAsync()
                const list = data.map((contact) => ({
                    id: contact.id ?? useId(),
                    name: contact.name,
                    image: contact.image,
                })).reduce<SectionListDataProps[]>((acc: any, item) => {
                    const firstLetter = item.name[0].toUpperCase()
                    const existingEntry = acc.find((entry: SectionListDataProps) => 
                    (entry.title === firstLetter))

                    if(existingEntry){
                        existingEntry.data.push(item)
                    }else{
                        acc.push({title: firstLetter, data: [item]})
                    }

                    return acc
                }, [])           
                setContacts(list)
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
            <SectionList
                sections={[{title: "M", data: [{id: "7", name: "Maykon" }]}]}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <Contact contact={item} />
                )}
                renderSectionHeader={({ section }) => 
                    (<Text style={styles.section}>{section.title}</Text>)}
                contentContainerStyle = {styles.contentList}
                />
        </View>
    )
}