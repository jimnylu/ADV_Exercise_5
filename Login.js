import React from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ImageBackground } from "react-native";
import { useForm, Controller } from "react-hook-form";

const myStyle = StyleSheet.create({
 container: {
 flex: 1,
 justifyContent: "center",
 alignItems: "center",
 padding: 20,
 },
 headerText: {
 fontSize: 24,
 fontWeight: "bold",
 marginBottom: 20,
 color: "white",
 fontFamily: "Impact San-serif", // Set font for header text
 },
 inputContainer: {
 marginBottom: 5,
 width: "100%",
 },
 labelText: {
 fontSize: 16,
 fontWeight: "bold",
 marginBottom: 5,
 color: "white",
 },
 input: {
 backgroundColor: "transparent", // Set input background to transparent
 padding: 10,
 borderRadius: 5,
 width: "100%",
 borderWidth: 1,
 borderColor: "#FFFFFF",
 color: "#FFFFFF", // Set text color to white
 fontFamily: "Impact San-serif", // Set font for input text
 },
 button: {
 backgroundColor: "#FFFFFF",
 padding: 15,
 borderRadius: 5,
 width: "100%",
 alignItems: "center",
 },
 buttonText: {
 color: "black",
 fontSize: 18,
 },
 errorText: {
 color: "red",
 fontFamily: "Impact San-serif", // Set font for error text
 fontSize: 14,
 },
});

export default function Home() {
 const { control, handleSubmit, formState: { errors } } = useForm({
 defaultValues: {
 email: '',
 password: '',
 }
 });

 const onSubmit = data => {
 console.log(data);
 };

 return (
 <ImageBackground
 source={{ uri: 'https://img.freepik.com/free-photo/nature-majestic-mountain-range-illustration-panoramic-adventure-generative-ai_188544-12635.jpg?w=900&t=st=1697369494~exp=1697370094~hmac=ff4ca5a2829a12ec4b1598500ce5f07bed5eafd67beab71b63b827d860c71eab' }}
 style={myStyle.container}
 >
 <View style={myStyle.container}>
 <Text style={myStyle.headerText}>Login your account</Text>

 <View style={myStyle.inputContainer}>
 <Text style={myStyle.labelText}>Email:</Text>
 <Controller
 control={control}
 rules={{
 required: true,
 }}
 render={({ field: { onChange, onBlur, value } }) => (
 <TextInput
 placeholder="Enter your Email"
 onBlur={onBlur}
 onChangeText={onChange}
 value={value}
 style={myStyle.input}
 keyboardType="email-address"
 />
 )}
 name="email"
 />
 {errors.email && <Text style={myStyle.errorText}>This is required.</Text>}
 </View>

 <View style={myStyle.inputContainer}>
 <Text style={myStyle.labelText}>Password:</Text>
 <Controller
 control={control}
 rules={{
 required: true,
 }}
 render={({ field: { onChange, onBlur, value } }) => (
 <TextInput
 placeholder="Enter password"
 onBlur={onBlur}
 onChangeText={onChange}
 value={value}
 style={myStyle.input}
 secureTextEntry={true}
 />
 )}
 name="password"
 />
 {errors.password && <Text style={myStyle.errorText}>This is required.</Text>}
 </View>

 <TouchableOpacity style={myStyle.button} onPress={handleSubmit(onSubmit)}>
 <Text style={myStyle.buttonText}>Sign In</Text>
 </TouchableOpacity>
 </View>
 </ImageBackground>
 );
}