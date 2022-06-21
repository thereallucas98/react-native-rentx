import { StatusBar } from "react-native";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import theme from "../../styles/theme";
import { Container, Header, SubTitle, Title, Form, Footer } from "./styles";

export function SignIn() {
  return (
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
        />
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
  );
}
