import { useState } from 'react';
import { Container, TextField, Button, Typography } from '@mui/material';
import './styles.css';

export function FormPage() {
  const [nome, setNome] = useState('');
  
  const [telefone, setTelefone] = useState('');
  const [email, setEmail] = useState('');
  const [cpf, setCpf] = useState('');
  const [cadastrado, setCadastrado] = useState(false);
  const [Localidade, setLocalidade] = useState('')
  const [NomeDaMae, setNomeDaMae] = useState('');



  const handleCadastrar = () => {
    console.log("Dados do formulário:");
    console.log("Nome:", nome);
    console.log("Localidade",Localidade);
    console.log("Telefone:", telefone);
    console.log("Email:", email);
    console.log("CPF:", cpf);
    console.log("NomeDaMae",NomeDaMae);
    
    setCadastrado(true);
    setNome('');
    setTelefone('');
    setEmail('');
    setCpf('');
    setLocalidade('');
    setNomeDaMae('');
  };

  return (   
<Container maxWidth="sm" component="article" className="form">
     
 <h1>Formulário</h1>
          <form onSubmit={(event) => { event.preventDefault(); }}>
                 <TextField
          id="nome"
          label="Nome"
          variant="outlined"
          margin="dense"
          fullWidth
          value={nome}
          onChange={(event) => setNome(event.target.value)}
        />        <TextField
          id="telefone"
          label="Telefone"
          variant="outlined"
          margin="dense"
          fullWidth
          value={telefone}
          onChange={(event) => setTelefone(event.target.value)}
        />       <TextField
          id="email"
          label="Email"
          type="email"
          variant="outlined"
          margin="dense"
          fullWidth
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />      <TextField
          id="cpf"
          label="CPF"
          variant="outlined"
          margin="dense"
          fullWidth
          value={cpf}
          onChange={(event) => setCpf(event.target.value)}
        />      <TextField
        id="Localidade"
        label="Localidade"
        type="localidade"
        variant="outlined"
        margin="dense"
        fullWidth
        value={Localidade}
        onChange={(event) => setLocalidade(event.target.value)}
      />      <TextField
      id="NomeDaMae"
      label="NomeDaMae"
      type="nomedamae"
      variant="outlined"
      margin="dense"
      fullWidth
      value={NomeDaMae}
      onChange={(event) => setNomeDaMae(event.target.value)}
    />


        <Button
          type="button"
          className="btn-form"
          variant="contained"
          color="primary"
          onClick={handleCadastrar}
        >
          Cadastrar
        </Button>
      </form>
      {cadastrado && (
        <Typography variant="h6" color="secondary" className="mensagem-sucesso">
          Usuário cadastrado com sucesso!
        </Typography>
      )}
    </Container>
  );
}

export default FormPage;