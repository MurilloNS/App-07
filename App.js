import { useState } from "react";
import { SafeAreaView, StatusBar, StyleSheet, View, Text } from "react-native";
import Title from "./src/components/Title";
import Input from "./src/components/Input";
import Label from "./src/components/Label";
import { Picker } from "@react-native-picker/picker";
import Slider from "@react-native-community/slider";
import { Switch } from "@rneui/themed";
import Button from "./src/components/Button";

export default function App() {
  const [nome, setNome] = useState("");
  const [idade, setIdade] = useState("");
  const [selectedGenero, setSelectedGenero] = useState("");
  const [selectedEscolaridade, setSelectedEscolaridade] = useState("");
  const [limit, setLimit] = useState("");
  const [checked, setChecked] = useState(false);

  const toggleSwitch = () => {
    setChecked(!checked);
  };

  const onSubmit = () => {
    setNome(nome);
    setIdade(idade);
    setSelectedGenero(selectedGenero);
    setSelectedEscolaridade(selectedEscolaridade);
    setLimit(limit);
    setChecked(checked);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View>
        <Title title="Abertura de Conta" />
        <View style={styles.compContainers}>
          <Label text="Nome:" />
          <Input onChangeText={setNome} />
        </View>
        <View style={styles.compContainers}>
          <Label text="Idade:" />
          <Input tipo="numeric" onChangeText={setIdade} />
        </View>
        <View style={styles.compContainers}>
          <Text style={styles.genero}>Gênero: </Text>
          <Picker
            selectedValue={selectedGenero}
            style={styles.pickerStyle}
            onValueChange={(itemValue, itemIndex) =>
              setSelectedGenero(itemValue)
            }
          >
            <Picker.Item label="Masculino" value="masculino" />
            <Picker.Item label="Feminino" value="feminino" />
          </Picker>
        </View>
        <View style={styles.compContainers}>
          <Text style={styles.genero}>Escolaridade: </Text>
          <Picker
            selectedValue={selectedEscolaridade}
            style={styles.pickerStyle2}
            onValueChange={(itemValue, itemIndex) =>
              setSelectedEscolaridade(itemValue)
            }
          >
            <Picker.Item label="Ensino Fundamental" value="fundamental" />
            <Picker.Item label="Ensino Médio" value="medio" />
            <Picker.Item label="Ensino Superior" value="superior" />
            <Picker.Item label="Pós-graduação" value="graduação" />
            <Picker.Item label="Mestrado" value="mestrado" />
            <Picker.Item label="Doutorado" value="doutorado" />
          </Picker>
        </View>
        <View style={styles.compContainers}>
          <Text style={styles.genero}>Limite: </Text>
          <Slider
            style={{ width: "70%", height: 40 }}
            minimumValue={0}
            maximumValue={100}
            minimumTrackTintColor="#00FFFF"
            maximumTrackTintColor="#000000"
            onValueChange={setLimit}
            step={10}
          />
        </View>
        <View style={styles.compContainers}>
          <Text style={styles.genero}>Brasileiro: </Text>
          <Switch
            value={checked}
            onValueChange={toggleSwitch}
          />
        </View>
      </View>
      <Button textButton="Confirmar" onPress={onSubmit}></Button>
      <View style={styles.resultDado}>
        <Text style={styles.dados}>Dados informados:</Text>
        <View style={styles.viewResult}>
          <Label text="Nome: " />
          <Label text={nome} />
        </View>
        <View style={styles.viewResult}>
          <Label text="Idade: " />
          <Label text={idade} />
        </View>
        <View style={styles.viewResult}>
          <Label text="Gênero: " />
          <Label text={selectedGenero} />
        </View>
        <View style={styles.viewResult}>
          <Label text="Escolaridade: " />
          <Label text={selectedEscolaridade} />
        </View>
        <View style={styles.viewResult}>
          <Label text="Limite: " />
          <Label text={limit} />
        </View>
        <View style={styles.viewResult}>
          <Label text="Brasileiro: " />
          <Label text={checked ? "True" : "False"} />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
    alignItems: "center",
  },

  compContainers: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },

  pickerStyle: {
    height: 50,
    width: 160,
    alignSelf: "center",
    marginTop: 2,
    marginLeft: 110,
  },

  pickerStyle2: {
    height: 50,
    width: 230,
    alignSelf: "center",
    marginTop: 2,
  },

  genero: {
    fontSize: 17,
  },

  dados: {
    color: "blue",
    marginTop: "5%",
    fontSize: 23,
  },

  resultDado: {
    display: "flex",
    width: "80%",
  },

  viewResult: {
    display: "flex",
    flexDirection: "row",
  },
});
