import { StyleSheet } from "react-native"
import { theme } from "@/themes/index"

export const styles =  StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.colors.gray_200,
    },
    header: {
        width: "100%",
        height: 132,
        backgroundColor: theme.colors.blue,
        justifyContent: "flex-end",
    },
    input: {
        marginBottom: 27,
    },
    section: {
        fontSize: 18,
        fontFamily: theme.fontFamily.bold,
        backgroundColor: theme.colors.blue,
        width: 35,
        height: 35,
        color: theme.colors.white,
        textAlign: "center",
        textAlignVertical: "center",
        borderRadius: 12,
        marginLeft: 15,
    },
    separator: {
        width: "100%",
        height: 1,
        backgroundColor: theme.colors.gray_300,
        margin: 12,
    },
    contentList: {
        gap: 10,
    },
    bottomSheetContent: {
        flex: 1,
        backgroundColor: theme.colors.gray_100,
        borderTopStartRadius: 32,
        borderTopEndRadius: 32,
        paddingTop: 64,
        alignItems: "center",
        padding: 32,
    },
    bottomSheet: {
        backgroundColor: "tranparent",
    },
    contactName: {
        fontSize: 32,
        fontFamily: theme.fontFamily.bold,
    },
    phoneNumber: {
        fontSize: 18,
        fontFamily: theme.fontFamily.medium,
        color: theme.colors.gray_400,
    },
    phone: {
        marginBottom: 25,
        gap: 10,
        flexDirection: "row",
    },
    image: {
        marginBottom: -50,
        zIndex: 1,
        alignSelf: "center",
    }
}) 