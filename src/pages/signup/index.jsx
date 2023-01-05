import { MdEmail, MdLock, MdPeople } from 'react-icons/md';
import { Button } from '../../components/Button';
import { Header } from '../../components/Header';
import { Input } from '../../components/Input';

import { useForm } from "react-hook-form";


import { Column, Container, Descript, SubtitleSignUp, TextLogin, Title, TitleSignUp, Wrapper } from './styles';

const SignUp = () => {

    const { control, formState: { errors  } } = useForm({
        reValidateMode: 'onChange',
        mode: 'onChange',
    });

    return (<>
        <Header />
        <Container>
            <Column>
                <Title>A plataforma para você aprender com experts, dominar as principais tecnologias
                e entrar mais rápido nas empresas mais desejadas.</Title>
            </Column>
            <Column>
                <Wrapper>
                <TitleSignUp>Comece Agora grátis</TitleSignUp>
                <SubtitleSignUp>Crie sua conta e make the change._</SubtitleSignUp>
                <form>
                    <Input placeholder="Nome completo" leftIcon={<MdPeople />} name="email"  control={control} />
                    {errors.email && <span>Nome completo é obrigatório</span>}
                    <Input placeholder="E-mail" leftIcon={<MdEmail />} name="email"  control={control} />
                    {errors.email && <span>E-mail é obrigatório</span>}
                    <Input type="password" placeholder="Senha" leftIcon={<MdLock />}  name="senha" control={control} />
                    {errors.senha && <span>Senha é obrigatório</span>}
                    <Button title="Entrar" variant="secondary" type="submit"/>
                </form>
                <Column>
                    <Descript>
                        Ao clicar em "criar minha conta grátis declaro que aceito as Políticas de Privacidade e os Termos de Uso da DIO."
                    </Descript>
                    <TextLogin>
                        Já tenho conta.
                        <span>
                            Fazer login
                        </span>
                    </TextLogin>
                </Column>

                </Wrapper>
            </Column>
        </Container>
    </>)
}

export { SignUp };
