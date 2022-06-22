import { useState } from "react";
import {
  StatusBar,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";

import theme from "../../styles/theme";

import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { InputPassword } from "../../components/InputPassword";

import { Container, Header, SubTitle, Title, Form, Footer } from "./styles";

export function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <KeyboardAvoidingView behavior="position" enabled>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <Container>
          <StatusBar
            barStyle="dark-content"
            backgroundColor="transparent"
            translucent
          />
          <Header>
            <Title>Estamos{"\n"}quase lá</Title>
            <SubTitle>
              Faça seu login para começar{"\n"}
              uma experiência incrível
            </SubTitle>
          </Header>

          <Form>
            <Input
              iconName="mail"
              placeholder="E-mail"
              keyboardType="email-address"
              autoCorrect={false}
              autoCapitalize="none"
              onChangeText={setEmail}
              value={email}
            />

            <InputPassword iconName="lock" placeholder="Senha" onChangeText={setPassword} value={password} />
          </Form>

          <Footer>
            <Button
              title="Login"
              onPress={() => {}}
              enabled={false}
              loading={false}
            />

            <Button
              title="Criar conta gratuita"
              color={theme.colors.background_secondary}
              onPress={() => {}}
              enabled={false}
              loading={false}
              light
            />
          </Footer>
        </Container>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
