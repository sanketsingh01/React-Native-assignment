import React, { useState } from 'react';
import { Image, Linking, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { FontAwesome6, Ionicons } from "@expo/vector-icons";

const SignInPage = () => {
  const [mailAddress, setMailAddress] = useState('');
  const [password, setPassword] = useState('');
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [focusedInput, setFocusedInput] = useState('');

  const handleSignIn = () => {
    console.log(`mail address: ${mailAddress}, password: ${password}`);
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View
        style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'center', padding: 15 }}>
        <Image
          source={require("@/assets/images/logo.png")}
          height={50}
          width={50}
        />

        <View style={{ marginTop: 20, marginBottom: 24, alignItems: 'center' }}>
          <Text style={{ fontSize: 30, fontWeight: 'bold', marginBottom: 7 }}>Sign In</Text>
          <Text style={{ fontSize: 16 }}>Experience the joy of telecare AI</Text>
        </View>

        {/* sing in form */}
        <View style={{ alignItems: 'flex-start', width: "100%" }}>

          <Text style={{ fontSize: 12, fontWeight: 'bold', marginBottom: 2 }}>Email Address</Text>
          <View style={[styles.inputWrapper, focusedInput === 'email' && styles.focusedInputWrapper]}>
            <Ionicons name="mail-unread-outline" size={22} color="black" style={styles.inputIcon} />
            <TextInput
              placeholder="joE0O@example.com"
              value={mailAddress}
              onChangeText={setMailAddress}
              onFocus={() => setFocusedInput('email')}
              onBlur={() => setFocusedInput('')}
              placeholderTextColor="black"
              keyboardType="email-address"
              autoCapitalize="none"
              style={styles.input}
            />
          </View>

          <Text style={{ fontSize: 12, fontWeight: 'bold', marginBottom: 2 }}>Password</Text>
          <View style={[styles.inputWrapper, focusedInput === 'password' && styles.focusedInputWrapper]}>
            <Ionicons name="lock-closed" size={22} color="black" style={styles.inputIcon} />
            <TextInput
              placeholder="Enter your password"
              value={password}
              onChangeText={setPassword}
              onFocus={() => setFocusedInput('password')}
              onBlur={() => setFocusedInput('')}
              placeholderTextColor="black"
              secureTextEntry={!isPasswordVisible}
              style={styles.input}
            />
            <Pressable onPress={() => setIsPasswordVisible(!isPasswordVisible)}>
              <Ionicons
                name={isPasswordVisible ? "eye-off-outline" : "eye-outline"}
                size={22}
                color="black"
              />
            </Pressable>
          </View>

          <Pressable style={styles.signInButton} onPress={handleSignIn}>
            <Text style={styles.signInButtonText}>Sign In</Text>
          </Pressable>
        </View>

        {/* social login buttons */}
        <View style={styles.socialButtonsContainer}>

          <Pressable onPress={() => alert("facebook signin")} style={styles.socialButtons}>
            <FontAwesome6 name="facebook-f" size={24} color="black" />
          </Pressable>

          <Pressable onPress={() => alert("google signin")} style={styles.socialButtons}>
            <FontAwesome6 name="google" size={24} color="black" />
          </Pressable>

          <Pressable onPress={() => alert("instagram signin")} style={styles.socialButtons}>
            <FontAwesome6 name="instagram" size={24} color="black" />
          </Pressable>
        </View>

        {/* Bottom links */}
        <View style={styles.bottomLinksContainer}>

          <View style={{ width: "100%", flexDirection: "row", justifyContent: "center" }}>
            <Text>Do not have an account? </Text>
            <Text style={{ color: "#85CC17" }} onPress={() => Linking.openURL("https://google.com")}>Sign Up</Text>
          </View>

          <View style={{ width: "100%", flexDirection: "row", justifyContent: "center" }}>
            <Text style={{ color: "#85CC17" }} onPress={() => Linking.openURL("https://google.com")}>Forgot your password?</Text>
          </View>
        </View>

      </View>
    </SafeAreaView >
  )
}

export default SignInPage;

const styles = StyleSheet.create({
  inputWrapper: {
    width: "100%",
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 16,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 12,
    marginBottom: 10,
    padding: 5,
  },
  focusedInputWrapper: {
    borderColor: "#85CC17",
    borderWidth: 2,
  },
  inputIcon: {
    marginRight: 8,
  },
  input: {
    flex: 1,
    paddingVertical: 10,
    borderColor: "black",
  },
  signInButton: {
    width: "100%",
    backgroundColor: "#85CC17",
    borderRadius: 16,
    paddingVertical: 14,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 8,
  },
  signInButtonText: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    color: "white",
  },
  socialButtonsContainer: {
    marginTop: 35,
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 12,
  },
  socialButtons: {
    width: 52,
    height: 52,
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 16,
    alignItems: "center",
    justifyContent: "center",
  },
  bottomLinksContainer: {
    marginTop: 40,
    width: "100%",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: 5,
  }
})
