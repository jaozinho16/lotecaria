# Lotecaria
simulador de loteria que o usuario escolhe seis numeros e o programa sorteia outros seis numeros e após isso verifica a quantidade de acrtos!!!
## Tecnologias utilizadas
- **HTML:** Estrutura do SITE
- **CSS:** Estruturs do SITE
- **JS:** Funções do SITE
- ~~BootStrap~~:Não foi ultuilizado

### Melhorias Possiveis
1. [x] Subir no github pages
2. [ ] Trocar o Alert por mensagens mais amigaveis
3. [ ] Realizar tetes para descobrir bugs⚠

### Disponivel em:
[GitHUBpage](https://jaozinho16.github.io/lotecaria/)

### Prints da tela do WebApp

| Tela inicial | Primeira roda |
|--------------|---------------|
| ![Tela inicial do site](/img/tela1.png)      | ![Tela preenchida site](/img/tela2.png)      |



```
function verificaAcertos() {
  let cont = 0
  numDigitados.forEach(function (valor, index) {
    if (numSort.includes(valor)) {
      cont = cont + 1
    }


  })
  document.getElementById("total").innerText = cont
  
}
```
