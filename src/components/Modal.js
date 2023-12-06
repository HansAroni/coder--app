import { StyleSheet, Text, View, Modal as RNmodal } from "react-native";
import React from "react";
import Button from "./Button";

const Modal = ({
    modalVisible,
      selectedItem,
      onCancelModal,
      onDeleteModal,
}) => {
    return (
        <RNmodal animationType="slide" transparent={true} visible={modalVisible}>
            <View style={styles.modalMainView}>
                <View style={styles.modalView}>
                    <Text style={styles.modalTitle}>Eliminar Item</Text>
                    <Text style={styles.modalText}>
                        ¿Está seguro que desea eliminar el item{" "}
                        <Text style={styles.modalBoldText}>{selectedItem?.value}</Text>?
                    </Text>
                    <View style={styles.modalActions}>
                        <Button
                            styleButtonType={styles.buttonDelete}
                            title="Eliminar"
                            onPress={() => {
                                onDeleteModal(selectedItem.id);
                            }}
                        />
                        <Button
                            styleButtonType={styles.buttonCancel}
                            styleButtonText={styles.buttonText}
                            title="Cancelar"
                            onPress={onCancelModal}
                        />
                    </View>
                </View>
            </View>
        </RNmodal>
    );
};

export default Modal;

const styles = StyleSheet.create({
    modalMainView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: "center",
    },
    modalView: {
        margin: 20,
        backgroundColor: "#fbfbfb",
        borderRadius: 10,
        padding: 35,
        alignItems: "center",
        elevation: 5,
    },
    modalTitle: {
        padding: 10,
        borderRadius: 5,
        fontSize: 20,
        fontWeight: "bold",
        textAlign: "center",
        color: "#1D300F"
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center",
    },
    modalBoldText: {
        fontWeight: "bold",
        textDecorationLine: "underline",
    },
    modalActions: {
        width: 280,
        flexDirection: "row",
        justifyContent: "space-between",
    },

    buttonCancel: {
        borderColor: "#D92F21",
        borderWidth: 1
    },
    buttonDelete: {
        backgroundColor: "#D92F21",
    },
    buttonText: {
        color: '#D92F21'
    }
});
