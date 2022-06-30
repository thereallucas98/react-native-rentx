import React, { useState } from "react";
import {
  Keyboard,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
} from "react-native";
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";
import { useNavigation } from "@react-navigation/native";
import { Feather } from "@expo/vector-icons";
import { useTheme } from "styled-components";

import { useAuth } from "../../hooks/auth";

import { BackButton } from "../../components/BackButton";
import { Input } from "../../components/Input";
import { InputPassword } from "../../components/InputPassword";

import {
  Container,
  Content,
  Header,
  HeaderTitle,
  HeaderTop,
  LogoutButton,
  Option,
  Options,
  OptionTitle,
  Photo,
  PhotoButton,
  PhotoContainer,
  Section,
} from "./styles";

export function Profile() {
  const { user, signOut, updatedUser } = useAuth();

  const [option, setOption] = useState<"dataEdit" | "passwordEdit">("dataEdit");

  const theme = useTheme();
  const navigation = useNavigation();

  function handleGoBack() {
    navigation.goBack();
  }

  function handleSignOut() {}

  function handleAvatarSelect() {}

  function handleOptionChange(option: "dataEdit" | "passwordEdit") {
    setOption(option);
  }

  return (
    <KeyboardAvoidingView behavior="position" enabled>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <Container>
          <Header>
            <HeaderTop>
              <BackButton color={theme.colors.shape} onPress={handleGoBack} />
              <HeaderTitle>Editar Perfil</HeaderTitle>
              <LogoutButton onPress={handleSignOut}>
                <Feather name="power" size={24} color={theme.colors.shape} />
              </LogoutButton>
            </HeaderTop>

            <PhotoContainer>
              <Photo
                source={{ uri: "https://github.com/thereallucas98.png" }}
              />
              <PhotoButton onPress={handleAvatarSelect}>
                <Feather name="camera" size={24} color={theme.colors.shape} />
              </PhotoButton>
            </PhotoContainer>
          </Header>

          <Content style={{ marginBottom: useBottomTabBarHeight() }}>
            <Options>
              <Option
                active={option === "dataEdit"}
                onPress={() => handleOptionChange("dataEdit")}
              >
                <OptionTitle active={option === "dataEdit"}>Dados</OptionTitle>
              </Option>
              <Option
                active={option === "passwordEdit"}
                onPress={() => handleOptionChange("passwordEdit")}
              >
                <OptionTitle active={option === "passwordEdit"}>
                  Editar Senha
                </OptionTitle>
              </Option>
            </Options>

            {option === "dataEdit" ? (
              <Section>
                <Input iconName="user" placeholder="Nome" autoCorrect={false} defaultValue={user.name} />

                <Input iconName="mail" editable={false} defaultValue={user.email} />

                <Input
                  iconName="credit-card"
                  placeholder="CNH"
                  keyboardType="numeric"
                  defaultValue={user.driver_license}
                />
              </Section>
            ) : (
              <Section>
                <InputPassword
                  iconName="lock"
                  placeholder="Senha Atual"
                  autoCorrect={false}
                />
                <InputPassword
                  iconName="lock"
                  placeholder="Nova Senha"
                  autoCorrect={false}
                />
                <InputPassword
                  iconName="lock"
                  placeholder="Nova Senha"
                  autoCorrect={false}
                />
              </Section>
            )}
          </Content>
        </Container>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
