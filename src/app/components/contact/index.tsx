import { Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import { Avatar } from "../avatar";

export function Contact() {
    return <TouchableOpacity>
        <Avatar name="Maykola" image={require('@/assets/avatar.jpg')} />
        <Text style={styles.name}>Maykon</Text>
    </TouchableOpacity>
}